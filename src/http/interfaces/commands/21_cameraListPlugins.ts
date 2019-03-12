import { ICommonReq, ICommonResDone } from './common';

export interface ICameraListPluginsReq extends ICommonReq {
  name: 'camera._listPlugins';
  parameters: ICameraListPluginsReqParam;
}
export interface ICameraListPluginsReqParam {}

export interface ICameraListPluginsResDone extends ICommonResDone {
  name: 'camera._listPlugins';
  results: ICameraListPluginsResDoneParam;
}
export interface ICameraListPluginsResDoneParam {
  plugins: {
    pluginName: string;
    packageName: string;
    version: string;
    type: 'system' | 'user';
    running: boolean;
    foreground: boolean;
    boot: boolean;
    force: boolean;
    bootOptions: string;
    webServer: boolean;
    exitStatus: string;
    message: string;
  };
}
