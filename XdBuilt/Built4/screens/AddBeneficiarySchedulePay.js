import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const AddBeneficiarySchedulePay = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.addBeneficiarySchedulePay}>
      <View style={styles.addBeneficiarySchedulePayInner}>
        <View style={[styles.rectangleParent, styles.timePosition]}>
          <View style={[styles.groupChild, styles.timePosition]} />
          <View style={[styles.groupItem, styles.groupItemPosition]} />
          <Text style={[styles.hello, styles.textTypo]}>Bank Details</Text>
          <View style={[styles.homeIndicator, styles.statusBarPosition]} />
        </View>
      </View>
      <View
        style={[
          styles.addBeneficiarySchedulePayChild,
          styles.mt28_5,
          styles.ml153,
        ]}
      />
      <View style={[styles.helloWrapper, styles.mt41_5, styles.ml25]}>
        <Text style={[styles.hello1, styles.helloTypo1]}>Sort Code</Text>
      </View>
      <View style={[styles.helloParent, styles.mt101_5, styles.ml25]}>
        <Text style={[styles.hello1, styles.helloTypo1]}>Name of the Bank</Text>
        <Text style={[styles.hello3, styles.helloTypo]}>Bank Name</Text>
        <View style={[styles.groupInner, styles.groupPosition]} />
      </View>
      <View style={[styles.helloParent, styles.mt40_5, styles.ml25]}>
        <Text style={[styles.hello1, styles.helloTypo1]}>Account Name</Text>
        <Text style={[styles.hello3, styles.helloTypo]}>Ortiz Tyrese</Text>
        <View style={[styles.groupInner, styles.groupPosition]} />
      </View>
      <View style={[styles.helloParent, styles.mt41_5, styles.ml25]}>
        <Text style={[styles.hello1, styles.helloTypo1]}>
          International Bank Account Number (IBAN)
        </Text>
        <Text style={[styles.hello3, styles.helloTypo]}>01234567890</Text>
        <View style={[styles.groupInner, styles.groupPosition]} />
      </View>
      <View style={[styles.groupView, styles.mt10_5, styles.ml26]}>
        <Text style={[styles.hello8, styles.helloTypo]}>00 - 00 - 00</Text>
        <View style={[styles.groupChild2, styles.groupPosition]} />
      </View>
      <View style={[styles.statusBarBlack, styles.mt_811_5]}>
        <View style={[styles.rectangle, styles.groupItemPosition]} />
        <View style={[styles.statusBar, styles.statusBarPosition]}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={[styles.text, styles.textTypo]}>9:41</Text>
          </View>
          <Image
            style={styles.batteryIcon}
            resizeMode="cover"
            source={require("../assets/icon-awesomebatterythreequarters.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.networkPosition]}
            resizeMode="cover"
            source={require("../assets/icon-awesomewifi.png")}
          />
          <View style={[styles.network, styles.networkPosition]}>
            <View style={[styles.networkChild, styles.networkLayout]} />
            <View
              style={[
                styles.networkItem,
                styles.networkLayout,
                styles.networkPosition1,
              ]}
            />
            <View
              style={[
                styles.networkInner,
                styles.networkLayout,
                styles.networkPosition1,
              ]}
            />
            <View style={[styles.rectangleView, styles.networkLayout]} />
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.groupPressable, styles.mt152_5, styles.ml25]}
        onPress={() => navigation.navigate("SendAccountSelection")}
      >
        <View style={[styles.rectangleParent, styles.timePosition]}>
          <View style={[styles.rectangleParent, styles.timePosition]}>
            <View style={[styles.rectangleGroup, styles.statusBarPosition]}>
              <View style={styles.groupChild3} />
              <View style={styles.maskGroup236} />
            </View>
          </View>
          <Text style={[styles.hello9, styles.helloTypo1]}>Confirm</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt28_5: {
    marginTop: GlobalStyles.Margin.margin_2xs,
  },
  ml153: {
    marginLeft: GlobalStyles.Margin.margin_62xl,
  },
  mt41_5: {
    marginTop: GlobalStyles.Margin.margin_11xl,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
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
    marginLeft: GlobalStyles.Margin.margin_6xs,
  },
  mt_811_5: {
    marginTop: GlobalStyles.Margin.margin_88xs,
  },
  mt152_5: {
    marginTop: 152.5,
  },
  timePosition: {
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupItemPosition: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  textTypo: {
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_4xl,
    position: "absolute",
  },
  statusBarPosition: {
    top: "50%",
    position: "absolute",
  },
  helloTypo1: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  helloTypo: {
    fontSize: GlobalStyles.FontSize.size_6xl,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
    position: "absolute",
  },
  groupPosition: {
    height: 2,
    borderTopWidth: 1,
    bottom: -1,
    borderColor: "#707070",
    borderStyle: "solid",
    right: 0,
    position: "absolute",
  },
  networkPosition: {
    width: 17,
    marginTop: -3,
    top: "50%",
    position: "absolute",
  },
  networkLayout: {
    width: 3,
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    bottom: 0,
    position: "absolute",
  },
  networkPosition1: {
    left: "50%",
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
  },
  groupChild: {
    backgroundColor: GlobalStyles.Color.gray_300,
    left: 0,
    right: 0,
  },
  groupItem: {
    top: 63,
    borderTopLeftRadius: GlobalStyles.Border.br_4xl,
    borderTopRightRadius: GlobalStyles.Border.br_4xl,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowRadius: 20,
    elevation: 20,
  },
  hello: {
    marginLeft: -56.5,
    top: 95,
    lineHeight: 25,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_4xl,
    left: "50%",
  },
  homeIndicator: {
    marginTop: 393,
    right: 120,
    left: 121,
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    height: 5,
  },
  rectangleParent: {
    left: 0,
    right: 0,
  },
  addBeneficiarySchedulePayInner: {
    height: 812,
    width: 375,
  },
  addBeneficiarySchedulePayChild: {
    borderTopWidth: 3,
    width: 52,
    height: 6,
    borderColor: "#707070",
    borderStyle: "solid",
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_800,
    left: 0,
    top: 0,
  },
  helloWrapper: {
    width: 63,
    height: 16,
  },
  hello3: {
    top: 26,
    left: 1,
  },
  groupInner: {
    left: 0,
  },
  helloParent: {
    width: 311,
    height: 62,
  },
  hello8: {
    left: 0,
    top: 0,
  },
  groupChild2: {
    left: -1,
  },
  groupView: {
    width: 310,
    height: 36,
  },
  rectangle: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 6,
    elevation: 6,
    top: 0,
  },
  text: {
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
    textAlign: "left",
    fontSize: GlobalStyles.FontSize.size_4xl,
    left: 0,
    top: 0,
  },
  time: {
    width: 40,
    left: 0,
  },
  batteryIcon: {
    width: 22,
    height: 11,
    marginTop: -3,
    top: "50%",
    right: 0,
    position: "absolute",
  },
  wifiIcon: {
    right: 37,
    height: 12,
  },
  networkChild: {
    height: 4,
    left: 0,
  },
  networkItem: {
    marginLeft: -3.5,
    height: 6,
  },
  networkInner: {
    marginLeft: 0.5,
    height: 9,
  },
  rectangleView: {
    right: 0,
    top: 0,
  },
  network: {
    right: 68,
    height: 11,
  },
  statusBar: {
    marginTop: -15,
    right: 16,
    left: 15,
    height: 26,
  },
  statusBarBlack: {
    height: 44,
    width: 375,
  },
  groupChild3: {
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
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  rectangleGroup: {
    marginTop: -30,
    height: 60,
    left: 0,
    right: 0,
  },
  hello9: {
    top: "36.67%",
    left: "39.26%",
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
  },
  groupPressable: {
    width: 326,
    height: 60,
  },
  addBeneficiarySchedulePay: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default AddBeneficiarySchedulePay;
