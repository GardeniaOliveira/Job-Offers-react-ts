import axios from "axios";
// const axios = require("axios");

const getAxiosConfig = (query: string) => {
  return {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/search",
    params: {
      query: query,
      page: "1",
      num_pages: "1",
    },
    headers: {
      "X-RapidAPI-Key": "bb85ebefd4msh809b9e07ecf1c1fp18952cjsnf00f90f7e721",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };
};

const jobSearchApi = async (query: string) => {
  return new Promise((resolve, reject) => {
    axios
      .request(getAxiosConfig(query))
      .then(function (response: any) {
        resolve(response.data);
      })
      .catch(function (error: any) {
        console.error(error);
      });
  });
};

export default jobSearchApi;
