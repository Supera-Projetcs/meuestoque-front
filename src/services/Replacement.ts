import { ReplacementControllerService } from "./GrpcConfig";
import { getInventoysByIds, InvertoryInterface } from "./Inventory";
import { promisify } from "util";
import * as grpc from "@grpc/grpc-js";

const target = "localhost:50051";

export interface Replacement {
  id: number;
  produto: string;
  quantidade: number;
  fornecedor: string;
  data_pedido: string;
  status: string;
}

export interface CustomReplacement {
  id: number;
  produto: InvertoryInterface | null;
  quantidade: number;
  fornecedor: string;
  data_pedido: string;
  status: string;
}

export class ReplacementService extends ReplacementControllerService {
  constructor() {
    super(target, grpc.credentials.createInsecure());
  }

  public async getReplacementList() {
    const clientInfo = promisify(this.List).bind(this);
    try {
      const res = await clientInfo({});

      return res;
    } catch (err) {
      return err;
    }
  }
}
