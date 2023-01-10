 import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import GlobalStyles from "../../GlobalStyles";

const CarbonCart1 = () => {
  return (
    <View style={styles.carbonCart1}>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Text style={styles.hello}>Order Summary</Text>
        <Text style={[styles.hello1, styles.helloTypo2, styles.helloTypo3]}>
          <Text style={styles.agroforestry}>Agroforestry -{"\n"}</Text>
          <Text style={styles.agroforestry}>Tree Planting{"\n"}</Text>
          <Text style={styles.agroforestry}>Initiative</Text>
        </Text>
        <Text
          style={[
            styles.helloPosition2,
            styles.helloTypo2,
            styles.helloTypo4,
            styles.helloPosition3,
          ]}
        >
          Project
        </Text>
        <Text style={[styles.hello3, styles.helloTypo2, styles.helloTypo3]}>
          <Text style={styles.agroforestry}>Woodland{"\n"}</Text>
          <Text style={styles.agroforestry}>Restoration,{"\n"}</Text>
          <Text style={styles.agroforestry}>Devon</Text>
        </Text>
        <Text
          style={[
            styles.helloPosition1,
            styles.helloTypo2,
            styles.helloTypo4,
            styles.helloPosition3,
          ]}
        >
          Total
        </Text>
        <Text style={[styles.hello5, styles.helloTypo1]}>1</Text>
        <Text
          style={[
            styles.hello6,
            styles.helloPosition2,
            styles.helloTypo2,
            styles.helloTypo4,
          ]}
        >
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
        <View style={[styles.groupItem, styles.groupPosition2]} />
        <View style={[styles.groupInner, styles.groupPosition2]} />
        <View
          style={[
            styles.groupParent,
            styles.groupPosition,
            styles.groupPosition1,
          ]}
        >
          <View
            style={[
              styles.rectangleGroup,
              styles.groupPosition,
              styles.groupPosition1,
            ]}
          >
            <View style={styles.rectangleView} />
            <View style={[styles.maskGroup236, styles.groupPosition]} />
          </View>
          <Text style={[styles.hello13, styles.helloTypo2]}>
            Proceed to payment
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  helloTypo2: {
    textAlign: "left",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloTypo3: {
    lineHeight: 17,
    textAlign: "left",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
    left: "9.82%",
    color: GlobalStyles.Color.indigo_100,
  },
  helloTypo4: {
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    color: GlobalStyles.Color.indigo_100,
  },
  helloPosition3: {
    left: "9.82%",
    fontSize: GlobalStyles.FontSize.size_base,
  },
  helloTypo1: {
    left: "57.52%",
    textAlign: "left",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  helloPosition2: {
    top: "17.75%",
    fontWeight: "700",
  },
  helloPosition1: {
    top: "65.13%",
    fontWeight: "700",
  },
  helloTypo: {
    textAlign: "right",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  helloPosition: {
    left: "81.6%",
    textAlign: "right",
  },
  groupPosition2: {
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
    left: 0,
    right: 0,
    position: "absolute",
  },
  groupPosition1: {
    bottom: 0,
    left: 0,
    right: 0,
  },
  groupChild: {
    height: "62%",
    width: "98.16%",
    top: "12%",
    right: "0.92%",
    bottom: "26%",
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
    fontSize: GlobalStyles.FontSize.size_7xl,
    textAlign: "center",
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
    left: 2,
    top: 0,
    position: "absolute",
  },
  agroforestry: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello1: {
    top: "30.5%",
  },
  hello3: {
    top: "47.5%",
  },
  hello5: {
    top: "30.5%",
  },
  hello6: {
    left: "54.75%",
  },
  hello7: {
    top: "47.5%",
  },
  hello9: {
    top: "30.5%",
  },
  hello10: {
    left: "81.9%",
  },
  hello11: {
    left: "87.42%",
    top: "47.5%",
  },
  groupItem: {
    marginTop: 45,
  },
  groupInner: {
    marginTop: -102,
  },
  rectangleView: {
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
    left: 0,
    right: 0,
    top: 0,
  },
  rectangleGroup: {
    top: 0,
    bottom: 0,
  },
  hello13: {
    top: "38.33%",
    left: "23.62%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.white,
  },
  groupParent: {
    height: 60,
  },
  rectangleParent: {
    width: 326,
    height: 400,
  },
  carbonCart1: {
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: GlobalStyles.Padding.padding_6xl,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default CarbonCart1;
