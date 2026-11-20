import { lazy } from "react";

export const Home = lazy(() => import("../pages/home/Home.tsx"));
export const About = lazy(() => import("../pages/about/About.tsx"));
export const Experience = lazy(() => import("../pages/experience/Experience.tsx"));
export const Certificates = lazy(() => import("../pages/certificates/Certificates.tsx"));
export const Projects = lazy(() => import("../pages/projects/Projects.tsx"));
export const Contact = lazy(() => import("../pages/contact/Contact.tsx"));
export const NotFound = lazy(() => import("../pages/not-found/NotFound.tsx"));