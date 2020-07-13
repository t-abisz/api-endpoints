export interface Operations {
  path: string;
  method: string;
  uid: null;
  requestHeaders: null;
  responseHeaders: null;
  externalOperationId;
  request: Array<{
    name: string,
    description: string,
    contentType: string,
    definition: string
  }>;
  response: Array<{
    name: string,
    description: string,
    contentType: string,
    definition: string
  }>;
  tags: Array<{
    uid: null,
    name: string,
    description: string
  }>;
  operationId: string;
  params: Array<any>;
  description: null;
  summary: null;
}
