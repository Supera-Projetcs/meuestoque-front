import { DashboardControllerService, ReplacementControllerService } from "./GrpcConfig";
import { getInventoysByIds, InvertoryInterface } from "./Inventory";
import { promisify } from "util";
import * as grpc from "@grpc/grpc-js";
import { ReplacementRequest } from "@/proto/generated/config/replacements/ReplacementRequest";
import axios from "axios";

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

export type ReplacementUpdate = Omit<Replacement, "data_pedido">;

export interface ReplacementModel extends ReplacementRequest {}

export class ReplacementService extends ReplacementControllerService {
  constructor() {
    super(target, grpc.credentials.createInsecure());
  }

  public async getReplacementList() {
    const getList = promisify(this.List).bind(this);
    try {
      const res = await getList({});

      return res;
    } catch (err) {
      return err;
    }
  }

  public async CreateReplacement(item: ReplacementModel) {
    const create = promisify(this.Create).bind(this);
    try {
      const res = await create(item);

      return res;
    } catch (err) {
      return err;
    }
  }

  public async updateReplacement(item: ReplacementRequest) {
    const update = promisify(this.Update).bind(this);
    try {
      const res = await update(item);

      return res;
    } catch (err) {
      return err;
    }
  }
  public async deleteReplacement(item: { id: number }) {
    const deleteRequest = promisify(this.Destroy).bind(this);
    try {
      const res = await deleteRequest(item);

      return res;
    } catch (err) {
      return err;
    }
  }
}


export class DashboardReplacementService extends DashboardControllerService{
  constructor() {
    super(target, grpc.credentials.createInsecure());
  }

  public async getDasboard() {
    const getList = promisify(this.most_replaced).bind(this);
    try {
      const res = await getList({});

      return res;
    } catch (err) {
      return err;
    }
  }
}