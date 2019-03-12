import { ICommonReq, ICommonResDone } from './common';

export interface ICameraDeleteMySettingReq extends ICommonReq {
  name: 'camera._deleteMySetting';
  parameters: ICameraDeleteMySettingReqParam;
}
export interface ICameraDeleteMySettingReqParam {
  mode: string;
}

export interface ICameraDeleteMySettingResDone extends ICommonResDone {
  name: 'camera._deleteMySetting';
  results: ICameraDeleteMySettingResDoneParam;
}
export interface ICameraDeleteMySettingResDoneParam {}
