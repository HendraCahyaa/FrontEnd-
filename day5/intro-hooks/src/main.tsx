import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import UseStatePage from "./pages/UseStatePage";
import UseEffectPage from "./pages/UseEffectPage";
import UseMemoPage from "./pages/UseMemoPage";
import UseRefPage from "./pages/UseRefPage";
import UseReducerPage from "./pages/UseReducerPage";
import UseCallbackPage from "./pages/UseCallbackPage";
import UseCustomHookPage from "./pages/UseCustomHookPage";
import CounterPage from "./pages/CounterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello</div>,
  },
  {
    path: "/use-state",
    element: <UseStatePage />,
  },
  {
    path: "/use-effect",
    element: <UseEffectPage />,
  },
  {
    path: "/use-memo",
    element: <UseMemoPage />,
  },
  {
    path: "/use-ref",
    element: <UseRefPage />,
  },
  {
    path: "/use-reducer",
    element: <UseReducerPage />,
  },
  {
    path: "/use-callback",
    element: <UseCallbackPage />,
  },
  {
    path: "/use-costum",
    element: <UseCustomHookPage />,
  },
  {
    path: "/counter",
    element: <CounterPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
