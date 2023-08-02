import React, { useContext } from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";

import AuthContext from "../auth/context";
import Screen from "../components/Screen";
import GlobalStyles from "../../GlobalStyles";
import Button from "../components/AppButton";

const PersonalOrBusiness = ({ navigation }) => {
  const { setUser } = useContext(AuthContext);

  const handlePersonal = () => {
    setUser((prev) => ({ ...prev, accountType: "personal" }));
    navigation.navigate("Name");
  };

  const handleBusiness = () => {
    setUser((prev) => ({ ...prev, accountType: "business" }));
    
    navigation.navigate("Name");
  };

  return (
    <Screen>
      <View style={styles.personalOrBusiness}>
        <View style={styles.helloParent}>
          <Text style={styles.hello}>Choose an account</Text>
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/logo-iconwithtext.png")}
          />
          <Pressable
            style={[styles.groupParent, styles.groupPosition]}
            onPress={() => navigation.navigate("CountryOfResidence")}
          >
            {/* <View style={[styles.rectangleParent, styles.maskGroup236Position]}>
              <View style={styles.groupItem} />
              <View style={[styles.maskGroup236, styles.maskGroup236Position]} />
            </View>
            <Text style={[styles.hello1, styles.helloTypo]} onPress={handleBusiness}>Business</Text> */}
            <Button title="business" onPress={handleBusiness} />
          </Pressable>
          <Pressable
            style={[styles.rectangleGroup, styles.groupPosition]}
            onPress={() => navigation.navigate("Name")}
          >
            <Button title="personal" onPress={handlePersonal} />
          </Pressable>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    height: 60,
    left: 0,
    right: 0,
    position: "absolute",
    width: "100%",
  },
  maskGroup236Position: {
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  helloTypo: {
    textAlign: "center",
    color: GlobalStyles.Color.black,
    textTransform: "uppercase",
    fontSize: GlobalStyles.FontSize.size_lg,
    position: "absolute",
  },
  hello: {
    marginTop: -26.22,
    left: 0,
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    textAlign: "center",
    top: "50%",
    position: "absolute",
    width: "100%",
  },
  groupChild: {
    marginLeft: -76.42,
    left: "50%",
    width: 152,
    height: 101,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.blue_100,
    position: "absolute",
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
  },
  rectangleParent: {
    bottom: 0,
  },
  hello1: {
    top: "40%",
    width: "100%",
  },
  groupParent: {
    bottom: 0,
  },
  rectangleGroup: {
    marginTop: 33.78,
    top: "50%",
  },
  hello2: {
    top: "65.72%",
    width: "100%",
  },
  helloParent: {
    width: "100%",
    height: 368,
  },
  personalOrBusiness: {
    backgroundColor: GlobalStyles.Color.white,
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: 100,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    width: "100%",
  },
});

export default PersonalOrBusiness;
