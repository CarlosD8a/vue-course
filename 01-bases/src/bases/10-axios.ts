import axios from "axios";
import type { GIFResponse } from "../interfaces/gif.response";

const apiKey = "aTSnLODgjYrA5bnxQo5pGxW7insw1x7B";

export const gifApi = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: apiKey,
  },
});

gifApi
  .get<GIFResponse>("/random")
  .then((response) => {
    console.log(response.data.data.url);
  })
  .catch((error) => console.log(error));
