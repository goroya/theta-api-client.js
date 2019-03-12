import { ICommonReq, ICommonResDone } from './common';

export interface ICameraGetPluginOrdersReq extends ICommonReq {
  name: 'camera._getPluginOrders';
  parameters: ICameraGetPluginOrdersReqParam;
}
export interface ICameraGetPluginOrdersReqParam {}

export interface ICameraGetPluginOrdersResDone extends ICommonResDone {
  name: 'camera._getPluginOrders';
  results: ICameraGetPluginOrdersResDoneParam;
}
export interface ICameraGetPluginOrdersResDoneParam {}
