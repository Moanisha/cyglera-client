import { React, useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Link,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  DialogContentText,
} from "@mui/material";

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
    renderCell: (params) => {
      if (!params.value) {
        return <span>Click to confirm</span>;
      }
      return <Link href={`${params.value}`}>{params.value}</Link>;
    },
  },
];

export default function ViewDieticianAppointmentsPage() {
  const { jwtToken } = useStateValues();
  const { userData } = useStateValues();
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [meetingLink, setMeetingLink] = useState("");
  const [rows, setRows] = useState([]);

  const handleClickOpen = (id) => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedId(null);
    setOpen(false);
  };

  const handleMeetingLinkChange = (event) => {
    setMeetingLink(event.target.value);
  };

  const handleConfirmAppointment = async () => {
    try {
      // Make an API call to submit the new meeting link to the backend
      const response = await axios.put(
        `http://3.133.175.117:8000/api/appointment/${selectedId}`,
        { videoLink: meetingLink },
        { headers: { authorization: `BEARER ${jwtToken}` } }
      );

      // Update the rows in the state with the new value for the selected row
      const updatedRows = rows.map((row) =>
        row.id === selectedId ? { ...row, videoLink: meetingLink } : row
      );
      setRows(updatedRows);

      // Close the dialog
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };
  const fetchData = () => {
    axios
      .get(`http://3.133.175.117:8000/api/appointment/fetchAppointments`, {
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
          onRowClick={(event, rowData) => {
            const rowId = event.id;
            // call your method with rowId as a parameter
            handleClickOpen(rowId);
          }}
        />
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{"Add Meeting Link"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter the meeting link for the appointment with ID{" "}
              {selectedId}.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="meetingLink"
              label="Meeting Link"
              type="text"
              fullWidth
              value={meetingLink}
              onChange={handleMeetingLinkChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleConfirmAppointment}>
              Confirm Appointment
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </Container>
  );
}
