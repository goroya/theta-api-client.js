import { ICommonReq, ICommonResDone, IOption } from './common';

export interface ICameraSetOptionsReq extends ICommonReq {
  name: 'camera.setOptions';
  parameters: ICameraSetOptionsReqParam;
}
export interface ICameraSetOptionsReqParam {
  options: {
    aperture?: number;
    _authentication?: 'none' | 'digest';
    _autoBracket?: {
      _bracketNumber: number;
      _bracketParameters: Array<{
        iso: number;
        shutterSpeed: number;
        _colorTemperature: number;
        exposureProgram?: number;
        aperture?: number;
        exposureCompensation?: number;
        whiteBalance?: string;
      }>;
    };
    _bitrate?: string;
    _bluetoothPower?: string;
    captureInterval?: number;
    captureMode?: string;
    captureNumber?: number;
    clientVersion?: number;
    _colorTemperature?: number;
    _compositeShootingOutputInterval?: number;
    _compositeShootingTime?: number;
    dateTimeZone?: number;
    exposureCompensation?: number;
    exposureDelay?: number;
    exposureProgram?: number;
    fileFormat?: {
      image: {
        type: string;
        width: number;
        height: number;
      };
      video: {
        type: string;
        width: number;
        height: number;
        _codec: string;
      };
    };
    _filter?: string;
    _function?: string;
    _gain?: string;
    gpsInfo?: {
      lat: number;
      lng: number;
      _altitude: number;
      _dateTimeZone: string;
      _datum: string;
    };
    _HDMIreso?: string;
    _imageStitching?: string;
    iso?: number;
    isoAutoHighLimit?: number;
    _latestEnabledExposureDelayTime?: number;
    _maxRecordableTime?: number;
    _microphone?: string;
    _microphoneChannel?: string;
    _networkType?: string;
    offDelay?: string;
    _password?: string;
    previewFormat?: {
      width: number;
      height: number;
      framerate: number;
    };
    remainingPictures?: number;
    remainingSpace?: number;
    remainingVideoSeconds?: number;
    _shootingMethod?: string;
    shutterSpeed?: number;
    _shutterVolume?: number;
    sleepDelay?: number;
    _timeShift?: {
      firstShooting: string;
      firstInterval: number;
      secondInterval: number;
    };
    _topBottomCorrection?: string;
    totalSpace?: number;
    _username?: string;
    videoStitching?: string;
    whiteBalance?: string;
    _wlanChannel?: number;
    _wlanFrequency?: number;
  };
}

export interface ICameraSetOptionsResDone extends ICommonResDone {
  name: 'camera.reset';
  results: ICameraSetOptionsResDoneParam;
}
export interface ICameraSetOptionsResDoneParam {}
