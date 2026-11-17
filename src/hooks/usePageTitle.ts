import { useEffect } from "react";

import { SITE } from "../config/site";
import { useLanguage } from "../i18n/LanguageContext";

const SITE_NAME = SITE.name;
const SITE_URL = SITE.url;

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
 * Pass already-translated text; it updates when the language changes.
 */
export default function usePageTitle(title?: string, description?: string) {
    const { t } = useLanguage();
    const tagline = t("meta.tagline");
    const defaultDescription = t("meta.description");

    useEffect(() => {
        const fullTitle = title
            ? `${title} | ${SITE_NAME}`
            : `${SITE_NAME} | ${tagline}`;
        const pageDescription = description ?? defaultDescription;
        const path = window.location.pathname.replace(/\/+$/, "");
        const url = `${SITE_URL}${path}`;

        document.title = fullTitle;

        setMeta('meta[name="description"]', "content", pageDescription);
        setMeta('meta[property="og:title"]', "content", fullTitle);
        setMeta('meta[property="og:description"]', "content", pageDescription);
        setMeta('meta[property="og:url"]', "content", url);
        setMeta('meta[name="twitter:title"]', "content", fullTitle);
        setMeta('meta[name="twitter:description"]', "content", pageDescription);
        setCanonical(path ? url : `${SITE_URL}/`);
    }, [title, description, tagline, defaultDescription]);
}
