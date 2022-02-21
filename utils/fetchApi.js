import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "3d4387825amshcc97b9c6418e4e4p1f1605jsncaee63b9c146",
    },
  });
  return data;
};
