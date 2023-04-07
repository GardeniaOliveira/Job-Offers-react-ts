import axios from "axios";
// const axios = require("axios");

const options = {
  method: "GET",
  url: "https://jsearch.p.rapidapi.com/search",
  params: {
    query: "Python developer in Texas, USA",
    page: "1",
    num_pages: "1",
  },
  headers: {
    "X-RapidAPI-Key": "bb85ebefd4msh809b9e07ecf1c1fp18952cjsnf00f90f7e721",
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  },
};

const options2 = {
  method: "POST",
  url: "https://linkedin-jobs-search.p.rapidapi.com/",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": "bb85ebefd4msh809b9e07ecf1c1fp18952cjsnf00f90f7e721",
    "X-RapidAPI-Host": "linkedin-jobs-search.p.rapidapi.com",
  },
  data: '{"search_terms":"javascript programmer","location":"Chicago, IL","page":"1"}',
};

const jobSearchApi = async () => {
  return new Promise((resolve, reject) => {
    axios
      .request(options)
      .then(function (response: any) {
        resolve(response.data);
      })
      .catch(function (error: any) {
        console.error(error);
      });
  });
};

export default jobSearchApi;
