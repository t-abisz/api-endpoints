export interface VersionDiff {
  changes: {
    newEndpoints: [
      {
        externalOperationId: string,
        pathUrl: string,
        method: string,
        summary: string
      }
    ],
    missingEndpoints: [
      {
        externalOperationId: string,
        pathUrl: string,
        method: string,
        summary: string
      }
    ],
    changedOperations: [
      {
        externalOperationId: string,
        pathUrl: string,
        method: string,
        summary: string
      }
    ],
    deprecatedEndpoints: [
      {
        externalOperationId: string,
        pathUrl: string,
        method: string,
        summary: string
      }
    ],
    diff: boolean,
    diffBackwardCompatible: boolean
  };
}
