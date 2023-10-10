import axios from "axios";
import { GET_DATA_USER } from "./common";

export const getDataUser = async () => {
  try {
    const response = await axios.get(GET_DATA_USER);
    return response.data;
  } catch (err) {
    return null;
  }
};
