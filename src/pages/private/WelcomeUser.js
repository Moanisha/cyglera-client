import { Typography } from "@mui/material";
import React from "react";
import ComponentWrapper from "../../components/private/ComponentWrapper";
import ClientDashboard from "../../components/private/client/ClientDashboard";
import PageTitle from "../../components/private/navigation/PageTitle";
import { ADMIN, CLIENT, DIETICIAN } from "../../helpers/UserRoles";
import useRole from "../../hooks/useRole";

const WelcomeUser = () => {
  const userRole = useRole();
  return (
    <>
      {/* this is pageTitle */}
      <>
        <PageTitle title="Welcome User" />
      </>

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
          </>
        )}
        {/* if role is employee, show employee layout */}
        {userRole === CLIENT && <ClientDashboard />}
      </ComponentWrapper>
    </>
  );
};

export default WelcomeUser;
