import React, {useRef} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {WebView} from 'react-native-webview';
import Config from 'react-native-config';
import Geolocation from '@react-native-community/geolocation';

import {search} from '../lib/utils';

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
});

const hereApikey = Config.HERE_APIKEY;

const Map = props => {
  const webView = useRef(null);

  const onMessage = event => {
    const message = JSON.parse(event.nativeEvent.data);
    console.log('meassage', message);
    if (message.status && message.status === 'initialized') {
      Geolocation.getCurrentPosition(position => {
        console.log('position coords', position.coords);
        sendMessage(position);
      });
      // props.navigation.state.params.item
      if (props.navigation.state.params && props.navigation.state.params.item) {
        // console.log(
        //   'SENDING MESSAGE WITH PROPS',
        //   props.navigation.state.params.item['location'].split(','),
        // );
        // cordinates = props.navigation.state.params.item['location'].split(',');
        Geolocation.getCurrentPosition(position => {
          // console.log('position coords', position.coords);
          position.coords.latitude = ' 40.785834';
          position.coords.longitude = '-120.406417';
          console.log('Reciever location', position.coords);
          sendMessage(position);
        });
      }
    } else if (message.search) {
      search(message.search)
        .then(response => {
          sendMessage({search: response});
        })
        .catch(err => {
          console.log(err);
          Alert.alert(
            'ERROR',
            'Please try again. If the problem persists contact an administrator.',
            [{text: 'OK'}],
          );
        });
    }
  };

  const sendMessage = data => {
    const message = `(function() {
        document.dispatchEvent(new MessageEvent('message', {data: ${JSON.stringify(
          data,
        )}}));
      })()`;

    webView.current.injectJavaScript(message);
  };

  const sourceUri =
    (Platform.OS === 'android' ? 'file:///android_asset/' : '') +
    'Web.bundle/loader.html';
  const injectedJS = `
    if (!window.location.search) {
      var link = document.getElementById('progress-bar');
      link.href = './site/here.html?apikey=${hereApikey}';
      link.click();
    }
  `;

  return (
    <View style={styles.mapContainer}>
      <WebView
        injectedJavaScript={injectedJS}
        source={{uri: sourceUri}}
        javaScriptEnabled={true}
        originWhitelist={['*']}
        allowFileAccess={true}
        onMessage={onMessage}
        ref={webView}
      />
    </View>
  );
};

export default Map;
