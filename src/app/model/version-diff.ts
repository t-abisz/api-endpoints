import {Endpoint} from './endpoint';

export interface VersionDiff {
  changes: {
    newEndpoints: Endpoint[]
    missingEndpoints: Endpoint[],
    changedOperations: Endpoint[],
    deprecatedEndpoints: Endpoint[],
    diff: boolean,
    diffBackwardCompatible: boolean
  };
}

