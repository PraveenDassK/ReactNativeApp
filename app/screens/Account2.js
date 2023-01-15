import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import Screen from "../components/Screen";

const Account2 = ({navigation}) => {
  return (
    <Screen>
    <View style={styles.account2}>
     
      <View style={styles.helloParent}>
        <Text style={styles.hello}>Account verification letter</Text>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.hello1, styles.helloTypo, styles.helloTypo1]}>
          <Text
            style={styles.yayYourDetails}
          >{`Yay! your details has been verified `}</Text>
          <Text style={styles.yayYourDetails}>{` `}</Text>
        </Text>
        <Text style={[styles.hello2, styles.helloTypo, styles.helloTypo1]}>
          Resend email
        </Text>
        <Text
          style={[
            styles.pleaseCheckYourEmailAndCl,
            styles.emailPosition,
            styles.weSentAColor,
          ]}
        >{`Please check your email and click on confirmation link to continue. `}</Text>
        <Text style={[styles.weSentAConfirmationEmailT, styles.emailPosition]}>
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
          style={[styles.iconZocialEmail, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/icon-zocialemail.png")}
        />
      </View>
    </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    top: "50%",
    position: "absolute",
  },
  helloTypo: {
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
  },
  helloTypo1: {
    lineHeight: 14,
    fontSize: GlobalStyles.FontSize.size_base,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "center",
    position: "absolute",
  },
  emailPosition: {
    width: 280,
    textAlign: "center",
    lineHeight: 17,
    fontSize: GlobalStyles.FontSize.size_lg,
    width:"100%",
    top: "50%",
    position: "absolute",
  },
  weSentAColor: {
    color: GlobalStyles.Color.gray_700,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  hello: {
    top: 0,
    left: 6,
    fontSize: GlobalStyles.FontSize.size_4xl,
    textAlign: "center",
    width:"100%",
    fontWeight: "700",
    position: "absolute",
    color: GlobalStyles.Color.indigo_100,
  },
  groupChild: {
    marginTop: -247.5,
    right: 0,
    left: 0,
    borderRadius: GlobalStyles.Border.br_lg,
    height: 543,
    backgroundColor: GlobalStyles.Color.white,
  },
  yayYourDetails: {
    margin: GlobalStyles.Margin.margin_8xs,
    textAlign:"center",
    width:"100%"
  },
  hello1: {
    top: "47.46%",
    color: GlobalStyles.Color.indigo_100,
    lineHeight: 14,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign:"center",
    width:"100%"
  },
  hello2: {
    top: "93.29%",
    width:"100%",
    color: GlobalStyles.Color.blue_100,
  },
  pleaseCheckYourEmailAndCl: {
    marginTop: 105.5,
  },
  emailgmailcom1: {
    color: GlobalStyles.Color.gray_1400,
  },
  weSentAConfirmationEmailT: {
    marginTop: 33.5,
  },
  iconZocialEmail: {
    marginTop: -200,
    opacity: 0.42,
    left:"25%",
    height:"25%",
    width:"50%",
    resizeMode:"contain",
  },
  helloParent: {
    width: "100%",
    height: 611,
  },
  arrowPosition: {
    top: "6%",
    position: "absolute",
  },
  arrowCircle: {
    marginTop: -10.11,
    marginRight: 303.54,
    width: 15,
    height: 15,
  },
  account2: {
    flex: 1,
    width: "100%",
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingRight: GlobalStyles.Padding.padding_7xs,
    backgroundColor: GlobalStyles.Color.gray_100,
  },
});

export default Account2;
