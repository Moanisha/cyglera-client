import { React, useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link, Button, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import axios from "axios";
import useStateValues from "../../../hooks/useStateValues";

import Popup from "../../../components/private/dietician/Popup";
import AddAppointmentPage from "./AddAppointment";

const theme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          height: "54vh",
          "& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus": {
            outline: "none",
          },
        },
      },
    },
  },
});

const columns = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "subject", headerName: "Subject", flex: 1 },

  { field: "role", headerName: "Role", flex: 1 },
  { field: "name", headerName: "Name", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  {
    field: "timeSlot",
    headerName: "Time Slot",
    flex: 1,
  },

  {
    field: "videoLink",
    flex: 1,
    headerName: "Zoom Link",
    renderCell: (params) => <Link href={`${params.value}`}>Zoom Link</Link>,
  },
];

export default function ViewClientAppointmentsPage() {
  const { jwtToken } = useStateValues();
  const [rows, setRows] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/appointment/fetchAppointments`, {
        headers: {
          authorization: `BEARER ${jwtToken}`,
        },
      })
      .then((res) => {
        let result = [];
        res.data.data.map((d) => {
          let obj = {};
          obj.id = d.id;
          obj.subject = d.subject;
          obj.role = d.User.userRole;
          obj.timeSlot = d.timeSlot;
          obj.name = d.User.firstName;
          obj.videoLink = d.videoLink;
          obj.email = d.User.email;
          result.push(obj);
        });
        setRows(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addOrEdit = (appointment) => {
    setOpenPopup(false);
    setRows([...rows, appointment]);
  };

  return (
    <Container
      sx={{
        my: 20,
      }}
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Button
        text="Add New"
        variant="outlined"
        onClick={() => {
          setOpenPopup(true);
        }}
      >
        ADD NEW
      </Button>
      <ThemeProvider theme={theme}>
        <DataGrid
          sx={{
            justifyContent: "center",
            my: 10,
          }}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </ThemeProvider>
      <Popup
        title="Create Appointment"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <AddAppointmentPage addOrEdit={addOrEdit} />
      </Popup>
    </Container>
  );
}
