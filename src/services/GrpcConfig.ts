import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "../proto/generated/replacements";

import path from "path";
import { promisify } from "util";

export const PROTO_PATH = path.join(
  process.cwd(),
  "./src/proto/replacements.proto"
);

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  defaults: true,
  oneofs: true,
});

export const DashboardControllerService = (
  grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType
).config.replacements.DashController;


export const ReplacementControllerService = (
  grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType
).config.replacements.ReplacementController;
