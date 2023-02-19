import { React, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link, Button, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import AddIcon from "@mui/icons-material/Add";
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
  { field: "customer", headerName: "Customer", flex: 1 },
  { field: "staff", headerName: "Staff", flex: 1 },
  {
    field: "startTime",
    headerName: "Start Time",
    flex: 1,
  },
  {
    field: "endTime",
    headerName: "End Time",
    flex: 1,
  },

  {
    field: "location",
    flex: 1,
    headerName: "Location",
    renderCell: (params) => <Link href={`${params.value}`}>Zoom Link</Link>,
  },
  {
    field: "payment",
    flex: 1,
    headerName: "Payment",
    sortable: false,
  },
];

export default function ViewAppointmentsPage() {
  const [rows, setRows] = useState([
    {
      id: 1,
      customer: "laurafu160@gmail.com",
      staff: "adam@gmail.com",
      startTime: "2023-01-28 10:30",
      endTime: "2023-01-28 11:30",
      location:
        "zoommtg://zoom.us/join?confno=8529015944&pwd=888999&uname=mick",
      payment: "$90.00",
    },
    {
      id: 2,
      customer: "laurafu160@gmail.com",
      staff: "adam@gmail.com",
      startTime: "2023-01-28 10:30",
      endTime: "2023-01-28 11:30",
      location:
        "zoommtg://zoom.us/join?confno=8529015944&pwd=888999&uname=mick",
      payment: "$90.00",
    },
    {
      id: 3,
      customer: "laurafu160@gmail.com",
      staff: "adam@gmail.com",
      startTime: "2023-01-28 10:30",
      endTime: "2023-01-28 11:30",
      location:
        "zoommtg://zoom.us/join?confno=8529015944&pwd=888999&uname=mick",
      payment: "$90.00",
    },
    {
      id: 4,
      customer: "laurafu160@gmail.com",
      staff: "adam@gmail.com",
      startTime: "2023-01-28 10:30",
      endTime: "2023-01-28 11:30",
      location:
        "zoommtg://zoom.us/join?confno=8529015944&pwd=888999&uname=mick",
      payment: "$90.00",
    },
    {
      id: 5,
      customer: "laurafu160@gmail.com",
      staff: "adam@gmail.com",
      startTime: "2023-01-28 10:30",
      endTime: "2023-01-28 11:30",
      location:
        "zoommtg://zoom.us/join?confno=8529015944&pwd=888999&uname=mick",
      payment: "$90.00",
    },
    {
      id: 6,
      customer: "laurafu160@gmail.com",
      staff: "adam@gmail.com",
      startTime: "2023-01-28 10:30",
      endTime: "2023-01-28 11:30",
      location:
        "zoommtg://zoom.us/join?confno=8529015944&pwd=888999&uname=mick",
      payment: "$90.00",
    },
  ]);

  const [openPopup, setOpenPopup] = useState(false);

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
        startIcon={<AddIcon />}
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
