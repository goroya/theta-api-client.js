import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import md5 from 'blueimp-md5';
import { ICameraFinishWlanReq } from '../http/interfaces/commands/01_cameraFinishWlan';
import { ICameraTakePictureReq } from '../http/interfaces/commands/02_cameraTakePicture';
import { ICameraStartCaptureReqParam } from '../http/interfaces/commands/03_cameraStartCapture';
import {
  ICameraListFilesReq,
  ICameraListFilesReqParam
} from '../http/interfaces/commands/05_cameraListFiles';
import {
  ICameraDeleteReq,
  ICameraDeleteReqParam
} from '../http/interfaces/commands/06_cameraDelete';
import {
  ICameraGetLivePreviewReq,
  ICameraGetLivePreviewReqParam
} from '../http/interfaces/commands/07_cameraGetLivePreview';
import {
  ICameraGetMetadataReq,
  ICameraGetMetadataReqParam
} from '../http/interfaces/commands/08_cameraGetMetadata';
import {
  ICameraGetOptionsReq,
  ICameraGetOptionsReqParam
} from '../http/interfaces/commands/09_camera.getOptions';
import {
  ICameraResetReq,
  ICameraResetReqParam
} from '../http/interfaces/commands/10_cameraReset';
import {
  ICameraSetOptionsReq,
  ICameraSetOptionsReqParam
} from '../http/interfaces/commands/11_cameraSetOptions';
import {
  ICameraGetMySettingReq,
  ICameraGetMySettingReqParam
} from '../http/interfaces/commands/12_cameraGetMySetting';
import {
  ICameraSetMySettingReq,
  ICameraSetMySettingReqParam
} from '../http/interfaces/commands/13_cameraSetMySetting';
import {
  ICameraStopSelfTimerReq,
  ICameraStopSelfTimerReqParam
} from '../http/interfaces/commands/14_cameraStopSelfTimer';
import {
  ICameraConvertVideoFormatsReq,
  ICameraConvertVideoFormatsReqParam
} from '../http/interfaces/commands/15_cameraConvertVideoFormats';
import {
  ICameraCancelVideoConvertReq,
  ICameraCancelVideoConvertReqParam
} from '../http/interfaces/commands/16_cameraCancelVideoConvert';
import {
  ICameraSetBluetoothDeviceReq,
  ICameraSetBluetoothDeviceReqParam
} from '../http/interfaces/commands/17_cameraSetBluetoothDevice';
import {
  ICameraListAccessPointsReq,
  ICameraListAccessPointsReqParam
} from '../http/interfaces/commands/18_cameraListAccessPoints';
import {
  ICameraSetAccessPointReq,
  ICameraSetAccessPointReqParam
} from '../http/interfaces/commands/19_cameraSetAccessPoint';
import {
  ICameraDeleteAccessPointReq,
  ICameraDeleteAccessPointReqParam
} from '../http/interfaces/commands/20_cameraDeleteAccessPoint';
import {
  ICameraListPluginsReq,
  ICameraListPluginsReqParam
} from '../http/interfaces/commands/21_cameraListPlugins';
import {
  ICameraSetPluginReq,
  ICameraSetPluginReqParam
} from '../http/interfaces/commands/22_cameraSetPlugin';
import {
  ICameraPluginControlReq,
  ICameraPluginControlReqParam
} from '../http/interfaces/commands/23_cameraPluginControl';
import {
  ICameraGetPluginLicenseReq,
  ICameraGetPluginLicenseReqParam
} from '../http/interfaces/commands/24_cameraGetPluginLicense';
import {
  ICameraGetPluginOrdersReq,
  ICameraGetPluginOrdersReqParam
} from '../http/interfaces/commands/25_cameraGetPluginOrders';
import {
  ICameraSetPluginOrdersReq,
  ICameraSetPluginOrdersReqParam
} from '../http/interfaces/commands/26_cameraSetPluginOrders';
import {
  ICameraDeleteMySettingReq,
  ICameraDeleteMySettingReqParam
} from '../http/interfaces/commands/27_cameraDeleteMySetting';
import {
  Commands,
  ICheckForUpdatesReq,
  ICommandsExecuteReq,
  ICommandsStatusReq,
  IInfoReq,
  IOpenPluginPageReq,
  IOpenSourceLicensesReq,
  IStateReq,
  Protocols
} from '../http/interfaces/httpClient';
import ThetaClientBase from './ThetaClientBase';

