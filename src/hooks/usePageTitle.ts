import { useEffect } from "react";

const SITE_NAME = "Davide Cipolla";

export default function usePageTitle(title?: string) {
    useEffect(() => {
        document.title = title
            ? `${title} | ${SITE_NAME}`
            : `${SITE_NAME} | Developer Portfolio`;
    }, [title]);
}