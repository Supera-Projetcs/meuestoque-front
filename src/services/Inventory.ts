import axios from "axios";

export interface InventoryModel {
  name: string,
  price: number
  quantity: number
} 
export interface InvertoryInterface {
    id: number,
    name: string,
    price: number,
    quantity: number
}

const baseAxios = axios.create({ baseURL: "http://localhost:8001/" });

export async function getAllInventorys() {
  return await baseAxios.get("inventorys");
}

export async function createInventory(data:InventoryModel) {
  return await baseAxios.post("inventorys", data);
}

export async function editInventory(data:InventoryModel, id: number) {
  return await baseAxios.put(`inventorys/${id}`, data);
}

export async function deleteInventory(id: number) {
  return await baseAxios.delete(`inventorys/${id}`);
}

export async function getInventoysByIds(ids:string) {
  return await baseAxios.get(`inventorys/by-ids/?ids=${ids}`);
}

export async function getInventoysById(id:string) {
  return await baseAxios.get(`inventorys/${id}`);
}

export async function updateQuantitiesInventory(data: {id:number, quantity: number}[]) {
  return await baseAxios.put("inventorys/update-quantities/",data);
}

export async function totalInventorys() {
  return await baseAxios.get("inventorys/count/");
}

