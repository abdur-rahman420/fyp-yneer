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
  TouchableOpacity
} from 'react-native';
// import loginTraveler from './TravelerInterfaces/loginTraveler'


class Splash extends Component {
  render(){
    return (
      <View style={styles.bgC}>
        <Image source={require('./pictures/logo.png')} style={styles.logoView}  /> 

        <View style={styles.MainScreen}>
      {/* <View style={styling.logoView}>
        <Image
          style={{ height: 200, width: 350 }}
          source={{
            uri:
              "http://www.yneer.com/wp-content/uploads/2019/08/Asset-15-8.png"
          }}
        />
      </View> */}
      <View style={styles.btnView}>
        <View>
          <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
            <Text style={{ color: "white", fontSize: 18 }}>Requester</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
            <Text style={{ color: "white", fontSize: 18 }}>Traveller</Text>
          </TouchableOpacity>
        </View>
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
  MainScreen: {
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    flex: 3
  },
  logoView: {
    height: 200,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flex: 1
  },
  btnView: {
    justifyContent: "center",
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  btn: {
    
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 150,
    backgroundColor:'orange',
    borderRadius:5,    
    borderWidth:2,
    borderColor: 'gray',
    marginTop:200,
    marginLeft:30,
  },
  logoView: {
    height: 320,
    width: 400,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingRight:14,
  
    
},

  });


export default Splash;
