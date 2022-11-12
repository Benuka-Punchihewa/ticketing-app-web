import React, { useState } from "react";
import { Typography } from "@mui/material";
import TableAction from "../components/common/TableActions";
import ReusableTable from "../components/common/ReusableTable";
import { getRouteById, getTransitRoute } from "../services/route.service";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

// TODO: Add Comments
const tableColumns = [
  {
    id: "id",
    label: "Stop",
    minWidth: 50,
  },
  { id: "name", label: "Route Name", align: "right", minWidth: 100 },
  {
    id: "timeToReach",
    label: "Time To Reach From the Start",
    align: "right",
  },
];

const Stops = () => {
  const { id: routeId } = useParams();

  const [tableData, setTableData] = useState([]);

  const prepareTableData = (stopsList) => {
    const outStops = [];

    for (const stop of stopsList) {
      outStops.push({
        id: stop._id,
        name: stop.name,
        timeToReach: `${stop.estimatedTimeToReach} minutes`,
      });
    }

    return outStops;
  };

  useEffect(() => {
    let unmounted = false;

    // get data set to state variables
    const fetchAndSet = async () => {
      const response = await getRouteById(routeId);
      if (!response.data?.stops) return;

      const tData = prepareTableData(response.data.stops);
      if (!unmounted) setTableData(tData);
    };

    fetchAndSet();

    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
        Transit Routes
      </Typography>
      {tableData.length > 0 && (
        <ReusableTable rows={tableData} columns={tableColumns} />
      )}
    </React.Fragment>
  );
};

export default Stops;
