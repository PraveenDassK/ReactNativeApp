import React, { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, Pressable, Clipboard } from "react-native";

import GlobalStyles from "../../GlobalStyles";
import api from "../api/api_list"
import AuthContext from "../auth/context";

const Settings = ({navigation}) => {
  const [account, setAccNum] = useState(null)
  const [sortcode, setSortCode] = useState(null)
  const [fullname, setName] = useState(null)
  const [plan, setPlan] = useState(null)
  const [balance, setBal] = useState(null)
  const [currency, setCurrency] = useState(null)
  const authContext = useContext(AuthContext)

  console.log(account)
  useEffect(() => {
    loadData()
  },[])
  
  const loadData = async () => {
    const response = await api.GetAccountByCustomer();
    const accountresponse = await api.GetAccount();
    const data = response.data
    const accountdata = accountresponse.data.details

    setPlan("CurrentAccount")
    setName(accountdata.customerName)
    setBal(accountdata.balance)
    setSortCode(accountdata.identifiers[0].sortCode)
    setAccNum(accountdata.identifiers[0].accountNumber)
    setCurrency(data.currency ? data.currency : "GBP")
  }

  const copyAccount = () => {
    console.log("Copied")
    alert("Account code copied")
    Clipboard.setString(account);
  }

  const copySort = () => {
    console.log("Copied")
    alert("Sort code copied")
    Clipboard.setString(sortcode);
  }

  return (
    <View style={styles.settings}>
      <View style={styles.path33370Parent}>
        <Image
          style={[
            styles.path33370Icon,
            styles.groupLayout,
            styles.groupChildLayout,
            styles.path33370IconPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/path-33370.png")}
        />
        <Text style={styles.hello}>{fullname}</Text>
        <Text style={styles.hello1}>{plan}</Text>
        <Image
          style={[
            styles.groupChild,
            styles.groupLayout,
            styles.groupChildLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-3158.png")}
        />
        <Pressable
          style={styles.helloParent}
          onPress = {() =>navigation.navigate("Login")} 
        >
          <Text style={styles.hello2}>Log out</Text>
          <Image
            style={styles.iconOpenAccountLogout}
            resizeMode="cover"
            source={require("../assets/icon-openaccountlogout.png")}
          />
        </Pressable>
        <Text style={styles.hello3}>{`Terms & Conditions`}</Text>
        <Text style={styles.hello4}>{`Accounts details `}</Text>
        <View style={styles.groupItem} />
        <Text style={[styles.hello5, styles.helloPosition1]}>Currency</Text>
        <Text style={[styles.hello6, styles.helloPosition1]}>Account</Text>
        <Text style={[styles.hello7, styles.helloPosition1]}>Sort Code</Text>
        <View style={[styles.britishPoundsWrapper, styles.wrapperPosition]}>
          <Text
            style={[
              styles.britishPounds,
              styles.textTypo,
              styles.textSpaceBlock,
            ]}
          >
          {currency}
          </Text>
        </View>
        <Pressable style={[styles.wrapper, styles.wrapperPosition]}
          onPress={() => copyAccount()}
        >
          <Text style={[styles.text, styles.textTypo, styles.textSpaceBlock]} >
            {account}
          </Text>
        </Pressable>
        {/* <Image
          style={[styles.maskGroup241, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/mask-group-241.png")}
        /> */}
        <Image
          style={[
            styles.iconMaterialContentCopy,
            styles.iconContentLayout,
            styles.iconContentPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/icon-materialcontentcopy.png")}
        />

          <Image
            style={[
              styles.iconMaterialContentCopy1,
              styles.iconContentLayout,
              styles.iconContentPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/icon-materialcontentcopy.png")}
          />
        <Text style={[styles.text1, styles.textTypo]}>{sortcode}</Text>
        <View style={[styles.historyParent, styles.iconContentLayout]}>
        <Pressable
          onPress={() => navigation.navigate("AccountMain")}
        >
          <Text style={[styles.history, styles.historyTypo]}>Account</Text>
          </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Analytics")}
        >
          <Text style={[styles.history1, styles.historyTypo]}>Analysis</Text>
          </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Carbon")}
        >
          <Text style={[styles.history2, styles.historyTypo]}>Carbon</Text>
          </Pressable>
          <Text style={styles.history3}>Profile</Text>
        </View>
        <Pressable
          style={[styles.groupParent, styles.groupParentPosition]}
          onPress={() => navigation.navigate("ChooseCardsElite")}
        >
          <View style={[styles.rectangleParent, styles.path33370IconPosition]}>
            <View style={styles.groupInner} />
            <View style={styles.maskGroup236} />
          </View>
          <Text style={[styles.hello8, styles.helloTypo, styles.helloPosition]}>
            My Plan
          </Text>
        </Pressable>
        <Pressable
          style={[styles.groupContainer, styles.groupParentPosition]}
          onPress={() => navigation.navigate("Account")}
        >
          <View style={[styles.rectangleParent, styles.path33370IconPosition]}>
            <View style={styles.groupInner} />
            <View style={styles.maskGroup236} />
          </View>
          <Text style={[styles.hello8, styles.helloTypo, styles.helloPosition]}>
            Account
          </Text>
        </Pressable>
        <Pressable
          style={[styles.groupPressable, styles.groupParentPosition]}
          onPress={() => navigation.navigate("SecurityAndPrivacy")}
        >
          <View style={[styles.rectangleParent, styles.path33370IconPosition]}>
            <View style={styles.groupInner} />
            <View style={styles.maskGroup236} />
          </View>
          <Text
            style={[styles.hello10, styles.helloTypo, styles.helloPosition]}
          >{`Security & Privacy`}</Text>
        </Pressable>
        {/* <Pressable
          style={[styles.groupParent1, styles.groupParentPosition]}
          onPress={() => navigation.navigate("SecurityAndPrivacy1")}
        >
          <View style={[styles.rectangleParent, styles.path33370IconPosition]}>
            <View style={styles.groupInner} />
            <View style={styles.maskGroup236} />
          </View>
          <Text style={[styles.hello11, styles.helloTypo]}>About us</Text>
        </Pressable> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  groupChildLayout: {
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  path33370IconPosition: {
    bottom: 0,
    right: 0,
    top: 0,
  },
  helloPosition1: {
    top: "50%",
    left: "10%",
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  wrapperPosition: {
    height: 12,
    right: "15%",
    top: "50%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "right",
    top: "50%",
    fontSize: GlobalStyles.FontSize.size_xs,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    left: "50%",
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  textSpaceBlock: {
    marginTop: -6,
    textAlign: "center",
  },
  iconContentLayout: {
    height: 16,
    position: "absolute",
  },
  iconContentPosition: {
    marginLeft: 60,
    height: 16,
    top: "50%",
    width: 14,
    
    left: "50%",
  },
  historyTypo: {
    opacity: 0.3,
    letterSpacing: 1,
    fontSize: GlobalStyles.FontSize.size_xl,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    color: GlobalStyles.Color.gray_700,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  groupParentPosition: {
    height: 60,
    left: "5%",
    right: "5%",
    top: "50%",
    position: "absolute",
  },
  helloTypo: {
    color: GlobalStyles.Color.black,
    fontSize: GlobalStyles.FontSize.size_lg,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  helloPosition: {
    top: "40%",
    color: GlobalStyles.Color.black,
    fontSize: GlobalStyles.FontSize.size_lg,
  },
  path33370Icon: {
    left: 29,
  },
  hello: {
    top: 78,
    fontSize: GlobalStyles.FontSize.size_8xl,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
    left: "5%",
    position: "absolute",
  },
  hello1: {
    top: 110,
    color: GlobalStyles.Color.gray_700,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    left: "5%",
    position: "absolute",
  },
  groupChild: {
    height:80,
    width: 80,
    top: "10.07%",
    right: "10%",
    bottom: "80.17%",
    left: "74.47%",
  },
  hello2: {
    left: "33.76%",
    color: GlobalStyles.Color.black,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    top: "0%",
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  iconOpenAccountLogout: {
    bottom: 2,
    width: 14,
    left: 0,
    maxHeight: "100%",
    top: 0,
    position: "absolute",
  },
  helloParent: {
    marginLeft: -31,
    bottom: 99,
    width: 71,
    height: 14,
    left: "50%",
    position: "absolute",
  },
  hello3: {
    top: "94.09%",
    marginLeft: -40.56,
    left: "50%",
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.blue_100,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  hello4: {
    marginTop: -195,
    top: "50%",
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    left: "5%",
    position: "absolute",
  },
  groupItem: {
    marginTop: -173,
    borderRadius: GlobalStyles.Border.br_4xl,
    shadowColor: "rgba(1, 1, 253, 0.05)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    height: 111,
    left: "5%",
    right: "5%",
    top: "50%",
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  hello5: {
    marginTop: -154,
  },
  hello6: {
    marginTop: -123,
  },
  hello7: {
    marginTop: -93,
  },
  britishPounds: {
    marginLeft: "45%",
  },
  britishPoundsWrapper: {
    marginTop: -153,
    width: 88,
  },
  text: {
    marginLeft: "-5%",
  },
  wrapper: {
    width: 53,
    marginTop: -123,
  },
  maskGroup241: {
    top: "0%",
    bottom: 546,
    left: 239,
    width: 17,
  },
  iconMaterialContentCopy: {
    marginTop: -126,
  },
  iconMaterialContentCopy1: {
    marginTop: -95,
  },
  text1: {
    marginTop: -92,
    marginLeft: "18%",
  },
  history: {
    left: 0,
  },
  history1: {
    marginLeft: -66,
    left: "50%",
  },
  history2: {
    marginLeft: 19,
    left: "50%",
  },
  history3: {
    right: -1,
    letterSpacing: 1,
    fontSize: GlobalStyles.FontSize.size_xl,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    color: GlobalStyles.Color.gray_700,
    textAlign: "left",
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  historyParent: {
    top: 10,
    width: 300,
    left: 0,
  },
  groupInner: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.blue_100,
    top: "0%",
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
  rectangleParent: {
    left: 0,
    position: "absolute",
  },
  hello8: {
    marginLeft: -23.56,
    left: "50%",
  },
  groupParent: {
    marginTop: -46,
  },
  groupContainer: {
    marginTop: 27,
  },
  hello10: {
    marginLeft: -53.56,
    left: "50%",
  },
  groupPressable: {
    marginTop: 100,
  },
  hello11: {
    top: "36.67%",
    left: "41.1%",
  },
  groupParent1: {
    marginTop: 173,
  },
  path33370Parent: {
    width: "100%",
    height: "100%",
  },
  settings: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.gray_100,
  },
});

export default Settings;
