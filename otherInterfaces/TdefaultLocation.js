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


const TdefaultLocation = props=> {
  
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
        <Text style={styles.Txt}>Default Location</Text>
      </View>
      <Button title="Next Step" style={styles.backBtn} color="orange" onPress={props.onGetLocation} />
    </View>
   
    )
  };

const styles= StyleSheet.create({
  bgC:{
    backgroundColor:'white'
  },
  
  navBar: {
    height: 70,
    backgroundColor: "#000000",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  Txt:{
    fontFamily: "Proxima Nova",
    paddingLeft:85,
    fontSize:30,
    fontWeight: "bold",
    margin:20,
  
  },
  backBtn: {   
      // position: 'absolute',
      // margin:200,
      // flexDirection: "row"
      marginTop:1000
    
  }


  });


export default TdefaultLocation;
