import { ThetaHttpClient } from '@goroya.io/theta-api-client';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  private thetaClient: ThetaHttpClient;
  constructor(props: Readonly<{}>) {
    super(props);
    this.thetaClient = new ThetaHttpClient({
      hostname: '192.168.100.18',
      axiosConfig: {},
      auth: { user: 'THETAYL00106013', pass: '00106013' }
    });
    this.onPressLearnMore.bind(this);
  }
  public async onPressLearnMore() {
    console.log('Push');
    console.log();
    await this.thetaClient.cameraTakePicture();
  }
  public render() {
    return (
      <View style={styles.container}>
        <Text>Theta Example</Text>
        <Button
          onPress={this.onPressLearnMore}
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
