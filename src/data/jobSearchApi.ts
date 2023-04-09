import axios from "axios";

const ApiKey = process.env.REACT_APP_API_KEY;

export type Job = {
  job_title: string;
  job_benefits: string[];
  employer_company_type: string;
  employer_name: string;
  job_country: string;
  job_city?: string;
  job_description: string;
  job_employment_type: string;
  job_apply_link: string;
};

type ApiResponse = {
  data: Job[];
};

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
      "X-RapidAPI-Key": ApiKey,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };
};

const jobSearchApi = async (query: string): Promise<ApiResponse> => {
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
