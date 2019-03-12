import { ICommonReq, ICommonResDone } from './common';

export interface ICameraSetPluginOrdersReq extends ICommonReq {
  name: 'camera._setPluginOrders';
  parameters: ICameraSetPluginOrdersReqParam;
}
export interface ICameraSetPluginOrdersReqParam {
  pluginOrders: string[];
}

export interface ICameraSetPluginOrdersResDone extends ICommonResDone {
  name: 'camera._setPluginOrders';
  results: ICameraSetPluginOrdersResDoneParam;
}
export interface ICameraSetPluginOrdersResDoneParam {}
