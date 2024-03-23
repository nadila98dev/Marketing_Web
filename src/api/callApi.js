import axios from "axios";
import { config } from "../config";

const axiosInstance = {
  getAllDataMarketing: async () => {
    try {
      const response = await axios.get(`${config.base_api}/tables/all`);
      return response.data;
    } catch (error) {
      console.error(`Failed to fetch marketing data: ${error.message}`);
      throw error;
    }
  },

  getAllDataCommission: async () => {
    try {
      const response = await axios.get(`${config.base_api}/tables/all-com`);
      return response.data;
    } catch (error) {
      console.error(`Failed to fetch commission data: ${error.message}`);
      throw error;
    }
  },

  getAllDataSelling: async () => {
    try {
      const response = await axios.get(`${config.base_api}/tables/all-sell`);
      return response.data;
    } catch (error) {
      console.error(`Failed to fetch selling data: ${error.message}`);
      throw error;
    }
  }
};

export default axiosInstance;
