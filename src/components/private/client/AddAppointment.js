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

const AddAppointment = ({
  handleInputChange,
  handleSubmit,
  values,
  users,
  userRole,
  slots,
  appointmentDate,
}) => {
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
                label="Subject"
                name="subject"
                value={values.subject}
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
                  name="user"
                  value={values.user}
                  fullWidth
                  onChange={handleInputChange}
                >
                  {users.map((user) => (
                    <MenuItem key={user.id} value={user.id}>
                      {user.User.firstName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            {slots && (
              <Box sx={{ py: 1 }}>
                <FormControl
                  variant="outlined"
                  style={{
                    width: "100vh",
                  }}
                >
                  <InputLabel id="slot-label">Select slot</InputLabel>
                  <Select
                    label="TimeSlot"
                    name="slot"
                    value={values.slot}
                    fullWidth
                    onChange={handleInputChange}
                  >
                    <MenuItem value="" disabled>
                      {appointmentDate}
                    </MenuItem>
                    {slots.map((slot) => (
                      <MenuItem key={slot} value={slot}>
                        {slot}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            )}
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
