import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SignupComponent = ({
  state,
  errorState,
  submitForm,
  handleChange,
  roles,
}) => {
  return (
    <>
      {/* here form elements */}
      <Container
        maxWidth="xs"
        sx={
          errorState.hasError
            ? {
                justifyContent: "center",
                border: "2px solid black",
                mt: "1%",
              }
            : {
                justifyContent: "center",
                border: "2px solid black",
                mt: "1%",
              }
        }
      >
        <Stack sx={{ py: 3, my: 3 }}>
          <Box sx={{ py: 2 }}>
            <TextField
              type="text"
              label="Name"
              name="name"
              value={state.name}
              onChange={(ev) => handleChange(ev)}
              error={errorState.nameError}
              variant="standard"
              helperText={errorState.nameError && "Atleast 3 characters"}
              fullWidth
            />
          </Box>

          <Box sx={{ py: 2 }}>
            <TextField
              type="email"
              label="Email"
              name="email"
              value={state.email}
              onChange={(ev) => handleChange(ev)}
              error={errorState.emailError}
              variant="standard"
              helperText={errorState.emailError && "Enter a valid email"}
              fullWidth
            />
          </Box>

          <Box sx={{ py: 2 }}>
            <TextField
              type="password"
              label="Password"
              name="password"
              value={state.password}
              onChange={(ev) => handleChange(ev)}
              error={errorState.passwordError}
              variant="standard"
              helperText={errorState.passwordError && "eg: Password1@"}
              fullWidth
            />
          </Box>

          <Box sx={{ py: 3 }}>
            <Select
              value={state.userRole}
              name="userRole"
              label="User role"
              error={errorState.roleError}
              onChange={(ev) => handleChange(ev)}
              helperText={
                errorState.roleError && "[ADMIN / DIETICIAN / CLIENT / TRAINER]"
              }
              variant="standard"
              fullWidth
            >
              {roles?.map((option) => {
                return (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label ?? option.value}
                  </MenuItem>
                );
              })}
            </Select>
          </Box>

          <Box sx={{ py: 4 }}>
            <Button onClick={() => submitForm()} variant="contained" fullWidth>
              Signup now
            </Button>
          </Box>
          <Button
            component={Link}
            to="/signin"
            sx={{ pt: 1 }}
            variant="outlined"
          >
            Go to SignIn
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default SignupComponent;
