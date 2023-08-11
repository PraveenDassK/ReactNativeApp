import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Alert,
} from "react-native";
import { Feather, Ionicons, AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { TouchableOpacity } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";
import api from "../api/api_list";
import apiBeneficiaries from "../api/apiBeneficiaries";
import AuthContext from "../auth/context";
import UserIcon from "../components/UserIcon";
import Tagline from "../components/Tagline";
import BeneficiaryPopup from "../components/BeneficiaryPopup";
import GlobalStyles from "../../GlobalStyles";
import colors from "../config/colors";
import FadeInView from "../components/fadeInview";
const SendMoney = ({ navigation }) => {
  const [beneficaryList, setBeneficary] = useState([]);
  const [groupBeneficaryList, setGroupBeneficary] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const { userID, customerDetails, accountID, darkMode } =
    useContext(AuthContext);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      loadData();
    }
  }, [isFocused]);

  const loadData = async () => {
    try {
      setIsLoading(true);
      //Gets single beneficiaries
      const response = await api.RetriveBenificiaries(userID);
      const data = response.data.details.content;
      setBeneficary(data);

      //Gets group beneficiaries
      const groupBeneficiaries = await apiBeneficiaries.GetGroupBeneficiaries(
        customerDetails
      );
      setGroupBeneficary(groupBeneficiaries);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
    }
  };

  /**
   * @dev This sends a payment to one destination
   * @param {Obj} beneficaryData
   */
  const sendPayeeTrigger = async (beneficaryData) => {
    const requestObj = {
      sourceAccountId: accountID,
      destination: {
        type: "SCAN",
        id: beneficaryData.customerId, //"A1226WEM",
        accountNumber: beneficaryData.destinationIdentifier.accountNumber,
        sortCode: "000000", //beneficaryData.destinationIdentifier.sortCode
        name: beneficaryData.name,
        phoneNumber: beneficaryData.phoneNumber,
      },
      currency: "GBP",
      amount: 0,
      reference: "Transfer",
    };

    const payeeDetails = {
      name: beneficaryData.name,
    };
    navigation.navigate("BankTransferAmount", { payeeDetails, requestObj });
  };

  /**
   * @dev This sends the money to a group
   * @param {Obj} beneficaryData
   */
  const sendGroupPayeeTrigger = async (beneficaryData) => {
    const requestObj = {
      sourceAccountId: "A122HTHM",
      groupId: beneficaryData.groupId,
      currency: "GBP",
      amount: 0,
      reference: "Transfer",
    };

    const payeeDetails = {
      name: beneficaryData.groupName,
    };
    navigation.navigate("GroupBeneficiaryMoney", { payeeDetails, requestObj });
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

  const handleDelete = async (id) => {
    Alert.alert("Are you sure you want to delete group?", null, [
      { text: "Cancel", onPress: () => console.log("Cancelled") },
      {
        text: "Delete",
        onPress: async () => {
          await apiBeneficiaries.DeleteGroupBenificiary(id.groupId);
          loadData();
        },
      },
    ]);
  };

  const handleBeneficiaryDelete = async (beneficaryid) => {
    Alert.alert("Are you sure you want to delete payee?", null, [
      { text: "Cancel", onPress: () => console.log("Cancelled") },
      {
        text: "Delete",
        onPress: async () => {
          await apiBeneficiaries.DeleteBenificiary(userID, beneficaryid.id);
          loadData();
        },
      },
    ]);
  };

  return (
    <SafeAreaView >
      <View
        style={[
          darkMode === "DARK" ? styles.darkpayContainer : styles.payContainer,
        ]}
      >
        <FlatList
          data={beneficaryList}
          keyExtractor={(beneficaryList, index) =>
            `${beneficaryList.id}-${index}`
          }
          numColumns={4}
          contentContainerStyle={styles.flatListContent}
          renderItem={(beneficary) => {
            return (
              <View style={styles.itemContainer}>
                <UserIcon
                  name={beneficary?.item.name}
                  onPress={() => sendPayeeTrigger(beneficary.item)}
                  darkMode={darkMode}
                />
                {showDelete && (
                  <FadeInView
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      width: 15,
                      height: 15,
                      borderRadius: 7.5,
                      backgroundColor: colors.danger,
                      position: "absolute",
                      zIndex: 5,
                      top: 0,
                      right: 15,
                    }}
                  >
                    <AntDesign
                      name="minus"
                      size={10}
                      onPress={() => handleBeneficiaryDelete(beneficary.item)}
                    />
                  </FadeInView>
                )}
              </View>
            );
          }}
          ListHeaderComponent={
            <View
              style={{
                backgroundColor:
                  darkMode === "DARK"
                    ? GlobalStyles.Color.darkTheme_bg
                    : GlobalStyles.Color.backgroundColorOg,
                paddingTop: "15%",
              }}
            >
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("AddBeneficiary")}
                >
                  <LinearGradient
                    colors={
                      darkMode === "DARK"
                        ? ["#178BFF", "#0101FD"]
                        : ["#212529", "#3A3A3A"]
                    }
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={
                      darkMode === "DARK"
                        ? styles.darkbuttonPayNew
                        : styles.buttonPayNew
                    }
                  >
                    <Ionicons
                      name="add-circle-outline"
                      size={20}
                      color={GlobalStyles.Color.white}
                    />
                    <Text style={styles.buttonPayNewText}>Pay someone new</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: 312.33,
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Montserrat-Medium",
                      fontSize: 12,
                      color:
                        darkMode === "DARK"
                          ? GlobalStyles.Color.darkGray
                          : GlobalStyles.Color.gray_2000,
                      marginBottom: 37,
                    }}
                  >
                    New payee account name check
                  </Text>
                  <Feather
                    name="info"
                    size={12}
                    color={
                      darkMode === "DARK"
                        ? GlobalStyles.Color.darkGray
                        : GlobalStyles.Color.black
                    }
                    onPress={() => setModalVisible(true)}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("MoveMoney")}
                >
                  <View
                    style={
                      darkMode === "DARK"
                        ? styles.darkbuttonPaySelf
                        : styles.buttonPaySelf
                    }
                  >
                    <Feather
                      name="send"
                      size={20}
                      color={
                        darkMode === "DARK"
                          ? GlobalStyles.Color.skyblue
                          : GlobalStyles.Color.lightBlack
                      }
                    />
                    <Text
                      style={
                        darkMode === "DARK"
                          ? styles.darkbuttonPaySelfText
                          : styles.buttonPaySelfText
                      }
                    >
                      To self account
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={
                  darkMode === "DARK"
                    ? styles.darkpayHeaderContainer
                    : styles.payHeaderContainer
                }
              >
                <Text
                  style={
                    darkMode === "DARK"
                      ? styles.darkpayMainHeading
                      : styles.payMainHeading
                  }
                >
                  Pay an existing payee
                </Text>
                <Text
                  onPress={() => setShowDelete(!showDelete)}
                  style={styles.paySideHeading}
                >
                  Manage Beneficiary
                </Text>
              </View>
            </View>
          }
          ListFooterComponent={
            <View
              style={{
                backgroundColor:
                  darkMode === "DARK"
                    ? GlobalStyles.Color.secondaryDarkTheme_bg
                    : GlobalStyles.Color.white,
                paddingVertical: 24,
                marginBottom: 10,
              }}
            >
              <View
                style={
                  darkMode === "DARK"
                    ? styles.darkpaygroupHeaderContainer
                    : styles.paygroupHeaderContainer
                }
              >
                <Text
                  style={
                    darkMode === "DARK"
                      ? styles.darkpayMainHeading
                      : styles.payMainHeading
                  }
                >
                  Pay an existing group payee
                </Text>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Ionicons
                    name="add"
                    size={12}
                    color={GlobalStyles.Color.gray_500}
                    style={{ marginRight: 3, marginTop: 1 }}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("GroupBeneficiary");
                    }}
                  >
                    <Text style={styles.paySideHeading}>Create Group</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <FlatList
                data={groupBeneficaryList}
                keyExtractor={(groupBeneficaryList, index) => index}
                numColumns={3}
                contentContainerStyle={styles.flatListContent}
                renderItem={(beneficary) => {
                  console.log('eben', beneficary.item)
                  return (
                    <View style={styles.itemContainer}>
                      <UserIcon
                        name={beneficary?.item.groupName}
                        onPress={() => sendGroupPayeeTrigger(beneficary.item)}
                        darkMode={darkMode}
                        groupSize={ beneficary.item.beneficiariesDetails.length}
                        group={true}
                       
                      />
                      {showDelete && (
                        <FadeInView
                          style={{
                            justifyContent: "center",
                            alignItems: "center",
                            width: 15,
                            height: 15,
                            borderRadius: 7.5,
                            backgroundColor: colors.danger,
                            position: "absolute",
                            zIndex: 5,
                            top: 0,
                            right: 15,
                          }}
                        >
                          <AntDesign
                            name="minus"
                            size={10}
                            onPress={() => handleDelete(beneficary.item)}
                          />
                        </FadeInView>
                      )}
                    </View>
                  );
                }}
              />
            </View>
          }
        />
      </View>

      {/* <Tagline /> */}

      <BeneficiaryPopup
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        darkMode={darkMode}
      />
      {/* <View style={{ height: 400 }} /> */}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const GroupBackground = ({ beneficary, darkMode, right }) => {
  return (
    <View
      style={{
        position: "absolute",
        right: right,
        top: "0%",
        zIndex: -5,
      }}
    >
      <UserIcon
        name={beneficary?.item.groupName}
        onPress={() => sendGroupPayeeTrigger(beneficary.item)}
        darkMode={darkMode}
        showName={false}
      />
      {/* <View
      style={{
        right: "-50%",
        top: "20%",
        position: "absolute",
      }}
    >
      <Text style={{ color: "white" }}>+2</Text>
    </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  buttonPayNew: {
    borderRadius: 10,
    // backgroundColor: GlobalStyles.Color.lightBlack,
    height: 47,
    width: 312.33,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  darkbuttonPayNew: {
    borderRadius: 10,
    // backgroundColor: GlobalStyles.Color.gray_500,
    height: 47,
    width: 312.33,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  buttonPayNewText: {
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    marginLeft: 6,
  },
  buttonPaySelf: {
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: GlobalStyles.Color.lightBlack,
    backgroundColor: "#0101FD05",
    height: 47,
    width: 312.33,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  darkbuttonPaySelf: {
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: GlobalStyles.Color.skyblue,
    backgroundColor: "#0101FD05",
    height: 47,
    width: 312.33,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  buttonPaySelfText: {
    color: GlobalStyles.Color.lightBlack,
    fontFamily: "Montserrat",
    fontSize: 14,
    marginLeft: 6,
  },
  darkbuttonPaySelfText: {
    color: GlobalStyles.Color.skyblue,
    fontFamily: "Montserrat",
    fontSize: 14,
    marginLeft: 6,
  },
  payContainer: {
    backgroundColor: GlobalStyles.Color.white,

    // borderTopStartRadius: 20,
    // borderTopEndRadius: 20,
    // padding: 20,
    // marginTop: 30,
    // paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
  },
  darkpayContainer: {
    backgroundColor: GlobalStyles.Color.secondaryDarkTheme_bg,
    // borderTopStartRadius: 20,
    // borderTopEndRadius: 20,
    // padding: 20,
    // marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
    height: "100%",
  },
  payHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // marginBottom: 21,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: GlobalStyles.Color.white,
    paddingVertical: 20,
    paddingHorizontal: "5%",
    marginTop: "10%",
  },
  paygroupHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // marginBottom: 21,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: GlobalStyles.Color.white,
    paddingVertical: 20,
    paddingHorizontal: "5%",
  },
  darkpayHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // marginBottom: 21,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: GlobalStyles.Color.secondaryDarkTheme_bg,
    paddingVertical: 20,
    paddingHorizontal: "5%",
    marginTop: "10%",
  },
  darkpaygroupHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // marginBottom: 21,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: GlobalStyles.Color.secondaryDarkTheme_bg,
    paddingVertical: 20,
    paddingHorizontal: "5%",
  },
  payMainHeading: {
    fontFamily: "Montserrat",
    color: GlobalStyles.Color.black,
    fontSize: 14,
  },
  darkpayMainHeading: {
    fontFamily: "Montserrat",
    color: GlobalStyles.Color.white,
    fontSize: 14,
  },
  paySideHeading: {
    fontFamily: "Montserrat",
    color: GlobalStyles.Color.skyblue,
    fontSize: 10,
  },
  flatListContent: {
    justifyContent: "space-between",
  },
  itemContainer: {
    padding: "5%",
    // marginTop: "5%",
    // backgroundColor:GlobalStyles.Color.white,
  },
});

export default SendMoney;
