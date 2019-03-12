export const Protocols = {
  Info: {
    method: 'get',
    url: '/osc/info'
  },
  State: {
    method: 'post',
    url: '/osc/state'
  },
  CheckForUpdates: {
    method: 'post',
    url: '/osc/checkForUpdates'
  },
  Execute: {
    method: 'post',
    url: '/osc/commands/execute'
  },
  Status: {
    method: 'post',
    url: '/osc/commands/status'
  },
  OpenSourceLicenses: {
    method: 'get',
    url: '/legal-information/open-source-licenses'
  },
  Plugin: {
    method: 'get',
    url: '/plugin'
  }
};
/**
 * GET /osc/info
 */
export interface IInfoReq {}
export interface IInfoRes {
  manufacturer: string;
  model: string;
  serialNumber: string;
  _wlanMacAddress: string;
  _bluetoothMacAddress: string;
  firmwareVersion: string;
  supportUrl: string;
  gps: boolean;
  gyro: boolean;
  uptime: number;
  api: string[];
  endpoints: {
    httpPort: number;
    httpUpdatesPort: number;
  };
  apiLevel: number[];
}

/**
 * POST /osc/state
 */
export interface IStateReq {}
export interface IStateRes {
  fingerprint: string;
  state: {
    batteryLevel: number;
    storageUri: string;
    _captureStatus: string;
    _recordedTime: number;
    _recordableTime: number;
    _compositeShootingElapsedTime: number;
    _latestFileUrl: string;
    _batteryState: string;
    _apiVersion: number;
    _pluginRunning: boolean;
    _pluginWebServer: boolean;
    _function: string;
    _mySettingChanged: boolean;
    _cameraError: string[];
  };
}

/**
 * POST /osc/checkForUpdates
 */
export interface ICheckForUpdatesReq {
  stateFingerprint: string;
}

export interface ICheckForUpdatesRes {
  stateFingerprint: string;
  throttleTimeout: number;
}

export enum Commands {
  _finishWlan = 'camera._finishWlan',
  takePicture = 'camera.takePicture',
  startCapture = 'camera.startCapture',
  stopCapture = 'camera.stopCapture',
  listFiles = 'camera.listFiles',
  delete = 'camera.delete',
  getLivePreview = 'camera.getLivePreview',
  _getMetadata = 'camera._getMetadata',
  getOptions = 'camera.getOptions',
  reset = 'camera.reset',
  setOptions = 'camera.setOptions',
  _getMySetting = 'camera._getMySetting',
  _setMySetting = 'camera._setMySetting',
  _stopSelfTimer = 'camera._stopSelfTimer',
  _convertVideoFormats = 'camera._convertVideoFormats',
  _cancelVideoConvert = 'camera._cancelVideoConvert',
  _setBluetoothDevice = 'camera._setBluetoothDevice',
  _listAccessPoints = 'camera._listAccessPoints',
  _setAccessPoint = 'camera._setAccessPoint',
  _deleteAccessPoint = 'camera._deleteAccessPoint',
  _listPlugins = 'camera._listPlugins',
  _setPlugin = 'camera._setPlugin',
  _pluginControl = 'camera._pluginControl',
  _getPluginLicense = 'camera._getPluginLicense',
  _getPluginOrders = 'camera._getPluginOrders',
  _setPluginOrders = 'camera._setPluginOrders',
  _deleteMySetting = 'camera._deleteMySetting'
}

export interface ICommandsExecuteReq {
  name: string | Commands;
  parameters: object;
}

export interface ICommandsExecuteRes {
  name: string;
  state: 'done' | 'inProgress' | 'error';
  id: string;
  results: {};
  error: {};
  progress: {
    completion: number;
  };
}

/**
 * POST /osc/commands/status
 */
export interface ICommandsStatusReq {
  id: string;
}
export interface ICommandsStatusRes extends ICommandsExecuteRes {}

/**
 * GET /legal-information/open-source-licenses
 */
export interface IOpenSourceLicensesReq {}
export interface IOpenSourceLicensesRes {}

/**
 * GET /plugin
 */
export interface IOpenPluginPageReq {}
export interface IOpenPluginPageRes {}
