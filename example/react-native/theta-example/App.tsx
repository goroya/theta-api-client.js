import { ThetaHttpClient } from '@goroya.io/theta-api-client';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends React.Component<any, any> {
  private thetaClient: ThetaHttpClient;
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = { thetaIP: '192.168.1.1' };
    this.thetaClient = new ThetaHttpClient({
      hostname: '192.168.1.1',
      axiosConfig: {},
      auth: { user: 'THETAYLxxxxxxxx', pass: 'xxxxxxxx' }
    });
    this.onPressTakePicture = this.onPressTakePicture.bind(this);
  }
  public async onPressTakePicture() {
    console.log("take start");
    await this.thetaClient
      .cameraTakePicture({
        baseURL: `http://${this.state.thetaIP}`,
        timeout: 3000
      })
      .catch(e => {
        console.error('error:', e);
      });
    console.log("take stop");
  }
  public render() {
    return (
      <View style={styles.container}>
        <Text>Theta Example</Text>
        <TextInput
          style={{
            height: 40,
            width: 150,
            borderColor: 'gray',
            borderWidth: 1,
            textAlign: 'center'
          }}
          onChangeText={thetaIP => this.setState({ thetaIP })}
          value={this.state.thetaIP}
        />
        <Button
          onPress={this.onPressTakePicture}
          title="Take a Picture"
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
