import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Feather, Ionicons, AntDesign } from "@expo/vector-icons";
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
const SendMoney = ({ navigation }) => {
  const [beneficaryList, setBeneficary] = useState([]);
  const [groupBeneficaryList, setGroupBeneficary] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const { userID, customerDetails, accountID } = useContext(AuthContext);
  const isFocused = useIsFocused();

  useEffect(() => {
    loadData();
  }, []);

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
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color={GlobalStyles.Color.black} />
      </View>
    );
  }

  const handleDelete = async (id) => {
    console.log(id.groupId, "this is a delete");

    let apiCall = await apiBeneficiaries.DeleteGroupBenificiary(id.groupId);
    loadData();
    console.log(apiCall, "this is a api call for delete");
  };

  const handleBeneficiaryDelete = async (beneficaryid) => {
    console.log(beneficaryid.id, "this is a delete for single");

    let apiCall = await apiBeneficiaries.DeleteBenificiary(
      userID,
      beneficaryid.id
    );
    loadData();
    console.log(apiCall, "this is a api call for delete");
  };

  return (
    <SafeAreaView>
      {/* <ScrollView nestedScrollEnabled={true} style={{ flex: 1 }}> */}
      <View style={{ marginTop: 47 }}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddBeneficiary")}
          >
            <View style={styles.buttonPayNew}>
              <Ionicons
                name="add-circle-outline"
                size={20}
                color={GlobalStyles.Color.white}
              />
              <Text style={styles.buttonPayNewText}>Pay someone new</Text>
            </View>
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
                color: GlobalStyles.Color.gray_2000,
                marginBottom: 37,
              }}
            >
              New payee account name check
            </Text>
            <Feather
              name="info"
              size={12}
              color={GlobalStyles.Color.black}
              onPress={() => setModalVisible(true)}
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("MoveMoney")}>
            <View style={styles.buttonPaySelf}>
              <Feather
                name="send"
                size={20}
                color={GlobalStyles.Color.lightBlack}
              />
              <Text style={styles.buttonPaySelfText}>To self account</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.payContainer}>
        <View style={styles.payHeaderContainer}>
          <Text style={styles.payMainHeading}>Pay an existing payee</Text>
          <Text style={styles.paySideHeading}>Manage Beneficiary</Text>
        </View>
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
                />
                <View
                  
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
                  <AntDesign name="minus" size={10} onPress={() => handleBeneficiaryDelete(beneficary.item)}/>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: GlobalStyles.Color.white,
          padding: 24,
          marginBottom: 100,
        }}
      >
        <View style={styles.payHeaderContainer}>
          <Text style={styles.payMainHeading}>Pay an group payee</Text>
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
          numColumns={4}
          contentContainerStyle={styles.flatListContent}
          renderItem={(beneficary) => {
            return (
              <View style={styles.itemContainer}>
                <UserIcon
                  name={beneficary?.item.groupName}
                  onPress={() => sendGroupPayeeTrigger(beneficary.item)}
                />
                <View
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
                  <AntDesign name="minus" size={10} onPress={() => handleDelete(beneficary.item)}/>
                </View>
              </View>
            );
          }}
        />
        <Tagline />
      </View>
      <BeneficiaryPopup
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
      <View style={{ height: 400 }} />
    </SafeAreaView>
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
    backgroundColor: GlobalStyles.Color.lightBlack,
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
  buttonPaySelfText: {
    color: GlobalStyles.Color.lightBlack,
    fontFamily: "Montserrat",
    fontSize: 14,
    marginLeft: 6,
  },
  payContainer: {
    backgroundColor: GlobalStyles.Color.white,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: 20,
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
  },
  payHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 21,
  },
  payMainHeading: {
    fontFamily: "Montserrat",
    color: GlobalStyles.Color.black,
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
    marginTop: "5%",
  },
});

export default SendMoney;
