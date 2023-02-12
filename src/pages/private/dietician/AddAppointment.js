import React, { useState } from "react";
import AddAppointment from "../../../components/private/dietician/AddAppointment";

const userRole = [
  { id: "1", title: "Dietician" },
  { id: "2", title: "Trainer" },
  { id: "3", title: "Physician" },
];

const initialFValues = {
  id: 0,
  customer: "",
  staff: "",
  userRole: "",
  location: "",
  startTime: null,
  endTime: null,
};

export default function AddAppointmentPage(props) {
  const { addOrEdit } = props;

  const handleSubmit = (e) => {
    console.log("insde handle submit");
    e.preventDefault();
    addOrEdit(values);
  };

  const [values, setValues] = useState(initialFValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <AddAppointment
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
      userRole={userRole}
      values={values}
    />
  );
}
