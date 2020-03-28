/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Image,
  AppRegistry
} from 'react-native';
//import loginTraveler from './TravelerInterfaces/loginTraveler'


class loginTraveler extends Component {
  render(){
    return (
      <View style={styles.bgC}>
       <Image source={require('./pictures/logo.png')} style={styles.logoView}  />  
      <View >

       <Text  style={styles.txt}>LOG-IN</Text>

    </View>
    <View style={styles.container}>
      <TextInput placeholder="Email/CNIC" style={styles.TN} keyboardType='email-address' />
        
      <TextInput placeholder="Password"  style={styles.TN} secureTextEntry={true} />
       <Text style={styles.txt1}>forgot Password?</Text>
      <Button title="LOGIN" color="orange" style={styles.btn} />
  

    </View>

    

    </View>
    )
  };
};
const styles= StyleSheet.create({
  txt1:{
    paddingLeft:290,
    fontWeight: "bold",
    fontSize:12,
    margin:10

  },
  txt:{
    fontFamily: "Proxima Nova",
    paddingLeft:135,
    fontSize:40,
    fontWeight: "bold"
  
  },
  TN: {
      borderRadius:5,    
      borderWidth:1,
      borderColor: 'gray',
      alignItems:'center',
      margin:10,
      padding:10
    },
    logoView: {
        height: 320,
        width: 400,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        // paddingRight:14
  },
  btn: {
    

  },
  bgC:{
    backgroundColor:'white'
  },
  
  });


export default loginTraveler;
