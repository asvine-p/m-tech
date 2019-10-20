/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, ActivityIndicator, StyleSheet} from 'react-native';

import { WebView } from 'react-native-webview';
const USER_AGENT =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1';

const App: () => React$Node = () => {
  return (
    <SafeAreaView style={styles.container}>
        <WebView
          source={{ uri: 'https://www.m-tectracking.mg/mobile' }}
          startInLoadingState
          thirdPartyCookiesEnabled
          userAgent={USER_AGENT}
          renderLoading={() => <ActivityIndicator style={styles.loading} color={'#2b82d4'} size={'small'} />}

        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%'
  },
  webview: {
    height: '100%',
    width: '100%',
  },
  loading: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
});

export default App;
