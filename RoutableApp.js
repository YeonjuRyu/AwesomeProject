import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import AlignItemsBasics from './Tutorial.js';
import LoginScreen from './LoginScreen.js';
import DrawNavigator from './DrawerNavigator.js';
import Menubutton from './Menubutton.js';

class MainScreen extends React.Component {
  onButtonPress = () => {
    startMainTab();
  }

  render() {
    return (
      <ImageBackground source={require('./source/car.jpg')} style={{width: '100%', height: '100%'}}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Menubutton/>
        <Text style={[styles.mainBox]}>LOGO</Text>
	      <Button style={[styles.buttons]}
          title="Go to FlexTest"
          onPress={() => this.props.navigation.navigate('Flex')}
        />
	      <Button
          title="Go to Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
      </ImageBackground>
    );
  }
}


const AppNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Flex: AlignItemsBasics,
    Login: LoginScreen, 
  }, 
  {
    initialRouteName: "Main"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class RoutableApp extends React.Component {
  render() {
    return <DrawNavigator/>;
  }
}

const styles = StyleSheet.create({
  mainBox: {
    color: 'black',
    backgroundColor: '#ffffff',
    padding : 30,
    borderRadius : 15,
    fontWeight: 'bold',
    fontSize: 30,
  }

});