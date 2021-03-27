import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
// import App from './App';
// import FlatListExample from './src/FlatListExample';
import Navigation from './Navigation';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Navigation);
