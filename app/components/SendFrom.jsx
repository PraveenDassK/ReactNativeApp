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
import { LinearGradient } from "expo-linear-gradient";

const SendFrom = ({
  isModal,
  setModal,
  requestObj,
  accountList,
  amountPay,
  handleAccount,
  selectedAccount,
  handleSendMoney,
  darkMode,
}) => {
  //   const [isModal, setModal] = useState(false);
  //   const [accountList, setAccountList] = useState([]);

  

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
            backgroundColor:
              darkMode === "DARK"
                ? GlobalStyles.Color.secondaryDarkTheme_bg
                : GlobalStyles.Color.gray_100,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            paddingHorizontal: 10,
          }}
        >
          <View style={darkMode === "DARK" ? styles.darkfooter : styles.footer}>
            <Text
              style={
                darkMode === "DARK" ? styles.darkheaderText : styles.headerText
              }
            >
              Total payable
            </Text>
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
          <Text
            style={
              darkMode === "DARK"
                ? styles.darkcontainerHeading
                : styles.containerHeading
            }
          >
            Send From
          </Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={accountList}
            keyExtractor={(accountList, index) => accountList.id}
            numColumns={1}
            contentContainerStyle={styles.flatListContent}
            renderItem={(account) => {
              return (
                <TouchableOpacity
                  onPress={() => handleAccount(account.item)}
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
          <View style={{ paddingHorizontal: 20,paddingTop:30 }}>
            <TouchableOpacity onPress={() => handleSendMoney()}>
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
                <Text style={styles.buttonPayNewText}>Processed to send</Text>
              </LinearGradient>
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
  darkfooter: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomColor: GlobalStyles.Color.darkGray,
    borderBottomWidth: 1,
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
  darkheaderText: {
    color: GlobalStyles.Color.white,
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
  darkitemContent: {
    fontFamily: "Montserrat",
    fontSize: 14,
    color: GlobalStyles.Color.white,
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
  darkcontainerHeading: {
    fontFamily: "Montserrat",
    fontSize: 14,
    color: GlobalStyles.Color.white,
    marginVertical: 10,
  },
  button: {
    backgroundColor: GlobalStyles.Color.black,
    paddingVertical: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPayNew: {
    borderRadius: 10,
    // backgroundColor: GlobalStyles.Color.lightBlack,
    height: 47,
    width: "100%",
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
    width: "100%",
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
    // marginLeft: 6,
  },
  buttonContainer: {
    width: "100%",
    marginTop: "15%",
  },
});
