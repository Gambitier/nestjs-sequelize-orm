///////////////////////////////////////////////////////////

export const IEducationInstituteService = Symbol('IEducationInstituteService');

export interface IEducationInstituteService {
  createEducationInstitute(): Promise<boolean>;
}
