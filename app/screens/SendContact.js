import React, { useContext, useEffect, useState, Keyboard } from "react";
import { Text, StyleSheet, Image, View, Pressable, TextInput } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import api from "../api/api_list"
import AuthContext from "../auth/context";
import moment from "moment";

const SendContact = ({navigation}) => {
  const [amount, setAmount] = useState("")
  const [note, setNote] = useState("")
  const [userData, setCode] = useState("")
  const [account, setAccNum] = useState(null)
  const [sortcode, setSortCode] = useState(null)
  const [fullname, setName] = useState(null)
  const[number,setnumber]=useState(null)
  const [plan, setPlan] = useState(null)
  const [balance, setBal] = useState(null)
  const [currency, setCurrency] = useState(null)
  const authContext = useContext(AuthContext)

  useEffect(() => {
    loadData()
  },[])
  
  const loadData = async () => {
    const response = await api.GetAccountByCustomer(authContext.userID);
    const accountresponse = await api.GetCustomerDetails(authContext.accountID);
    const data = response.data.details.content[0]
    // const accountdata = accountresponse.data.details.accountDetails[0]
    const phonedata = accountresponse.data.details.phoneNumbers[0]
    console.log(data)
    console.log(accountresponse.data.details)
    setSortCode(data.identifiers[0].sortCode)
    setAccNum(data.identifiers[0].accountNumber)
    setName(data.name)
    setBal(data.balance)
    setnumber(phonedata.phoneNo)
    // setPlan(accountdata.accountType)
    setCurrency(data.currency)
  } 
  let payment = (amount ? amount : 1).toString()

  console.log(payment)

  const sendContact = (amount) => {
    console.log(amount)
    navigation.navigate("SentMoney",{amount: amount,fullname: fullname})
  }
  let date = (payment? payment.createdDate: "0")
 
  return (
    <View style={styles.requestContact}>
      <View style={styles.groupParent}>
        <View style={styles.helloParent}>
          <Text
            style={[
              styles.hello,
              styles.helloTypo1,
              styles.helloColor,
              styles.helloTypo2,
            ]}
          >
            Joined {moment(date).format('MMMM YYYY')}
          </Text>
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/group-303373.png")}
          />
          <Text style={[styles.hello1, styles.helloTypo]}>{fullname}{'\n'}</Text>
          <Text style={[styles.hello2, styles.helloTypo]}>{number}</Text>
        </View>
        <View
          style={[
            styles.groupItem,
            styles.groupPosition1,
          ]}
        />

        <View style={[styles.groupContainer, styles.helloParent2Position]}>
          <View style={[styles.helloContainer, styles.groupViewPosition]}>
          <Pressable
              onPress={() => {
                setAmount(20)
              }}
            >
            <Text style={[styles.hello4, styles.helloTypo1, styles.helloColor]}>
              £20
            </Text>
            </Pressable>

          </View>
          <View style={[styles.groupView, styles.groupViewPosition]}>
          <Pressable
              onPress={() => {
                setAmount(50)
              }}
            >
            <Text style={[styles.hello4, styles.helloTypo1, styles.helloColor]}>
              £50
            </Text>
            </Pressable>

          </View>
          <View
            style={[
              styles.helloParent1,
              styles.parentPosition,
              styles.parentPosition1,
            ]}
          >
            <Pressable
              onPress={() => {
                setAmount(100)
              }}
            >
            <Text style={[styles.hello4, styles.helloTypo1, styles.helloColor]}>
              £100
            </Text>
            </Pressable>

          </View>
        </View>
        <View style={[styles.helloParent2, styles.helloParent2Position]}>
          <Text style={[styles.hello7, styles.helloTypo1, styles.helloColor]}>
            Pay{"\n"}
          </Text>
          <TextInput style={[styles.hello8, styles.helloTypo1]} placeholder={"£"+payment} keyboardType="numeric"/>
          <View
            style={[
              styles.lineView,
              styles.parentPosition,
              styles.lineViewBorder,
            ]}
          />
        </View>
        <Pressable
          style={styles.groupPressable}
          onPress={() => sendContact(amount)}
        >
          <View
            style={[
              styles.rectangleParent,
              styles.parentPosition,
              styles.parentPosition1,
            ]}
          >
            <View style={styles.rectangleView} />
            <View style={[styles.maskGroup236, styles.parentPosition]} />
          </View>
          <Text style={styles.hello9}>Send</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  helloTypo1: {
    textAlign: "center",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloColor: {
    color: GlobalStyles.Color.gray_700,
    textAlign: "center",
  },
  helloTypo2: {
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_700,
    width:"100%",
    textAlign:"center",
  },
  helloTypo: {
    color: GlobalStyles.Color.indigo_100,
    fontSize: GlobalStyles.FontSize.size_4xl,
    textAlign: "center",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  lineViewBorder: {
    height: 2,
    borderTopWidth: 1,
    borderColor: "#707070",
    borderStyle: "solid",
  },
  groupPosition1: {
    left: "22%",
    right:0,
    top: "50%",
    position: "absolute",
  },
  helloParent2Position: {
    left: 50,
    top: "47%",
    position: "absolute",
  },
  groupViewPosition: {
    width: 62,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  groupPosition: {
    height: "17%",
    width: 18,
    bottom: 0,
    left: "50%",
    position: "absolute",
  },
  parentPosition: {
    right: "10%",
    position: "absolute",
  },
  parentPosition1: {
    bottom: 0,
    right: 0,
    top: 0,
  },
  hello: {
    top: 148,
  },
  groupChild: {
    left:"50%",
    marginLeft:-35,
    height:80,
    width:80,
    top: 0,
    resizeMode:"contain",
    position: "absolute",
    justifyContent: 'center',
    alignItems: 'center'
  },
  hello1: {
    top: 90,
    width:"100%",
    textAlign:"center",
    fontWeight: "700",
  },
  hello2: {
    top: 120,
    width:"100%",
    textAlign:"center",
  },
  helloParent: {
    top: 44,
    height: 172,
    width:"100%",
    position: "absolute",
  },
  groupItem: {
    marginTop: 31.75,
    right: 32,
  },
  hello3: {
    top: 5,
    left: 23,
  },
  iconMaterialKeyboardVoice: {
    marginTop: -9.35,
    right: 16,
    width: 14,
    height: 19,
    top: "50%",
    position: "absolute",
  },
  helloGroup: {
    marginTop: 44.5,
    borderRadius: GlobalStyles.Border.br_5xl,
    backgroundColor: GlobalStyles.Color.gray_200,
    height: 42,
    right: 31,
  },
  hello4: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    lineHeight: 32,
    top: 0,
    left: 0,
  },
  groupInner: {
    marginLeft: -7.94,
  },
  helloContainer: {
    left: 0,
  },
  groupIcon: {
    marginLeft: -7.71,
  },
  groupView: {
    marginLeft: -27.5,
    left: "50%",
  },
  groupChild1: {
    marginLeft: -7.22,
  },
  helloParent1: {
    width: 76,
  },
  groupContainer: {
    marginTop: 149,
    height: 50,
    right: 31,
  },
  hello7: {
    width:"100%",
    textAlign:"center",
    fontSize: GlobalStyles.FontSize.size_xl,
    top: 0,
  },
  hello8: {
    top: "15%",
    marginTop:20,
    width:"100%",
    fontSize: GlobalStyles.FontSize.size_13xl,
    lineHeight: 65,
    color: GlobalStyles.Color.blue_100,
  },
  lineView: {
    bottom: -1,
    left: -1,
  },
  helloParent2: {
    marginTop: -64.5,
    height: 98,
    right: 32,
  },
  rectangleView: {
    height: "100%",
    top: "-20%",
    right: "0%",
    bottom: "0%",
    left: "5%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.blue_100,
    position: "absolute",
    width: "90%",
  },
  maskGroup236: {
    bottom: 13,
    top: 0,
    left: 0,
  },
  rectangleParent: {
    left: 0,
  },
  hello9: {
    width:"100%",
    textAlign:"center",
    textAlignVertical: "center",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    textAlign: "center",
    top:"10%"
  },
  groupPressable: {
    bottom: 49,
    height: 60,
    width:"100%",
    position: "absolute",
  },
  groupParent: {
    borderTopLeftRadius: GlobalStyles.Border.br_4xl,
    borderTopRightRadius: GlobalStyles.Border.br_4xl,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: "100%",
    height: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
  requestContact: {
    flex: 1,
    paddingTop: GlobalStyles.Padding.padding_xs,
    width: "100%",
    backgroundColor: GlobalStyles.Color.gray_100,
  },
});

export default SendContact;
