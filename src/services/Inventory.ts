import axios from "axios";

export interface InvertoryInterface {
    id: number,
    name: string,
    price: number,
    quantity: number
}

const baseAxios = axios.create({ baseURL: "http://localhost:3001/" });

export async function getAllInventorys() {
  return await baseAxios.get("inventorys");
}
