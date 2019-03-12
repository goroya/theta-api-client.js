import { ICommonReq, ICommonResDone } from './common';

export interface ICameraSetBluetoothDeviceReq extends ICommonReq {
  name: 'camera._setBluetoothDevice';
  parameters: ICameraSetBluetoothDeviceReqParam;
}
export interface ICameraSetBluetoothDeviceReqParam {
  uuid: string;
}

export interface ICameraSetBluetoothDeviceResDone extends ICommonResDone {
  name: 'camera._cancelVideoConvert';
  results: ICameraSetBluetoothDeviceResDoneParam;
}
export interface ICameraSetBluetoothDeviceResDoneParam {
  deviceName: string;
}
