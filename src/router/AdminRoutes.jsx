import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import Order from "../pages/Order";

export default {
  element: <AdminLayout />,
  children: [
    { path: "/", element: <Dashboard /> },
    { path: "/products", element: <Products /> },
    { path: "/order", element: <Order /> },
    // { path: "/[payment]", element: <Order /> },
  ],
};
