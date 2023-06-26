import React, { Fragment, useContext, useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import api from "../api/api_list";
import AuthContext from "../auth/context";
import apiBeneficiaries from "../api/apiBeneficiaries";
import UserIcon from "../components/UserIcon";
import Button from "../components/AppButton";

const SendMoney = ({ navigation }) => {
  const [beneficaryList, setBeneficary] = useState([]);
  const [groupBeneficaryList, setGroupBeneficary] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { userID, customerDetails, accountID } = useContext(AuthContext);
  const isFocused = useIsFocused();

  useEffect(() => {
    loadData();
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
    <View>
      <View>
        <Button
          title="Pay someone new"
          onPress={() => navigation.navigate("AddBeneficiary")}
          color="#D8EBF9"
          style={styles.button}
        />
        <Button
          title="Move money"
          onPress={() => navigation.navigate("MoveMoney")}
          color="#D8EBF9"
          style={styles.button}
        />
      </View>

      <View>
        <Text>Pay an existing payee</Text>
        <FlatList
          data={beneficaryList}
          keyExtractor={(beneficaryList, index) => beneficaryList.id}
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

      <View>
        <Text>Pay an group payee</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  button: {
    border: "dashed",
    borderRadius: 10,
    borderColor: "#0101FD",
  },
  flatListContent: {
    justifyContent: "space-between",
  },
  itemContainer: {
    padding: "5%",
  },
});

export default SendMoney;
