import React, {Component} from 'react';
import {StatusBar, View, TouchableOpacity, StyleSheet} from 'react-native';
import {RNCamera, FaceDetector} from 'react-native-camera';

const optionalConfigObject = {
  title: 'Authentication Required', // Android
  imageColor: '#e00606', // Android
  imageErrorColor: '#ff0000', // Android
  sensorDescription: 'Touch sensor', // Android
  sensorErrorDescription: 'Failed', // Android
  cancelText: 'Cancel', // Android
  unifiedErrors: false, // use unified error messages (default false)
  passcodeFallback: false,
};

class App extends Component {
  componentWillMount() {
    StatusBar.setBackgroundColor('rgba(0,0,0,0)');
    StatusBar.setBarStyle('light-content');
    StatusBar.setTranslucent(true);

    // TouchID.authenticate(
    //   'to demo this react-native component',
    //   optionalConfigObject,
    // )
    //   .then(success => {
    //     alert('Authenticated Successfully');
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     alert('Authentication Failed');
    //   });
  }

  // _pressHandler() {
  //   ReactNativeBiometrics.simplePrompt({promptMessage: 'Confirm FACE ID'})
  //       .then(resultObject => {
  //         const {success} = resultObject;
  //
  //         if (success) {
  //           alert('successful biometrics provided');
  //         } else {
  //           alert('user cancelled biometric prompt');
  //         }
  //       })
  //       .catch(() => {
  //         alert('biometrics failed');
  //       });
  // }
  state = {
    fd: true,
  };

  render() {
    return (
      <View style={{width: '100%', height: '100%', backgroundColor: 'blue'}}>
        <RNCamera
          style={StyleSheet.absoluteFill}
          faceDetectionClassification={
            RNCamera.Constants.FaceDetection.Classifications
          }
          faceDetectionLandmarks={
            RNCamera.Constants.FaceDetection.Landmarks.all
          }
          onFacesDetected={face => {
            if (this.state.fd) {
              this.setState({fd: face.faces.length === 0});
              alert(JSON.stringify(face));
            }
          }}
        />
      </View>
    );
  }
}

export default App;
//"react-native-kalman-location": "^0.3.0",
