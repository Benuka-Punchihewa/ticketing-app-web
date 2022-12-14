import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//common
import NavBar from "./components/common/NavBar";
import Sidebar from "./components/common/Sidebar";

//views
import Dashboard from "./views/Dashboard";
import Bus from "./views/Bus";
import SignIn from "./views/SignIn";
import TransitRoutesForm from "./views/TransitRoutesForm";
import TransitRoutes from "./views/TransitRoutes";
import Stops from "./views/Stops";

const App = () => {
  if (!window.location.href.includes("auth")) {
    return (
      <React.Fragment>
        <Stack flexDirection="row">
          <Box sx={{ width: "20vw" }}>
            <Sidebar />
          </Box>
          <Box sx={{ width: "80vw", padding: 3 }}>
            <Grid container>
              <Grid item xs={12}>
                <NavBar />
              </Grid>
              <Grid item xs={12} sx={{ pt: 3 }}>
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/buses" element={<Bus />} />
                    <Route
                      path="/add-transit-route"
                      element={<TransitRoutesForm />}
                    />
                    <Route path="/transit-routes" element={<TransitRoutes />} />
                    <Route path="/stops/:id" element={<Stops />} />
                  </Routes>
                </BrowserRouter>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </React.Fragment>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/auth/sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    );
  }
};

export default App;
