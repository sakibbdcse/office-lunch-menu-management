import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000/api";

export const getMenuByDate = async (date) => {
  try {
    const response = await axios.get(`${API_URL}/menu/${date}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const selectLunch = async (choice) => {
  try {
    const response = await axios.post(`${API_URL}/choice`, choice);
    return response.data;
  } catch (error) {
    throw error;
  }
};
