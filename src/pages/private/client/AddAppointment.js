import React, { useEffect, useState } from "react";
import AddAppointment from "../../../components/private/client/AddAppointment";
import axios from "axios";
import useStateValues from "../../../hooks/useStateValues";

const userRole = [
  { label: "Dietician", value: "DIETICIAN" },
  { label: "Trainer", value: "TRAINER" },
  { label: "Physician", value: "PHYSICIAN" },
  { label: "Care Provider", value: "CAREPROVIDER" },
];

const initialFValues = {
  id: 0,
  subject: "",
  userRole: "",
  user: "",
  slot: "",
};

export default function AddAppointmentPage(props) {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowFormatted = tomorrow.toLocaleDateString("en-US");

  const [values, setValues] = useState(initialFValues);
  const [users, setUsers] = useState([]);
  const [slots, setSlots] = useState([]);
  const [roleId, setRoleId] = useState();
  const [relatedTo, setRelatedTo] = useState();
  const { jwtToken } = useStateValues();
  const { userData } = useStateValues();
  const relatedFrom = userData.id;
  const { addOrEdit } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    addOrEdit(values);
    try {
      const newSlots = slots.filter((slot) => slot !== values.slot);
      console.log(relatedFrom, values, relatedTo, newSlots);

      console.log(newSlots);

      // setSlots(newSlots);
      const response = await axios.post(
        `http://localhost:8000/api/appointment/createAppointment`,
        {
          values,
          relatedTo,
          relatedFrom,
          newSlots,
          roleId,
        },
        {
          headers: {
            authorization: `BEARER ${jwtToken}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (name === "userRole") {
      const response = await axios.get(
        `http://localhost:8000/api/appointment/fetchUsers?role=${value}`,
        {
          headers: {
            authorization: `BEARER ${jwtToken}`,
          },
        }
      );
      console.log(response.data.data);
      setUsers(response.data.data);
    }
    if (name === "user") {
      const availableSlots = users
        .filter((d) => d.id === value)
        .map((d) => d.availableSlots);
      setSlots(availableSlots[0]);
      console.log(availableSlots[0]);
      const relatedTo = users
        .filter((d) => d.id === value)
        .map((d) => d.User.id);
      const roleId = users.filter((d) => d.id === value).map((d) => d.id);
      setRoleId(roleId);
      setRelatedTo(relatedTo[0]);
    }
  };

  return (
    <AddAppointment
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
      userRole={userRole}
      values={values}
      users={users}
      slots={slots}
      appointmentDate={tomorrowFormatted}
    />
  );
}
