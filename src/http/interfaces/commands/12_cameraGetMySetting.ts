import { ICommonReq, ICommonResDone, IOption } from './common';

export interface ICameraGetMySettingReq extends ICommonReq {
  name: 'camera._getMySetting';
  parameters: ICameraGetMySettingReqParam;
}
export interface ICameraGetMySettingReqParam {
  mode: string;
  optionNames: string[];
}

export interface ICameraGetMySettingResDone extends ICommonResDone {
  name: 'camera._getMySetting';
  results: ICameraGetMySettingResDoneParam;
}
export interface ICameraGetMySettingResDoneParam {
  options: any;
}
