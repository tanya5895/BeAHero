/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SignUpAsUser from '../mobile-app/src/screens/signUpAsUser';
import SignUpAsNGO from '../mobile-app/src/screens/signUpAsNGO';
// import Login from '../mobile-app/src/screens/login';
// import LoginAsUser from '../mobile-app/src/screens/loginAsUser';
// import './bootstrap/dist/css/bootstrap.min.css';

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => SignUpAsNGO);
