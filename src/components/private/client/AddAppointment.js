import React from "react";
import {
  TextField,
  FormControl,
  MenuItem,
  Box,
  InputLabel,
  Select,
  Stack,
  Button,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const AddAppointment = ({
  handleInputChange,
  handleSubmit,
  values,
  dietitians,
  userRole,
}) => {
  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl
          style={{
            width: "100vh",
          }}
        >
          <Stack>
            <Box sx={{ py: 1 }}>
              <TextField
                fullWidth
                variant="outlined"
                label="Customer"
                name="customer"
                value={values.customer}
                onChange={handleInputChange}
              />
            </Box>
            <Box sx={{ py: 1 }}>
              <TextField
                variant="outlined"
                label="Staff"
                name="staff"
                value={values.staff}
                onChange={handleInputChange}
              />
            </Box>
            <Box sx={{ py: 1 }}>
              <TextField
                variant="outlined"
                label="Location"
                name="location"
                value={values.location}
                onChange={handleInputChange}
              />
            </Box>
            <Box sx={{ py: 1 }}>
              <FormControl
                variant="outlined"
                style={{
                  width: "100vh",
                }}
              >
                <InputLabel>User Role</InputLabel>
                <Select
                  label="User role"
                  name="userRole"
                  fullWidth
                  value={values.userRole}
                  onChange={handleInputChange}
                >
                  <MenuItem value="">None</MenuItem>
                  {userRole.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ py: 1 }}>
              <FormControl
                variant="outlined"
                style={{
                  width: "100vh",
                }}
              >
                <InputLabel id="dietitian-label">Select one</InputLabel>
                <Select
                  label="Select one"
                  name="dietician"
                  value={values.dietitian}
                  fullWidth
                  onChange={handleInputChange}
                >
                  {dietitians.map((dietitian) => (
                    <MenuItem key={dietitian.id} value={dietitian.id}>
                      {dietitian.User.firstName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ py: 1 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label="Start Time"
                  name="startTime"
                  value={values.startTime}
                  onChange={(date) =>
                    handleInputChange(convertToDefEventPara("startTime", date))
                  }
                />
              </LocalizationProvider>
            </Box>
            <Box sx={{ py: 1 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label="End Time"
                  name="endTime"
                  value={values.endTime}
                  onChange={(date) =>
                    handleInputChange(convertToDefEventPara("endTime", date))
                  }
                />
              </LocalizationProvider>
            </Box>
          </Stack>
        </FormControl>
        <div>
          <Button
            variant="outlined"
            size={"large"}
            color={"primary"}
            type="submit"
          >
            SUBMIT
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddAppointment;
