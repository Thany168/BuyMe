import AdminLayout from "../layouts/AdminLayout";
import EmployeeManagement from "../pages/EmployeeManagement";
import ProductManagement from "../pages/ProductManagement";
import StockManagement from "../pages/StockManagement";
import Transaction from "../pages/Transaction";
export default {
  element: <AdminLayout />,
  children: [
    { path: "/", element: <ProductManagement /> },
    { path: "/stocks", element: <StockManagement /> },
    { path: "/transaction", element: <Transaction /> },
    { path: "/employee", element: <EmployeeManagement /> },
    // { path: "/[payment]", element: <Order /> },
  ],
};
