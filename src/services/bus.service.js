import { getApi } from "../utils/axios";
import { buildResponse } from "../utils/responseBuilder";

//api call for create bus
export const createBus = async (data) => {
  const response = await getApi()
    .post("/buses", data)
    .then((res) => {
      return buildResponse(true, res.data);
    })
    .catch((err) => {
      return buildResponse(false, err.response.data, err.response.status);
    });

  return response;
};
