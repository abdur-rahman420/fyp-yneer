// 

 

import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Header, Left ,Right, Icon} from 'native-base'

class HomeScreen extends Component {
  static navigationOptions ={
    drawerIcon:({tintColor}) => (
      <Icon name="home" style={{fontSize:24, color:tintColor}} />
    )
  }

    render() {
      return (
        <View style={styles.container}>
          <Header >
            <Left>
              <Icon name="menu" onPress={() =>
              this.props.navigation.openDrawer()} />
            </Left>
          </Header>
          <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text>Home Screen</Text>
          </View>



        
        </View>
      );
    }
  }

 const styles=StyleSheet.create({
     container:{
         flex:1,
     }

 });

export default HomeScreen;
