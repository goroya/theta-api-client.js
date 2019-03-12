import { ICommonReq, ICommonResDone } from './common';

export interface ICameraPluginControlReq extends ICommonReq {
  name: 'camera._pluginControl';
  parameters: ICameraPluginControlReqParam;
}
export interface ICameraPluginControlReqParam {
  action: string;
  plugin?: string;
}

export interface ICameraPluginControlResDone extends ICommonResDone {
  name: 'camera._pluginControl';
  results: ICameraPluginControlResDoneParam;
}
export interface ICameraPluginControlResDoneParam {}