interface IAuthConfig {
  user: string;
  pass: string;
}

export default class ThetaHttpClient extends ThetaClientBase {
  public static readonly hostnames = {
    APModeIP: '192.168.1.1',
    PluginModeIP: '127.0.0.1'
  };
  private readonly axios: AxiosInstance;
  private readonly auth!: IAuthConfig | null;
  constructor(
    config: {
      hostname?: string;
      axiosConfig?: AxiosRequestConfig;
      auth?: IAuthConfig;
    } = {
      hostname: ThetaHttpClient.hostnames.APModeIP
    }
  ) {
    super();
    if (config.axiosConfig !== undefined) {
      config.axiosConfig = {};
    }
    if (config.hostname !== undefined) {
      config.axiosConfig = {
        ...config.axiosConfig,
        baseURL: `http://${config.hostname}`
      };
    }
    this.axios = axios.create(config.axiosConfig);
    if (config.auth !== undefined) {
      this.auth = config.auth;
    }
  }

  /**
   * API GET /osc/info
   * [概要]
   * カメラに関する基本情報や、サポートしている機能を取得する。
   * @param config Axios Request Config
   * @return Axios Response
   */
  public async oscInfo(
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    return this.send(config, Protocols.Info, {});
  }
  /**
   * API POST /osc/state
   * [概要]
   * カメラの状態を取得する。
   * stateオブジェクトの内容が変化したことはCheckForUpdatesで確認できる。
   * @param config Axios Request Config
   * @return Axios Response
   */
  public async oscState(
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    return this.send(config, Protocols.State, {});
  }
  /**
   * POST /osc/checkForUpdates
   * [概要]
   * 現在の状態IDを取得し、Stateの状態変化を確認する。
   * @param stateFingerprint 状態ID
   * @param config config Axios Request Config
   * @return Axios Response
   */
  public async oscCheckForUpdates(
    stateFingerprint: string,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const data: ICheckForUpdatesReq = { stateFingerprint };
    return this.send(config, Protocols.CheckForUpdates, data);
  }

  /**
   * POST /osc/commands/execute
   * [概要]
   * commandsカテゴリ内のコマンドを実行する。
   * @param name 実行するコマンド
   * @param parameters 各コマンド実行に必要な入力パラメータ
   * @param config
   */
  public async oscCommandsExecute(
    name: string,
    parameters: object = {},
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const data: ICommandsExecuteReq = { name, parameters };
    return this.send(config, Protocols.Execute, data);
  }

  /**
   * POST /osc/commands/status
   * [概要]
   * コマンドの実行状況を取得する。
   * @param id Commands/Executeで取得したコマンドID
   * @param config Axios Request Config
   * @return Axios Response
   */
  public async oscCommandsStatus(
    id: string,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const data: ICommandsStatusReq = { id };
    return this.send(config, Protocols.Status, data);
  }

  /**
   * GET /legal-information/open-source-licenses
   * [概要]
   * カメラに関するオープンソースライセンス情報を取得する。
   * @param config Axios Request Config
   * @return Axios Response
   */
  public async OpenSourceLicenses(
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    return this.send(config, Protocols.OpenSourceLicenses, {});
  }

  /**
   * GET /plugin
   * [概要]
   * プラグイン提供のWebページを開く。
   * RICOH THETA Z1以降ではプラグインの起動状態_pluginRunningが停止中の場合はクエリ「id=<PluginOrder番号>」
   * (<PluginOrder番号> = 1, 2, 3)で表示対象のプラグインを指定すること。
   * @param config Axios Request Config
   * @return Axios Response
   */
  public async plugin(config: AxiosRequestConfig = {}): Promise<AxiosResponse> {
    return this.send(config, Protocols.Plugin, {});
  }

  /**
   * 無線LANをOFFにする。
   * @param config Axios Request Config
   */
  public async cameraFinishWlan(
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const data: ICameraFinishWlanReq = {
      name: Commands._finishWlan,
      parameters: {}
    };
    return this.send(config, Protocols.Execute, data);
  }

