import React, { useEffect, useState, useContext, useCallback } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
  ScrollView,
  Modal,
  RefreshControl,
  TouchableOpacity,
  Alert,
  FlatList,
  LayoutAnimation,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from "react-native";
import GlobalStyles from "../../GlobalStyles";
import { Swipeable } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../config/metrics";

import moment from "moment";
import api from "../api/api_list";
import apiCall from "../api/apiCall";
import AuthContext from "../auth/context";

import Animated from "react-native-reanimated";
import Button from "../components/AppButton";
import colors from "../config/colors";

const ITEM_SIZE = 50 + 15 * 3;
const Transactions = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [balanceData, setBalance] = useState(0);
  const [transactionData, setTransactionData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalId, setModalId] = useState(false);
  const [initials, setInitals] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [hide, setHide] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const scrollY = React.useRef(new Animated.Value(0)).current;

  const { settings, accountID } = useContext(AuthContext);

  //Calls the API once during load
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      loadData();
    });
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    //Load the data for transactions
    const response = await api.GetTransactions(accountID, 10);
    const transactions = response.data.details.content;
    setTransactionData(transactions);
    console.log(transactions);
    setHide(false);
    setIsLoading(false);
  };

  const showTransaction = (Id) => {
    setModalVisible(true);
    setModalId(Id);
  };

  const reportTransaction = async (Id) => {
    console.log("Reported");
   
    Alert.alert("Alert", "Report This Transaction", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed", Id),
        style: "cancel",
      },
      {
        text: "Send",
        onPress: async () => {
          console.log("OK Pressed");
          setSelectedId(Id)
          const response = await apiCall.ReportTransaction(accountID, Id.id);
          response.result
            ? alert("Report successsful")
            : alert("Report unsucessful");
        },
      },
    ]);
  };
  const shareTransaction = (Id) => {
    console.log("Shared");
    console.log(Id);
  };
  const hideTransaction = (Id) => {
    console.log("Hided");
    console.log(Id);

    setTransactionData((oldTransactions) => {
      setHide(true);
      return oldTransactions.filter((_, i) => i !== Id);
    });

    LayoutAnimation.configureNext(layoutAnimConfig);
  };

  const renderRightActions = (i) => {
    return (
      <View
        style={{
          backgroundColor: colors.danger,
          width: 70,
          height: 76,    
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "2.5%",
          borderRadius: 10,
        }}
      >
        <TouchableOpacity onPress={() => hideTransaction(i)}>
          <MaterialCommunityIcons name="eye-off" size={35} color="white" />
        </TouchableOpacity>
      </View>
    );
  };

  const renderLeftActions = (id) => {
    return (
      <View
        style={{
          backgroundColor: "grey",
          width:70,
          height: 76,
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "2.5%",
          borderRadius: 10,
        }}
      >
        <TouchableOpacity onPress={() => reportTransaction(id)}>
          <MaterialCommunityIcons
            name="progress-alert"
            size={35}
            color="white"
          />
        </TouchableOpacity>
      </View>
    );
  };

  const modal = (Id) => {
    let transaction = transactionData[modalId];
    console.log(transaction);
    return (
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableWithoutFeedback
          style={{ flex: 1, backgroundColor: "red" }}
          onPress={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                From: {transaction.account.customerName}
              </Text>
              <Text style={styles.modalText}>
                To: {transaction.description}
              </Text>
              <Text style={styles.modalText}>
                Amount: £{transaction.amount}
              </Text>
              <Text style={styles.modalText}>
                Date: {transaction.transactionDate}
              </Text>
              <Text style={styles.modalText}>ID: {transaction.id}</Text>
              <Text style={styles.modalText}>
                Source ID: {transaction.sourceId}
              </Text>
              <Text style={styles.modalText}>
                Currency: {transaction.currency}
              </Text>

              {/* <Pressable
                style={[styles.button, styles.buttonReport]}
                onPress={() => reportTransaction()}
              >
                <Text style={styles.textStyle}>Report</Text>
              
              </Pressable> */}
              <View style={{ width: 250 }}>
                <Button
                  textColor="black"
                  color="danger"
                  onPress={() => reportTransaction()}
                  title="Report"
                />
              </View>

              {settings.transactionSharing ? (
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => shareTransaction()}
                >
                  <Text style={styles.textStyle}>Share</Text>
                </Pressable>
              ) : null}

              {/* <Pressable
                style={[styles.button, styles.buttonClose, { marginTop: 10 }]}
                backgroundColor="red"
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Dismiss</Text>
              </Pressable> */}
              <View style={{ width: 250 }}>
                <Button
                  onPress={() => setModalVisible(!modalVisible)}
                  title="Dismiss"
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      loadData();
      setRefreshing(false);
    }, 2000);
  }, [refreshing]);

  const layoutAnimConfig = {
    duration: 300,
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
    },
    delete: {
      duration: 100,
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.opacity,
    },
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator color="black" size="large" />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: GlobalStyles.DivContainer.backgroundColor,
      }}
    >
      {/* <Image 
            style={StyleSheet.absoluteFillObject}
            source={require("../assets/group-2951.png")}
            blurRadius={80}
            resizeMode="stretch"
            
            /> */}

      <View style={styles.page}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View
              style={{
                backgroundColor: "white",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                paddingTop: 10,
                marginBottom: "1%",
                paddingBottom: "2.5%"
              }}
            >
              <View style={{ marginLeft: "2.5%" }}>
                <View></View>
                <Text style={{ fontWeight: "700", fontSize: 20, marginBottom: "5%"}}>
                  Recent transactions
                </Text>
                <View style={{ flexDirection: "row", flex: 1 }}>
                  <View style={{ flex: 3.8 }}>
                    <Text style={{opacity: 0.4}}>Transaction name</Text>
                  </View>
                  <View style={{flex:2}}>
                    <Text style={{opacity: 0.4}}>Date</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{opacity: 0.4}}>Amount</Text>
                  </View>
                </View>
              </View>
            </View>
          }
          ListFooterComponent={
            <View style={{ marginBottom: verticalScale(50) }}>
              {hide && (
                <Button
                  onPress={() => loadData()}
                  title="Unhide Transactions"
                />
              )}
            </View>
          }
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={transactionData}
          // onScroll={Animated.event(
          //   [{ nativeEvent: {contentOffset: {y: scrollY}}}],
          //   {useNativeDriver: true }
          // )}
          keyExtractor={(item) => item.sourceId.toString()}
          renderItem={({ item, index, separators }) => {
            console.log("is", item.sourceId.toString());
            const inputRange = [
              -1,
              0,
              ITEM_SIZE * index,
              ITEM_SIZE * (index + 2),
            ];

            const scale = scrollY.interpolate({
              inputRange,
              outputRange: [1, 1, 1, 0],
            });
           

            
            const display = item.id === selectedId ? "flex" : "none"

            return (
              <>
              <Animated.View key={index} style={{ transform: [{ scale }] }}>
                <Swipeable
                  renderLeftActions={() => renderLeftActions(item.id)}
                  renderRightActions={() => renderRightActions(index)}
                >
                  <Pressable
                    style={[styles.transactionBox]}
                    onPress={() => showTransaction(index)}
                  >
                    <View style={{ height: "100%", flexDirection: "row" }}>
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          width: 50,
                          height: 50,
                          borderRadius: 10,
                          backgroundColor: "#F6F5F8",
                          borderColor: "black",
                          alignSelf: "center",
                          marginLeft: "2.5%",
                        }}
                      >
                        <Text style={{ fontWeight: "700" }}>
                          {item.account.customerName[0]}
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 3.5,
                          alignSelf: "center",
                          justifyContent: "space-evenly",
                          marginLeft: "5%",
                        }}
                      >
                        <Text style={{ fontSize: 14, fontWeight: "700" }}>
                          {item.account.customerName}
                        </Text>
                      </View>
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ fontWeight: "700" }}>
                          {moment(item.transactionDate).format(" DD MMM YY")}
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 2,
                          justifyContent: "space-evenly",
                          alignItems: "flex-end",
                          marginRight: "2.5%",
                        }}
                      >
                        <Text
                          style={{ marginRight: "2.5%", fontWeight: "700" }}
                        >
                          £{item.amount.toFixed(2)}
                        </Text>
                      </View>
                    </View>
                  </Pressable>
                </Swipeable>
              </Animated.View>
              {<View style={{display, alignItems: "flex-end"}}>
                <Text style={{color: "red"}}>Transaction reported</Text>
              </View>}
              </>
            );
          }}
        />
    
        {modalVisible ? modal() : null}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  boxShadow: {},
  page: {
    flex: 1,
    marginHorizontal: "5%",
    marginTop: "2.5%",
  },
  myCards1: {
    width: "100%",
    textAlign: "center",
    fontSize: GlobalStyles.FontSize.size_2xl,
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  historyTypo: {
    textAlign: "center",
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
    position: "absolute",
  },
  hello: {
    textAlign: "center",
    fontSize: GlobalStyles.FontSize.size_10xl,
    fontWeight: "bold",
  },
  myCards1: {
    width: "100%",

    fontSize: GlobalStyles.FontSize.size_4xl,
    textAlign: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 15,
    padding: 10,
    elevation: 2,
    width: horizontalScale(200),
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: GlobalStyles.Color.blue_100,
  },
  buttonReport: {
    backgroundColor: "red",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },

  transactionBox: {
    width: "100%",
    height: 80,

    backgroundColor: "white",
  },
  modalText: {
    textAlign: "center",
  },
  swipeDown: {
    alignItems: "center",
    justifyContent: "center",
    top: verticalScale(50),
  },
});

export default Transactions;
