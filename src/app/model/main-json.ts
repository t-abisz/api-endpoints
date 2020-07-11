import {Operations} from './operations';

export interface MainJson {
  uid: string;
  name: string;
  group: string;
  description: string;
  versions: Array<{
    uid: string,
    version: string,
    operations: Operations[],
    project: string,
    publicationStatus: string
  }>;
  tags: Array<{
    uid: string,
    name: string,
    description: string
  }>;
}

