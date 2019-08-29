import react from 'react';
import {Platform, Dimensions} from 'react-native';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import MainScreen from './RoutableApp.js';

const WIDTH = Dimensions.get('window').width;

const DrawerNavigator = createDrawerNavigater({
    Home : {
        screen : MainScreen
    }
})

export default createAppContainer(DrawerNavigator);