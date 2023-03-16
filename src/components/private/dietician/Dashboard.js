import React from 'react';
import AppointmentsDashboard from './AppointmentDashboard';

const appointments = [
  {
    id: 1,
    title: 'Meeting with John',
    date: 'March 10, 2023',
    time: '3:00 PM',
    location: '123 Main St.',
  },
  {
    id: 2,
    title: 'Meeting with Sarah',
    date: 'March 15, 2023',
    time: '12:00 PM',
    location: '456 Oak St.',
  },
  // more appointments...
];

const Dashboard = () => {
  return (
    <div>
      <h1>My Dashboard</h1>
      <AppointmentsDashboard appointments={appointments} />
      {/* more dashboard components... */}
    </div>
  );
};

export default Dashboard;
