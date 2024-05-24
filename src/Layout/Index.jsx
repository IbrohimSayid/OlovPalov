import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Products from "../Pages/Products/Products";
import Sidebar from "../components/Sidebar/Sidebar";

function Layout() {
  return (
    <>
      <div className="layout">
        <Sidebar />
        <Outlet>
          <Dashboard />
          <Products />
        </Outlet>
      </div>
    </>
  );
}

export default Layout;
