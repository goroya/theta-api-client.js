import { ICommonReq, ICommonResDone, IOption } from './common';

export interface ICameraResetReq extends ICommonReq {
  name: 'camera.reset';
  parameters: ICameraResetReqParam;
}
export interface ICameraResetReqParam {}

export interface ICameraResetResDone extends ICommonResDone {
  name: 'camera.reset';
  results: ICameraResetResDoneParam;
}
export interface ICameraResetResDoneParam {}
