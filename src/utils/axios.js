import axios from "axios";
import constants from "../constants";
import store from "../store";

//axios instance for JSON data

export const getApi = () => {
  const newState = store.getState();
  const token = newState ? newState.auth.token : null;
  return axios.create({
    baseURL: constants.API_BASE_URL,
    headers: {
      Authorization: token ? "Bearer " + token : null,
      "Content-type": "application/json",
    },
  });
};
