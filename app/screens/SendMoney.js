import React, { Fragment, useContext, useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  Switch,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../../GlobalStyles";
import api from "../api/api_list";
import AuthContext from "../auth/context";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../config/scaling";

import AppText from "../components/Text";
import apiBeneficiaries from "../api/apiBeneficiaries";
import Button from "../components/AppButton";
import Screen from "../components/Screen";

const SendMoney = ({ navigation }) => {
  const [benList, setBen] = useState([]);
  const [groupList, setGroup] = useState([]);
  const { userID, customerDetails, accountID } = useContext(AuthContext);
  const isFocused = useIsFocused();

  useEffect(() => {
    getSettings();
  }, [isFocused]);

  //API
  const getSettings = async () => {
    //Gets single beneficiaries
    const response = await api.RetriveBenificiaries(userID);
    const data = response.data.details.content;
    setBen(data);

    //Gets group beneficiaries
    const groupBeneficiaries = await apiBeneficiaries.GetGroupBeneficiaries(
      customerDetails
    );
    console.log("group", groupBeneficiaries);
    setGroup(groupBeneficiaries);
  };

  /**
   *
   * @param {Str} Id The beneficary ID
   */
  const sendDetails = (Id) => {
    const details = benList[Id];

    console.log();
    const requestObj = {
      sourceAccountId: accountID,
      destination: {
        type: "SCAN",
        id: "A1226WEM",
        accountNumber: details.destinationIdentifier.accountNumber,
        sortCode: details.destinationIdentifier.sortCode,
        name: details.name,
        phoneNumber: details.phoneNumber,
      },
      currency: "GBP",
      amount: 0,
      reference: "Transfer",
    };

    navigation.navigate("BankTransferAmount", requestObj);
  };

  const deleteDetails = async (Id) => {
    console.log(userID);
    const details = benList[Id].id;
    console.log(details);
    const response = await api.DeleteBenificiary(userID, details);
    console.log(response);
    getSettings();
  };
  //Rendering
  let benText = "";
  if (benList.length != 0) {
    let beniter = [];

    benList.forEach((item, i) => {
      beniter.push(
        <Pressable
          onPress={(details) => {
            sendDetails(i);
          }}
          key={i}
        >
          <View style={styles.benBoxCon}>
            <View style={styles.accountImage}>
              <AppText style={styles.accountName}>{item.name[0]}</AppText>
            </View>

            <View style={styles.accountTextDiv}>
              <AppText style={styles.accountName}>{item.name}</AppText>
              <AppText style={styles.accountPhoneNum}>
                +{item.phoneNumber}
              </AppText>
              <AppText style={styles.accountPhoneNum}>
                {item.destinationIdentifier.accountNumber}
              </AppText>
            </View>

            <Pressable
              style={styles.deleteButton}
              onPress={(details) => deleteDetails(i)}
            >
              <AppText style={{ color: "tomato" }}>Delete</AppText>
            </Pressable>
          </View>
        </Pressable>
      );
    });
    benText = <View style={styles.listBoxContainer}>{beniter}</View>;
  } else {
    benText = (
      <View style={styles.failToFind}>
        <AppText style={{ fontSize: 18 }}> No Accounts Found</AppText>
      </View>
    );
  }

  return (
    <View>
      <ScrollView>
        <View style={styles.subTextDiv}>
          <AppText style={styles.subText}>Add beneficary</AppText>
        </View>

        <View style={styles.peopleIconDiv}>
          <TouchableOpacity
            style={styles.plusImage}
            onPress={() => navigation.navigate("AddBeneficiary")}
          >
            <Image
              style={styles.plusImage}
              source={require("../assets/greyAdd.png")}
            />
          </TouchableOpacity>
          <View style={styles.iconImage}></View>
        </View>

        <View style={styles.subTextDiv}>
          <AppText style={styles.subText}>Contacts</AppText>
        </View>

        {benText}

        <View style={styles.peopleIconDiv}>
          <TouchableOpacity
            style={styles.plusImage}
            onPress={() => navigation.navigate("GroupBeneficiary")}
          >
            <Image
              style={styles.plusImage}
              source={require("../assets/greyAdd.png")}
            />
          </TouchableOpacity>
          <View style={styles.iconImage}></View>
        </View>

        <View>
          {groupList.map(({ groupId, groupName, beneficiariesDetails }) => (
            <Fragment key={groupId}>
              <GroupBeneficiary
                groupName={groupName}
                beneficiaries={beneficiariesDetails}
              />
            </Fragment>
          ))}
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
          <Button
            title="Schedule payment"
            style={[{ width: "90%" }]}
            transform={{ textTransform: "none" }}
            onPress={() => navigation.navigate("ScheduledPayment")}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const GroupBeneficiary = ({ groupName, beneficiaries }) => {
  return (
    <Pressable onPress={() => console.log("send money to beneficiaries")}>
      <View style={styles.benBoxCon}>
        <View style={styles.accountImage}>
          <AppText style={styles.accountName}>{groupName[0]}</AppText>
        </View>

        <View style={styles.accountTextDiv}>
          <AppText style={styles.accountName}>{groupName}</AppText>
          {beneficiaries.map(({ beneficiariesId, beneficiariesName }) => (
            <Fragment key={beneficiariesId}>
              <AppText style={styles.accountPhoneNum}>
                {beneficiariesName}
              </AppText>
            </Fragment>
          ))}
        </View>

        <Pressable
          onPress={() => console.log("delete beneficiary")}
          style={styles.deleteButton}
        >
          <AppText style={{ color: "tomato" }}>Delete</AppText>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mainDiv: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "10%",
  },

  accountPhoneNum: {
    opacity: 0.3,
  },

  titleTextRow: {
    marginTop: GlobalStyles.Title.marginTop,
    marginLeft: GlobalStyles.Title.marginLeft,
    width: GlobalStyles.Title.width,
  },

  titleText: {
    fontSize: GlobalStyles.Title.fontSize,
    fontWeight: GlobalStyles.Title.fontWeight,
  },

  searchBoxDiv: {
    width: "80%",
    height: verticalScale(45),
    backgroundColor: "red",
    marginLeft: "10%",
    marginTop: "5%",
    backgroundColor: "#F6F5F8",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: "1%",
  },
  failToFind: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    flex: 1,
    height: verticalScale(25),
    width: horizontalScale(25),
    resizeMode: "contain",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },

  textInput: {
    flex: 9,
    width: "100%",
  },

  subTextDiv: {
    width: "80%",
    marginLeft: "10%",
    marginTop: "2.5%",
  },

  subText: {
    fontSize: 14,
    color: "rgba(153, 153, 153, 0.75)",
  },

  plusImage: {
    flex: 1,
    height: verticalScale(40),
    width: horizontalScale(40),
    resizeMode: "contain",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },

  peopleIconDiv: {
    width: "80%",
    marginLeft: "10%",
    flexDirection: "row",
    marginTop: "2.5%",
  },

  iconImage: {
    flex: 9,
    width: "100%",
  },

  benBoxCon: {
    marginTop: "2.5%",
    width: "80%",
    marginLeft: "10%",
    backgroundColor: "#F6F5F8",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    height: verticalScale(65),
  },

  accountImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "white",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },

  accountTextDiv: {
    flex: 6,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  deleteButton: {
    flex: 2,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },

  accountName: {
    fontSize: 16,
    fontWeight: "700",
  },
});

export default SendMoney;
