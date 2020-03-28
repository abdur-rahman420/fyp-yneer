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


class App extends Component {
  render(){
    return (
      <View style={styles.bgC}>
      <View style={styles.navBar}>
        <Image
          style={{ height: 55, width: 100, marginLeft: 10 }}
          source={{
            uri:
              "http://www.yneer.com/wp-content/uploads/2019/08/Asset-15-8.png"
          }}
        />
      </View>
      <View style={styles.signupform}>
        <Text style={styles.txt}>SIGN-UP</Text>
        <Text style={styles.traveler}>Traveler</Text>
        <TextInput placeholder=" Full Name" style={styles.TN} />
        <TextInput placeholder=" Email" style={styles.TN }  keyboardType='email-address' />
        <TextInput placeholder="XXXXX-1234567-X (CNIC Number)" style={styles.TN} />
        <TextInput placeholder=" Phone Number" style={styles.TN} />
        <Button title="Next Step" style={styles.btn} color="orange" />
      </View>
    </View>
    )
  };
};
const styles= StyleSheet.create({
  bgC:{
    backgroundColor:'white'
  },
  
  navBar: {
    height: 70,
    backgroundColor: "#000000",
    alignItems: "flex-start",
    justifyContent: "center",
    
  },
  txt:{
    fontFamily: "Proxima Nova",
    paddingLeft:120,
    fontSize:40,
    fontWeight: "bold",
    margin:15
  
  },
  traveler:{
    fontFamily: "Proxima Nova",
    paddingLeft:160,
    fontSize:30,
    fontWeight: "bold",
  },
  TN: {
    borderRadius:5,    
    borderWidth:1,
    borderColor: 'gray',
    alignItems:'center',
    margin:10,
    padding:10
  },
  btn:{
    position: 'absolute',
    paddingTop:8555,
    left:0,
    margin:20
  }




  });


  // AppRegistry.registerComponent('App', () => App);

export default App;
