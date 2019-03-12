import { ICommonReq, ICommonResDone, IOption } from './common';

export interface ICameraConvertVideoFormatsReq extends ICommonReq {
  name: 'camera._convertVideoFormats';
  parameters: ICameraConvertVideoFormatsReqParam;
}
export interface ICameraConvertVideoFormatsReqParam {
  fileUrl: string;
  size: string;
  projectionType: string;
  codec: string;
  topBottomCorrection: 'Apply' | 'ApplyFixedDirection' | 'Disapply';
}

export interface ICameraConvertVideoFormatsResDone extends ICommonResDone {
  name: 'camera._convertVideoFormats';
  results: ICameraConvertVideoFormatsResDoneParam;
}
export interface ICameraConvertVideoFormatsResDoneParam {
  fileUrl: string;
}
