import * as React from 'react';
import { Button, View,TouchableOpacity } from 'react-native';
import { createDrawerNavigator,DrawerContent, } from '@react-navigation/drawer';
import Welcome from '../pages/Welcome';
import Suport from '../pages/Suporte';
import {DrawerActions, useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather'
import CustomMenu from '../components/CustomMenu';


function NotificationsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    </View>
  );
}

function IconCustom() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    </View>
  );
}


export default function RoutesMenu() {
  const navigation = useNavigation();
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
   drawerStyle={{
    width:380,
    borderTopRightRadius:50,
    borderBottomRightRadius:50,
    backgroundColor:'#191921',
    padding:23,
    paddingTop:44
    }}
    drawerContentOptions={{
      inactiveBackgroundColor:'#191921',
      activeBackgroundColor:'#191921',
      inactiveTintColor:'#fff',
      activeTintColor:'#fff',
      labelStyle:{
        fontFamily:'muli-bold',
        fontSize:23,
        marginLeft:30,
        marginBottom:30,
      }
    }}
    initialRouteName="Welcome"

    drawerContent={()=><CustomMenu/>}
    >
      <Drawer.Screen options={{
        drawerLabel:'Pagamento',
        headerTitleStyle:{
        color:'#ffff',}
        
      }}  name="Welcome" component={Welcome} />
    </Drawer.Navigator>
  );
}
