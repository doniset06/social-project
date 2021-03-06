import axios from "axios";
import { URL_API, APP_ID, LIMIT_POST_PER_PAGE } from "../config";

const config = {
  headers: {
    "Content-Type": "application/json",
    "app-id": APP_ID,
  },
};

export const getAllPost = async () => {
  try {
    const res = await axios.get(
      `${URL_API}/post?limit=${LIMIT_POST_PER_PAGE}`,
      config
    );
    const { data } = res.data;
    return data;
  } catch (error) {
    console.log(error.response.status);
    console.log(error.response.data);
  }
};
