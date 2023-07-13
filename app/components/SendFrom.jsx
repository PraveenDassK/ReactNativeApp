import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  FlatList,
  Image,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import formatCurrency from "../utility/formatCurrency";
import apiCall from "../api/apiCall";
import { AntDesign } from "@expo/vector-icons";
import GlobalStyles from "../../GlobalStyles";
const SendFrom = ({
  isModal,
  setModal,
  requestObj,
  accountList,
  amountPay,
  handleAccount,
  selectedAccount,
  handleSendMoney,
}) => {
  //   const [isModal, setModal] = useState(false);
  //   const [accountList, setAccountList] = useState([]);

  console.log(selectedAccount, "this ia account list");

  return (
    <View style={{ backgroundColor: GlobalStyles.Color.white }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModal}
        onRequestClose={() => {
          // this.closeButtonFunction()
        }}
      >
        <View
          style={{
            height: "70%",
            marginTop: "auto",
            backgroundColor: GlobalStyles.Color.gray_100,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            paddingHorizontal: 10,
          }}
        >
          <View style={styles.footer}>
            <Text style={styles.headerText}>Total payable</Text>
            <View style={styles.amount}>
              <Text style={styles.amountText}>
                {formatCurrency(amountPay, "GBP", false)}
              </Text>
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => {
                  setModal(false);
                }}
              >
                <Text style={styles.addButtonText}>X</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.containerHeading}>Send From</Text>
          <FlatList
            data={accountList}
            keyExtractor={(accountList, index) => accountList.id}
            numColumns={1}
            contentContainerStyle={styles.flatListContent}
            renderItem={(account) => {
              return (
                <TouchableOpacity onPress={() => handleAccount(account.item)}>
                  <View style={styles.itemContainer}>
                    <Image
                      source={require("../assets/cardLion.png")}
                      style={{ height: 30, width: 30 }}
                      resizeMode="contain"
                    />
                    <View>
                      <Text style={styles.itemContent}>{account.item.id}</Text>
                      <Text style={styles.itemContent}>
                        {account.item.balance}
                      </Text>
                    </View>
                    {selectedAccount?.id === account.item.id ? (
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
          />
          <View style={{ paddingHorizontal: 20 }}>
            <TouchableOpacity onPress={() => handleSendMoney()}>
              <View style={styles.button}>
                <Text style={{ color: GlobalStyles.Color.white }}>Send Money</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ height: 50 }} />
        </View>
      </Modal>
    </View>
  );
};

export default SendFrom;

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  amount: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  headerText: {
    color: GlobalStyles.Color.lightBlack,
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
  },
  amountText: {
    color: GlobalStyles.Color.green_total,
    fontSize: 35,
    fontWeight: "bold",
  },
  addButtonText: {
    color: GlobalStyles.Color.darkGray,
    fontSize: 20,
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
  flatListContent: {
    backgroundColor: GlobalStyles.Color.white,
    width: "80%",
    marginLeft: "10%",
  },
  containerHeading: {
    fontFamily: "Montserrat",
    fontSize: 14,
    color: GlobalStyles.Color.black,
    marginVertical: 10,
  },
  button: {
    backgroundColor: GlobalStyles.Color.black,
    paddingVertical: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
