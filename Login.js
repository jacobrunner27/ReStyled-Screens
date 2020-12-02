import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ImageBackground,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

import IonIcon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomBar = ({ children }) => (
    <View style={styles.bottomBar}>
        {children}
    </View>
)

const Header = ({ children }) => (
    <View style={styles.header}>
        {children}
    </View>
)

const HorizontalLine = ({ children }) => (
    <View style={styles.horizontalLine}>
    </View>
)

const Colors = {
    primary: '#651a93',
    secondary: '#4E45D6',
    orange: '#f9c400',
    whisper: '#f0edf4',
    white: '#ffffff',
    steel: '#cccccc',
    black: '#000000',
    gray: 'gray',
    gray1: '#acb4be',
    transparent: 'transparent'
}

const LoginScreen = ({navigation}) => {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [message, setMessage] = useState('');

    const loginUser = async () => {
        await fetch('http://trevi-server.us-west-2.elasticbeanstalk.com/login-user/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
            }).then((response) => response.json())
              .then(async (json) => {
                 if (json.response == 'inauthentic')
                 {
                     setMessage('Username or password incorrect');
                 }
                 else if (json.response == 'invalid')
                 {
                     setMessage('Make sure both fields are filled');
                 }
                 else
                 {
                    try
                    {
                        await AsyncStorage.setItem(
                            'token',
                            json.response,
                            () => {navigation.navigate('TrendingSimple')}
                        );
                    }
                    catch (error)
                    {
                        console.log(error);
                    }
                 }
             })
         .catch((error) => console.log(error));
        }

    return (

      <View style={styles.container}>

        <View style={styles.headerPosition}>
            <Header>
                <ImageBackground source={require('../../../Assets/Images/homeScreenHeader.png')} style={styles.headerBackground}>
                    <View style={styles.headerElementsPositions}>
                        <TouchableOpacity style={ styles.headerIconLeft} onPress={() => navigation.navigate('Splash')}>
                            <IonIcon name={'chevron-back-outline'} size={35} color={'white'}  />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>Welcome Back!</Text>
                    </View>
                </ImageBackground>
            </Header>
        </View>

        <View style={styles.userInputs}>
            <Text style={styles.backgroundText}>Username or Email</Text>

            <View style={styles.emailInput} >
            <TextInput
                style={styles.inputText}
                placeholder="Username"
                placeholderTextColor="#D3D3D3"
                onChangeText={text => setUsername(text)}/>
            </View>
        
            <HorizontalLine />
        <Text style={styles.backgroundText}>Password</Text>

        
            <View style={styles.passwordInput} >
            <TextInput
                style={styles.inputText}
                placeholder="Password"
                placeholderTextColor="#D3D3D3"
                onChangeText={text => setPassword(text)}/>
            </View>

            <Text style={styles.message}>{message}</Text>
        </View>


        <View style={styles.bottomBarPosition}>
            <BottomBar>
                <TouchableOpacity style={[styles.loginButtonContainer, styles.loginButtonPosition]} onPress={() => loginUser()}>
                    <Text style={styles.loginText}>Log In</Text>
                </TouchableOpacity>
            </BottomBar>
        </View>

      </View>

    );
  }

 export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAE9F0'

  },
  header: {
    flex: 1,
    //chnge the width back to .window
    width: 434,
    justifyContent: 'center'
  },
  headerPosition: {
    position: "absolute",
    top: 0,
  },
  headerBackground: { 
    height: 90,
    shadowOffset: { width: 3, height: 6 },
    shadowColor: Colors.black,
    shadowOpacity: 0.25,
    elevation: 5,
    justifyContent: 'center',
  },
  headerIconLeft: {
    position: 'relative',
    alignItems: 'flex-start',
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: '15%'
    
  },
  headerElementsPositions: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 25,
  },
  bottomBarPosition: {
    position: "absolute",
    bottom: 0,
  },
  bottomBar: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    height: 90,
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  loginButtonContainer: {
    height:48,
    width:120,
    borderRadius:30,
    shadowOffset: { width: 3, height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.25,
    elevation: 5
  },
  loginButtonPosition: {
    backgroundColor: '#EFC102',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
    marginVertical: 16,
    marginHorizontal: '35%'

  },
  loginText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  },
  emailInput:{
    justifyContent: 'center',
    width: 375,
    backgroundColor:"white",
    //add shadow to the bottom
    height: 35,
    borderRadius: 30,
    padding:10
  },
  passwordInput: {
    justifyContent: 'center',
    width: 375,
    backgroundColor:"white",
    //add shadow to the bottom
    height: 35,
    borderRadius: 30,
    padding:10
  },
  inputText:{
    height:50,
    fontWeight: 'bold',
    fontSize: 15,
  },
  userInputs: {
    flex: 1,
    justifyContent: 'space-around',
    marginVertical: '30%',
    marginLeft: '10%'
  },
  backgroundText: {
    fontSize: 24,
    color: '#5D41BC',
    fontWeight: 'bold',
  },
  horizontalLine: {
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    height: 2,
  },
  message: {
    marginVertical: '40%'
  }

});

