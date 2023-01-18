import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import GlobalStyles from "../../GlobalStyles";
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"

const AddFundsSuccess = ({navigation}) => {
  return (
      <View style={styles.addFundsSuccess}>
        <Pressable
          onPress={() => navigation.navigate("AccountMain")}
        >   
        <View style={styles.iconAwesomeCheckCircleParent}>
          <Image
            style={styles.iconAwesomeCheckCircle}
            source={require("../assets/icon-bluecheck.png")}
          />
          <Text style={[styles.hello, styles.helloFlexBox]}>
            <Text style={styles.congratulations}>
              <Text style={styles.congratulations1}>Congratulations!</Text>
            </Text>
            <Text style={styles.congratulations}>
              <Text style={styles.congratulations1}> </Text>
            </Text>
            <Text style={styles.congratulations}>
              <Text style={styles.added1}>{`£500.00 added `}</Text>
            </Text>
            <Text style={styles.congratulations}>
              <Text style={styles.added1}>successfully</Text>
            </Text>
          </Text>
          <Text style={[styles.hello1, styles.helloFlexBox]}>
            Tap anywhere to continue
          </Text>
        </View>
    </Pressable>
      </View>
  );
};

const styles = StyleSheet.create({
  helloFlexBox: {
    textAlign: "center",
    position: "absolute",
    top:"60%",
    width:"100%",
  },
  iconAwesomeCheckCircle: {

    height:"50%",
    width:"100%",
    position: "absolute",
    resizeMode:"contain",
  },
  congratulations1: {
    fontWeight: "700",
  },
  congratulations: {
    margin: GlobalStyles.Margin.margin_8xs,

  },
  added1: {
  },
  hello: {
    top: verticalScale(219),
    fontSize: GlobalStyles.FontSize.size_4xl,
    lineHeight: verticalScale(24),
    color: GlobalStyles.Color.indigo_100,
  },
  hello1: {
    marginTop: verticalScale(200),
    top: "50%",
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_700,
  },
  iconAwesomeCheckCircleParent: {
    width: "100%",
    height: "100%",
    top: verticalScale(-10),
  },
  addFundsSuccess: {
    flex: 1,
    width: "100%",
    paddingTop: GlobalStyles.Padding.padding_5xl,
    paddingRight: "5%",
    paddingLeft: "5%",
  },
});



export default AddFundsSuccess;
