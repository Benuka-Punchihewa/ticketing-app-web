import React from "react";
import SearchBar from "../components/common/SearchBar";
import AddButton from "../components/common/AddButton";
// import ReportButton from "../components/common/ReportButton";
import { Box, Grid, Typography } from "@mui/material";
import BarChart from "../components/common/BarChart";
import PieChart from "../components/common/PieChart";
import StateBox from "../components/common/StateBox";

//icon
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import GroupIcon from "@mui/icons-material/Group";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import colors from "../assets/styles/colors";

const Dashboard = () => {
  const handleSearch = (input) => {};
  return (
    <React.Fragment>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
        Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <StateBox
            title="10210"
            subtitle="Sample Data"
            icon={
              <AccessTimeFilledIcon
                sx={{ fontSize: "32px", color: colors.black }}
              />
            }
          />
        </Grid>
        <Grid item xs={4}>
          <StateBox
            title="100,210"
            subtitle="Users"
            icon={<GroupIcon sx={{ fontSize: "32px", color: colors.black }} />}
          />
        </Grid>
        <Grid item xs={4}>
          <StateBox
            title="10210"
            subtitle="Buses"
            icon={
              <DirectionsBusFilledIcon
                sx={{ fontSize: "32px", color: colors.black }}
              />
            }
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={8} sx={{ mt: 5 }}>
          <Box
            height="60vh"
            sx={{
              borderRadius: 1,
              boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.25)",
              p: 2,
              pb: 5,
            }}
          >
            <Typography variant="h5" textAlign="center">
              Bar Chart
            </Typography>
            <BarChart />
          </Box>
        </Grid>
        <Grid item xs={4} sx={{ mt: 5 }}>
          <Box
            height="60vh"
            sx={{
              borderRadius: 1,
              boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.25)",
              p: 2,
              pb: 5,
            }}
          >
            <Typography variant="h5" textAlign="center">
              Pie Chart
            </Typography>
            <PieChart />
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Dashboard;
