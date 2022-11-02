import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import colors from "../../assets/styles/colors";

const StateBox = ({ icon, title, subtitle }) => {
  return (
    <Box
      m="0"
      sx={{
        borderRadius: 1,
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.15)",
        p: 2,
      }}
    >
      <Box display="flex" justifyContent="space-between">
        {icon}
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: colors.primary }}
        >
          {title}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5" sx={{ color: colors.secondary }}>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default StateBox;
