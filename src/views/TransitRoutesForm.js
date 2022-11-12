import React, { useState, useMemo } from "react";
import {
  Grid,
  Box,
  TextField,
  Typography,
  CircularProgress,
  Button,
} from "@mui/material";
import { popAlert } from "../utils/alerts";
import { transitRouteModel, stopModel } from "../models/transitRoute";
import colors from "../assets/styles/colors";
import TableAction from "../components/common/TableActions";
import ReusableTable from "../components/common/ReusableTable";
import { createTransitRoute } from "../services/route.service";
import { useNavigate } from "react-router-dom";

// TODO: Add Comments
const tableColumns = [
  {
    id: "stopId",
    label: "Stop ID",
    minWidth: 140,
    format: (value) => `#${value}`,
  },
  { id: "name", label: "Stop Name", align: "right", minWidth: 100 },
  {
    id: "estimatedTimeToReach",
    label: "Estimated Time To Reach",
    align: "right",
  },
  {
    id: "action",
    label: "Action",
    align: "right",
  },
];

const TransitRoutesForm = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState(transitRouteModel);
  const [stop, setStop] = useState(stopModel);
  const [stops, setStops] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const preparedStops = [
      {
        name: inputs.start,
        estimatedTimeToReach: 0,
        _id: 0,
      },
      ...stops,
    ];
    const preparedData = { ...inputs, stops: preparedStops };

    const response = await createTransitRoute(preparedData);

    if (response.success) {
      response?.data?.message &&
        popAlert("Success!", response?.data?.message, "success").then((res) => {
          navigate("/transit-routes");
        });
    } else {
      response?.data?.message &&
        popAlert("Error!", response?.data?.message, "error");
      response?.data?.data && setErrors(response.data.data);
    }
    setLoading(false);
  };

  const handleClear = () => {
    setInputs(transitRouteModel);
    setStops([]);
  };

  const handleStopAdd = () => {
    const tempStops = stops;
    tempStops.push({ ...stop, _id: new Date().valueOf() });
    setStops([...tempStops]);
    setStop(stopModel);
  };

  const handleDelete = (_id) => {
    const tempStops = stops.filter((pStop) => pStop._id !== _id);
    setStops([...tempStops]);
  };

  useMemo(() => {
    const tableDataArr = [];

    for (const stop of stops) {
      tableDataArr.push({
        stopId: stop._id,
        name: stop.name,
        estimatedTimeToReach: stop.estimatedTimeToReach,
        action: <TableAction id={stop._id} onDelete={handleDelete} />,
      });
    }

    setTableData(tableDataArr);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stops]);

  return (
    <React.Fragment>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
        Add Transit Route
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: 2 }}>
          <TextField
            name="_id"
            variant="filled"
            label="Route ID"
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
            name="startLocation"
            variant="filled"
            label="Start Location"
            fullWidth
            value={inputs.start}
            onChange={(e) =>
              setInputs({
                ...inputs,
                start: e.target.value,
              })
            }
          />
        </Box>

        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={6}>
            <TextField
              name="_id"
              variant="filled"
              label="Stop Name"
              fullWidth
              value={stop.name}
              onChange={(e) =>
                setStop({
                  ...stop,
                  name: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              name="_id"
              variant="filled"
              label="Estimated Time To Reach"
              type="number"
              fullWidth
              value={stop.estimatedTimeToReach}
              onChange={(e) =>
                setStop({
                  ...stop,
                  estimatedTimeToReach: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              type="reset"
              variant="contained"
              fullWidth
              onClick={handleStopAdd}
              sx={{ py: 2, px: 5, mr: 2 }}
            >
              Add
            </Button>
          </Grid>
          <Grid item xs={12}>
            {stops.length > 0 && (
              <ReusableTable rows={tableData} columns={tableColumns} />
            )}
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
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

export default TransitRoutesForm;
