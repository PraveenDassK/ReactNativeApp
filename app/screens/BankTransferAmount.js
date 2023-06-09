import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Pressable,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../config/scaling";

import GlobalStyles from "../../GlobalStyles";
import AppText from "../components/Text";
import KeyboardAvoider from "../components/KeyboardAvoider";

import AppDropdown from "../components/AppDropdown";
import DateTimePicker from "@react-native-community/datetimepicker";
import { CheckBox } from "@rneui/themed";

const BankTransferAmount = ({ route, navigation }) => {
  const [amount, setAmount] = useState("1");
  const [userData, setCode] = useState("");
  
  const [date, setDate] = useState(new Date());
  const showPicker = false

  const payeeDetails = route.params.payeeDetails;
  const destination = {}
  console.log(payeeDetails)
  // const sortCode = route.params.sortCode;
  // const accountCode = route.params.accountNumber;

  // let amount = (amount ? amount : 1).toString();

  const [reference, setReference] = useState('');
  const [paymentType, setPaymentType] = useState("")

  const paymentTypes = [
    {
      label: "Bacs",
      value: "Bacs"
    },
    {
      label: "Outbound",
      value: "Outbound"
    },
    {
      label: "Chaps",
      value: "Chaps"
    },
    {
      label: "Internal",
      value: "Internal"
    }
  ];


  const handleTextChange = (text) => {
    setReference(text);
  };

  const handleSave = () => {
    // Do something with the saved reference
    console.log('Saved reference:', reference);
    // ...
  };

  /**
   * 
   * @returns True if sending money to just one person
   */
  const singleBeneficary = () => {
    if (route.params.groupId != null) {
      return false
    }
    return true
  }


  /**
   * @dev a payment type must be entered
   * @param {int} amount The amount entered to send
   */
  const requestContact = (amount) => {
    //Payment type checker7
    if (!paymentType) return;
    route.params.requestObj.amount = amount
    route.params.requestObj.reference = "Transfer"
    console.log(
      "Transfer to " + payeeDetails.name + " of £" + amount + " successful"
    );

    navigation.navigate("Pin", {
      amount: amount,
      refrence: reference,
      name: payeeDetails.name,
      successScreen: "Success",
      successText:
        "Transfer to " + payeeDetails.name + " of £" + amount + " successful",
      beneficiaryData: route.params.requestObj,
    });
  };

  return (
    <KeyboardAvoider>
      <Pressable style={styles.groupParent} onPress={Keyboard.dismiss}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: "15%",
          }}
        >

          <AppText style={{ fontSize: 28 }}>Sending money to</AppText>
          <AppText
            style={{
              marginBottom: "2.5%",
              textTransform: "capitalize",
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            {payeeDetails?.name}
          </AppText>
        </View>
        <View>
          <TextInput
            onChangeText={handleTextChange}
            value={reference}
            placeholder="Enter a reference"
          />
        </View>

        {singleBeneficary() ?
          <View>
            <CheckBox
              title="Schedule this payment?"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checkedColor="black"
              checked={true}
              onPress={() => console.log("!")}
            />
            {/* <Text>Schedulde date & time</Text>
            {showPicker ? null : null}
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="datetime"
              is24Hour={true}
              display="spinner"
              onChange={console.log("onChange")}
            /> */}
          </View>
          : null}

        <AppDropdown data={paymentTypes} onChange={setPaymentType} value={paymentType} placeholder="Payment type" />
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
            value={amount}
            placeholderTextColor={"blue"}
            onChangeText={(newText) => setAmount(newText)}
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
          <Text style={styles.hello9}>Send</Text>
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
    backgroundColor: "#D8EBF9",
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
    color: GlobalStyles.Color.black,
    textAlign: "center",
    top: "15%",
  },
  groupTouchableOpacity: {
    top: "45.5%",
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

export default BankTransferAmount;
