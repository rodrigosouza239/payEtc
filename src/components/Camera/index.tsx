'use strict';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';
import Icon1 from '../../assets/icons/icon3.png';

import { RNCamera,FaceDetector}  from 'react-native-camera'

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
);

const PageFoto = () => {

async function takePicture(camera:any){
  const options = { quality: 0.5, base64: true };
  const data = await camera.takePicture(options);
  //  eslint-disable-next-line
  console.log(data.uri);
};
    return (
      <>
      <View style={styles.container}>
      <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.front}
          faceDetectionMode={RNCamera.Constants.FaceDetection.Mode.fast}
          faceDetectionLandmarks={RNCamera.Constants.FaceDetection.Landmarks.none}
          faceDetectionClassifications={RNCamera.Constants.FaceDetection.Classifications.none}
          trackingEnabled
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
      </View>
      <View style={styles.footer}>
         <View  style={styles.footerHeader}>
         <Text style={styles.footerTitle}>Lembre-se de focar</Text>
          <TouchableOpacity onPress={takePicture}  style={styles.capture}>
          <Image style={styles.containerBodyIcon} source={Icon1} />
          </TouchableOpacity>
         </View>
        </View>
      </>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#E6E6E6',
    borderRadius: 100,
    width:80,
    height:80,
    borderWidth:1,
    borderColor:'#F2F2F2',

    justifyContent:'center',
    alignItems:'center'
  },
  footer:{
    backgroundColor:'#232328',
    height:330,

    justifyContent:'center',
    alignItems:'center'
  },
  header:{
    backgroundColor:'#232328',
    height:150,
    padding:24,
    paddingTop:44
  },
  headerText:{
   color:'#E6E6E6',
   fontSize:28,
   fontFamily:'muli-bold',
  },
  footerHeader:{
    justifyContent:'center',
    alignItems:'center',

    marginTop:-80
  },
  footerTitle:{
   fontSize:20,
   color:'#fff',
   fontFamily:'muli-regular',
   marginBottom:50
  },
  containerBodyIcon:{
    width:25,
    height:25
  }
});

export default PageFoto;
