import { AntDesign } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import GlobalStyles from "../../GlobalStyles";
import apiBeneficiaries from "../api/apiBeneficiaries";
import apiCall from "../api/apiCall";
import apiTransaction from "../api/apiTransaction";
import AuthContext from "../auth/context";
import PinModal from "../components/PinModal";
import UserIcon from "../components/UserIcon";
import { horizontalScale, verticalScale } from "../config/scaling";
import formatCurrency from "../utility/formatCurrency";

const BankTransferAmount = ({ route, navigation }) => {
  const [amount, setAmount] = useState("1");
  const [selectedAccount, setSelectedAccount] = useState({});
  const [userData, setCode] = useState("");
  const [oneselectedAccount, setOneAccount] = useState();
  const [showPinModal, setShowPinModal] = useState(false);

  const payeeDetails = route.params;
  const destination = {};
  

  const name = payeeDetails.payeeDetails.name;
  const accountNumber = route.params.requestObj.destination?.accountNumber;

  // const sortCode = route.params.sortCode;
  // const accountCode = route.params.accountNumber;

  // let amount = (amount ? amount : 1).toString();

  const [reference, setReference] = useState("");
  const [paymentType, setPaymentType] = useState("");

  // account list

  const [accountList, setAccountList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { userID, customerDetails, accountID, darkMode } =
    useContext(AuthContext);
  const [groupBeneficaryList, setGroupBeneficary] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    loadData();
  }, [isFocused]);

  /**
   * @dev This loads the account data
   */
  const loadData = async () => {
    try {
      setIsLoading(true);
      const accountDataResponse = await apiCall.GetAllAccounts(userID);
      const groupBeneficiaries = await apiBeneficiaries.GetGroupBeneficiaries(
        customerDetails
      );
      setGroupBeneficary(groupBeneficiaries);
      setAccountList(accountDataResponse);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
    }
  };
  
  const handleSelectAccount = (selectedAccount) => {
    setSelectedAccount(selectedAccount);
  };

  const groupValue = groupBeneficaryList.filter(
    (eachValue, id) => payeeDetails?.requestObj?.groupId === eachValue?.groupId
  );

  

  /**
   * @dev This takes the selected destination account data and passes it to another screen
   */

  const selectAccount = async (account) => {
    setShowPinModal(true);

    // navigation.navigate("Pin", requestObj);
  };

  const handleSuccess = async () => {
    setShowPinModal(false);

    const requestObj = payeeDetails.requestObj;
    requestObj.amount = amount;
    requestObj.sourceAccountId = oneselectedAccount?.id;
    
    setIsLoading(true);

    const transferRequest = await apiTransaction.sendMoney(requestObj);
    const successObject = {
      amount: amount,
      name: name,
    };

    setIsLoading(false);

    
    navigation.navigate("sendmoneysuccess", { successObject });
  };

  /**
   * @dev If the page is loading show the loading icon
   */
  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor:
            darkMode === "DARK" ? GlobalStyles.Color.darkTheme_bg : null,
        }}
      >
        <ActivityIndicator
          size="large"
          color={
            darkMode === "DARK"
              ? GlobalStyles.Color.white
              : GlobalStyles.Color.black
          }
        />
      </View>
    );
  }

  if (showPinModal) {
    return (
      <View style={styles.mainContainer}>
        {/* <RecentTransactions
        amount={10}
      /> */}
        {showPinModal ? (
          <PinModal title="Enter your PIN" success={() => handleSuccess()} />
        ) : null}
      </View>
    );
  }

  const paymentTypes = [
    {
      label: "Bacs",
      value: "Bacs",
    },
    {
      label: "Outbound",
      value: "Outbound",
    },
    {
      label: "Chaps",
      value: "Chaps",
    },
    {
      label: "Internal",
      value: "Internal",
    },
  ];

  const handleTextChange = (text) => {
    setReference(text);
  };

  const handleSave = () => {
    // Do something with the saved reference
    
    // ...
  };

  /**
   *
   * @returns True if sending money to just one
   */
  const singleBeneficary = () => {
    if (route.params.beneficiaryData?.groupId != null) {
      return false;
    }
    return true;
  };

  /**
   * @dev a payment type must be entered
   * @param {int} amount The amount entered to send
   */
  const requestContact = (amount) => {
    //Payment type checker7
    if (!paymentType) return;

    //Checks if sending to a single person
    if (singleBeneficary()) {
    } else {
    }
    route.params.requestObj.amount = amount;
    route.params.requestObj.reference = "Transfer";
    

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
    <View
      style={
        darkMode === "DARK"
          ? styles.darkflatListContentContainer
          : styles.flatListContentContainer
      }
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <View style={styles.headerContainer}>
              <View>
                <Text
                  style={
                    darkMode === "DARK"
                      ? styles.darkheaderHeading
                      : styles.headerHeading
                  }
                >
                  Group name
                </Text>
                <Text
                  style={
                    darkMode === "DARK"
                      ? styles.darkcontentText
                      : styles.contentText
                  }
                >
                  {name}
                </Text>
              </View>
              <View>
                <Text
                  style={
                    darkMode === "DARK"
                      ? styles.darkheaderHeading
                      : styles.headerHeading
                  }
                >
                  Account number
                </Text>
                <Text
                  style={
                    darkMode === "DARK"
                      ? styles.darkcontentText
                      : styles.contentText
                  }
                >
                  {accountNumber}
                </Text>
              </View>
            </View>
            <View
              style={
                darkMode === "DARK"
                  ? styles.darkpaymentContainer
                  : styles.paymentContainer
              }
            >
              <View>
                <Text
                  style={
                    darkMode === "DARK"
                      ? styles.darkheaderHeading
                      : styles.headerHeading
                  }
                >
                  Enter the amount you want to send
                </Text>
                <TextInput
                  keyboardType="numeric"
                  style={
                    darkMode === "DARK" ? styles.darkinputBox : styles.inputBox
                  }
                  placeholder="£0"
                  placeholderTextColor={
                    darkMode === "DARK" ? GlobalStyles.Color.white : null
                  }
                  onChangeText={(text) => setAmount(text)}
                />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 20,
                  marginVertical: 20,
                }}
              >
                {groupValue[0]?.beneficiariesDetails?.map(
                  (eachValue, index) => {
                    return (
                      <View
                        key={index}
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <UserIcon
                          name={eachValue?.beneficiariesName}
                          //   onPress={() => sendPayeeTrigger(beneficary.item)}
                        />
                        {/* <View>
                            <Text>{eachValue?.beneficiariesName}</Text>
                          </View> */}
                        <Text style={styles.amountText}>
                          {formatCurrency(amount, "GBP", false)}
                        </Text>
                      </View>
                    );
                  }
                )}
              </View>

              <View>
                <Text
                  style={
                    darkMode === "DARK"
                      ? styles.darkcontentText
                      : styles.contentText
                  }
                >
                  Send from
                </Text>
              </View>
            </View>
          </>
        }
        ListFooterComponent={FootComponent(selectAccount, darkMode)}
        data={accountList}
        keyExtractor={(accountList, index) => accountList.id}
        renderItem={(account) => {
          return (
            <TouchableOpacity
              onPress={() => setOneAccount(account.item)}
              style={{
                backgroundColor:
                  darkMode === "DARK"
                    ? GlobalStyles.Color.darkTheme_bg
                    : GlobalStyles.Color.white,
              }}
            >
              <View style={styles.itemContainer}>
                <Image
                  source={require("../assets/cardLion.png")}
                  style={{ height: 30, width: 30 }}
                  resizeMode="contain"
                />
                <View>
                  <Text
                    style={
                      darkMode === "DARK"
                        ? styles.darkitemContent
                        : styles.itemContent
                    }
                  >
                    {account.item.id}
                  </Text>
                  <Text
                    style={
                      darkMode === "DARK"
                        ? styles.darkitemContent
                        : styles.itemContent
                    }
                  >
                    {account.item.balance}
                  </Text>
                </View>
                {oneselectedAccount?.id === account.item.id ? (
                  <View
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                      flex: 1,
                    }}
                  >
                    <AntDesign name="checkcircle" size={24} color="green" />
                  </View>
                ) : null}
              </View>
            </TouchableOpacity>
          );
        }}

        // style={{backgroundColor:'transparent'}}
      />
    </View>
  );
};

