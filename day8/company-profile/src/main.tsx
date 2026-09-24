import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import CreateBlogPage from "./pages/CreateBlogPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ServicePage from "./pages/ServicePage";
import TeamPage from "./pages/TeamPage";
import ScrollToTop from "./components/ScrollTop";
import BlogContent from "./pages/BlogContent";

function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/services",
        element: <ServicePage />,
      },
      {
        path: "/teams",
        element: <TeamPage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/create-blogs",
        element: <CreateBlogPage />,
      },
      {
        path: "/blogs/:id",
        element: <BlogContent />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
