import React, { useEffect, useState, useRef } from "react";
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
import Button from "../components/AppButton";

const ProofOfFace = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDetected, setIsDetected] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const [faceAccuracy, setFaceAccuracy] = useState(null);
  const [countdown, setCountdown] = useState(3); // Three-second countdown
  const [autoCapture, setAutoCapture] = useState(false);

  const cameraRef = useRef(null);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the camera");
  };

  const selectImage = async () => {
    try {
      setIsLoading(true);
      if (cameraRef.current) {
        const options = { quality: 0.5, base64: true };
        const photo = await cameraRef.current.takePictureAsync(options);

        setImageUri(photo.uri);
        const faceResult = await FaceDetector.detectFacesAsync(photo.uri, {
          mode: FaceDetector.FaceDetectorMode.accurate,
          detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
          runClassifications: FaceDetector.FaceDetectorClassifications.all,
        });

        if (faceResult.faces.length > 0) {
          setFaceAccuracy(faceResult.faces[0].leftEyeOpenProbability);
          setAutoCapture(false); // Reset autoCapture to false after a successful capture
        }
        console.log("picture taken", photo, faceResult);
        setIsDetected(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFacesDetected = ({ faces }) => {
    if (faces.length > 0) {
      // setIsDetected(true);
      // setFaceAccuracy(faces[0].leftEyeOpenProbability);
      // if (
      //   faces[0].leftEyeOpenProbability > 0.5 &&
      //   faces[0].rightEyeOpenProbability > 0.5
      // )
      //   return startCountdown();
      // // setIsDetected(false);
    }
  };

  const startCountdown = () => {
    let timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        // setIsDetected(true)
        clearInterval(timer);
        setAutoCapture(true); // Start automatic capture
        return;
      }
    }, 1000); // Update the countdown every second
  };

  useEffect(() => {
    requestPermission();
  }, []);

  useEffect(() => {
    if (autoCapture) {
      async () => {
        await selectImage();
      };
      setIsDetected(true);
    }
  }, [autoCapture]);

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
          {faceAccuracy !== null && (
            <Text style={styles.accuracyText}>
              Face Accuracy: {Math.round(faceAccuracy * 100)}%
            </Text>
          )}

          <View style={styles.captureButton}>
            <Button
              title="Retake Picture"
              textColor="black"
              color="white"
              onPress={() => setIsDetected(false)}
            />
          </View>
          <View style={styles.selectButton}>
            <Button
              title="Select Picture"
              textColor="white"
              color="black"
              onPress={() => navigation.navigate("ProofOfResidency")}
            />
          </View>
        </View>
      ) : (
        <>
          <Camera
            ref={cameraRef}
            style={styles.camera}
            type={CameraType.front} // Use front-facing camera
            onFacesDetected={handleFacesDetected}
            faceDetectorSettings={{
              mode: FaceDetector.FaceDetectorMode.accurate,
              detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
              runClassifications: FaceDetector.FaceDetectorClassifications.all,
              minDetectionInterval: 100,
              tracking: true,
            }}
          />
          <View style={styles.captureButton}>
            <Button
              title="Take Picture"
              textColor="white"
              color="red"
              onPress={selectImage}
            />
          </View>
        </>
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
  accuracyText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  captureButton: {
    position: "absolute",
    bottom: 80,
  },
  selectButton: {
    position: "absolute",
    bottom: 20,
  },
  captureButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProofOfFace;
