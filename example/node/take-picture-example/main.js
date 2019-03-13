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
