import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "../components/error-boundary/ErrorBoundary";

import MainLayout from "./MainLayout.tsx";
import { Home, About, Experience, Projects, Contact, NotFound } from "./lazyPages.ts";

export const router = createBrowserRouter([
    {
        errorElement: <ErrorBoundary />,
        children: [
            {
                element: <MainLayout />,
                children: [
                    { path: "/", element: <Home /> },
                    { path: "/about", element: <About /> },
                    { path: "/experience", element: <Experience /> },
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