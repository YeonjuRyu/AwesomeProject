/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import RoutableApp from './RoutableApp';
import {name as appName} from './app.json';
import FlexDirectionBasics from './Tutorial';

AppRegistry.registerComponent(appName, ()=>RoutableApp);
//AppRegistry.registerComponent(appName, ()=>FlexDirectionBasics);
//AppRegistry.registerComponent(appName, () => App);