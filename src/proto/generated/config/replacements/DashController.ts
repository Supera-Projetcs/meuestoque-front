// Original file: src/proto/replacements.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Dashmost_replacedResponse as _config_replacements_Dashmost_replacedResponse, Dashmost_replacedResponse__Output as _config_replacements_Dashmost_replacedResponse__Output } from '../../config/replacements/Dashmost_replacedResponse';
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../../google/protobuf/Empty';

export interface DashControllerClient extends grpc.Client {
  most_replaced(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_config_replacements_Dashmost_replacedResponse__Output>): grpc.ClientUnaryCall;
  most_replaced(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_config_replacements_Dashmost_replacedResponse__Output>): grpc.ClientUnaryCall;
  most_replaced(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_config_replacements_Dashmost_replacedResponse__Output>): grpc.ClientUnaryCall;
  most_replaced(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_config_replacements_Dashmost_replacedResponse__Output>): grpc.ClientUnaryCall;
  mostReplaced(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_config_replacements_Dashmost_replacedResponse__Output>): grpc.ClientUnaryCall;
  mostReplaced(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_config_replacements_Dashmost_replacedResponse__Output>): grpc.ClientUnaryCall;
  mostReplaced(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_config_replacements_Dashmost_replacedResponse__Output>): grpc.ClientUnaryCall;
  mostReplaced(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_config_replacements_Dashmost_replacedResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface DashControllerHandlers extends grpc.UntypedServiceImplementation {
  most_replaced: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _config_replacements_Dashmost_replacedResponse>;
  
}

export interface DashControllerDefinition extends grpc.ServiceDefinition {
  most_replaced: MethodDefinition<_google_protobuf_Empty, _config_replacements_Dashmost_replacedResponse, _google_protobuf_Empty__Output, _config_replacements_Dashmost_replacedResponse__Output>
}
