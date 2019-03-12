import { ICommonReq, ICommonResDone, IOption } from './common';

export interface ICameraSetMySettingReq extends ICommonReq {
  name: 'camera._setMySetting';
  parameters: ICameraSetMySettingReqParam;
}
export interface ICameraSetMySettingReqParam {
  mode: string;
  options: any;
}

export interface ICameraSetMySettingResDone extends ICommonResDone {
  name: 'camera._setMySetting';
  results: ICameraSetMySettingResDoneParam;
}
export interface ICameraSetMySettingResDoneParam {}
