import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import GlobalStyles from "../GlobalStyles";

const CarbonCart = () => {
  return (
    <View style={styles.carbonCart}>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Text style={styles.hello}>Order Summary</Text>
        <View style={styles.historyParent}>
          <Text
            style={[styles.history, styles.historyTypo, styles.historyTypo1]}
          >
            Account
          </Text>
          <Text style={[styles.history1, styles.historyPosition]}>
            Analysis
          </Text>
          <Text style={[styles.history2, styles.historyPosition]}>Carbon</Text>
          <Text
            style={[styles.history3, styles.historyTypo, styles.historyTypo1]}
          >
            Profile
          </Text>
        </View>
        <Text style={[styles.hello1, styles.helloTypo2]}>
          <Text style={styles.agroforestry}>Agroforestry -</Text>
          <Text style={styles.agroforestry}>Tree Planting</Text>
          <Text style={styles.agroforestry}>Initiative</Text>
        </Text>
        <Text
          style={[
            styles.helloPosition2,
            styles.helloTypo3,
            styles.helloPosition3,
          ]}
        >
          Project
        </Text>
        <Text style={[styles.hello3, styles.helloTypo2]}>
          <Text style={styles.agroforestry}>Woodland</Text>
          <Text style={styles.agroforestry}>Restoration,</Text>
          <Text style={styles.agroforestry}>Devon</Text>
        </Text>
        <Text
          style={[
            styles.helloPosition1,
            styles.helloTypo3,
            styles.helloPosition3,
          ]}
        >
          Total
        </Text>
        <Text style={[styles.hello5, styles.helloTypo1]}>1</Text>
        <Text style={[styles.hello6, styles.helloPosition2, styles.helloTypo3]}>
          Unit
        </Text>
        <Text style={[styles.hello7, styles.helloTypo1]}>1</Text>
        <Text style={[styles.helloTypo1, styles.helloPosition1]}>2</Text>
        <Text style={[styles.hello9, styles.helloTypo, styles.helloPosition]}>
          £1.45
        </Text>
        <Text style={[styles.hello10, styles.helloTypo, styles.helloPosition2]}>
          Price
        </Text>
        <Text style={[styles.hello11, styles.helloTypo]}>£6</Text>
        <Text
          style={[
            styles.helloTypo,
            styles.helloPosition,
            styles.helloPosition1,
          ]}
        >
          £7.45
        </Text>
        <View style={[styles.groupItem, styles.groupPosition1]} />
        <View style={[styles.groupInner, styles.groupPosition1]} />
        <View style={[styles.groupParent, styles.groupPosition]}>
          <View style={[styles.rectangleGroup, styles.groupPosition]}>
            <View style={styles.rectangleView} />
            <View style={styles.maskGroup236} />
          </View>
          <Text style={[styles.hello13, styles.historyTypo]}>
            Proceed to payment
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  historyTypo: {
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  historyTypo1: {
    color: GlobalStyles.Color.gray_700,
    letterSpacing: 1,
    fontSize: GlobalStyles.FontSize.size_xl,
    opacity: 0.3,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    top: 0,
  },
  historyPosition: {
    left: "50%",
    textAlign: "left",
    color: GlobalStyles.Color.gray_700,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    letterSpacing: 1,
    fontSize: GlobalStyles.FontSize.size_xl,
    top: 0,
    position: "absolute",
  },
  helloTypo2: {
    lineHeight: 17,
    fontSize: GlobalStyles.FontSize.size_base,
    left: "9.82%",
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  helloTypo3: {
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  helloPosition3: {
    left: "9.82%",
    fontSize: GlobalStyles.FontSize.size_base,
  },
  helloTypo1: {
    left: "57.52%",
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  helloPosition2: {
    top: "27.21%",
    fontWeight: "700",
  },
  helloPosition1: {
    top: "69.14%",
    fontWeight: "700",
  },
  helloTypo: {
    textAlign: "right",
    fontSize: GlobalStyles.FontSize.size_base,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  helloPosition: {
    left: "81.6%",
    textAlign: "right",
  },
  groupPosition1: {
    height: 2,
    borderTopWidth: 1,
    borderColor: "#f6f5f8",
    borderStyle: "solid",
    right: 3,
    top: "50%",
    left: 2,
    position: "absolute",
  },
  groupPosition: {
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    height: "54.87%",
    width: "98.16%",
    top: "22.12%",
    right: "0.92%",
    bottom: "23.01%",
    left: "0.92%",
    borderRadius: GlobalStyles.Border.br_6xl,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  hello: {
    top: 52,
    fontSize: GlobalStyles.FontSize.size_7xl,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "center",
    color: GlobalStyles.Color.indigo_100,
    left: 2,
    fontWeight: "700",
    position: "absolute",
  },
  history: {
    opacity: 0.3,
    left: 0,
  },
  history1: {
    marginLeft: -63.5,
    opacity: 0.3,
  },
  history2: {
    marginLeft: 21.5,
    fontWeight: "700",
    left: "50%",
  },
  history3: {
    right: -1,
    opacity: 0.3,
  },
  historyParent: {
    right: 31,
    height: 16,
    left: 0,
    top: 0,
    position: "absolute",
  },
  agroforestry: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello1: {
    top: "38.5%",
  },
  hello3: {
    top: "53.54%",
  },
  hello5: {
    top: "38.5%",
  },
  hello6: {
    left: "54.75%",
  },
  hello7: {
    top: "53.54%",
  },
  hello9: {
    top: "38.5%",
  },
  hello10: {
    left: "81.9%",
  },
  hello11: {
    left: "87.42%",
    top: "53.54%",
  },
  groupItem: {
    marginTop: 71,
  },
  groupInner: {
    marginTop: -76,
  },
  rectangleView: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.gray_500,
    position: "absolute",
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleGroup: {
    top: 0,
  },
  hello13: {
    top: "38.33%",
    left: "23.62%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  groupParent: {
    height: 60,
  },
  rectangleParent: {
    width: 326,
    height: 452,
  },
  carbonCart: {
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: GlobalStyles.Padding.padding_2xs,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default CarbonCart;
