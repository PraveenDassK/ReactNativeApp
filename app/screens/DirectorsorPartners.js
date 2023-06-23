import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
} from "react-native";
import GlobalStyles from "../../GlobalStyles";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../config/scaling";
import RegistrationDirectororPartner from "../components/RegistartionDirectororPartner";
import RegistartionDirectorForm from "../components/RegistartionDirectorForm";
const DirectororPartner = ({ navigation }) => {
  const [formView, setFormView] = useState(0);
  const [role, setRole] = useState("");
  const handleOnPress = (event) => {
    console.log(event,"thois is event")
    setRole(event)
    if (formView === 0) {
      setFormView(1);
    } else {
      setFormView(0);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {formView === 0 ? (
        <RegistrationDirectororPartner
          onPress={handleOnPress}
          setRole={setRole}
        />
      ) : (
        <RegistartionDirectorForm role={role} setFormView={setFormView} />
        // <View><Text>Hello</Text></View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    top: "10%",
    padding: "10%",
  },
  image: {
    height: "40%",
    top: "15%",
    alignSelf: "center",
    aspectRatio: 53.98 / 85.6,
    borderRadius: 5,
  },
  ProgressBar: {
    top: "32.5%",
    alignSelf: "center",
    height: "1%",
    resizeMode: "contain",
  },
});

export default DirectororPartner;
