/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SignUpAsUser from '../mobile-app/src/screens/signUpAsUser';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => SignUpAsUser);
