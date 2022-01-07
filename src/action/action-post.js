import axios from "axios";

const config = {
  headers: {
    "app-id": "61d3a1160987ba364b661ab4",
  },
};

export const getAllPost = async () => {
  const res = await axios.get("https://dummyapi.io/data/v1/post", config);
  const { data } = res.data;
  console.log(data);
};
