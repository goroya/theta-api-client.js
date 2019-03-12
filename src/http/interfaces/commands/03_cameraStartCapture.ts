import { ICommonReq, ICommonResDone } from './common';

export interface ICameraStartCaptureReq extends ICommonReq {
  name: 'camera.startCapture';
  parameters: ICameraStartCaptureReqParam;
}
export interface ICameraStartCaptureReqParam {
  _mode: 'interval' | 'composite' | 'bracket' | 'thimeShift';
}

export interface ICameraStartCaptureResDone extends ICommonResDone {
  name: 'camera.startCapture';
  results: ICameraStartCaptureResDoneParam;
}
export interface ICameraStartCaptureResDoneParam {
  fileUrls: string[];
}