  /**
   * 静止画撮影を開始する。
   * exposureDelayが有効の場合、セルフタイマーで撮影が開始される。
   * @param config Axios Request Config
   */
  public async cameraTakePicture(
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const data: ICameraTakePictureReq = {
      name: Commands.takePicture,
      parameters: {}
    };
    return this.send(config, Protocols.Execute, data);
  }

  /**
   * 連続撮影を開始する。
   * 撮影モード（captureMode)と_modeの設定により撮影方法が変わる。
   * 静止画撮影モードの時、_modeによってインターバル撮影、インターバル合成撮影、マルチブラケット撮影、レンズ別時間差撮影のいずれかの撮影を開始する。
   * 動画撮影モードの時、動画撮影を開始する。
   * exposureDelayが有効の場合、セルフタイマーで撮影が開始される。ただしレンズ別時間差撮影の場合にはセルフタイマーは無効となる。
   * 動画撮影または枚数指定なしのインターバル撮影の場合には、Commands/ExecuteとCommands/Statusのstateは即時に"done"となる。
   * 枚数指定ありのインターバル撮影、インターバル合成撮影、マルチブラケット撮影、レンズ別時間差撮影の場合には、 Commands/ExecuteとCommands/Statusのprogressオブジェクトから進捗状況を取得できる。また、指定した枚数または時間の撮影が完了したときにstateが"done"となる。
   * @param _mode 静止画撮影モード時の連続撮影方法
   *               無指定の場合はインターバル撮影となる
   *               （interval: インターバル撮影、composite: インターバル合成撮影、bracket: マルチブラケット撮影、thimeShift: レンズ別時間差撮影）
   *               動画記録モードのとき、本パラメータは指定できない
   * @param config Axios Request Config
   */
  public async cameraStartCapture(
    _mode: 'interval' | 'composite' | 'bracket' | 'thimeShift',
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const param: ICameraStartCaptureReqParam = { _mode };
    const data: ICommandsExecuteReq = {
      name: Commands.startCapture,
      parameters: param
    };
    return this.send(config, Protocols.Execute, data);
  }

  /**
   * 連続撮影を停止する。
   * @param config Axios Request Config
   */
  public async cameraStopCapture(
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const data: ICommandsExecuteReq = {
      name: Commands.stopCapture,
      parameters: {}
    };
    return this.send(config, Protocols.Execute, data);
  }

  /**
   * 静止画および動画ファイルリストを取得する。
   * @param param Parameters
   * @param config Axios Request Config
   */
  public async cameraListFiles(
    param: ICameraListFilesReqParam,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const data: ICameraListFilesReq = {
      name: Commands.listFiles,
      parameters: param
    };
    return this.send(config, Protocols.Execute, data);
  }

  /**
   * 静止画または動画ファイルを削除する。
   * 指定したファイルURLに存在しないか削除できないファイルが含まれている場合、それ以外のファイルの削除も実行されずエラーとなる。
   * @param fileUrls 削除するファイルのURLリスト
   *                  ファイルURLを最大128個指定できる
   *                  一括削除する場合は、"all"で全てのファイル、"image"で全ての静止画、"video"で全ての動画を削除可能（単独で指定すること）
   * @param config Axios Request Config
   */
  public async cameraDelete(
    fileUrls: string[],
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const param: ICameraDeleteReqParam = { fileUrls };
    const data: ICameraDeleteReq = {
      name: Commands.delete,
      parameters: param
    };
    return this.send(config, Protocols.Execute, data);
  }

  /**
   * ライブビューを取得する。
   * RICOH THETA SおよびRICOH THETA SCは静止画撮影モード時のみ実行可能。
   * RICOH THETA V以降は静止画撮影モード時と動画撮影モード時に実行可能。
   * 本体操作、撮影の開始、撮影モード切替のいずれかでデータの取得が終了する。
   * @param config Axios Request Config
   */
  public async cameraGetLivePreview(
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const data: ICameraGetLivePreviewReq = {
      name: Commands.getLivePreview,
      parameters: {}
    };
    return this.send(config, Protocols.Execute, data);
  }

