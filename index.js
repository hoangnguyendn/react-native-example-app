import {AppRegistry} from 'react-native';
import App from './App';
import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/screens/index';

registerScreens();


Navigation.startTabBasedApp({
    tabs: [
        {
            label: 'One',
            screen: 'example.FirstTabScreen', // this is a registered name for a screen
            //icon: require('../img/one.png'),
            //selectedIcon: require('../img/one_selected.png'), // iOS only
            title: 'Screen One'
        },
        {
            label: 'Two',
            screen: 'example.SecondTabScreen',
            //icon: require('../img/two.png'),
            //selectedIcon: require('../img/two_selected.png'), // iOS only
            title: 'Screen Two'
        }
    ]
});

AppRegistry.registerComponent('app', () => App);
