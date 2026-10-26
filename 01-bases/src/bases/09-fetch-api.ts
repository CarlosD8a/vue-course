import type { GIFResponse } from "../interfaces/gif.response";

const apiKey = "aTSnLODgjYrA5bnxQo5pGxW7insw1x7B";

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
  .then((res) => res.json())
  .then((algo: GIFResponse) => console.log(algo.data.url))
  .catch((error) => console.log(error));
