// Original file: src/proto/replacements.proto


export interface ReplacementPartialUpdateRequest {
  'id'?: (number);
  '_partialUpdateFields'?: (string)[];
  'produto'?: (number);
  'quantidade'?: (number);
  'fornecedor'?: (string);
  'status'?: (string);
}

export interface ReplacementPartialUpdateRequest__Output {
  'id': (number);
  '_partialUpdateFields': (string)[];
  'produto': (number);
  'quantidade': (number);
  'fornecedor': (string);
  'status': (string);
}
