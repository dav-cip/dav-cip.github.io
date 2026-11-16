import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "../components/error-boundary/ErrorBoundary";

import MainLayout from "./MainLayout.tsx";
import { Landing, About, Projects, Contact, NotFound } from "./lazyPages.ts";

export const router = createBrowserRouter([
    {
        errorElement: <ErrorBoundary />,
        children: [
            {
                element: <MainLayout />,
                children: [
                    { path: "/", element: <Landing /> },
                    { path: "/about", element: <About /> },
                    { path: "/projects", element: <Projects /> },
                    { path: "/contact", element: <Contact /> },
                    { path: "*", element: <NotFound /> },
                ]
            }
        ]
    }
], {
    basename: import.meta.env.BASE_URL,
});