  /**
   * 指定した静止画のメタ情報参照。
   * @param fileUrl JPEGファイルID
   * @param config Axios Request Config
   */
  public async cameraGetMetadata(
    fileUrl: string,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const param: ICameraGetMetadataReqParam = { fileUrl };
    const data: ICameraGetMetadataReq = {
      name: Commands._getMetadata,
      parameters: param
    };
    return this.send(config, Protocols.Execute, data);
  }

  /**
   * 撮影や本体などのプロパティ、各プロパティサポート仕様を取得する。
   * 取得可能なプロパティはAPI v2.1リファレンスのoptionsカテゴリを参照すること。
   * 各プロパティにおけるサポート仕様は、プロパティ名+"Support"の名称で取得できる。
   * ex. 「iso」のサポート仕様プロパティ名:「isoSupport」
   * 詳細なリクエスト例は[Getting Started](https://developers.theta360.com/ja/docs/v2.1/api_reference/getting_started.html#get_and_set_options)を参照。
   * @param optionNames JSON形式取得したいオプション名リスト
   * @param config Axios Request Config
   */
  public async cameraGetOptions(
    optionNames: string[],
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const param: ICameraGetOptionsReqParam = { optionNames };
    const data: ICameraGetOptionsReq = {
      name: Commands.getOptions,
      parameters: param
    };
    return this.send(config, Protocols.Execute, data);
  }

  /**
   * 撮影や本体の全ての設定をリセットする。
   * リセット後、システム再起動する。
   * @param config Axios Request Config
   */
  public async cameraReset(
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const data: ICameraResetReq = {
      name: Commands.reset,
      parameters: {}
    };
    return this.send(config, Protocols.Execute, data);
  }

  /**
   * 撮影や本体などのプロパティの設定。
   * 設定出来るプロパティ、仕様はAPI v2.1リファレンスのoptionsカテゴリやサポート仕様の取得((camera.getOptions)[https://developers.theta360.com/ja/docs/v2.1/api_reference/commands/camera.get_options.html])で確認すること。
   * 詳細なリクエスト例は(Getting Started)[https://developers.theta360.com/ja/docs/v2.1/api_reference/getting_started.html#get_and_set_options]を参照。
   * @param param
   * @param config Axios Request Config
   */
  public async cameraSetOptions(
    param: ICameraSetOptionsReqParam,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const data: ICameraSetOptionsReq = {
      name: Commands.setOptions,
      parameters: param
    };
    return this.send(config, Protocols.Execute, data);
  }

  /**
   * コマンドcamera._setMySettingで設定した撮影プロパティを取得する。
   * 取得可能なプロパティはOptions Overviewのマイセッティングを参照。
   * @param mode 取得対象の撮影モード
   *              RICOH THETA Vファームウェアv2.30.1以降で指定
   *              (image: 静止画撮影モード、video: 動画撮影モード)
   *              RICOH THETA SおよびSCでは無指定で静止画撮影モードのみ
   * @param optionNames JSON形式取得したいオプション名リスト
   *                     RICOH THETA S, SCでのみ指定
   *                     それ以外の機種では無指定で全取得
   * @param config Axios Request Config
   */
  public async cameraGetMySetting(
    mode: string,
    optionNames: string[],
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const param: ICameraGetMySettingReqParam = { mode, optionNames };
    const data: ICameraGetMySettingReq = {
      name: Commands._getMySetting,
      parameters: param
    };
    return this.send(config, Protocols.Execute, data);
  }

  /**
   * 撮影条件をマイセッティング登録する。
   * 起動中にプロパティを調整するにはcamera.setOptionsで設定すること。
   * コマンドからのリセットcamera.resetで初期値に戻すことが可能。
   * RICOH THETA V以前では起動時にマイセッティング登録が反映される。
   * RICOH THETA Z1以降ではマイセッティングモード切り替え時にマイセッティング登録が反映される。
   * 設定可能なプロパティはOptions Overviewのマイセッティングを参照。
   * @param mode 設定対象の撮影モード
   *              RICOH THETA Vファームウェアv2.30.1以降で指定
   *              (image: 静止画撮影モード、video: 動画撮影モード)
   *              RICOH THETA SおよびSCでは無指定で静止画撮影モードのみ
   * @param options JSON形式による設定したいオプション名と設定値セット
   * @param config Axios Request Config
   */
  public async cameraSetMySetting(
    mode: 'image' | 'video',
    options: object,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const param: ICameraSetMySettingReqParam = { mode, options };
    const data: ICameraSetMySettingReq = {
      name: Commands._setMySetting,
      parameters: param
    };
    return this.send(config, Protocols.Execute, data);
  }

