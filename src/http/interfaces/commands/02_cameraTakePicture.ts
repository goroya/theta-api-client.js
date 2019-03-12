import { ICommonReq, ICommonResDone } from './common';

export interface ICameraTakePictureReq extends ICommonReq {
  name: 'camera.takePicture';
  parameters: ICameraTakePictureReqParam;
}
export interface ICameraTakePictureReqParam {}

export interface ICameraTakePictureResDone extends ICommonResDone {
  name: 'camera.takePicture';
  results: ICameraTakePictureResDoneParam;
}
export interface ICameraTakePictureResDoneParam {
  fileUrl: string;
  _dngFileUrl: string;
}
