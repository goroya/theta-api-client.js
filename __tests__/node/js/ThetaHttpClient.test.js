import * as dotenv from 'dotenv';
import { ThetaHttpClient } from '../../../dist';

const thetaZFlag = false;

dotenv.config();
const { HOST_NAME, USER_NAME, PASSWORD } = process.env;
const hostname = HOST_NAME || '';
const userName = USER_NAME || '';
const password = PASSWORD || '';

const thetaClient = new ThetaHttpClient({
  hostname: hostname,
  axiosConfig: {},
  auth: { user: userName, pass: password }
});

test('/osc/info', async () => {
  const ret = await thetaClient.oscInfo();
  expect(ret.status).toBe(200);
});

test('/osc/state', async () => {
  const ret = await thetaClient.oscState();
  expect(ret.status).toBe(200);
});

test(' /osc/checkForUpdates', async () => {
  const ret1 = await thetaClient.oscState();
  expect(ret1.status).toBe(200);
  const ret2 = await thetaClient.oscCheckForUpdates(ret1.data.fingerprint);
  expect(ret2.status).toBe(200);
});
/*
test('/osc/commands/execute, /osc/commands/status', async () => {
  const ret1 = await thetaClient.oscCommandsExecute('camera.takePicture', {});
  expect(ret1.status).toBe(200);
  const ret2 = await thetaClient.oscCommandsStatus(ret1.data.id);
  expect(ret2.status).toBe(200);
});
*/
test('/legal-information/open-source-licenses', async () => {
  const ret = await thetaClient.OpenSourceLicenses();
  expect(ret.status).toBe(200);
});

test('/plugin', async () => {
  const ret = await thetaClient.plugin();
  expect(ret.status).toBe(200);
});

test('/plugin', async () => {
  const ret = await thetaClient.plugin();
  expect(ret.status).toBe(200);
});


test('cameraFinishWlan', async () => {
  const ret = await thetaClient.cameraFinishWlan();
  expect(ret.status).toBe(200);
});

test('cameraTakePicture', async () => {
  const ret = await thetaClient.cameraTakePicture();
  expect(ret.status).toBe(200);
});


test('cameraStartCapture', async () => {
  const ret = await thetaClient.cameraStartCapture('interval');
  expect(ret.status).toBe(200);
});

test('cameraStopCapture', async () => {
  const ret = await thetaClient.cameraStopCapture();
  expect(ret.status).toBe(200);
});

test('cameraListFiles', async () => {
  const ret = await thetaClient.cameraListFiles({
    fileType: 'all',
    entryCount: 3,
    maxThumbSize: 640
  });
  expect(ret.status).toBe(200);
});

test('cameraDelete', async () => {
  const ret = await thetaClient.cameraDelete(['all']);
  expect(ret.status).toBe(200);
});

/*
test('cameraGetLivePreview', async () => {
  const ret = await thetaClient.cameraGetLivePreview();
  expect(ret.status).toBe(200);
});
*/
/*
test('cameraGetMetadata', async () => {
  const ret = await thetaClient.cameraGetMetadata('');
  expect(ret.status).toBe(200);
});
*/
test('cameraGetOptions', async () => {
  const ret = await thetaClient.cameraGetOptions(['iso', 'isoSupport']);
  expect(ret.status).toBe(200);
});

test('cameraReset', async () => {
  const ret = await thetaClient.cameraReset();
  expect(ret.status).toBe(200);
});

test('cameraSetOptions', async () => {
  const ret = await thetaClient.cameraSetOptions( {
    options: {
      "iso": 200
    }
  });
  expect(ret.status).toBe(200);
});

test('cameraGetMySetting', async () => {
  const ret = await thetaClient.cameraGetMySetting('image', []);
  expect(ret.status).toBe(200);
});

test('cameraSetMySetting', async () => {
  const ret = await thetaClient.cameraSetMySetting('image', {
    "_filter": "Noise Reduction",
    "exposureProgram": 2
  });
  expect(ret.status).toBe(200);
});

test('cameraStopSelfTimer', async () => {
  const ret = await thetaClient.cameraStopSelfTimer();
  expect(ret.status).toBe(200);
});

test('cameraCancelVideoConvert', async () => {
  const ret = await thetaClient.cameraCancelVideoConvert();
  expect(ret.status).toBe(200);
});

test('cameraSetBluetoothDevice', async () => {
  const ret = await thetaClient.cameraSetBluetoothDevice('7A6593A1-C6F9-44FE-A7B8-61D4675A2599');
  expect(ret.status).toBe(200);
});

test('cameraListAccessPoints', async () => {
  const ret = await thetaClient.cameraListAccessPoints();
  expect(ret.status).toBe(200);
});

test('cameraSetAccessPoint', async () => {
  const ret = await thetaClient.cameraSetAccessPoint({
    ssid: 'FS030W_P16473',
    security: 'WPA/WPA2 PSK',
    password: '41359688',
    connectionPriority: 1,
    ipAddressAllocation: 'dynamic',
  });
  expect(ret.status).toBe(200);
});

test('cameraDeleteAccessPoint', async () => {
  const ret = await thetaClient.cameraDeleteAccessPoint('FS030W_P16473');
  expect(ret.status).toBe(200);
});

test('cameraListPlugins', async () => {
  const ret = await thetaClient.cameraListPlugins();
  expect(ret.status).toBe(200);
  console.log(ret.data.results.plugins);
});

test('cameraSetPlugin', async () => {
  const ret = await thetaClient.cameraSetPlugin(
    'org.deviceconnect.android.manager',
    true
  );
  expect(ret.status).toBe(200);
});

test('cameraPluginControl', async () => {
  const ret = await thetaClient.cameraPluginControl({
    action: 'boot',
  });
  expect(ret.status).toBe(200);
});

test('cameraGetPluginLicense', async () => {
  const ret = await thetaClient.cameraGetPluginLicense('org.deviceconnect.android.manager');
  expect(ret.status).toBe(200);
});

test('cameraGetPluginOrders', async () => {
  if(thetaZFlag) {
    const ret = await thetaClient.cameraGetPluginOrders();
    expect(ret.status).toBe(200);
  }
});

test('cameraSetPluginOrders', async () => {
  if(thetaZFlag){
    const ret = await thetaClient.cameraSetPluginOrders(['', '', '']);
    expect(ret.status).toBe(200);
  }
});

test('cameraDeleteMySetting', async () => {
  if(thetaZFlag){
    const ret = await thetaClient.cameraDeleteMySetting('image');
    expect(ret.status).toBe(200);
  }
});
