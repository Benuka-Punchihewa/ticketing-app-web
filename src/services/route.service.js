import { getApi } from "../utils/axios";
import { buildResponse } from "../utils/responseBuilder";

export const createTransitRoute = async (data) => {
  const response = await getApi()
    .post("/transit-routes", data)
    .then((res) => {
      return buildResponse(true, res.data);
    })
    .catch((err) => {
      return buildResponse(false, err.response.data, err.response.status);
    });

  return response;
};

export const getTransitRoute = async () => {
  const response = await getApi()
    .get("/transit-routes")
    .then((res) => {
      return buildResponse(true, res.data);
    })
    .catch((err) => {
      return buildResponse(false, err.response.data, err.response.status);
    });

  return response;
};

export const getRouteById = async (id) => {
  const response = await getApi()
    .get(`/transit-routes/${id}`)
    .then((res) => {
      return buildResponse(true, res.data);
    })
    .catch((err) => {
      return buildResponse(false, err.response.data, err.response.status);
    });

  return response;
};
