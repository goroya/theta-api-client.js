import { ICommonReq, ICommonResDone } from './common';

export interface ICameraFinishWlanReq extends ICommonReq {
  name: 'camera._finishWlan';
  parameters: ICameraFinishWlanReqParam;
}
export interface ICameraFinishWlanReqParam {}

export interface ICameraFinishWlanResDone extends ICommonResDone {
  name: 'camera._finishWlan';
  results: ISetBluetoothDeviceResParam;
}
export interface ISetBluetoothDeviceResParam {}
