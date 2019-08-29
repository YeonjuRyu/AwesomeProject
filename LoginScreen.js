import React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
//import { TextInput } from 'react-native-gesture-handler';

class LoginScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", position:"relative"}}>
            <Image source={require('./source/logo.png')} />
          <View  style={{borderColor:"black"}}>
            <TextInput style={{height: 40, textAlign: "left" }}
            placeholder="아이디"
            //onChangeText={(text) => this.setState({text})
            />
            <TextInput style={{height: 40, textAlign: "left"}}
            placeholder="비밀번호"
            //onChangeText={(text) => this.setState({text})
            />
          </View>

          <View>
            <Text> Space for button </Text>
          </View>

          <View>
            <TouchableOpacity>
              <Text> Touch Here </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity>
              <Text> 아이디 찾기 </Text>
              <Text> 비밀번호 찾기 </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity>
              <Text style="bold"> 회원가입 </Text>
            </TouchableOpacity>
          </View>
          
        </View>
      );
    }
  }

  export default LoginScreen;