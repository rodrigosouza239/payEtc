import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//import pages/components mobile



//import Pages
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Welcome from '../pages/Welcome';

//import views
import PageDados from '../Views/PageDados';
import PageCit from '../Views/PageCit';
import PageFoto from '../Views/PageFoto';


//componentes 
import Camera from '../components/Camera';


const { Navigator, Screen } = createStackNavigator();


export default function Routes() {
  return (
      <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false}}>
      <Screen name="Home" component={Home} />
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="Welcome" component={Welcome} />
       {/* /page components/ */}
      <Screen name="Camera" component={Camera} />
      {/* /page views/ */}
      <Screen name="PageDados" component={PageDados} />
      <Screen name="PageCit" component={PageCit} />
      <Screen name="PageFoto" component={PageFoto} />
      </Navigator>
    </NavigationContainer>
  );
}