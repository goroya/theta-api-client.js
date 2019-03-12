import { ICommonReq, ICommonResDone, IOption } from './common';

export interface ICameraStopSelfTimerReq extends ICommonReq {
  name: 'camera._stopSelfTimer';
  parameters: ICameraStopSelfTimerReqParam;
}
export interface ICameraStopSelfTimerReqParam {}

export interface ICameraStopSelfTimerResDone extends ICommonResDone {
  name: 'camera._stopSelfTimer';
  results: ICameraStopSelfTimerResDoneParam;
}
export interface ICameraStopSelfTimerResDoneParam {}
