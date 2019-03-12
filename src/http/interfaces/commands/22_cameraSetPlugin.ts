import { ICommonReq, ICommonResDone } from './common';

export interface ICameraSetPluginReq extends ICommonReq {
  name: 'camera._setPlugin';
  parameters: ICameraSetPluginReqParam;
}
export interface ICameraSetPluginReqParam {
  packageName: string;
  boot: boolean;
}

export interface ICameraSetPluginResDone extends ICommonResDone {
  name: 'camera._setPlugin';
  results: ICameraSetPluginResDoneParam;
}
export interface ICameraSetPluginResDoneParam {}
