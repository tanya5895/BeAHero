/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SignUpAsNGO from '../mobile-app/src/screens/signUpAsNgo';
import EntryLoginPage from '../mobile-app/src/screens/entryLoginPage';
import NgoPage from '../mobile-app/src/screens/ngoPage';
import ShowVolunteers from '../mobile-app/src/screens/showVolunteers';

AppRegistry.registerComponent(appName, () => App);

// AppRegistry.registerComponent(appName, () => SignUpAsNGO);
// AppRegistry.registerComponent(appName, () => EntryLoginPage);
// AppRegistry.registerComponent(appName, () => NgoPage);
// AppRegistry.registerComponent(appName, () => ShowVolunteers);
