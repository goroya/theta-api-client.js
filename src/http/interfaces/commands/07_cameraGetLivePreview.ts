import { ICommonReq, ICommonResDone } from './common';

export interface ICameraGetLivePreviewReq extends ICommonReq {
  name: 'camera.getLivePreview';
  parameters: ICameraGetLivePreviewReqParam;
}
export interface ICameraGetLivePreviewReqParam {}

export interface ICameraGetLivePreviewResDone extends ICommonResDone {
  name: 'camera.getLivePreview';
  results: ICameraGetLivePreviewResDoneParam;
}
export interface ICameraGetLivePreviewResDoneParam {}
