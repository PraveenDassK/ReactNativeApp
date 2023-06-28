import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";
import api from "../api/api_list";
import apiBeneficiaries from "../api/apiBeneficiaries";
import AuthContext from "../auth/context";
import UserIcon from "../components/UserIcon";

const SendMoney = ({ navigation }) => {
  const [beneficaryList, setBeneficary] = useState([]);
  const [groupBeneficaryList, setGroupBeneficary] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
        id: "A1226WEM",
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
    navigation.navigate("BankTransferAmount", { payeeDetails, requestObj });
  };

  /**
   * @dev If the page is loading show the loading icon
   */
  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ marginTop: 47 }}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddBeneficiary")}
          >
            <View style={styles.buttonPayNew}>
              <Ionicons name="add-circle-outline" size={20} color="#FFFFFF" />
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
                fontFamily: "Montserrat",
                fontSize: 12,
                color: "#505A63",
                marginBottom: 37,
              }}
            >
              New payee account name check
            </Text>
            <Feather name="info" size={12} color="black" />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("MoveMoney")}>
            <View style={styles.buttonPaySelf}>
              <Feather name="send" size={20} color="#212529" />
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
              </View>
            );
          }}
        />
      </View>

      <View
        style={{
          backgroundColor: "#FFFFFF",
          padding: 24,
        }}
      >
        <View style={styles.payHeaderContainer}>
          <Text style={styles.payMainHeading}>Pay an group payee</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Ionicons
              name="add"
              size={12}
              color="#0101FD"
              style={{ marginRight: 3, marginTop: 1 }}
            />
            <Text style={styles.paySideHeading}>Create Group</Text>
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
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
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
    backgroundColor: "#212529",
    height: 47,
    width: 312.33,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  buttonPayNewText: {
    color: "#FFFFFF",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 6,
  },
  buttonPaySelf: {
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#212529",
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
    color: "#212529",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 6,
  },
  payContainer: {
    backgroundColor: "#FFFFFF",
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
    fontWeight: "bold",
    color: "#212529",
    fontSize: 14,
  },
  paySideHeading: {
    fontFamily: "Montserrat",
    fontWeight: "bold",
    color: "#0101FD",
    fontSize: 10,
  },
  flatListContent: {
    justifyContent: "space-between",
  },
  itemContainer: {
    padding: "5%",
  },
});

export default SendMoney;
