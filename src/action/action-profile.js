import axios from "axios";
import { URL_API, APP_ID } from "../config";

const config = {
  headers: {
    "Content-Type": "application/json",
    "app-id": APP_ID,
  },
};

export const getMyProfile = async (userID) => {
  try {
    const res = await axios.get(`${URL_API}/user/${userID}`, config);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error.response.status);
    console.log(error.response.data);
  }
};
