import { ICommonReq, ICommonResDone } from './common';

export interface ICameraGetPluginLicenseReq extends ICommonReq {
  name: 'camera._getPluginLicense';
  parameters: ICameraGetPluginLicenseReqParam;
}
export interface ICameraGetPluginLicenseReqParam {
  packageName: string;
}

export interface ICameraGetPluginLicenseResDone extends ICommonResDone {
  name: 'camera._getPluginLicense';
  results: ICameraGetPluginLicenseResDoneParam;
}
export interface ICameraGetPluginLicenseResDoneParam {}
