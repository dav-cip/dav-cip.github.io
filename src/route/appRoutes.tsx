import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "../components/error-boundary/ErrorBoundary";

import MainLayout from "./MainLayout.tsx";

const Landing = lazy(() => import("../pages/landing/Landing.tsx"));
const About = lazy(() => import("../pages/about/About.tsx"));
const Projects = lazy(() => import("../pages/projects/Projects.tsx"));
const Contact = lazy(() => import("../pages/contact/Contact.tsx"));
const NotFound = lazy(() => import("../pages/not-found/NotFound.tsx"));

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