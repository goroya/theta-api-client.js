import { ICommonReq, ICommonResDone } from './common';

export interface ICameraSetAccessPointReq extends ICommonReq {
  name: 'camera._setAccessPoint';
  parameters: ICameraSetAccessPointReqParam;
}
export interface ICameraSetAccessPointReqParam {
  ssid: string;
  ssidStealth?: boolean;
  security?: string;
  password?: string;
  connectionPriority?: number;
  ipAddressAllocation?: string;
  ipAddress?: string;
  subnetMask?: string;
  defaultGateway?: string;
}

export interface ICameraSetAccessPointResDone extends ICommonResDone {
  name: 'camera._setAccessPoint';
  results: ICameraSetAccessPointResDoneParam;
}
export interface ICameraSetAccessPointResDoneParam {}
