import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AddBeneficiarySchedulePay = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.addBeneficiarySchedulePay}>
      <View style={styles.groupView1}>
        <View style={styles.groupView}>
          <View style={styles.rectangleView} />
          <View style={styles.rectangleView1} />
          <Text style={styles.hello}>Bank Details</Text>
          <View style={styles.homeIndicator} />
        </View>
      </View>
      <View style={[styles.lineView, styles.mt28_5, styles.ml153]} />
      <View style={[styles.groupView2, styles.mt41_5, styles.ml25]}>
        <Text style={styles.hello1}>Sort Code</Text>
      </View>
      <View style={[styles.groupView3, styles.mt101_5, styles.ml25]}>
        <Text style={styles.hello2}>Name of the Bank</Text>
        <Text style={styles.hello3}>Bank Name</Text>
        <View style={styles.lineView1} />
      </View>
      <View style={[styles.groupView4, styles.mt40_5, styles.ml25]}>
        <Text style={styles.hello4}>Account Name</Text>
        <Text style={styles.hello5}>Ortiz Tyrese</Text>
        <View style={styles.lineView2} />
      </View>
      <View style={[styles.groupView5, styles.mt41_5, styles.ml25]}>
        <Text style={styles.hello6}>
          International Bank Account Number (IBAN)
        </Text>
        <Text style={styles.hello7}>01234567890</Text>
        <View style={styles.lineView3} />
      </View>
      <View style={[styles.groupView6, styles.mt10_5, styles.ml26]}>
        <Text style={styles.hello8}>00 - 00 - 00</Text>
        <View style={styles.lineView4} />
      </View>
      <View style={[styles.statusBarBlack, styles.mt_811_5]}>
        <View style={styles.rectangle} />
        <View style={styles.statusBar}>
          <View style={styles.time}>
            <Text style={styles.text}>9:41</Text>
          </View>
          <Image
            style={styles.batteryIcon}
            resizeMode="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <View style={styles.network}>
            <View style={styles.rectangleView2} />
            <View style={styles.rectangleView3} />
            <View style={styles.rectangleView4} />
            <View style={styles.rectangleView5} />
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.groupPressable, styles.mt152_5, styles.ml25]}
        onPress={() => navigation.navigate("SendAccountSelection")}
      >
        <View style={styles.groupView8}>
          <View style={styles.component20866}>
            <View style={styles.groupView7}>
              <View style={styles.rectangleView6} />
              <View style={styles.maskGroup236} />
            </View>
          </View>
          <Text style={styles.hello9}>Confirm</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt28_5: {
    marginTop: 28.5,
  },
  ml153: {
    marginLeft: 153,
  },
  mt41_5: {
    marginTop: 41.5,
  },
  ml25: {
    marginLeft: 25,
  },
  mt101_5: {
    marginTop: 101.5,
  },
  mt40_5: {
    marginTop: 40.5,
  },
  mt10_5: {
    marginTop: 10.5,
  },
  ml26: {
    marginLeft: 26,
  },
  mt_811_5: {
    marginTop: -811.5,
  },
  mt152_5: {
    marginTop: 152.5,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#f6f5f8",
  },
  rectangleView1: {
    position: "absolute",
    top: 63,
    right: 0,
    bottom: 0,
    left: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
  },
  hello: {
    position: "absolute",
    marginLeft: -56.5,
    top: 95,
    left: "50%",
    fontSize: 20,
    lineHeight: 25,
    fontWeight: "700",
    fontFamily: "Typo Grotesk",
    color: "#00003d",
    textAlign: "left",
  },
  homeIndicator: {
    position: "absolute",
    marginTop: 393,
    top: "50%",
    right: 120,
    left: 121,
    borderRadius: 100,
    backgroundColor: "#000",
    height: 5,
  },
  groupView: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  groupView1: {
    position: "relative",
    width: 375,
    height: 812,
  },
  lineView: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 3,
    width: 52,
    height: 6,
  },
  hello1: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  groupView2: {
    position: "relative",
    width: 63,
    height: 16,
  },
  hello2: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  hello3: {
    position: "absolute",
    top: 26,
    left: 1,
    fontSize: 24,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  lineView1: {
    position: "absolute",
    right: 0,
    bottom: -1,
    left: 0,
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 1,
    height: 2,
  },
  groupView3: {
    position: "relative",
    width: 311,
    height: 62,
  },
  hello4: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  hello5: {
    position: "absolute",
    top: 26,
    left: 1,
    fontSize: 24,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  lineView2: {
    position: "absolute",
    right: 0,
    bottom: -1,
    left: 0,
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 1,
    height: 2,
  },
  groupView4: {
    position: "relative",
    width: 311,
    height: 62,
  },
  hello6: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#999",
    textAlign: "left",
  },
  hello7: {
    position: "absolute",
    top: 26,
    left: 1,
    fontSize: 24,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  lineView3: {
    position: "absolute",
    right: 0,
    bottom: -1,
    left: 0,
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 1,
    height: 2,
  },
  groupView5: {
    position: "relative",
    width: 311,
    height: 62,
  },
  hello8: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 24,
    fontFamily: "Helvetica",
    color: "#00003d",
    textAlign: "left",
  },
  lineView4: {
    position: "absolute",
    right: 0,
    bottom: -1,
    left: -1,
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 1,
    height: 2,
  },
  groupView6: {
    position: "relative",
    width: 310,
    height: 36,
  },
  rectangle: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
  },
  text: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 20,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "rgba(0, 0, 0, 0.87)",
    textAlign: "left",
  },
  time: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: 40,
  },
  batteryIcon: {
    position: "absolute",
    marginTop: -3,
    top: "50%",
    right: 0,
    width: 22,
    height: 11,
  },
  wifiIcon: {
    position: "absolute",
    marginTop: -3,
    top: "50%",
    right: 37,
    width: 17,
    height: 12,
  },
  rectangleView2: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 4,
  },
  rectangleView3: {
    position: "absolute",
    marginLeft: -3.5,
    bottom: 0,
    left: "50%",
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 6,
  },
  rectangleView4: {
    position: "absolute",
    marginLeft: 0.5,
    bottom: 0,
    left: "50%",
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
    height: 9,
  },
  rectangleView5: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    borderRadius: 2,
    backgroundColor: "#272727",
    width: 3,
  },
  network: {
    position: "absolute",
    marginTop: -3,
    top: "50%",
    right: 68,
    width: 17,
    height: 11,
  },
  statusBar: {
    position: "absolute",
    marginTop: -15,
    top: "50%",
    right: 16,
    left: 15,
    height: 26,
  },
  statusBarBlack: {
    position: "relative",
    width: 375,
    height: 44,
  },
  rectangleView6: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 15,
    backgroundColor: "#0101fd",
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
  },
  maskGroup236: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 13,
    left: 0,
  },
  groupView7: {
    position: "absolute",
    marginTop: -30,
    top: "50%",
    right: 0,
    left: 0,
    height: 60,
  },
  component20866: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  hello9: {
    position: "absolute",
    top: "36.67%",
    left: "39.26%",
    fontSize: 15,
    lineHeight: 17,
    textTransform: "uppercase",
    fontFamily: "Helvetica",
    color: "#fff",
    textAlign: "left",
  },
  groupView8: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  groupPressable: {
    position: "relative",
    width: 326,
    height: 60,
  },
  addBeneficiarySchedulePay: {
    position: "relative",
    backgroundColor: "#4b4b4b",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default AddBeneficiarySchedulePay;
