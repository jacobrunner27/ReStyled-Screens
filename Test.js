import React, { Component } from 'react';
import { width, height, totalSize, } from 'react-native-dimension';
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
  TouchableOpacity
} from 'react-native';

import WishHeader from './src/Components/UI'

import { routes } from './src/services';
import { LineHorizontal } from './src/Components';

const BottomBar = ({ children }) => (
    <View style={styles.bottomBar}>
        {children}
    </View>
)

const HorizontalLine = ({ children }) => (
    <View style={styles.horizontalLine}>
        {children}
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



export default class LoginView extends Component {

  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
    }
  }
  render() {
    return (
      
      <View style={styles.container}>
        
        <ImageBackground source={require('./src/Assets/Images/WishlistHeader.jpg')} style={styles.header}/>

          <View styles={styles.headerIconLeft}> 
            <TouchableOpacity style={styles.treviIcon} onPress={() => this.props.navigation.navigate(routes.trending)}>
              <Image source={require('./src/Assets/Images/littleTreviLogo.png')} />
            </TouchableOpacity>
          </View>  

          <View style={styles.userInputs}>

              <View style={styles.itemNameInput}>
                <TextInput
                    style={styles.inputText}
                    placeholder="item name" 
                    placeholderTextColor="#D3D3D3"
                    onChangeText={text => this.setState({email:text})}
                />
              </View>
            
             <View syle={styles.horizontalLinePosition1}>
                <HorizontalLine />
             </View>

              <View style={styles.itemDescription}>
                <TextInput
                    style={styles.inputText}
                    placeholder="item name" 
                    placeholderTextColor="#D3D3D3"
                    onChangeText={text => this.setState({email:text})}
                />
              </View>
           
             <HorizontalLine />

              <View style={styles.minimumMaximumPosition}>
                <View style={styles.minimumInput}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="minimum" 
                        placeholderTextColor="#D3D3D3"
                        onChangeText={text => this.setState({email:text})}
                    />
                </View>
                <View style={styles.maximumInput}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="maximum" 
                        placeholderTextColor="#D3D3D3"
                        onChangeText={text => this.setState({email:text})}
                    />
                </View>
              </View>

          </View>       
        

        <View style={styles.bottomBarPosition}>
            <BottomBar>
        
            </BottomBar>
        </View>
    
        <View style={styles.continueButtonPosition}>
            <TouchableOpacity style={styles.continueButton} onPress={()=> this.props.navigation.navigate(routes.wish)}>
                <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
        </View>

        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.whisper
    
  },
  header: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: 90,
    position: 'absolute',
    top: 0,
    shadowOffset: { width: 3, height: 6 },
    shadowColor: Colors.black,
    shadowOpacity: 0.25,
    elevation: 5,
    justifyContent: 'center',
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
  horizontalLine: {
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    height: 4,
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
  continueButton: {
    height:48,
    width:150,
    borderRadius:30,
    backgroundColor: '#EFC102',
    shadowOffset: { width: 3, height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.16,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButtonPosition: {
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30,
  },
  continueText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 6
  },
  itemNameInput:{
    width: 370,
    backgroundColor:"white",
    shadowOffset: { width: 3, height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.16,
    elevation: 5,
    height: 35,
    borderRadius: 30,
    justifyContent:"center",
    padding:10,
    position: 'relative',
    //make the "top" a % down from the top of the screen
    
  },
  itemDescription: {
    width: 375,
    backgroundColor:"white",
    shadowOffset: { width: 3, height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.16,
    elevation: 5,
    height: 145,
    //make the "top" a % down from the top of the screen
    
    borderRadius: 20,
    justifyContent:"center",
    padding:10 
  },
  minimumInput: {
    width: 130,
    backgroundColor:"white",
    shadowOffset: { width: 3, height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.16,
    elevation: 5,
    height: 35,
    //make the "top" a % down from the top of the screen
   
    borderRadius: 30,
    justifyContent:"center",
    padding:10,
  },
  maximumInput: {
    width: 130,
    backgroundColor:"white",
    shadowOffset: { width: 3, height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.16,
    elevation: 5,
    height: 35,
    //make the "top" a % down from the top of the screen
    
    borderRadius: 30,
    justifyContent:"center",
    padding:10 
  },
  minimumMaximumPosition: {
    flexDirection: 'row',
    
  },
  inputText:{
    height:50,
    fontWeight: 'bold',
    fontSize: 15,
  },
  descriptionText: {
    position: 'absolute',
    top: -50,
    left: 20,
    height:145,
    fontWeight: 'bold',
    fontSize: 15,
  },
  userInputs: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 100

  },
  treviIcon: {
    flexDirection: 'row',
    position: 'absolute',
    top: 60,
    left: 18
  },
  headerIconLeft: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

                                            