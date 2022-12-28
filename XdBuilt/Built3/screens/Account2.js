import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const Account2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.account2}>
      <Image
        style={styles.path33380Icon}
        resizeMode="cover"
        source={require("../assets/path-33380.png")}
      />
      <Text style={[styles.hello, styles.mt14, styles.mr69]}>
        Account verification letter
      </Text>
      <Pressable
        style={[styles.iconFeatherArrowLeftWrapper, styles.mt_766]}
        onPress={() => navigation.navigate("Account")}
      >
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </Pressable>
      <View style={[styles.account2Child, styles.mt48]} />
      <Text
        style={[
          styles.hello1,
          styles.mt44,
          styles.ml1,
          styles.helloTypo,
          styles.helloTypo1,
        ]}
      >
        <Text
          style={styles.yayYourDetails}
        >{`Yay! your details has been verified `}</Text>
        <Text style={styles.yayYourDetails}>{` `}</Text>
      </Text>
      <Text
        style={[
          styles.hello2,
          styles.mt123,
          styles.helloTypo,
          styles.helloTypo1,
        ]}
      >
        Resend email
      </Text>
      <Text
        style={[styles.emailLayout, styles.mt21, styles.weSentAColor]}
      >{`Please check your email and click on confirmation link to continue. `}</Text>
      <Text style={[styles.emailLayout, styles.mt21]}>
        <Text style={styles.yayYourDetails}>
          <Text style={styles.weSentAColor}>
            We sent a confirmation email to:
          </Text>
        </Text>
        <Text style={styles.yayYourDetails}>
          <Text style={styles.weSentAColor}> </Text>
        </Text>
        <Text style={styles.yayYourDetails}>
          <Text style={[styles.emailgmailcom1, styles.helloTypo]}>
            email@gmail.com
          </Text>
        </Text>
      </Text>
      <Image
        style={[styles.iconZocialEmail, styles.mt_433]}
        resizeMode="cover"
        source={require("../assets/icon-zocialemail.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt14: {
    marginTop: GlobalStyles.Margin.margin_9xs,
  },
  mr69: {
    marginRight: 69,
  },
  mt_766: {
    marginTop: GlobalStyles.Margin.margin_59xs,
  },
  mt48: {
    marginTop: GlobalStyles.Margin.margin_26xl,
  },
  mt44: {
    marginTop: GlobalStyles.Margin.margin_22xl,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_24xs,
  },
  mt123: {
    marginTop: 123,
  },
  mt21: {
    marginTop: GlobalStyles.Margin.margin_sm,
  },
  mt_433: {
    marginTop: -433,
  },
  helloTypo: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
  },
  helloTypo1: {
    lineHeight: 14,
    fontSize: GlobalStyles.FontSize.size_sm,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
  },
  weSentAColor: {
    color: GlobalStyles.Color.gray_800,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  path33380Icon: {
    width: 375,
    height: 812,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    fontWeight: "700",
    color: GlobalStyles.Color.indigo,
  },
  iconFeatherArrowLeft: {
    position: "absolute",
    marginLeft: -0.5,
    bottom: 4,
    left: "50%",
    width: 17,
    height: 17,
  },
  iconFeatherArrowLeftWrapper: {
    backgroundColor: GlobalStyles.Color.gray_300,
    width: 55,
    height: 45,
    alignSelf: "flex-start",
  },
  account2Child: {
    borderRadius: GlobalStyles.Border.br_md,
    width: 326,
    height: 543,
    backgroundColor: GlobalStyles.Color.white,
  },
  yayYourDetails: {
    margin: GlobalStyles.Margin.margin_25xs,
  },
  hello1: {
    color: GlobalStyles.Color.indigo,
    lineHeight: 14,
    fontSize: GlobalStyles.FontSize.size_sm,
  },
  hello2: {
    color: GlobalStyles.Color.blue,
  },
  emailLayout: {
    width: 280,
    textAlign: "center",
    lineHeight: 17,
    fontSize: GlobalStyles.FontSize.size_base,
  },
  emailgmailcom1: {
    color: GlobalStyles.Color.gray_1300,
  },
  iconZocialEmail: {
    width: 97,
    height: 66,
    opacity: 0.42,
  },
  account2: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default Account2;
