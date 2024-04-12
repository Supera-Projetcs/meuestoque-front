import axios from "axios";
import { InvertoryInterface } from "./Inventory";

const baseAxios = axios.create({ baseURL: "http://localhost:8003/" });


export interface Sales {
    id: number
    produtos: InvertoryInterface[],
    date_sold: string
}


export async function getAllSales() {
    return await baseAxios.get("vendas/");
  }