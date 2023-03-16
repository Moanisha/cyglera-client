import { Typography } from "@mui/material";
import React from "react";
import ComponentWrapper from "../../components/private/ComponentWrapper";
import Dashboard from "../../components/private/dietician/Dashboard";
import {
  PHYSICIAN,
  CLIENT,
  DIETICIAN,
  TRAINER,
  CAREPROVIDER,
} from "../../helpers/UserRoles";
import useRole from "../../hooks/useRole";
import AppointmentsDashboard from "./AppointmentDashboard";

const appointments = [
  {
    id: 1,
    title: "Meeting with John",
    date: "March 10, 2023",
    time: "3:00 PM",
    location: "123 Main St.",
  },
  {
    id: 2,
    title: "Meeting with Sarah",
    date: "March 15, 2023",
    time: "12:00 PM",
    location: "456 Oak St.",
  },
  // more appointments...
];


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
            <Dashboard />

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

        <div>
          <h1>My Dashboard</h1>
          <AppointmentsDashboard appointments={appointments} />
          {/* more dashboard components... */}
        </div>
      </ComponentWrapper>
    </>
  );
};

export default WelcomeUser;
