import axios from "axios"
import { Replacement, ReplacementModel, ReplacementUpdate } from "./Replacement"

const httpBase = axios.create({baseURL: "http://localhost:3000/api/replacement/"})


export async function createReplacement(data:ReplacementModel) {
   return await httpBase.post("create/", data)
} 
export async function updateReplacement(data:ReplacementUpdate) {
   return await httpBase.put("update/", data)
} 

export async function deleteReplacement(id:number) {
   return await httpBase.delete(`delete/${id}`)
} 



