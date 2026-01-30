import { createBrowserRouter } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  AdminRoutes,
  {
    path: "*",
    element: <NotFound />,
  },
]);
