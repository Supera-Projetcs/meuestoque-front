import axios from "axios"
import { ReplacementModel } from "./Replacement"

const httpBase = axios.create({baseURL: "http://localhost:3000/api/replacement/"})


export async function createReplacement(data:ReplacementModel) {
   return await httpBase.post("create/", data)
} 

