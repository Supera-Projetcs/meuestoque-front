// Original file: src/proto/replacements.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../../google/protobuf/Empty';
import type { ReplacementDestroyRequest as _config_replacements_ReplacementDestroyRequest, ReplacementDestroyRequest__Output as _config_replacements_ReplacementDestroyRequest__Output } from '../../config/replacements/ReplacementDestroyRequest';
import type { ReplacementListRequest as _config_replacements_ReplacementListRequest, ReplacementListRequest__Output as _config_replacements_ReplacementListRequest__Output } from '../../config/replacements/ReplacementListRequest';
import type { ReplacementListResponse as _config_replacements_ReplacementListResponse, ReplacementListResponse__Output as _config_replacements_ReplacementListResponse__Output } from '../../config/replacements/ReplacementListResponse';
import type { ReplacementPartialUpdateRequest as _config_replacements_ReplacementPartialUpdateRequest, ReplacementPartialUpdateRequest__Output as _config_replacements_ReplacementPartialUpdateRequest__Output } from '../../config/replacements/ReplacementPartialUpdateRequest';
import type { ReplacementRequest as _config_replacements_ReplacementRequest, ReplacementRequest__Output as _config_replacements_ReplacementRequest__Output } from '../../config/replacements/ReplacementRequest';
import type { ReplacementResponse as _config_replacements_ReplacementResponse, ReplacementResponse__Output as _config_replacements_ReplacementResponse__Output } from '../../config/replacements/ReplacementResponse';
import type { ReplacementRetrieveRequest as _config_replacements_ReplacementRetrieveRequest, ReplacementRetrieveRequest__Output as _config_replacements_ReplacementRetrieveRequest__Output } from '../../config/replacements/ReplacementRetrieveRequest';

export interface ReplacementControllerClient extends grpc.Client {
  Create(argument: _config_replacements_ReplacementRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_config_replacements_ReplacementResponse__Output>): grpc.ClientUnaryCall;
  Create(argument: _config_replacements_ReplacementRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_config_replacements_ReplacementResponse__Output>): grpc.ClientUnaryCall;
  Create(argument: _config_replacements_ReplacementRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_config_replacements_ReplacementResponse__Output>): grpc.ClientUnaryCall;
  Create(argument: _config_replacements_ReplacementRequest, callback: grpc.requestCallback<_config_replacements_ReplacementResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _config_replacements_ReplacementRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_config_replacements_ReplacementResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _config_replacements_ReplacementRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_config_replacements_ReplacementResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _config_replacements_ReplacementRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_config_replacements_ReplacementResponse__Output>): grpc.ClientUnaryCall;
  create(argument: _config_replacements_ReplacementRequest, callback: grpc.requestCallback<_config_replacements_ReplacementResponse__Output>): grpc.ClientUnaryCall;
  
