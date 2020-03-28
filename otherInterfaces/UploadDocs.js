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
 


class UploadDocs extends Component {
  render(){
    return (
      <View style={styles.bgC}>
      
      <View style={styles.signupform}>
        <Text style={styles.Txt}>Upload Documents</Text>
        <View >
          <TextInput style={styles.TN} placeholder=" Add Profile Picture" />
        </View>
        <View>
          <TextInput style={styles.TN} placeholder=" Add CNIC Front" />
        </View>
        <View>
          <TextInput style={styles.TN} placeholder=" Add CNIC Back" />
        </View>
        <View>
          <TextInput style={styles.TN} placeholder=" Add Liscence Front" />
        </View>
        <View>
          <TextInput style={styles.TN} placeholder=" Add Liscence Back" />
        </View>
        <View>
          <TextInput style={styles.TN} placeholder=" Add Vehicle Reg. Book Front"
          />
        </View>
        <Button  title="BACK" color="orange" />
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
    justifyContent: "center"
  },
  Txt:{
    fontFamily: "Proxima Nova",
    paddingLeft:85,
    fontSize:25,
    fontWeight: "bold",
    margin:20,
  
  },
  TN: {
    borderRadius:5,    
    borderWidth:1,
    borderColor: 'gray',
    alignItems:'center',
    margin:10,
    padding:10
  },
  backBtn: {
    
      position: 'absolute',
      paddingTop:8555,
      left:0,
      margin:20,
      flexDirection: "row"
    
  }


  });


export default UploadDocs;
