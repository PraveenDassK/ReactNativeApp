import React, { useEffect, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import * as FaceDetector from "expo-face-detector";
import * as ImagePicker from "expo-image-picker";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";

const ProofOfFace = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDetected, setIsDetected] = useState(false);
  const [imageUri, setImageUri] = useState(null);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the camera");
  };

  const selectImage = async () => {
    setIsLoading(true);
    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        base64: true,
        camera: CameraType.front,
      });

      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  const handleFacesDetected = ({ faces }) => {
    if (faces.length > 0) {
      setIsDetected(true);
      selectImage();
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {isDetected ? (
        <View style={styles.faceDetectedContainer}>
          <Text style={styles.faceDetectedText}>Face Detected!</Text>
          <Image source={{ uri: imageUri }} style={styles.detectedImage} />
        </View>
      ) : (
        <Camera
          style={styles.camera}
          type={CameraType.front}
          onFacesDetected={handleFacesDetected}
          faceDetectorSettings={{
            mode: FaceDetector.FaceDetectorMode.fast,
            detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,
            runClassifications: FaceDetector.FaceDetectorClassifications.none,
            minDetectionInterval: 100,
            tracking: true,
          }}
        />
      )}
      {!isDetected && (
        <TouchableOpacity
          style={styles.captureButton}
          onPress={selectImage}
          disabled={isLoading}
        >
          <Text style={styles.captureButtonText}>Take Picture</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    flex: 1,
    width: "100%",
  },
  faceDetectedContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  faceDetectedText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  detectedImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  captureButton: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "blue",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  captureButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProofOfFace;


