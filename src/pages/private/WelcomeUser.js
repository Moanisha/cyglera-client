import { Typography } from "@mui/material";
import React from "react";
import ComponentWrapper from "../../components/private/ComponentWrapper";
import { ADMIN, CLIENT, DIETICIAN } from "../../helpers/UserRoles";
import useRole from "../../hooks/useRole";
import Dashboard from "../../components/private/dietician/Dashboard";

const WelcomeUser = () => {
  const userRole = useRole();
  return (
    <>
      <ComponentWrapper>
        {/* if role is admin, show admin layout */}
        {userRole === ADMIN && (
          <>
            <Typography variant="h4">Welcome ADMIN USER</Typography>
          </>
        )}
        {/* if role is canteen, show canteen layout */}
        {userRole === DIETICIAN && (
          <>
            <Typography variant="h4">Welcome DIETICIAN</Typography>
            <Dashboard />

          </>
        )}
        {/* if role is employee, show employee layout */}
        {userRole === CLIENT && (
          <>
            <Typography variant="h4">Welcome CLIENT</Typography>
          </>
        )}
      </ComponentWrapper>
    </>
  );
};

export default WelcomeUser;
