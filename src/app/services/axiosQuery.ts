import axios, { AxiosRequestConfig } from "axios";

const { REACT_APP_HOST } = process.env;

const config: AxiosRequestConfig = {
  baseURL: REACT_APP_HOST + "/api/",
  headers: {
    "Content-Type": "application/json",
  },
};

export const axiosQuery = axios.create(config);
