import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import ErrorPage from "./pages/404.jsx";
import UsersPage from "./pages/users.jsx";
import UsersTablePage from "./pages/userstable.jsx";
import TestPage from "./pages/test.jsx";
import CustomersPage from "./pages/customers.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>HELLO WORLD</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/users",
    element: <UsersPage />,
  },
  {
    path: "/userstable",
    element: <UsersTablePage />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
  {
    path: "/customers",
    element: <CustomersPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
