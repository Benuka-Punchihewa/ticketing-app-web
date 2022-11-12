import React, { useState } from "react";
import { Typography } from "@mui/material";
import TableAction from "../components/common/TableActions";
import ReusableTable from "../components/common/ReusableTable";
import { getTransitRoute } from "../services/route.service";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// TODO: Add Comments
const tableColumns = [
  {
    id: "id",
    label: "Route ID",
  },
  { id: "name", label: "Route Name", align: "right", minWidth: 100 },
  {
    id: "routeDuration",
    label: "Route Duration",
    align: "right",
  },
  {
    id: "action",
    label: "Action",
    align: "right",
  },
];

const TransitRoutes = () => {
  const navigate = useNavigate();

  const [tableData, setTableData] = useState([]);

  const handleView = (id) => {
    navigate(`/stops/${id}`);
  };

  const prepareTableData = (routeList) => {
    const outRoutes = [];

    for (const route of routeList) {
      outRoutes.push({
        id: route._id,
        name: route.name,
        routeDuration:
          route.stops.length > 0
            ? `${
                route.stops[route.stops.length - 1]?.estimatedTimeToReach
              } minutes`
            : "N/A",
        action: <TableAction id={route._id} onView={handleView} />,
      });
    }

    return outRoutes;
  };

  useEffect(() => {
    let unmounted = false;

    // get data set to state variables
    const fetchAndSet = async () => {
      const response = await getTransitRoute();
      if (!response.data) return;

      const tData = prepareTableData(response.data);
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

export default TransitRoutes;
