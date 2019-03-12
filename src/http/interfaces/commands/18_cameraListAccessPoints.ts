import { ICommonReq, ICommonResDone } from './common';

export interface ICameraListAccessPointsReq extends ICommonReq {
  name: 'camera._listAccessPoints';
  parameters: ICameraListAccessPointsReqParam;
}
export interface ICameraListAccessPointsReqParam {}

export interface ICameraListAccessPointsResDone extends ICommonResDone {
  name: 'camera._listAccessPoints';
  results: ICameraListAccessPointsResDoneParam;
}
export interface ICameraListAccessPointsResDoneParam {
  accessPoints: {
    ssid: string;
    ssidStealth: boolean;
    security: string;
    connectionPriority: number;
    ipAddressAllocation: string;
    ipAddress: string;
    subnetMask: string;
    defaultGateway: string;
  };
}
