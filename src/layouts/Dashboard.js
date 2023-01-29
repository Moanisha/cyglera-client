import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/private/navigation/Navigation";

import adminNavList from "../helpers/navItems/AdminNavList";
import dieticianNavlist from "../helpers/navItems/DieticianNavList";
import clientNavList from "../helpers/navItems/ClientNavList";

import { ADMIN, CLIENT, DIETICIAN } from "../helpers/UserRoles";
import useRole from "../hooks/useRole";

const Dashboard = () => {
  const userRole = useRole();
  return (
    <>
      {/* NavigationBar */}
      {/* if role is admin, show admin layout */}
      {userRole === ADMIN && (
        <>
          <Navigation navFeaturesList={adminNavList} />
        </>
      )}
      {/* if role is canteen, show canteen layout */}
      {userRole === CLIENT && (
        <>
          <Navigation navFeaturesList={clientNavList} />
        </>
      )}
      {/* if role is employee, show employee layout */}
      {userRole === DIETICIAN && (
        <>
          <Navigation navFeaturesList={dieticianNavlist} />
        </>
      )}

      {/* this is where different components gets rendered based on url-path */}
      <>
        <Outlet />
      </>
    </>
  );
};

export default Dashboard;
