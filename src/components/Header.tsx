
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
    return (
      <>
      <View style={styles.container}>
          <TouchableOpacity onPress={navigation.goBack}>
          <Icon name="x" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.containerTitle}>Selfie</Text>
      </View>
      </>
    );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor:'#232328',
    padding:23,
    paddingTop:44,
    height:120,
     flexDirection:'row', 
     alignItems:'center', 
     justifyContent:'flex-start'
  },
  containerTitle:{
    color:'#E6E6E6',
    fontSize:23,
    fontFamily:'muli-bold',
    marginHorizontal:30
  }
});

export default Header;
