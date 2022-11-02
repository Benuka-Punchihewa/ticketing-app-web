import React, { useState } from "react";
import {
  Grid,
  Box,
  TextField,
  MenuItem,
  Typography,
  CircularProgress,
  Button,
} from "@mui/material";
import { popAlert, popDangerPrompt } from "../utils/alerts";
import bus from "../models/bus";
import { createBus } from "../services/bus.service";
import colors from "../assets/styles/colors";

const Bus = () => {
  const [inputs, setInputs] = useState(bus);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [refresh, setRefresh] = useState(false);

  // submit bus data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await createBus(inputs);

    if (response.success) {
      setRefresh(!refresh);
      response?.data?.message &&
        popAlert("Success!", response?.data?.message, "success").then((res) => {
          setShowPopup(false);
        });
    } else {
      response?.data?.message &&
        popAlert("Error!", response?.data?.message, "error");
      response?.data?.data && setErrors(response.data.data);
    }
    setLoading(false);
  };

  //clear all data
  const handleClear = () => {
    setInputs(bus);
  };

  return (
    <React.Fragment>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
        Add Bus
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: 2 }}>
          <TextField
            name="_id"
            variant="filled"
            label="Bus Id"
            fullWidth
            value={inputs._id}
            onChange={(e) =>
              setInputs({
                ...inputs,
                _id: e.target.value,
              })
            }
          />
          {errors["_id"] && (
            <Typography color="error">{errors["_id"]}</Typography>
          )}
        </Box>

        <Box sx={{ mb: 2 }}>
          <TextField
            name="driver"
            variant="filled"
            label="Driver"
            fullWidth
            value={inputs.driver}
            onChange={(e) =>
              setInputs({
                ...inputs,
                driver: e.target.value,
              })
            }
          />
          {errors["driver"] && (
            <Typography color="error">{errors["driver"]}</Typography>
          )}
        </Box>
        <Box sx={{ mb: 2, display: "flex", justifyContent: "flex-end" }}>
          <Button
            type="reset"
            variant="contained"
            onClick={handleClear}
            sx={{ py: 2, px: 5, mr: 2, backgroundColor: colors.grey }}
          >
            Clear
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{ py: 2, px: 5 }}
            disabled={loading}
          >
            {loading ? <CircularProgress color="secondary" /> : "Save"}
          </Button>
        </Box>
      </form>
    </React.Fragment>
  );
};

export default Bus;
