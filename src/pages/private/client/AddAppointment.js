import React, { useState, useEffect } from "react";
import AddAppointment from "../../../components/private/client/AddAppointment";
import axios from "axios";
import useStateValues from "../../../hooks/useStateValues";

const userRole = [
  { label: "Dietician", value: "DIETICIAN" },
  { label: "Trainer", value: "TRAINER" },
  { label: "Physician", value: "PHYSICIAN" },
  { label: "Care Provider", value: "CAREPROVIDER" },
];
const timeSlots = [
  { label: "9:00AM - 10:00AM", value: "9:00AM - 10:00AM" },
  { label: "10:00AM - 11:00AM", value: "10:00AM - 11:00AM" },
  { label: "11:00AM - 12:00PM", value: "11:00AM - 12:00PM" },
  { label: "12:00PM - 1:00PM", value: "12:00PM - 1:00PM" },
  { label: "2:00PM - 3:00PM", value: "2:00PM - 3:00PM" },
  { label: "3:00PM - 4:00PM", value: "3:00PM - 4:00PM" },
  { label: "4:00PM - 5:00PM", value: "4:00PM - 5:00PM" },
  { label: "5:00PM - 6:00PM", value: "5:00PM - 6:00PM" },
];
const initialFValues = {
  id: 0,
  customer: "",
  staff: "",
  userRole: "",
  location: "",
  startTime: null,
  endTime: null,
  dietician: "",
  slot: "",
};

export default function AddAppointmentPage(props) {
  const [values, setValues] = useState(initialFValues);
  const [dietitians, setDietitians] = useState([]);
  const { jwtToken } = useStateValues();
  // useEffect(() => {
  //   async function fetchDietitians() {
  //     const response = await axios.get(
  //       "http://localhost:8000/api/appointment/fetchDieticianEmails",
  //       {
  //         headers: {
  //           authorization: `BEARER ${jwtToken}`,
  //         },
  //       }
  //     );
  //     console.log(response.data.data);
  //     setDietitians(response.data.data);
  //   }
  //   fetchDietitians();
  // }, []);

  // async function fetchAvailableSlots() {
  //   const response = await axios.get(
  //     `/api/dietitians/${values.dietician}/available-slots`
  //   );
  //   setAvailableSlots(response.data);
  // }

  const { addOrEdit } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrEdit(values);
  };

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (name == "userRole") {
      const response = await axios.get(
        `http://localhost:8000/api/appointment/fetchUsers?role=${value}`,
        {
          headers: {
            authorization: `BEARER ${jwtToken}`,
          },
        }
      );
      console.log(response.data.data);
      setDietitians(response.data.data);
    }
  };

  return (
    <AddAppointment
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
      userRole={userRole}
      values={values}
      dietitians={dietitians}
      timeSlots={timeSlots}
    />
  );
}
