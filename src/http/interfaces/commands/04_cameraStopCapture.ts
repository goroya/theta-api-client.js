import { ICommonReq, ICommonResDone } from './common';

export interface ICameraStopCaptureReq extends ICommonReq {
  name: 'camera.stopCapture';
  parameters: ICameraStopCaptureReqParam;
}
export interface ICameraStopCaptureReqParam {}

export interface ICameraStopCaptureResDone extends ICommonResDone {
  name: 'camera.stopCapture';
  results: ICameraStopCaptureResDoneParam;
}
export interface ICameraStopCaptureResDoneParam {
  fileUrls: string[];
}
