import { useEffect } from "react";

import { SITE } from "../config/site";

const SITE_NAME = SITE.name;
const SITE_URL = SITE.url;
const DEFAULT_DESCRIPTION =
    "Explore the portfolio of Davide Cipolla, a Computer Science student showcasing software projects, technical skills, and development experience.";

function setMeta(selector: string, attribute: string, value: string) {
    document.head
        .querySelector<HTMLMetaElement>(selector)
        ?.setAttribute(attribute, value);
}

function setCanonical(url: string) {
    let link = document.head.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]'
    );

    if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
    }

    link.href = url;
}

/**
 * Sets the tab title and the page-level SEO/social metadata
 * (description, Open Graph, Twitter, canonical URL) for the current route.
 */
export default function usePageTitle(title?: string, description?: string) {
    useEffect(() => {
        const fullTitle = title
            ? `${title} | ${SITE_NAME}`
            : `${SITE_NAME} | Developer Portfolio`;
        const pageDescription = description ?? DEFAULT_DESCRIPTION;
        const path = window.location.pathname.replace(/\/+$/, "");
        const url = `${SITE_URL}${path}` || SITE_URL;

        document.title = fullTitle;

        setMeta('meta[name="description"]', "content", pageDescription);
        setMeta('meta[property="og:title"]', "content", fullTitle);
        setMeta('meta[property="og:description"]', "content", pageDescription);
        setMeta('meta[property="og:url"]', "content", url);
        setMeta('meta[name="twitter:title"]', "content", fullTitle);
        setMeta('meta[name="twitter:description"]', "content", pageDescription);
        setCanonical(url === SITE_URL ? `${SITE_URL}/` : url);
    }, [title, description]);
}
