import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";
const params = {
  key: "AIzaSyDe881UTYMQ0osHBOPtJgS4IRgtPDb66Dk",
  cx: "54baedba80b1c44a5",
};
export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return data;
};
