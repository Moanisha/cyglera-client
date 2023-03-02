import { Typography } from "@mui/material";
import React from "react";
import ComponentWrapper from "../../components/private/ComponentWrapper";
import {
  PHYSICIAN,
  CLIENT,
  DIETICIAN,
  TRAINER,
  CAREPROVIDER,
} from "../../helpers/UserRoles";
import useRole from "../../hooks/useRole";

const WelcomeUser = () => {
  const userRole = useRole();
  return (
    <>
      <ComponentWrapper>
        {/* if role is admin, show admin layout */}
        {userRole === TRAINER && (
          <>
            <Typography variant="h4">Welcome TRAINER USER</Typography>
          </>
        )}
        {/* if role is canteen, show canteen layout */}
        {userRole === DIETICIAN && (
          <>
            <Typography variant="h4">Welcome DIETICIAN</Typography>
          </>
        )}
        {/* if role is employee, show employee layout */}
        {userRole === CLIENT && (
          <>
            <Typography variant="h4">Welcome CLIENT</Typography>
          </>
        )}
        {/* if role is employee, show employee layout */}
        {userRole === PHYSICIAN && (
          <>
            <Typography variant="h4">Welcome PHYSICIAN</Typography>
          </>
        )}
        {/* if role is employee, show employee layout */}
        {userRole === CAREPROVIDER && (
          <>
            <Typography variant="h4">Welcome CAREPROVIDER</Typography>
          </>
        )}
      </ComponentWrapper>
    </>
  );
};

export default WelcomeUser;
