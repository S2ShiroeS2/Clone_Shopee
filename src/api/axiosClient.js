import axios from "axios";
import queryString from "query-string";

//Set up default config for http requests here

const axiosClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    "Content-Type": "application/json"
  },
  paramsSerializer: params => queryString.stringify(params)
});

axiosClient.interceptors.request.use(async config => {
  //Handle token here
  //Do something before request to server
  const accessToken = await getToken();
  config.headers.Authorization = accessToken ? `${accessToken}` : "";
  return config;
});

axiosClient.interceptors.response.use(
  //Do something before return response data
  response => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  error => {
    //Handle error
    throw error;
  }
);

const getToken = async () => {
  let token = await localStorage.getItem("X-Auth-Token");
  if (token) {
    return token;
  } else {
    return undefined;
  }
};

export default axiosClient;
