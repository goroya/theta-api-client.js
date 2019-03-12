import { ICommonReq, ICommonResDone } from './common';

export interface ICameraDeleteAccessPointReq extends ICommonReq {
  name: 'camera._deleteAccessPoint';
  parameters: ICameraDeleteAccessPointReqParam;
}
export interface ICameraDeleteAccessPointReqParam {
  ssid: string;
}

export interface ICameraDeleteAccessPointResDone extends ICommonResDone {
  name: 'camera._deleteAccessPoint';
  results: ICameraDeleteAccessPointResDoneParam;
}
export interface ICameraDeleteAccessPointResDoneParam {}
