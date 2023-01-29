import { Box, Button, Container, Stack, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SigninComponent = ({ state, errorState, submitForm, handleChange }) => {
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
        <Stack sx={{ py: 5, my: 5 }}>
          <Box sx={{ py: 2 }}>
            <TextField
              type="email"
              label="email"
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
              label="password"
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
            <Button onClick={() => submitForm()} variant="contained" fullWidth>
              Sign in
            </Button>
          </Box>
          <Button
            component={Link}
            to="/signup"
            sx={{ pt: 1 }}
            variant="outlined"
          >
            Go to SignUp
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default SigninComponent;
