import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";

export default {
  element: <AdminLayout />,
  children: [
    { path: "/", element: <Dashboard /> },
    { path: "/products", element: <Products /> },
  ],
};
