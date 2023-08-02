import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import GlobalStyles from "../../GlobalStyles";
import { LinearGradient } from "expo-linear-gradient";

const Success = ({ route, navigation }) => {
  
  const text = route?.params?.params?.successText;
  const path = route?.params?.params?.finishScreen
    ? route.params.finishScreen
    : "AccountTab";
  
  return (
    <Pressable
      style={styles.requested}
      onPress={() => navigation.navigate("Account")}
    >
      <View style={styles.mainContainer}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingHorizontal: 25,
            paddingVertical: 85,
          }}
        >
          <MaterialCommunityIcons
            name="tray-arrow-up"
            size={38}
            color="#FFFFFF"
          />
        </View>
        <View style={styles.titleTextRow}>
          <View>
            <Text style={styles.titleText}>
              Payment of £50 to Jack Huang is successful.
            </Text>
            <Text style={styles.subText}>15 June 2023 at 10:55 PM</Text>
          </View>
        </View>
        <Image
          style={styles.image}
          source={require("../assets/babyblueCircle.png")}
        />
        <View style={styles.titleTextRow}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity>
              <Text style={styles.buttonText}>View details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 90,
          marginBottom: 26
        }}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <LinearGradient
              colors={["#212529", "#3A3A3A"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#27AF7C",
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flex: GlobalStyles.DivContainer.flex,
  },

  titleTextRow: {
    marginTop: GlobalStyles.Title.marginTop,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  titleText: {
    fontFamily: "Montserrat",
    fontSize: 24,
    fontWeight: "500",
    color: "#FFFFFF",
    textAlign: "center",
  },

  subText: {
    fontFamily: "Montserrat",
    fontSize: 12,
    color: "#FFFFFF",
    textAlign: "center",
    marginVertical: 19,
  },

  requested: {
    width: "100%",
    height: "90%",
  },

  image: {
    width: "90%",
    resizeMode: "contain",
    marginLeft: "5%",
    height: "25%",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 137,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFFFFF",
  },
  button: {
    width: 331.08,
    height: 47,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: "Montserrat",
    fontSize: 14,
    color: "#FFFFFF",
  },
});

export default Success;
