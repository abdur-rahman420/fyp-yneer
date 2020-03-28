import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
  
} from 'react-native';
import {Header, Left ,Right, Icon} from 'native-base'


class FR extends Component {
    render(){
        return(
            <View>
                <View style={styles.navBar}>
                    <Image style={{ height: 55, width: 100, marginLeft: 10 }} source={{ uri: "http://www.yneer.com/wp-content/uploads/2019/08/Asset-15-8.png" }}/>    
                </View>

                <View style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    borderRadius:25,
                    borderWidth:1,
                    borderColor: 'gray' ,
                    marginTop:30,
                    marginLeft:20,
                    marginRight:20,
                    
                    }} >
                    <Icon name="search" size={25} style= {{color:'#505050'}} />
                        <TextInput placeholder="Your current location" />        
                </View>
                
                <View style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    borderRadius:25,
                    borderWidth:1,
                    borderColor: 'gray' ,
                    marginTop:30,
                    marginLeft:20,
                    marginRight:20,
                    marginBottom:392,
                    
                    }}>
                    <Icon name="search" size={25} style= {{color:'#505050'}} />
                        <TextInput placeholder="Your destination location "/>        
                </View>



                {/* <View>
                    <Icon name="search"style={{flexDirection: 'row'}} />
                    <TextInput placeholder="Your current location" style={styles.TN}></TextInput>
                    <TextInput placeholder="Your destination location" style={styles.TN1}></TextInput>
                </View>
                */}
                <View>
                    <Button title="Find Requests" color="orange"/>
                </View>
          
                



            </View>
            
           
        );
    }
    
}

const styles = StyleSheet.create({
    TN: {
        borderRadius:25,    
        borderWidth:1,
        borderColor: 'gray',
        marginTop:30,
        marginLeft:20,
        marginRight:20,
        padding:5,
        
    
    },
    TN1: {
        borderRadius:25,    
        borderWidth:1,
        borderColor: 'gray',
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        marginBottom:390,
        padding:5,
         
      
    
    },

    navBar: {
        height: 70,
        backgroundColor: "#000000",
        alignItems: "flex-start",
        justifyContent: "center",
        
      }
    
   });

export  default FR;