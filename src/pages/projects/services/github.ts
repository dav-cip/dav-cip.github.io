
export interface GithubRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    language: string | null;
    fork: boolean;
    archived: boolean;
    private?: boolean;
    updated_at?: string;
}

interface CommitSearchResponse {
    items: {
        repository: GithubRepo;
    }[];
}

async function fetchJson<T>(url: string, options?: RequestInit): Promise<T> {
    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error(`GitHub API request failed: ${response.status}`);
    }

    return response.json();
}

export async function fetchGithubRepositories(): Promise<GithubRepo[]> {
    const [ownedResult, contributionsResult] = await Promise.allSettled([
        fetchJson<GithubRepo[]>(
            "https://api.github.com/users/dav-cip/repos?type=owner&sort=updated&per_page=100"
        ),
        fetchJson<CommitSearchResponse>(
            "https://api.github.com/search/commits?q=author:dav-cip&sort=author-date&order=desc&per_page=100",
            {
                headers: {
                    Accept: "application/vnd.github+json"
                }
            }
        )
    ]);

    // If both requests fail, report an error.
    if (
        ownedResult.status === "rejected" &&
        contributionsResult.status === "rejected"
    ) {
        throw new Error("Unable to retrieve GitHub repositories.");
    }

    // Keep whichever results were successfully retrieved.
    const ownedRepos =
        ownedResult.status === "fulfilled" ? ownedResult.value : [];

    const contributedRepos =
        contributionsResult.status === "fulfilled"
            ? contributionsResult.value.items.map(item => item.repository)
            : [];

    // Combine repositories and remove duplicates.
    const uniqueRepos = new Map<number, GithubRepo>();

    [...ownedRepos, ...contributedRepos].forEach(repo => {
        if (!repo.archived && !repo.private) {
            uniqueRepos.set(repo.id, repo);
        }
    });

    return Array.from(uniqueRepos.values());
}
