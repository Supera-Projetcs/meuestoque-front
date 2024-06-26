import axios from "axios";
import { InvertoryInterface } from "./Inventory";

const baseAxios = axios.create({ baseURL: "http://localhost:8003/" });


export interface SalesProduct {
    id: number
    id_produto: number
    unit_value:number
    quantity:  number
}
export interface Sales {
    id: number
    produtos: SalesProduct[],
    date_sold: string
}


interface SalesModel {
    produtos: {id_produto: number,unit_value: number, quantity:number}[]
}

export async function getAllSales() {
    return await baseAxios.get("vendas/");
  }
  
export async function getSalesStats() {
    return await baseAxios.get("sales-stats/");
  }

export async function createSale(data: SalesModel) {
    return await baseAxios.post("vendas/", data);
  }