const FootComponent = (selectAccount, darkMode) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity
      onPress={selectAccount}
      // onPress={() => {
      //   navigation.navigate("Success");
      // }}
    >
      <LinearGradient
        colors={
          darkMode === "DARK" ? ["#178BFF", "#0101FD"] : ["#212529", "#3A3A3A"]
        }
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Send</Text>
      </LinearGradient>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  mainHeading: {
    fontFamily: "Montserrat",
    fontSize: 18,
    color: GlobalStyles.Color.lightBlack,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 28,
  },
  headerHeading: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: GlobalStyles.Color.lightBlack,
  },
  darkheaderHeading: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: GlobalStyles.Color.white,
  },
  contentText: {
    fontFamily: "Montserrat",
    fontSize: 14,
    color: GlobalStyles.Color.lightBlack,
  },
  darkcontentText: {
    fontFamily: "Montserrat",
    fontSize: 14,
    color: GlobalStyles.Color.white,
  },

  paymentContainer: {
    backgroundColor: GlobalStyles.Color.white,
    paddingHorizontal: 20,
    paddingVertical: 34,
    // borderTopStartRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  darkpaymentContainer: {
    backgroundColor: GlobalStyles.Color.secondaryDarkTheme_bg,
    paddingHorizontal: 20,
    paddingVertical: 34,
    // borderTopStartRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  inputBox: {
    width: 334,
    height: 75,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: GlobalStyles.Color.borderColor,
    paddingHorizontal: 26,
    paddingVertical: 16,
    fontSize: 35,
    color: GlobalStyles.Color.green_total,
    fontFamily: "Helvetica",
    fontWeight: "bold",
    marginVertical: 20,
  },
  darkinputBox: {
    width: 334,
    height: 75,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: GlobalStyles.Color.darkGray,
    paddingHorizontal: 26,
    paddingVertical: 16,
    fontSize: 35,
    color: GlobalStyles.Color.green_total,
    fontFamily: "Helvetica",
    fontWeight: "bold",
    marginVertical: 20,
    backgroundColor: GlobalStyles.Color.darkTheme_bg,
  },
  accountContainer: {
    marginVertical: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: GlobalStyles.Color.borderColor,
  },
  flatListContent: {
    // paddingHorizontal: 10,
    paddingBottom: 10,
  },
  itemContainer: {
    paddingHorizontal: 22,
    paddingVertical: 17,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemContent: {
    fontFamily: "Montserrat",
    fontSize: 14,
    color: GlobalStyles.Color.black,
  },
  darkitemContent: {
    fontFamily: "Montserrat",
    fontSize: 14,
    color: GlobalStyles.Color.white,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
  },

  button: {
    width: 331.08,
    height: 47,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: GlobalStyles.Color.white,
    fontSize: 14,
    fontFamily: "Montserrat",
  },
  dropdownStyle: {
    width: "95%",
    marginLeft: "2.5%",
    paddingTop: "2.5%",
  },
  selectedTextStyle: {
    color: GlobalStyles.Color.black,
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
    backgroundColor: GlobalStyles.Color.backgroundColor,
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

  amountText: {
    color: GlobalStyles.Color.green_total,
    fontSize: 14,
    fontFamily: "Montserrat-Medium",
  },
  flatListContentContainer: {
    // paddingVertical: "5%",
    flex: 1,
    // backgroundColor:"#FFFFFF",
  },
  darkflatListContentContainer: {
    // paddingVertical: "5%",
    flex: 1,
    // backgroundColor:"#FFFFFF",
    backgroundColor: GlobalStyles.Color.darkTheme_bg,
  },
  itemContainer: {
    paddingHorizontal: 22,
    paddingVertical: 17,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    borderBottomColor: GlobalStyles.Color.borderColor,
    borderBottomWidth: 1,
  },
  itemContent: {
    fontFamily: "Montserrat",
    fontSize: 14,
    color: GlobalStyles.Color.black,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default BankTransferAmount;