  /**
   * 作動中のセルフタイマーの撮影を停止する。
   * セルフタイマー((exposureDelay)[https://developers.theta360.com/ja/docs/v2.1/api_reference/options/exposure_delay.html])が有効の場合、
   * (camera.takePicture)[https://developers.theta360.com/ja/docs/v2.1/api_reference/commands/camera.take_picture.html]、
   * (camera.startCapture)[https://developers.theta360.com/ja/docs/v2.1/api_reference/commands/camera.start_capture.html]で撮影開始される。
   * @param config Axios Request Config
   */
  public async cameraStopSelfTimer(
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const data: ICameraStopSelfTimerReq = {
      name: Commands._stopSelfTimer,
      parameters: {}
    };
    return this.send(config, Protocols.Execute, data);
  }

  /**
   * 保存済み動画のフォーマットを変換する。
   * @param param
   * @param config Axios Request Config
   */
  public async cameraConvertVideoFormats(
    param: ICameraConvertVideoFormatsReqParam,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const data: ICameraConvertVideoFormatsReq = {
      name: Commands._convertVideoFormats,
      parameters: param
    };
    return this.send(config, Protocols.Execute, data);
  }

  /**
   * 保存済み動画のフォーマット変換を中止する。
   * @param config Axios Request Config
   */
  public async cameraCancelVideoConvert(
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const data: ICameraCancelVideoConvertReq = {
      name: Commands._cancelVideoConvert,
      parameters: {}
    };
    return this.send(config, Protocols.Execute, data);
  }

  /**
   * カメラに接続するBLEデバイス（スマートフォンアプリ側）の識別情報（UUID）をカメラ側に登録する。
   * カメラの無線LANがダイレクトモードの場合に設定できる。
   * @param uuid フォーマット： xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   *                            アルファベットの大文字、小文字は区別しない。
   * @param config Axios Request Config
   */
  public async cameraSetBluetoothDevice(
    uuid: string,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const param: ICameraSetBluetoothDeviceReqParam = { uuid };
    const data: ICameraSetBluetoothDeviceReq = {
      name: Commands._setBluetoothDevice,
      parameters: param
    };
    return this.send(config, Protocols.Execute, data);
  }

  /**
   * クライアントモードで使用するアクセスポイントのリストを取得する。
   * @param config Axios Request Config
   */
  public async cameraListAccessPoints(
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const data: ICameraListAccessPointsReq = {
      name: Commands._listAccessPoints,
      parameters: {}
    };
    return this.send(config, Protocols.Execute, data);
  }

  /**
   * クライアントモードで使用するアクセスポイント情報を設定する。
   * @param param
   * @param config  Axios Request Config
   */
  public async cameraSetAccessPoint(
    param: ICameraSetAccessPointReqParam,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const data: ICameraSetAccessPointReq = {
      name: Commands._setAccessPoint,
      parameters: param
    };
    return this.send(config, Protocols.Execute, data);
  }

  /**
   * クライアントモードで使用するアクセスポイント情報を削除する。
   * @param ssid SSID
   * @param config Axios Request Config
   */
  public async cameraDeleteAccessPoint(
    ssid: string,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const param: ICameraDeleteAccessPointReqParam = { ssid };
    const data: ICameraDeleteAccessPointReq = {
      name: Commands._deleteAccessPoint,
      parameters: param
    };
    return this.send(config, Protocols.Execute, data);
  }

  /**
   * インストール済みのプラグインのリストを取得する。
   * @param config Axios Request Config
   */
  public async cameraListPlugins(
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const data: ICameraListPluginsReq = {
      name: Commands._listPlugins,
      parameters: {}
    };
    return this.send(config, Protocols.Execute, data);
  }

