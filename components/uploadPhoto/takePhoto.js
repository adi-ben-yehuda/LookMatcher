import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";
import { Camera } from "expo-camera";
import styles from "./takePhoto.style";
import { useNavigation } from "@react-navigation/native";


let camera;

export default function App() {
  const [startCamera, setStartCamera] = React.useState(false);
  const [previewVisible, setPreviewVisible] = React.useState(false);
  const [capturedImage, setCapturedImage] = React.useState(null);
  const navigation = useNavigation();
  const [cameraType, setCameraType] = React.useState(
    Camera.Constants.Type.back
  );

  const __startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    console.log(status);
    if (status === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("Access denied");
    }
  };

  const __takePicture = async () => {
    const photo = await camera.takePictureAsync();
    console.log(photo);
    setPreviewVisible(true);
    //setStartCamera(false)
    setCapturedImage(photo);
  };

  const __savePhoto = () => {
    if (capturedImage) {
      navigation.navigate('SearchByPhoto', { photo: capturedImage });
    }
  };


  const __retakePicture = () => {
    setCapturedImage(null);
    setPreviewVisible(false);
    __startCamera();
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        {previewVisible && capturedImage ? (
          <CameraPreview
            photo={capturedImage}
            savePhoto={__savePhoto}
            retakePicture={__retakePicture}
          />
        ) : (
          <Camera
            type={cameraType}
            style={{ flex: 1 }}
            ref={(r) => {
              camera = r;
            }}
          >
            <View style={styles.view1}>
              <View style={styles.view2}></View>
              <View style={styles.view3}>
                <View style={styles.view4}>
                  <TouchableOpacity
                    onPress={__takePicture}
                    style={styles.oval}
                  />
                </View>
              </View>
            </View>
          </Camera>
        )}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const CameraPreview = ({ photo, retakePicture, savePhoto }) => {
  console.log("sdsfds", photo);
  return (
    <View style={styles.picTook1}>
      <ImageBackground
        source={{ uri: photo && photo.uri }}
        style={{
          flex: 1,
        }}
      >
        <View style={styles.picTook2}>
          <View style={styles.space}>
            <TouchableOpacity onPress={retakePicture} style={styles.buttons}>
              <Text style={styles.text}>Retake</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={savePhoto} style={styles.buttons}>
              <Text style={styles.text}>Use</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
