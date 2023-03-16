import React from 'react';

const AppointmentsDashboard = ({ appointments }) => {
  return (
    <div>
      <h2>Appointments</h2>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.id}>
            <div>{appointment.title}</div>
            <div>{appointment.date}</div>
            <div>{appointment.time}</div>
            <div>{appointment.location}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentsDashboard;
