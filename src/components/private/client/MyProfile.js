import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import ComponentWrapper from "../ComponentWrapper";

const MyProfile = ({ profileState }) => {
  return (
    <>
      <ComponentWrapper>
        <Box sx={{ overflowX: "scroll" }}>
          <Typography variant="h6" sx={{ py: 1, textAlign: "center" }}>
            Profile:
          </Typography>
          <TableContainer
            component={Paper}
            elevation={4}
            sx={{
              width: { xs: "85%", sm: "85%", md: "85%", lg: "95%", xl: "95%" },
              mx: "auto",
            }}
          >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow sx={{ background: "#a1887f" }}>
                  <TableCell sx={{ fontWeight: "bolder" }}>Key</TableCell>
                  <TableCell sx={{ fontWeight: "bolder" }}>:</TableCell>
                  <TableCell sx={{ fontWeight: "bolder" }}>Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>:</TableCell>
                  <TableCell>{profileState.name}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Email</TableCell>
                  <TableCell>:</TableCell>
                  <TableCell>{profileState.email}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>UserRole</TableCell>
                  <TableCell>:</TableCell>
                  <TableCell>{profileState.userRole}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Account Verified</TableCell>
                  <TableCell>:</TableCell>
                  <TableCell>
                    {profileState.isVerified ? "Verified" : "Not Verified"}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </ComponentWrapper>
    </>
  );
};

export default MyProfile;
