import { React, useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import axios from "axios";
import useStateValues from "../../../hooks/useStateValues";

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

export default function ViewDieticianAppointmentsPage() {
  const { jwtToken } = useStateValues();
  const { userData } = useStateValues();

  const [rows, setRows] = useState([]);

  const fetchData = () => {
    axios
      .get(`http://localhost:8000/api/appointment/fetchAppointments`, {
        headers: {
          authorization: `BEARER ${jwtToken}`,
        },
      })
      .then((res) => {
        const result = res.data.data
          .map((d) => {
            if (d.relatedToUser.userRole === userData.userRole) {
              return {
                id: d.id,
                subject: d.subject,
                role: d.relatedFromUser.userRole,
                timeSlot: d.timeSlot,
                name: d.relatedFromUser.firstName,
                videoLink: d.videoLink,
                email: d.relatedFromUser.email,
              };
            } else {
              return null;
            }
          })
          .filter((d) => d !== null);
        setRows(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
    </Container>
  );
}
