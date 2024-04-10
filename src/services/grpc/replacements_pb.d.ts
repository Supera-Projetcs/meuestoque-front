import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class Dashmost_replacedResponse extends jspb.Message {
  getProduto(): number;
  setProduto(value: number): Dashmost_replacedResponse;

  getQuantidade(): number;
  setQuantidade(value: number): Dashmost_replacedResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dashmost_replacedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: Dashmost_replacedResponse): Dashmost_replacedResponse.AsObject;
  static serializeBinaryToWriter(message: Dashmost_replacedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dashmost_replacedResponse;
  static deserializeBinaryFromReader(message: Dashmost_replacedResponse, reader: jspb.BinaryReader): Dashmost_replacedResponse;
}

export namespace Dashmost_replacedResponse {
  export type AsObject = {
    produto: number,
    quantidade: number,
  }
}

export class ReplacementDestroyRequest extends jspb.Message {
  getId(): number;
  setId(value: number): ReplacementDestroyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplacementDestroyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReplacementDestroyRequest): ReplacementDestroyRequest.AsObject;
  static serializeBinaryToWriter(message: ReplacementDestroyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplacementDestroyRequest;
  static deserializeBinaryFromReader(message: ReplacementDestroyRequest, reader: jspb.BinaryReader): ReplacementDestroyRequest;
}

export namespace ReplacementDestroyRequest {
  export type AsObject = {
    id: number,
  }
}

export class ReplacementListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplacementListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReplacementListRequest): ReplacementListRequest.AsObject;
  static serializeBinaryToWriter(message: ReplacementListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplacementListRequest;
  static deserializeBinaryFromReader(message: ReplacementListRequest, reader: jspb.BinaryReader): ReplacementListRequest;
}

export namespace ReplacementListRequest {
  export type AsObject = {
  }
}

export class ReplacementListResponse extends jspb.Message {
  getResultsList(): Array<ReplacementResponse>;
  setResultsList(value: Array<ReplacementResponse>): ReplacementListResponse;
  clearResultsList(): ReplacementListResponse;
  addResults(value?: ReplacementResponse, index?: number): ReplacementResponse;

  getCount(): number;
  setCount(value: number): ReplacementListResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplacementListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReplacementListResponse): ReplacementListResponse.AsObject;
  static serializeBinaryToWriter(message: ReplacementListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplacementListResponse;
  static deserializeBinaryFromReader(message: ReplacementListResponse, reader: jspb.BinaryReader): ReplacementListResponse;
}

export namespace ReplacementListResponse {
  export type AsObject = {
    resultsList: Array<ReplacementResponse.AsObject>,
    count: number,
  }
}

export class ReplacementPartialUpdateRequest extends jspb.Message {
  getId(): number;
  setId(value: number): ReplacementPartialUpdateRequest;

  getPartialUpdateFieldsList(): Array<string>;
  setPartialUpdateFieldsList(value: Array<string>): ReplacementPartialUpdateRequest;
  clearPartialUpdateFieldsList(): ReplacementPartialUpdateRequest;
  addPartialUpdateFields(value: string, index?: number): ReplacementPartialUpdateRequest;

  getProduto(): number;
  setProduto(value: number): ReplacementPartialUpdateRequest;

  getQuantidade(): number;
  setQuantidade(value: number): ReplacementPartialUpdateRequest;

  getFornecedor(): string;
  setFornecedor(value: string): ReplacementPartialUpdateRequest;

  getStatus(): string;
  setStatus(value: string): ReplacementPartialUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplacementPartialUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReplacementPartialUpdateRequest): ReplacementPartialUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: ReplacementPartialUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplacementPartialUpdateRequest;
  static deserializeBinaryFromReader(message: ReplacementPartialUpdateRequest, reader: jspb.BinaryReader): ReplacementPartialUpdateRequest;
}

export namespace ReplacementPartialUpdateRequest {
  export type AsObject = {
    id: number,
    partialUpdateFieldsList: Array<string>,
    produto: number,
    quantidade: number,
    fornecedor: string,
    status: string,
  }
}

export class ReplacementRequest extends jspb.Message {
  getId(): number;
  setId(value: number): ReplacementRequest;

  getProduto(): number;
  setProduto(value: number): ReplacementRequest;

  getQuantidade(): number;
  setQuantidade(value: number): ReplacementRequest;

  getFornecedor(): string;
  setFornecedor(value: string): ReplacementRequest;

  getStatus(): string;
  setStatus(value: string): ReplacementRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplacementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReplacementRequest): ReplacementRequest.AsObject;
  static serializeBinaryToWriter(message: ReplacementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplacementRequest;
  static deserializeBinaryFromReader(message: ReplacementRequest, reader: jspb.BinaryReader): ReplacementRequest;
}

export namespace ReplacementRequest {
  export type AsObject = {
    id: number,
    produto: number,
    quantidade: number,
    fornecedor: string,
    status: string,
  }
}

export class ReplacementResponse extends jspb.Message {
  getId(): number;
  setId(value: number): ReplacementResponse;

  getProduto(): number;
  setProduto(value: number): ReplacementResponse;

  getQuantidade(): number;
  setQuantidade(value: number): ReplacementResponse;

  getFornecedor(): string;
  setFornecedor(value: string): ReplacementResponse;

  getDataPedido(): string;
  setDataPedido(value: string): ReplacementResponse;

  getStatus(): string;
  setStatus(value: string): ReplacementResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplacementResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReplacementResponse): ReplacementResponse.AsObject;
  static serializeBinaryToWriter(message: ReplacementResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplacementResponse;
  static deserializeBinaryFromReader(message: ReplacementResponse, reader: jspb.BinaryReader): ReplacementResponse;
}

export namespace ReplacementResponse {
  export type AsObject = {
    id: number,
    produto: number,
    quantidade: number,
    fornecedor: string,
    dataPedido: string,
    status: string,
  }
}

export class ReplacementRetrieveRequest extends jspb.Message {
  getId(): number;
  setId(value: number): ReplacementRetrieveRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplacementRetrieveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReplacementRetrieveRequest): ReplacementRetrieveRequest.AsObject;
  static serializeBinaryToWriter(message: ReplacementRetrieveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplacementRetrieveRequest;
  static deserializeBinaryFromReader(message: ReplacementRetrieveRequest, reader: jspb.BinaryReader): ReplacementRetrieveRequest;
}

export namespace ReplacementRetrieveRequest {
  export type AsObject = {
    id: number,
  }
}

