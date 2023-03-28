import { Typography } from "@mui/material";
import {React, useState} from "react";
import ComponentWrapper from "../../components/private/ComponentWrapper";
import {
  PHYSICIAN,
  CLIENT,
  DIETICIAN,
  TRAINER,
  CAREPROVIDER,
} from "../../helpers/UserRoles";
import useRole from "../../hooks/useRole";
import AppointmentsDashboard from "./AppointmentDashboard";
import useStateValues from "../../hooks/useStateValues";

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
  const { userData } = useStateValues();
  console.log(userData);
 
  const [fetchUserInfo, setFetchUserInfo] = useState(
    {
      userName: userData.firstName,
      // email: userData.email,
    }
    );
  return (
    <>
      <ComponentWrapper>
        {/* if role is admin, show admin layout */}
        {userRole === TRAINER && (
          <>
            <Typography variant="h4">Welcome TRAINER - {userData.firstName}</Typography>
          </>
        )}
        {/* if role is canteen, show canteen layout */}
        {userRole === DIETICIAN && (
          <>
            <Typography variant="h4">Welcome DIETICIAN - {userData.firstName}</Typography>
          </>
        )}
        {/* if role is employee, show employee layout */}
        {userRole === CLIENT && (
          <>
            <Typography variant="h4">Welcome CLIENT - {userData.firstName}</Typography>
          </>
        )}
        {/* if role is employee, show employee layout */}
        {userRole === PHYSICIAN && (
          <>
            <Typography variant="h4">Welcome PHYSICIAN - {userData.firstName}</Typography>
          </>
        )}
        {/* if role is employee, show employee layout */}
        {userRole === CAREPROVIDER && (
          <>
            <Typography variant="h4">Welcome CAREPROVIDER - {userData.firstName}</Typography>
          </>
        )}

        <div>
          <div className="my-5">
          <AppointmentsDashboard appointments={appointments} />
          </div>
          {/* <h3>My Dashboard</h3> */}
          
          {/* more dashboard components... */}
        </div>
      </ComponentWrapper>
    </>
  );
};

export default WelcomeUser;
