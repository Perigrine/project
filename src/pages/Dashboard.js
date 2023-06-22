import React from "react";

import { SideBar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
const Dashboard = ({ auth }) => {
  if (auth.isAuthenticated != true)
    return (
      <>
        You have to sign in first <NavLink to="/login">Login</NavLink>
      </>
    );
  return (
    <div className="flex text-[20px]">
      <SideBar />
      <div className="w-full">
        <div className="min-h-[94vh]">
          <Header />
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, null)(Dashboard);
