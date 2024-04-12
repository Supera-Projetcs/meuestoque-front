// Original file: src/proto/replacements.proto

import type { ReplacementResponse as _config_replacements_ReplacementResponse, ReplacementResponse__Output as _config_replacements_ReplacementResponse__Output } from '../../config/replacements/ReplacementResponse';

export interface ReplacementListResponse {
  'results'?: (_config_replacements_ReplacementResponse)[];
  'count'?: (number);
}

export interface ReplacementListResponse__Output {
  'results': (_config_replacements_ReplacementResponse__Output)[];
  'count': (number);
}
