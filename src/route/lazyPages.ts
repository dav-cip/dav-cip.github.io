import { lazy } from "react";

export const Landing = lazy(() => import("../pages/landing/Landing.tsx"));
export const About = lazy(() => import("../pages/about/About.tsx"));
export const Projects = lazy(() => import("../pages/projects/Projects.tsx"));
export const Contact = lazy(() => import("../pages/contact/Contact.tsx"));
export const NotFound = lazy(() => import("../pages/not-found/NotFound.tsx"));