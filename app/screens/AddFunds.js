import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ActivityIndicator,
  Alert,
  Pressable,
} from "react-native";
import GlobalStyles from "../../GlobalStyles";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../config/scaling";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import api from "../api/api_list";
import apiCall from "../api/apiCall";
import AuthContext from "../auth/context";

import { Dropdown } from "react-native-element-dropdown";
import KeyboardAvoider from "../components/KeyboardAvoider";

const AddFunds = ({ navigation }) => {
  //Card data
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [cardData, setCard] = useState([]);
  const [amount, setAmount] = useState("1");

  const { userID, accountID } = useContext(AuthContext);

  //let cardData = [{label: "01614842", value: "01614842"}]
  //Calls the API once during load
  useEffect(() => {
    loadData();
  }, []);

  //Gets the data for the user
  const loadData = async () => {
    setIsLoading(true);
    const response = await apiCall.GetAllAccounts(userID);
    console.log("response", response);
    setData(response);

    let accountList = [];
    response.forEach((account, i) => {
      console.log(account);
      accountList.push({
        label: account.name + " £" + account.balance,
        value: i,
      });
    });
    setCard(accountList);
    setIsLoading(false);
  };

  //Screen components

  const accountCode = "Card ID : " + value;
  let fromName = "";

  const requestContact = (amount) => {
    //Check if an account has been selected
    if (!value && value != 0) {
      alert("Please select a account");
      return;
    }

    if (!amount) {
      alert("!");
    }

    const checkText = (text) => {
      setAmount(text);
      //First check if there is a value
      if (
        //First check if there is a value
        text == " " &&
        //Then check if it is above a limit
        text < 1000
        //Any other checks for the text add it here
      ) {
        setValidator(false);
      } else {
        //If all the checks pass then set the validator to true
        setValidator(true);
      }
    };
    const chosenAccount = data[value];
    if (!chosenAccount) return Alert.alert("Select a card");
    const benData = {
      bankName: "Bank",
      accountName: chosenAccount.name,
      accountNumber: chosenAccount.identifiers[0].accountNumber,
      iban: chosenAccount.identifiers[0].iban,
      sortCode: chosenAccount.identifiers[0].sortCode,
    };

    const requestObj = {
      "sourceAccountId": accountID,
      "destination": {
        "type": "SCAN",
        "id": "A1226WEM",
        "accountNumber": chosenAccount.identifiers[0].accountNumber,
        "sortCode": chosenAccount.identifiers[0].sortCode,
        "name": chosenAccount.name,
        "phoneNumber": ""
      },
      "currency": "GBP",
      "amount": amount,
      "reference": "Transfer"
    }

    console.log(requestObj)

    console.log(benData);
    navigation.navigate("Pin", {
      amount: amount,
      name: benData.accountName,
      successScreen: "Success",
      successText:
        "Transfer to " + benData.accountName + " of £" + amount + " successful",
      beneficiaryData: requestObj,
    });
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={"large"} color="black" />
      </View>
    );
  }

  return (
    <KeyboardAvoider>
      <Pressable style={styles.groupParent} onPress={Keyboard.dismiss}>
        <View style={styles.helloParent}>
          <Text style={[styles.hello1, styles.helloTypo]}>
            {fromName}
            {"\n"}
          </Text>
          <Text style={[styles.hello2, styles.helloTypo, { color: "#999" }]}>
            {accountCode}
          </Text>

          <Text
            style={[styles.Select_account, styles.helloTypo, { color: "#999" }]}
          >
            Select Account
          </Text>
          <View style={[styles.selectBox]}>
            <Dropdown
              style={styles.dropdownStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={cardData}
              maxHeight={100}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? "Select a card" : "...."}
              value={cardData}
              onChange={(item) => {
                setValue(item.value);
                setIsFocus(false);
              }}
            />
          </View>
        </View>

        <View style={[styles.groupItem, styles.groupPosition1]} />

        <View style={[styles.groupContainer, styles.helloParent2Position]}>
          <View style={[styles.hello4, styles.groupViewPosition]}>
            <TouchableOpacity
              onPress={() => {
                setAmount("20");
              }}
            >
              <Text style={[styles.hello4, styles.helloColor]}>£20</Text>
              <View
                style={[{ alignItems: "center", justifyContent: "flex-start" }]}
              >
                <MaterialCommunityIcons
                  name="chevron-up"
                  size={40}
                  color="grey"
                  style={{ opacity: 0.7 }}
                />
                <MaterialCommunityIcons
                  name="chevron-up"
                  size={30}
                  color="grey"
                  style={{ position: "absolute", top: "40%", opacity: 0.4 }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={[{ width: "30%", left: "36%" }]}>
            <TouchableOpacity
              onPress={() => {
                console.log("500000000000");
                setAmount("50");
              }}
            >
              <Text style={[styles.hello4, styles.helloColor]}>£50</Text>
              <View
                style={[{ alignItems: "center", justifyContent: "flex-start" }]}
              >
                <MaterialCommunityIcons
                  name="chevron-up"
                  size={40}
                  color="grey"
                  style={{ opacity: 0.7 }}
                />
                <MaterialCommunityIcons
                  name="chevron-up"
                  size={30}
                  color="grey"
                  style={{ position: "absolute", top: "40%", opacity: 0.4 }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.helloParent1,
              styles.parentPosition,
              styles.parentPosition1,
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                console.log("1000000000000000");
                setAmount("100");
              }}
            >
              <Text style={[styles.hello4, styles.helloColor]}>£100</Text>
              <View
                style={[{ alignItems: "center", justifyContent: "flex-start" }]}
              >
                <MaterialCommunityIcons
                  name="chevron-up"
                  size={40}
                  color="grey"
                  style={{ opacity: 0.7 }}
                />
                <MaterialCommunityIcons
                  name="chevron-up"
                  size={30}
                  color="grey"
                  style={{ position: "absolute", top: "40%", opacity: 0.4 }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.helloParent2, styles.helloParent2Position]}>
          <Text style={[styles.hello7, { color: "#999" }]}>Pay{"\n"}</Text>
          <TextInput
            style={[styles.hello8, styles.helloTypo1]}
            placeholder={"£" + amount}
            keyboardType="numeric"
            placeholderTextColor={"blue"}
            value={amount}
            onChangeText={(e) => setAmount(e)}
          />
          <View
            style={[
              styles.lineView,
              styles.parentPosition,
              styles.lineViewBorder,
            ]}
          />
        </View>
        <TouchableOpacity
          style={styles.groupTouchableOpacity}
          onPress={() => requestContact(amount)}
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
          <Text style={styles.hello9}>ADD FUNDS</Text>
        </TouchableOpacity>
      </Pressable>
    </KeyboardAvoider>
  );
};

