///////////////////////////////////////////////////////////

export const ISampleService = Symbol('ISampleService');

export interface ISampleService {
  sampleMethod(): Promise<boolean>;
}
