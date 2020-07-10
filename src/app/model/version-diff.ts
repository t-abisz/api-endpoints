import {Endpoint} from './endpoint';

export interface VersionDiff {
    newEndpoints: Endpoint[]
    missingEndpoints: Endpoint[],
    changedOperations: Endpoint[],
    deprecatedEndpoints: Endpoint[],
    diff: boolean,
    diffBackwardCompatible: boolean
}

