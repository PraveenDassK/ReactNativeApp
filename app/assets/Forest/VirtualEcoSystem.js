import React, { useContext, useEffect, useState, Keyboard } from "react";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../config/scaling";
import {
  Text,
  StyleSheet,
  Image,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import * as Yup from "yup";
import Button from "../components/AppButton";
import GlobalStyles from "../../GlobalStyles";
import AuthContext from "../auth/context";
import Form from "../components/forms/Form";

const VirtualEcoSystem = ({ navigation }) => {
  const forestValue = 10;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleTextRow}>
        <Text style={styles.titleText}>Hudson's Forest</Text>
      </View>

      <View style={styles.subTextRow}>
        <Text style={styles.subText}>
          Added the trees you earned by buying your Elite Carbonyte card.
        </Text>
      </View>

      <View style={styles.imageBox}>
        <Image
          style={styles.image}
          source={require("../assets/Forest/" + forestValue + ".png")}
        />
      </View>
      <View style={styles.centerRow}>
        <Text style={styles.centerRowText}>
          Bring Your Virtual Forest To Life
        </Text>
      </View>

      <View style={styles.centerRow}>
        <Text style={styles.centerRowSubText}>
          You can plant more trees by spending on project and make your forest
          green, Free from carbon.
        </Text>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
          <Button
            title="Buy Projects"
            onPress={() => navigation.navigate("Carbon")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: GlobalStyles.DivContainer.backgroundColor,
    height: GlobalStyles.DivContainer.height,
    width: "100%",
    flex: GlobalStyles.DivContainer.flex,
  },

  titleTextRow: {
    marginTop: GlobalStyles.Title.marginTop,
    marginLeft: GlobalStyles.Title.marginLeft,
    width: GlobalStyles.Title.width,
  },

  titleText: {
    fontSize: GlobalStyles.Title.fontSize,
    fontWeight: GlobalStyles.Title.fontWeight,
  },

  subText: {
    fontSize: GlobalStyles.RowText.fontSize,
    fontWeight: GlobalStyles.RowText.fontWeight,
  },

  subTextRow: {
    marginTop: GlobalStyles.RowText.marginTop,
    marginLeft: GlobalStyles.RowText.marginLeft,
    width: "80%",
    color: GlobalStyles.RowText.fontColor,
  },

  divContainer: {
    height: GlobalStyles.DivContainer.height10,
    width: GlobalStyles.DivContainer.width,
    marginTop: GlobalStyles.RowText.marginTop,
    marginLeft: GlobalStyles.RowText.marginLeft,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    top: "5%",
  },

  imageBox: {
    width: GlobalStyles.imageBox.width,
    marginLeft: GlobalStyles.RowText.marginLeft,
  },

  image: {
    marginTop: "7.5%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
    alignContent: "center",
    width: GlobalStyles.imageBox.imageFit,
    resizeMode: "contain",
    position: "relative",
  },

  centerRowText: {
    width: GlobalStyles.CenterRowText.width,
    fontSize: GlobalStyles.CenterRowText.fontSize,
    fontWeight: GlobalStyles.CenterRowText.fontWeight,
    color: GlobalStyles.CenterRowText.fontColor,
    textAlign: GlobalStyles.CenterRowText.textAlign,
  },

  centerRowSubText: {
    width: GlobalStyles.CenterRowSubText.width,
    fontSize: GlobalStyles.CenterRowSubText.fontSize,
    fontWeight: GlobalStyles.CenterRowSubText.fontWeight,
    color: GlobalStyles.CenterRowSubText.fontColor,
    textAlign: GlobalStyles.CenterRowSubText.textAlign,
  },

  centerRow: {
    width: GlobalStyles.CenterRow.width,
    marginLeft: GlobalStyles.CenterRow.marginLeft,
    marginTop: "2.5%",
  },

  bottom: {
    bottom: "5%",
    flex: 1,
    justifyContent: "flex-end",
  },

  button: {
    width: "80%",
    left: "10%",
  },
});

export default VirtualEcoSystem;
