import { ICommonReq, ICommonResDone } from './common';

export interface ICameraCancelVideoConvertReq extends ICommonReq {
  name: 'camera._cancelVideoConvert';
  parameters: ICameraCancelVideoConvertReqParam;
}
export interface ICameraCancelVideoConvertReqParam {}

export interface ICameraCancelVideoConvertResDone extends ICommonResDone {
  name: 'camera._cancelVideoConvert';
  results: ICameraCancelVideoConvertResDoneParam;
}
export interface ICameraCancelVideoConvertResDoneParam {}
