import axios from "axios";
import { APP_ID, LIMIT_LIST_USER_PER_PAGE, URL_API } from "../config";

const config = {
  headers: {
    "Content-Type": "application/json",
    "app-id": APP_ID,
  },
};

export const getAllCreatedUsers = async () => {
  const response = await axios.get(`${URL_API}/user?created=1`, config);
  return response.data;
};

export const createNewUser = async (formData) => {
  const createdUser = await axios.post(
    `${URL_API}/user/create`,
    formData,
    config
  );

  return createdUser.data;
};

export const deleteMyUser = async (userId) => {
  const deletedUser = await axios.delete(`${URL_API}/user/${userId}`, config);

  return deletedUser.data;
};

export const getAllUser = async (pagination = 1, isForFriendList = false) => {
  try {
    const res = await axios.get(
      `${URL_API}/user?${
        isForFriendList &&
        `page=${pagination - 1}&limit=${LIMIT_LIST_USER_PER_PAGE}`
      }`,
      config
    );
    return res.data;
  } catch (error) {
    console.log(error.response.status);
    console.log(error.response.data);
  }
};
