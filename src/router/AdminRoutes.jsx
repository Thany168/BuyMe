import AdminLayout from "../layouts/AdminLayout";
import EmployeeManagement from "../pages/Employee/EmployeeManagement";
import ProductManagement from "../pages/ProductManagement";
import StockManagement from "../pages/StockManagement";
import StockInOut from "../pages/StockManagement/stockin-out";
import Transaction from "../pages/Transaction";
import ManageStockPage from "../pages/StockManagement/manage-stock-page";
import ReportStock from "../pages/StockManagement/reportstock";
export default {
  element: <AdminLayout />,
  children: [
    { path: "/", element: <ProductManagement /> },
    { path: "/stocks", element: <StockManagement /> },
    { path: "/transaction", element: <Transaction /> },
    { path: "/employee", element: <EmployeeManagement /> },

    { path: "/stocks/stockin/out", element: <StockInOut /> },
    { path: "/stocks/managestock", element: <ManageStockPage /> },
    { path: "/stocks/reportstock", element: <ReportStock /> },
    // { path: "/[payment]", element: <Order /> },
  ],
  
};