  /**
   * インストール済みのプラグインを起動対象に設定する。
   * RICOH THETA Z1以降では本コマンドは無視される。camera._pluginControlを使用すること。
   * @param packageName 起動対象にするプラグインのパッケージ名
   * @param boot 起動選択
   *         trueを指定すること
   * @param config Axios Request Config
   */
  public async cameraSetPlugin(
    packageName: string,
    boot: boolean,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const param: ICameraSetPluginReqParam = { packageName, boot };
    const data: ICameraSetPluginReq = {
      name: Commands._setPlugin,
      parameters: param
    };
    return this.send(config, Protocols.Execute, data);
  }

  /**
   * プラグインの起動・停止。
   * @param param
   * @param config Axios Request Config
   */
  public async cameraPluginControl(
    param: ICameraPluginControlReqParam,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const data: ICameraPluginControlReq = {
      name: Commands._pluginControl,
      parameters: param
    };
    return this.send(config, Protocols.Execute, data);
  }

  /**
   * インストール済みのプラグインのライセンスを取得する。
   * @param packageName 取得対象のプラグインのパッケージ名
   * @param config Axios Request Config
   */
  public async cameraGetPluginLicense(
    packageName: string,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const param: ICameraGetPluginLicenseReqParam = { packageName };
    const data: ICameraGetPluginLicenseReq = {
      name: Commands._getPluginLicense,
      parameters: param
    };
    return this.send(config, Protocols.Execute, data);
  }

  /**
   * プラグインモードの起動プラグインを取得する。
   * @param config Axios Request Config
   */
  public async cameraGetPluginOrders(
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const data: ICameraGetPluginOrdersReq = {
      name: Commands._getPluginOrders,
      parameters: {}
    };
    return this.send(config, Protocols.Execute, data);
  }

  /**
   * 起動プラグインの登録。
   * @param pluginOrders 起動プラグインのパッケージ名3件の配列。
   *                      指定しない場合は空文字列を指定すること。途中に空文字列が入った場合は前詰めされる。
   *                      指定0件はエラー。
   * @param config Axios Request Config
   */
  public async cameraSetPluginOrders(
    pluginOrders: string[],
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const param: ICameraSetPluginOrdersReqParam = { pluginOrders };
    const data: ICameraSetPluginOrdersReq = {
      name: Commands._setPluginOrders,
      parameters: param
    };
    return this.send(config, Protocols.Execute, data);
  }

  /**
   * マイセッティング登録を削除する。
   * @param mode 削除対象
   *              (image: 静止画用マイセッティング登録、video: 動画用マイセッティング登録)
   * @param config Axios Request Config
   */
  public async cameraDeleteMySetting(
    mode: 'image' | 'video',
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> {
    const param: ICameraDeleteMySettingReqParam = { mode };
    const data: ICameraDeleteMySettingReq = {
      name: Commands._deleteMySetting,
      parameters: param
    };
    return this.send(config, Protocols.Execute, data);
  }

  /**
   * 共通送信処理
   * @param axiosConfig Axios Request Config
   * @param protocol path,method情報
   * @param data api parameter
   */
  private send(
    axiosConfig: AxiosRequestConfig = {},
    protocol: {
      method: string;
      url: string;
    },
    data:
      | IInfoReq
      | IStateReq
      | ICheckForUpdatesReq
      | ICommandsExecuteReq
      | ICommandsStatusReq
      | IOpenSourceLicensesReq
      | IOpenPluginPageReq
  ): Promise<AxiosResponse> {
    const config: AxiosRequestConfig = { ...axiosConfig, ...protocol, data };
    if (this.auth) {
      const { user, pass } = this.auth;
      const realm = 'RICOH THETA V';
      const method = protocol.method.toUpperCase();
      const uri = protocol.url;
      const algorithm = 'MD5';
      const nonce = 0;
      const qop = 'auth';
      const nc = '00000001';
      const cnonce = md5(Math.random().toString(36));
      const a1 = [user, realm, pass].join(':');
      const a2 = [method, uri].join(':');
      const response = md5(
        `${md5(a1)}:${nonce}:${nc}:${cnonce}:${qop}:${md5(a2)}`
      );
      config.headers = {
        Authorization: `Digest username="${user}", realm="${realm}", nonce="${nonce}", uri="${uri}", algorithm=${algorithm}, response="${response}", qop="${qop}", nc=${nc}, cnonce="${cnonce}"`
      };
    }
    return this.axios(config);
  }
}
