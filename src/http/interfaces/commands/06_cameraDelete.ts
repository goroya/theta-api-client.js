import { ICommonReq, ICommonResDone } from './common';

export interface ICameraDeleteReq extends ICommonReq {
  name: 'camera.delete';
  parameters: ICameraDeleteReqParam;
}
export interface ICameraDeleteReqParam {
  fileUrls: string[];
}

export interface ICameraDeleteResDone extends ICommonResDone {
  name: 'camera.delete';
  results: ICameraDeleteResDoneParam;
}
export interface ICameraDeleteResDoneParam {}