const styles = StyleSheet.create({
  dropdownStyle: {
    width: "95%",
    marginLeft: "2.5%",
    paddingTop: "2.5%",
  },
  selectedTextStyle: {
    color: "black",
    marginLeft: "15%",
    marginTop: "1%",
  },
  selectBox: {
    backgroundColor: "pink",
    width: "90%",
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "5%",
    height: "30%",
    borderRadius: 15,
    backgroundColor: "#F6F5F8",
  },
  Select_account: {
    top: verticalScale(-5),
    left: "5.5%",
  },
  inputSearchStyle: {
    width: 100,
  },
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
    width: "100%",
    textAlign: "center",
  },
  helloTypo: {
    color: GlobalStyles.Color.indigo_100,
    fontSize: GlobalStyles.FontSize.size_4xl,
    textAlign: "center",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  lineViewBorder: {
    height: verticalScale(2),
    borderTopWidth: 1,
    borderColor: "#707070",
    borderStyle: "solid",
  },
  groupPosition1: {},
  helloParent2Position: {
    width: "100%",
    top: "45%",
    position: "absolute",
  },
  groupViewPosition: {
    width: "25%",
    bottom: verticalScale(0),
    top: verticalScale(0),
    position: "absolute",
  },
  groupPosition: {
    height: "17%",
    width: horizontalScale(18),
    bottom: verticalScale(0),
    left: "50%",
    position: "absolute",
  },
  parentPosition: {
    right: "10%",
    position: "absolute",
  },
  parentPosition1: {
    bottom: verticalScale(0),
    right: horizontalScale(0),
    top: verticalScale(0),
  },
  hello: {
    top: verticalScale(148),
  },
  groupChild: {},
  hello1: {
    textAlign: "center",
    fontWeight: "700",
  },
  hello2: {
    top: verticalScale(120),
    width: "100%",
    textAlign: "center",
  },
  hello5: {
    top: verticalScale(150),
    width: "100%",
    textAlign: "center",
  },
  helloParent: {
    top: verticalScale(44),
    height: verticalScale(172),
    width: "100%",
    position: "absolute",
  },
  groupItem: {},
  hello3: {},
  iconMaterialKeyboardVoice: {
    top: "50%",
    position: "absolute",
  },
  helloGroup: {
    marginTop: verticalScale(44.5),
    borderRadius: GlobalStyles.Border.br_5xl,
    backgroundColor: GlobalStyles.Color.gray_200,
    height: verticalScale(42),
    right: horizontalScale(31),
  },
  hello4: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    lineHeight: verticalScale(30),
    top: verticalScale(0),
    width: "100%",
  },
  groupInner: {
    marginLeft: horizontalScale(-7.94),
  },
  helloContainer: {
    width: "100%",
    left: "10%",
  },
  groupIcon: {},
  groupView: {
    left: "50%",
  },
  groupChild1: {},
  helloParent1: {
    width: horizontalScale(76),
  },
  groupContainer: {
    marginTop: verticalScale(150),
    height: verticalScale(50),
    width: "100%",
  },
  hello7: {
    width: "100%",
    textAlign: "center",
    fontSize: GlobalStyles.FontSize.size_xl,
  },
  hello8: {
    top: verticalScale(28),
    textAlign: "center",
    width: "100%",
    fontSize: GlobalStyles.FontSize.size_13xl,
    color: "blue",
  },
  lineView: {
    top: verticalScale(110),
    width: "90%",
    left: "5%",
    bottom: verticalScale(-1),
  },
  helloParent2: {},
  rectangleView: {
    height: "100%",
    top: "-20%",
    left: "5%",

    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: "black",
    position: "absolute",
    width: "90%",
  },
  maskGroup236: {
    top: verticalScale(0),
    left: horizontalScale(0),
  },
  rectangleParent: {
    left: horizontalScale(0),
  },
  hello9: {
    width: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.white,
    textAlign: "center",
    top: "15%",
  },
  groupTouchableOpacity: {
    top: "87.5%",
    height: verticalScale(60),
    width: "100%",
    position: "relative",
  },
  groupParent: {
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: horizontalScale(0),
      height: verticalScale(-3),
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
    width: "100%",
    backgroundColor: GlobalStyles.Color.gray_100,
  },
});

export default AddFunds;
