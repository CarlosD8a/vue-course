import type { GIFResponse } from "../interfaces/gif.response";
import { gifApi } from "./10-axios";

export const getImg = async () => {
  try {
    const response = await gifApi.get<GIFResponse>("/random");
    return response.data.data.url;
  } catch (error) {
    throw new Error("No se pudo obtener la imagen");
  }
};

getImg().then((respuesta) => console.log("La url es", respuesta));
