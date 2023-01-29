import React from "react";
import { Route, Routes } from "react-router-dom";

import AppProvider from "./context/AppProvider";
import SignupPage from "./pages/public/SignupPage";
import SigninPage from "./pages/public/SigninPage";

import Dashboard from "./layouts/Dashboard";

import Protected from "./helpers/routeProtecter/Protected";
import { Toaster } from "react-hot-toast";
import Loader from "./helpers/Loader";
import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import WelcomeUser from "./pages/private/WelcomeUser";

// admin
// dietician
// user
import UserProfilePage from "./pages/private/client/UserProfilePage";
import UpdatePwdPage from "./pages/private/client/UpdatePwdPage";

// this helps in accessing only userAllowed routes/pages
import ClientProtected from "./helpers/routeProtecter/ClientProtected";
// import DieticianProtected from "./helpers/routeProtecter/DieticianProtected";
// import AdminProtected from "./helpers/routeProtecter/AdminProtected";

const App = () => {
  const theme = createTheme({
    palette: {
      background: {
        default: "rgba(51,221,33,0.69)",
      },
    },
  });
  return (
    <>
      <AppProvider>
        <ThemeProvider theme={theme} />
        <CssBaseline />

        <Routes>
          <Route path="/" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />

          <Route
            path="/dashboard"
            element={
              <Protected redirect={<SigninPage />}>
                <Dashboard />
              </Protected>
            }
          >
            <Route path="" element={<WelcomeUser />} />

            {/* admin routes */}

            {/* Dietician route */}

            {/* Client routes */}
            <Route
              path="myprofile"
              element={
                <ClientProtected redirect={<WelcomeUser />}>
                  <UserProfilePage />
                </ClientProtected>
              }
            />
            <Route
              path="changepwd"
              element={
                <ClientProtected redirect={<WelcomeUser />}>
                  <UpdatePwdPage />
                </ClientProtected>
              }
            />

            <Route path="*" element={<WelcomeUser />} />
          </Route>

          <Route path="*" element={<SigninPage />} />
        </Routes>

        {/* loader */}
        <Loader />
      </AppProvider>

      {/* react hot toast */}
      <Toaster position="bottom-right" reverseOrder={true} />
    </>
  );
};

export default App;
