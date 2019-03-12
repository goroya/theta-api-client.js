import { ICommonReq, ICommonResDone } from './common';

export interface ICameraListFilesReq extends ICommonReq {
  name: 'camera.listFiles';
  parameters: ICameraListFilesReqParam;
}
export interface ICameraListFilesReqParam {
  fileType: string;
  startPosition?: number;
  _startFileUrl?: string;
  entryCount: number;
  maxThumbSize: number;
  _detail?: boolean;
  _sort?: string;
}

export interface ICameraListFilesResDone extends ICommonResDone {
  name: 'camera.listFiles';
  results: ICameraListFilesResDoneParam;
}
export interface ICameraListFilesResDoneParam {
  entries: {
    name: string;
    fileUrl: string;
    size: number;
    dateTimeZone: string;
    dateTime: string;
    lat: number;
    lng: number;
    width: number;
    height: number;
    thumbnail: string;
    _thumbSize: number;
    _intervalCaptureGroupId: string;
    _compositeShootingGroupId: string;
    _autoBracketGroupId: string;
    _recordTime: string;
    isProcessed: boolean;
    previewUrl: string;
    _codec: string;
    _projectionType: string;
  };
  totalEntries: number;
}
