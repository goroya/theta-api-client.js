# theta-api-client.js
Theta client for javascript.

# Supported Platforms

- Node.js
- React Native

## Installing

```bash
$ npm install @goroya.io/theta-api-client --save
```

## Quick Start

### HTTP Example

### Node.js Example
```javascript
const {ThetaHttpClient} = require('@goroya.io/theta-api-client');

(async () => {
  this.thetaClient = new ThetaHttpClient({
    hostname: '192.168.1.1',
    axiosConfig: {},
    auth: { user: 'THETAYLxxxxxxxx', pass: 'xxxxxxxx' }
  });
  await this.thetaClient
    .cameraTakePicture({
      timeout: 3000
    })
    .catch(e => {
      console.error('error:', e);
    });
})();
```

### ES Modules & TypeScript & React Native

```javascript
import { ThetaHttpClient } from '@goroya.io/theta-api-client';

this.thetaClient = new ThetaHttpClient({
  hostname: '192.168.1.1',
  axiosConfig: {},
  auth: { user: 'THETAYLxxxxxxxx', pass: 'xxxxxxxx' }
});
(async () => {
  const ret = await thetaClient.cameraTakePicture();
})();
```

# Example

## Node.js

Please check following codes.  
https://github.com/goroya/theta-api-client.js/tree/master/example/node/take-picture-example

## React Native

Please check following codes.  
https://github.com/goroya/theta-api-client.js/tree/master/example/react-native/theta-example

## Demo
### Expo(React Native)

Please visit following url.  
And Scan QR code using Expo App.

https://expo.io/@goroya/theta-example

## Theta Client API

### HTTP API

### TypeDoc Document
https://goroya.github.io/theta-api-client.js/classes/thetahttpclient.html


