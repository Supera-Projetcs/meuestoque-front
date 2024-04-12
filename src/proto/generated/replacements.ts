import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { DashControllerClient as _config_replacements_DashControllerClient, DashControllerDefinition as _config_replacements_DashControllerDefinition } from './config/replacements/DashController';
import type { ReplacementControllerClient as _config_replacements_ReplacementControllerClient, ReplacementControllerDefinition as _config_replacements_ReplacementControllerDefinition } from './config/replacements/ReplacementController';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  config: {
    replacements: {
      DashController: SubtypeConstructor<typeof grpc.Client, _config_replacements_DashControllerClient> & { service: _config_replacements_DashControllerDefinition }
      Dashmost_replacedResponse: MessageTypeDefinition
      ReplacementController: SubtypeConstructor<typeof grpc.Client, _config_replacements_ReplacementControllerClient> & { service: _config_replacements_ReplacementControllerDefinition }
      ReplacementDestroyRequest: MessageTypeDefinition
      ReplacementListRequest: MessageTypeDefinition
      ReplacementListResponse: MessageTypeDefinition
      ReplacementPartialUpdateRequest: MessageTypeDefinition
      ReplacementRequest: MessageTypeDefinition
      ReplacementResponse: MessageTypeDefinition
      ReplacementRetrieveRequest: MessageTypeDefinition
    }
  }
  google: {
    protobuf: {
      Empty: MessageTypeDefinition
    }
  }
}

