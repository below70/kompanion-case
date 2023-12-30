/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {makeServer} from './src/utils/api';

const environment = process.env.NODE_ENV;

if (environment === 'development') {
  if (window.server) {
    window.server.shutdown();
  }
  window.server = makeServer();
}

AppRegistry.registerComponent(appName, () => App);
