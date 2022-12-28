import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const SendMoney = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sendMoney}>
      <View style={styles.sendMoneyChild} />
      <Pressable
        style={[styles.sendMoneyInner, styles.mt_749_5]}
        onPress={() => navigation.navigate("Account3")}
      >
        <View
          style={[
            styles.groupParent,
            styles.groupPosition,
            styles.groupParentPosition,
          ]}
        >
          <View style={styles.iconIonicIosArrowForwardWrapper}>
            <Image
              style={[styles.iconIonicIosArrowForward, styles.hello9Position]}
              resizeMode="cover"
              source={require("../assets/icon-ioniciosarrowforward.png")}
            />
          </View>
          <Text style={styles.sendMoney1}>Send Money</Text>
        </View>
      </Pressable>
      <Text style={[styles.helloTypo2, styles.mt24_5, styles.ml25]}>
        Recent
      </Text>
      <Text style={[styles.helloTypo2, styles.mt24_5, styles.ml25]}>
        Contacts
      </Text>
      <View
        style={[
          styles.iconAwesomeSearchParent,
          styles.mt59_5,
          styles.iconLayout,
        ]}
      >
        <Image
          style={[styles.iconAwesomeSearch, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/icon-awesomesearch.png")}
        />
        <Image
          style={[styles.iconMaterialKeyboardVoice, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/icon-materialkeyboardvoice.png")}
        />
      </View>
      <View style={[styles.rectangle, styles.mt12_5, styles.ml25]} />
      <View style={[styles.helloParent, styles.mt_53_5, styles.ml36]}>
        <Text style={[styles.hello2, styles.helloTypo1]}>
          Konopelski Mitchel
        </Text>
        <Text style={[styles.hello3, styles.helloTypo]}>+440123456789</Text>
        <Image
          style={[
            styles.groupChild,
            styles.groupChildLayout,
            styles.groupPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/group-303373.png")}
        />
      </View>
      <View style={[styles.rectangle, styles.mt21_5, styles.ml25]} />
      <View style={[styles.helloGroup, styles.mt_53_5, styles.ml36]}>
        <Text style={[styles.hello4, styles.helloTypo1]}>Bogan Hubert</Text>
        <Text style={[styles.hello5, styles.helloTypo]}>+440123456789</Text>
        <Image
          style={[
            styles.groupChild,
            styles.groupChildLayout,
            styles.groupPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/group-303374.png")}
        />
      </View>
      <View style={[styles.rectangle, styles.mt21_5, styles.ml25]} />
      <View style={[styles.helloGroup, styles.mt_53_5, styles.ml36]}>
        <Text style={[styles.hello6, styles.helloTypo1]}>Fisher Judy</Text>
        <Text style={[styles.hello5, styles.helloTypo]}>+440123456789</Text>
        <Image
          style={[
            styles.groupChild,
            styles.groupChildLayout,
            styles.groupPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/group-303375.png")}
        />
      </View>
      <View
        style={[
          styles.iconAwesomeSearchGroup,
          styles.mt_41_5,
          styles.iconLayout,
        ]}
      >
        <Image
          style={[styles.iconAwesomeSearch, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/icon-awesomesearch.png")}
        />
        <Image
          style={[styles.iconMaterialKeyboardVoice, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/icon-materialkeyboardvoice.png")}
        />
      </View>
      <View style={[styles.sendMoneyItem, styles.mt_739_5, styles.ml161]} />
      <Image
        style={[styles.groupIcon, styles.mt12_5, styles.ml25]}
        resizeMode="cover"
        source={require("../assets/group-30456.png")}
      />
      <View style={[styles.rectangle, styles.mt12_5, styles.ml25]}>
        <Image
          style={[styles.groupChild1, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/group-30474.png")}
        />
        <Pressable
          style={[styles.groupWrapper, styles.helloFramePosition]}
          onPress={() => navigation.navigate("SendContact")}
        >
          <View
            style={[
              styles.helloWrapper,
              styles.groupPosition,
              styles.groupParentPosition,
            ]}
          >
            <Text style={styles.hello8}>Pay</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.helloFrame, styles.helloFramePosition]}
          onPress={() => navigation.navigate("RequestContact")}
        >
          <Text
            style={[styles.hello9, styles.helloTypo2, styles.hello9Position]}
          >
            Request
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_749_5: {
    marginTop: -749.5,
  },
  mt24_5: {
    marginTop: GlobalStyles.Margin.margin_xl,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_3xl,
  },
  mt59_5: {
    marginTop: 59.5,
  },
  mt12_5: {
    marginTop: GlobalStyles.Margin.margin_12xs,
  },
  mt_53_5: {
    marginTop: GlobalStyles.Margin.margin_45xs,
  },
  ml36: {
    marginLeft: GlobalStyles.Margin.margin_14xl,
  },
  mt21_5: {
    marginTop: GlobalStyles.Margin.margin_xs,
  },
  mt_41_5: {
    marginTop: -41.5,
  },
  mt_739_5: {
    marginTop: GlobalStyles.Margin.margin_57xs,
  },
  ml161: {
    marginLeft: GlobalStyles.Margin.margin_50xl,
  },
  groupPosition: {
    left: 0,
    bottom: 0,
    top: 0,
  },
  groupParentPosition: {
    right: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  hello9Position: {
    left: 1,
    top: "50%",
    position: "absolute",
  },
  iconLayout: {
    alignSelf: "center",
    height: 42,
    width: 327,
    borderRadius: GlobalStyles.Border.br_4xl,
  },
  iconPosition: {
    height: 19,
    marginTop: -9.35,
    top: "50%",
    position: "absolute",
  },
  helloTypo1: {
    top: 3,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_sm,
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
    position: "absolute",
  },
  helloTypo: {
    bottom: 6,
    color: GlobalStyles.Color.gray_800,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    width: 45,
    position: "absolute",
  },
  helloFramePosition: {
    top: 2,
    position: "absolute",
  },
  helloTypo2: {
    color: GlobalStyles.Color.gray_800,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_sm,
    textAlign: "left",
  },
  sendMoneyChild: {
    height: 812,
    width: 375,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  iconIonicIosArrowForward: {
    marginTop: -3.73,
    width: 11,
    height: 6,
  },
  iconIonicIosArrowForwardWrapper: {
    top: 11,
    right: 18,
    left: 24,
    height: 27,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  sendMoney1: {
    marginLeft: -58.5,
    top: 30,
    fontSize: GlobalStyles.FontSize.size_2xl,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  groupParent: {
    borderTopLeftRadius: GlobalStyles.Border.br_3xl,
    borderBottomLeftRadius: GlobalStyles.Border.br_3xl,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    backgroundColor: GlobalStyles.Color.white,
  },
  sendMoneyInner: {
    height: 750,
    width: 375,
  },
  iconAwesomeSearch: {
    left: 14,
    width: 19,
  },
  iconMaterialKeyboardVoice: {
    right: 16,
    width: 14,
  },
  iconAwesomeSearchParent: {
    backgroundColor: GlobalStyles.Color.gray_200,
  },
  rectangle: {
    borderRadius: GlobalStyles.Border.br_3xl,
    width: 326,
    height: 64,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello2: {
    right: -1,
  },
  hello3: {
    right: 25,
  },
  groupChild: {
    maxHeight: "100%",
    width: 45,
    bottom: 0,
    top: 0,
  },
  helloParent: {
    width: 187,
    height: 45,
  },
  hello4: {
    right: 8,
  },
  hello5: {
    right: -1,
  },
  helloGroup: {
    width: 161,
    height: 45,
  },
  hello6: {
    right: 22,
  },
  iconAwesomeSearchGroup: {
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  sendMoneyItem: {
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 3,
    width: 52,
    height: 6,
  },
  groupIcon: {
    width: 385,
    height: 45,
  },
  groupChild1: {
    marginLeft: -22,
    bottom: 9,
    height: 45,
    left: "50%",
    width: 45,
  },
  hello8: {
    marginTop: -6,
    marginLeft: 18.5,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_sm,
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  helloWrapper: {
    borderRadius: GlobalStyles.Border.br_sm,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  groupWrapper: {
    right: 10,
    bottom: 4,
    width: 127,
  },
  hello9: {
    marginTop: -7,
  },
  helloFrame: {
    bottom: 2,
    left: 10,
    borderRadius: 22,
    width: 107,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  sendMoney: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default SendMoney;
