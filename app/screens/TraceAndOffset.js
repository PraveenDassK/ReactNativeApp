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
  ScrollView,
} from "react-native";
import * as Yup from "yup";
import Button from "../components/AppButton";
import GlobalStyles from "../../GlobalStyles";
import AuthContext from "../auth/context";
import Form from "../components/forms/Form";

const TraceAndOffset = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleTextRow}>
        <Text style={styles.titleText}>
          Shrink your footprint, but also grow your hand print!
        </Text>
      </View>

      <View style={styles.splitDiv}>
        <View style={styles.totalAssetsDiv}>
          <Text style={styles.totalAssetsNumber}>7</Text>

          <View style={styles.totalAssetsTextContainer}>
            <Text style={styles.totalAssetsTotal}>Total</Text>
            <Text style={styles.totalAssetsAssets}>Assets</Text>
          </View>
        </View>
        <View style={styles.totalRemovedDiv}>
          <Text style={styles.totalAssetsNumber}>139</Text>

          <View style={styles.totalAssetsTextContainer}>
            <Text style={styles.totalAssetsTotal}>Tons</Text>
            <Text style={styles.totalAssetsAssets}>CO₂ Removed</Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.subTextRow}>
          <Text style={styles.subTextAssets}>Assets</Text>
          <Text style={styles.subTextDescriptor}>(1 Tonne = 1 CO2 Token)</Text>
          <Text style={styles.subTextToken}>Token</Text>
        </View>

        <View style={styles.itemDiv}>
          <View style={styles.itemDivCol1}>
            <Image
              style={styles.image}
              source={require("../assets/image-88.png")}
            />
          </View>

          <View style={styles.itemDivCol2}>
            <Text style={styles.productTitle}>
              Drylands Protection, Kasigau Wildlife Corridor £19 / Tonne
            </Text>
            <Text style={styles.dateOfPurchase}>25 Nov 2022 at 18:20</Text>
          </View>
          <View style={styles.itemDivCol3}>
            <Text style={styles.tokenAmount}>1</Text>
          </View>
        </View>

        <View style={styles.itemDiv}>
          <View style={styles.itemDivCol1}>
            <Image
              style={styles.image}
              source={require("../assets/image-88.png")}
            />
          </View>

          <View style={styles.itemDivCol2}>
            <Text style={styles.productTitle}>
              Drylands Protection, Kasigau Wildlife Corridor £19 / Tonne
            </Text>
            <Text style={styles.dateOfPurchase}>25 Nov 2022 at 18:20</Text>
          </View>
          <View style={styles.itemDivCol3}>
            <Text style={styles.tokenAmount}>1</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
          <Button
            title="Buy Projects"
            onPress={() => console.log("Hello Moto")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: GlobalStyles.DivContainer.flex,
    backgroundColor: GlobalStyles.DivContainer.backgroundColor,
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

  splitDiv: {
    marginTop: verticalScale(37.5),
    height: verticalScale(100),
    flexDirection: "row",
    width: "80%",
    marginLeft: "10%",
    justifyContent: "space-around",
  },

  totalAssetsDiv: {
    flex: 3.25,
    height: "100%",
    width: "25%",
    backgroundColor: "rgba(65, 160, 57, 0.25)",
    borderRadius: 15,
    marginRight: "1%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  totalAssetsTextContainer: {},

  totalRemovedDiv: {
    flex: 6.75,
    height: "100%",
    width: "65%",
    backgroundColor: "rgba(136, 136, 136, 0.25)",
    borderRadius: 15,
    marginLeft: "1%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  totalAssetsNumber: {
    fontSize: verticalScale(60),
    fontWeight: "600",
  },

  totalAssetsTotal: {
    fontSize: verticalScale(14),
  },

  totalAssetsAssets: {
    fontSize: verticalScale(14),
    fontWeight: "700",
  },

  subTextRow: {
    Width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: verticalScale(25),
    flexDirection: "row",
    alignItems: "center",
  },

  subTextAssets: {
    flex: 1.5,
    fontWeight: "700",
    fontSize: verticalScale(12),
  },

  subTextDescriptor: {
    flex: 3.5,
    fontSize: verticalScale(10),
  },

  subTextToken: {
    flex: 5,
    fontWeight: "700",
    fontSize: verticalScale(12),
    textAlign: "right",
  },

  itemDiv: {
    width: "80%",
    backgroundColor: "white",
    marginLeft: "10%",
    marginTop: "2.5%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    height: verticalScale(85),
  },

  itemDivCol1: {
    flex: 2,
  },

  itemDivCol2: {
    flex: 7.5,
    width: "100%",
  },

  itemDivCol3: {
    flex: 0.5,
    textAlign: "right",
    width: "100%",
    marginRight: "2.5%",
  },

  tokenAmount: {
    textAlign: "right",
  },

  image: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },

  productTitle: {
    fontSize: 14,
  },

  dateOfPurchase: {
    color: "rgba(136, 136, 136, 0.5)",
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

export default TraceAndOffset;
