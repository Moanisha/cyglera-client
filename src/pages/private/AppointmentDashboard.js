import useRole from "../../hooks/useRole";
import { useEffect, useState } from "react";
import useStateValues from "../../hooks/useStateValues";
import axios from "axios";

const AppointmentDashboard = ({ appointments }) => {
  const userRole = useRole();
  const { userData } = useStateValues();

  const [dashboardData, setDashboardData] = useState({
    userRole: userRole,
    id: userData.id,
    email: userData.email,
  });
  console.log(dashboardData);

  const [dashboarddetails, setdashboarddetails] = useState([]);

  useEffect(() => {
    axios
      .post("http://3.133.175.117:8000/api/auth/getDashboard", dashboardData)
      .then((res) => {
        console.log(res.data);
        const { userFound, userInfo } = res.data;
        setdashboarddetails({ ...userFound, ...userInfo });
      })
      .catch((error) => {
        console.log(error);
        // handle the error, e.g. show an error message
      });
  }, []);

  return (
    <div>
      <h4>Appointments</h4>
      <table border={1}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Time</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {/* {dashboarddetails.map((appointment) => ( */}
          <tr key={dashboarddetails.id}>
            <td>{dashboarddetails.subject}</td>
            <td>{dashboarddetails.appointmentDate}</td>
            <td>{dashboarddetails.timeSlot}</td>
            <td>{dashboarddetails.videoLink}</td>
          </tr>
          {/* ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentDashboard;
