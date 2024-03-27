import axios from "axios";
import Cookies from "js-cookie";
import { Urls } from "../utils/urls";
import { Constants } from "./constants";

const requestServer1 = axios.create({
  baseURL: Urls.BASE_URL_SERVER_1,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

requestServer1.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token_user");

    if (token) {
      config.headers["x-access-token"] = `${token}`;
    } else {
      delete requestServer1.defaults.headers.common.Authorization;
    }
    return config;
  },

  (error) => Promise.reject(error)
);

const requestDownload = axios.create({
  baseURL: Urls.BASE_URL_SERVER_1,
  timeout: 10000,
  responseType: "blob",
});

requestDownload.interceptors.request.use(
  (config) => {
    const token = Cookies.get(Constants.TOKEN);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete requestDownload.defaults.headers.common.Authorization;
    }
    return config;
  },

  (error) => Promise.reject(error)
);

const requestForm = axios.create({
  baseURL: Urls.BASE_URL_SERVER_1,
  timeout: 10000,
});

requestForm.interceptors.request.use(
  (config) => {
    const token = Cookies.get(Constants.TOKEN);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete requestForm.defaults.headers.common.Authorization;
    }
    return config;
  },

  (error) => Promise.reject(error)
);

export const Api = {
  requestServer1,
  requestDownload,
  requestForm,
};
