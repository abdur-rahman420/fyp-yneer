import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';

class SplashloginSignUp extends Component {
  render(){
    return (
      <View style={styles.bgC}>
        <Image source={require('./pictures/logo.png')} style={styles.logoView}  /> 

      <View> 
        <View style={styles.TO1}>
          <TouchableOpacity activeOpacity={0.5} >
            <Text style={{ color: "white", fontSize: 18 }}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.TO2}>
          <TouchableOpacity activeOpacity={0.5} >
            <Text style={{ color: "white", fontSize: 18 }}>SIGNUP</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    )
  };
};
const styles= StyleSheet.create({
  bgC:{
    backgroundColor:'white'
  },
  logoView: {
    height: 320,
    width: 400,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingRight:14
},
  TO1:{
    backgroundColor:'orange',
    margin:20,
    marginTop:70,
    marginLeft:95,
    alignItems:"center",
    borderRadius:5,    
    borderWidth:1,
    borderColor: 'gray',
    height:50,
    width:200,
    paddingTop:10,
    alignContent:"center"
  },
  TO2:{
    backgroundColor:'orange',
    margin:20,
    marginTop:20,
    marginLeft:95,
    alignItems:"center",
    borderRadius:5,    
    borderWidth:1,
    borderColor: 'gray',
    height:50,
    width:200,
    paddingTop:10
  },


  });


export default SplashloginSignUp;
