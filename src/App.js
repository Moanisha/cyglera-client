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

import ViewAppointmentsPage from "./pages/private/dietician/ViewAppointments";
import WelcomeUser from "./pages/private/WelcomeUser";
import DieticianProtected from "./helpers/routeProtecter/DieticianProtected";
import ClientProtected from "./helpers/routeProtecter/ClientProtected";
import RecipesPage from "./pages/private/dietician/Recipes";
import Recipe from "./components/private/dietician/Recipe";
import Profile from "./components/private/profile";

const App = () => {
  const theme = createTheme({
    palette: {
      background: {
        default: "white",
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
            path="/"
            element={
              <Protected redirect={<SigninPage />}>
                <Dashboard />
              </Protected>
            }
          >
            <Route
              path="appointments"
              element={
                <DieticianProtected redirect={<WelcomeUser />}>
                  <ViewAppointmentsPage />
                </DieticianProtected>
              }
            />

            <Route
              path="recipes"
              element={
                <DieticianProtected redirect={<WelcomeUser />}>
                  <RecipesPage />
                </DieticianProtected>
              }
            />

            <Route
              path="recipes/:recipe_id"
              element={
                <DieticianProtected redirect={<WelcomeUser />}>
                  <Recipe />
                </DieticianProtected>
              }
            />

            <Route
              path="profile"
              element={
                <>
                  <DieticianProtected redirect=
                    {
                      <ClientProtected redirect={<WelcomeUser />}>
                        <Profile />
                      </ClientProtected>
                    }>
                    <Profile />
                  </DieticianProtected>
                  
                </>
              }
            />
            
            <Route path="" element={<WelcomeUser />} />

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