  Destroy(argument: _config_replacements_ReplacementDestroyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Destroy(argument: _config_replacements_ReplacementDestroyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Destroy(argument: _config_replacements_ReplacementDestroyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Destroy(argument: _config_replacements_ReplacementDestroyRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  destroy(argument: _config_replacements_ReplacementDestroyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  destroy(argument: _config_replacements_ReplacementDestroyRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  destroy(argument: _config_replacements_ReplacementDestroyRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  destroy(argument: _config_replacements_ReplacementDestroyRequest, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  List(argument: _config_replacements_ReplacementListRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_config_replacements_ReplacementListResponse__Output>): grpc.ClientUnaryCall;
  List(argument: _config_replacements_ReplacementListRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_config_replacements_ReplacementListResponse__Output>): grpc.ClientUnaryCall;
  List(argument: _config_replacements_ReplacementListRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_config_replacements_ReplacementListResponse__Output>): grpc.ClientUnaryCall;
  List(argument: _config_replacements_ReplacementListRequest, callback: grpc.requestCallback<_config_replacements_ReplacementListResponse__Output>): grpc.ClientUnaryCall;
  list(argument: _config_replacements_ReplacementListRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_config_replacements_ReplacementListResponse__Output>): grpc.ClientUnaryCall;
  list(argument: _config_replacements_ReplacementListRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_config_replacements_ReplacementListResponse__Output>): grpc.ClientUnaryCall;
  list(argument: _config_replacements_ReplacementListRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_config_replacements_ReplacementListResponse__Output>): grpc.ClientUnaryCall;
  list(argument: _config_replacements_ReplacementListRequest, callback: grpc.requestCallback<_config_replacements_ReplacementListResponse__Output>): grpc.ClientUnaryCall;
  
  PartialUpdate(argument: _config_replacements_ReplacementPartialUpdateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_config_replacements_ReplacementResponse__Output>): grpc.ClientUnaryCall;
  PartialUpdate(argument: _config_replacements_ReplacementPartialUpdateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_config_replacements_ReplacementResponse__Output>): grpc.ClientUnaryCall;
  PartialUpdate(argument: _config_replacements_ReplacementPartialUpdateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_config_replacements_ReplacementResponse__Output>): grpc.ClientUnaryCall;
  PartialUpdate(argument: _config_replacements_ReplacementPartialUpdateRequest, callback: grpc.requestCallback<_config_replacements_ReplacementResponse__Output>): grpc.ClientUnaryCall;
  partialUpdate(argument: _config_replacements_ReplacementPartialUpdateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_config_replacements_ReplacementResponse__Output>): grpc.ClientUnaryCall;
  partialUpdate(argument: _config_replacements_ReplacementPartialUpdateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_config_replacements_ReplacementResponse__Output>): grpc.ClientUnaryCall;
  partialUpdate(argument: _config_replacements_ReplacementPartialUpdateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_config_replacements_ReplacementResponse__Output>): grpc.ClientUnaryCall;
  partialUpdate(argument: _config_replacements_ReplacementPartialUpdateRequest, callback: grpc.requestCallback<_config_replacements_ReplacementResponse__Output>): grpc.ClientUnaryCall;
  
  Retrieve(argument: _config_replacements_ReplacementRetrieveRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_config_replacements_ReplacementResponse__Output>): grpc.ClientUnaryCall;
  Retrieve(argument: _config_replacements_ReplacementRetrieveRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_config_replacements_ReplacementResponse__Output>): grpc.ClientUnaryCall;
  Retrieve(argument: _config_replacements_ReplacementRetrieveRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_config_replacements_ReplacementResponse__Output>): grpc.ClientUnaryCall;
  Retrieve(argument: _config_replacements_ReplacementRetrieveRequest, callback: grpc.requestCallback<_config_replacements_ReplacementResponse__Output>): grpc.ClientUnaryCall;
  retrieve(argument: _config_replacements_ReplacementRetrieveRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_config_replacements_ReplacementResponse__Output>): grpc.ClientUnaryCall;
  retrieve(argument: _config_replacements_ReplacementRetrieveRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_config_replacements_ReplacementResponse__Output>): grpc.ClientUnaryCall;
  retrieve(argument: _config_replacements_ReplacementRetrieveRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_config_replacements_ReplacementResponse__Output>): grpc.ClientUnaryCall;
  retrieve(argument: _config_replacements_ReplacementRetrieveRequest, callback: grpc.requestCallback<_config_replacements_ReplacementResponse__Output>): grpc.ClientUnaryCall;
  
  Update(argument: _config_replacements_ReplacementRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_config_replacements_ReplacementResponse__Output>): grpc.ClientUnaryCall;
  Update(argument: _config_replacements_ReplacementRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_config_replacements_ReplacementResponse__Output>): grpc.ClientUnaryCall;
  Update(argument: _config_replacements_ReplacementRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_config_replacements_ReplacementResponse__Output>): grpc.ClientUnaryCall;
  Update(argument: _config_replacements_ReplacementRequest, callback: grpc.requestCallback<_config_replacements_ReplacementResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _config_replacements_ReplacementRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_config_replacements_ReplacementResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _config_replacements_ReplacementRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_config_replacements_ReplacementResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _config_replacements_ReplacementRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_config_replacements_ReplacementResponse__Output>): grpc.ClientUnaryCall;
  update(argument: _config_replacements_ReplacementRequest, callback: grpc.requestCallback<_config_replacements_ReplacementResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface ReplacementControllerHandlers extends grpc.UntypedServiceImplementation {
  Create: grpc.handleUnaryCall<_config_replacements_ReplacementRequest__Output, _config_replacements_ReplacementResponse>;
  
  Destroy: grpc.handleUnaryCall<_config_replacements_ReplacementDestroyRequest__Output, _google_protobuf_Empty>;
  
  List: grpc.handleUnaryCall<_config_replacements_ReplacementListRequest__Output, _config_replacements_ReplacementListResponse>;
  
  PartialUpdate: grpc.handleUnaryCall<_config_replacements_ReplacementPartialUpdateRequest__Output, _config_replacements_ReplacementResponse>;
  
  Retrieve: grpc.handleUnaryCall<_config_replacements_ReplacementRetrieveRequest__Output, _config_replacements_ReplacementResponse>;
  
  Update: grpc.handleUnaryCall<_config_replacements_ReplacementRequest__Output, _config_replacements_ReplacementResponse>;
  
}

export interface ReplacementControllerDefinition extends grpc.ServiceDefinition {
  Create: MethodDefinition<_config_replacements_ReplacementRequest, _config_replacements_ReplacementResponse, _config_replacements_ReplacementRequest__Output, _config_replacements_ReplacementResponse__Output>
  Destroy: MethodDefinition<_config_replacements_ReplacementDestroyRequest, _google_protobuf_Empty, _config_replacements_ReplacementDestroyRequest__Output, _google_protobuf_Empty__Output>
  List: MethodDefinition<_config_replacements_ReplacementListRequest, _config_replacements_ReplacementListResponse, _config_replacements_ReplacementListRequest__Output, _config_replacements_ReplacementListResponse__Output>
  PartialUpdate: MethodDefinition<_config_replacements_ReplacementPartialUpdateRequest, _config_replacements_ReplacementResponse, _config_replacements_ReplacementPartialUpdateRequest__Output, _config_replacements_ReplacementResponse__Output>
  Retrieve: MethodDefinition<_config_replacements_ReplacementRetrieveRequest, _config_replacements_ReplacementResponse, _config_replacements_ReplacementRetrieveRequest__Output, _config_replacements_ReplacementResponse__Output>
  Update: MethodDefinition<_config_replacements_ReplacementRequest, _config_replacements_ReplacementResponse, _config_replacements_ReplacementRequest__Output, _config_replacements_ReplacementResponse__Output>
}
