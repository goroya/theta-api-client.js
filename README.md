# theta-api-client.js
Theta client for javascript.

# Supported Platforms

- Node.js
- React Native

## Installing

```bash
$ npm install @goroya.io/theta-api-client --save
```

## Example

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

## Theta Client API

### HTTP API

### TypeDoc Document
https://goroya.github.io/theta-api-client.js/classes/thetahttpclient.html


