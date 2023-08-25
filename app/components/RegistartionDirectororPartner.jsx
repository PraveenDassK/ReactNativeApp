import React, { useContext, useEffect, useState } from "react";
//import * as React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TextInput,
  Image,
  Pressable,
  useWindowDimensions,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Screen from "./Screen";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";
import api from "../api/api_list";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../config/scaling";
import Button from "./AppButton";
import colors from "../config/colors";
import AuthScreen from "./AuthScreen";
import RegistartionDirectorForm from "./RegistartionDirectorForm";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import images from "../assets/login/images";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import apiLogin from "../api/apiLogin";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  phoneNumber: Yup.string().required().min(10).max(10).label("Phone number"),
});

const RegistrationDirectororPartner = ({
  SaveDetails,
  navigation,
  onPress,
  setRole,
  back = true,
  directorData,
  BeneficialownersData,
  ControllingInterestsData,
  setDirectorData,
  setBeneficialownersData,
  setControllingInterestsData,
  businessType
}) => {

  const businessTypes = [
    "LIMITED COMPANY", //D B C S
    "SOLE TRADER", //D C
    "ORDINARY PARTNERSHIP", //DD C S
    "LIMITED PARTNERSHIP", //DD B C S
    "LIMITED LIABILITY PARTNERSHIP" //DD B C S
  ]
  console.log(directorData.length)
  const MAX_DIRECTORS = 2

  const handleSubmit = async (type) => {

    // SaveDetails(type)
    // navigation.navigate("Directororpartner");
  };


  const handleApi = async () => {
    let newArray = [];
    let value = newArray.push(
      ...directorData,
      ...BeneficialownersData,
      ...ControllingInterestsData
    );
    console.log(newArray, "this is submit");
    const IDs = "FC015105";
    const response = await apiLogin.RegisterPersonalDirectorAccount(
      newArray,
      IDs
    );
    console.log(response, "this is a response");
  };
  const handleBack = () => {
    navigation.navigate("SplashAnimation");
  };

  const handleDelete = (index, name) => {
    switch (name) {
      case "Director":
        let value = directorData.filter((value, i) => i !== index);
        setDirectorData(value);
        break;
      case "Beneficial owners":
        let valueBeneficial = BeneficialownersData.filter(
          (value, i) => i !== index
        );
        setBeneficialownersData(valueBeneficial);
        break;
      case "Controlling Interests":
        let valueControlling = ControllingInterestsData.filter(
          (value, i) => i !== index
        );
        setControllingInterestsData(valueControlling);
        break;
    }
  };
  console.log(directorData, "this is");
  const Item = ({ title, index, name }) => (
    <View style={styles.item}>
      <Text style={{ fontWeight: "bold", fontSize: 24 }}>
        {title} {index}
      </Text>
      <AntDesign
        name="delete"
        size={24}
        color="red"
        onPress={() => handleDelete(index, name)}
      />
    </View>
  );
  return (
    <ScrollView>
      <View>
        {/* <AuthScreen
          title="Directors or Partners"
          img="penguinCard"
          handleBack={handleBack}
        > */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            {back && (
              <TouchableOpacity
                onPress={() => handleBack()}
                style={{
                  zIndex: 100,
                  position: "absolute",
                  top: 20,
                  left: 10,
                  backgroundColor: colors.light,
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="keyboard-backspace"
                  size={30}
                  color={colors.black}
                />
              </TouchableOpacity>
            )}
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: "100%", height: 400 }}
                resizeMode="contain"
                source={images["penguinCard"]}
              />
            </View>

            <View
              style={{
                backgroundColor: colors.light,
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginVertical: 30,
                }}
              >
                <Text style={{ fontSize: 30 }}>{"Directors or Partners"}</Text>
              </View>
              <View
                style={{
                  paddingHorizontal: 30,
                  paddingVertical: 50,
                  backgroundColor: "white",
                  borderTopLeftRadius: 25,
                  borderTopRightRadius: 25,
                }}
              >
                <View style={{ marginBottom: 20 }}>
                  <Text style={{ textAlign: "center" }}>
                    Carbonyte would like to know details of any Associates -
                    usually the Directors or Partners
                  </Text>
                </View>

                <View>
                  {/* Directors */}
                  <View style={styles.buttonContainer}>
                    <Button
                      title="Directors"
                      textColor="white"
                      color="#212529"
                      style={styles.buttonColor}
                      onPress={() => {
                        console.log("Director");
                      }}
                    />
                    <Pressable
                      style={styles.plusButton}
                      onPress={() => {
                        onPress("Director");
                      }}
                    >
                      <Text style={{ fontSize: 30, fontWeight: "bold" }}>+</Text>
                    </Pressable>
                  </View>
                  <View>
                    {/* Show the counter only for specific business types */}
                    {businessType === "ORDINARY PARTNERSHIP" ||
                      businessType === "LIMITED PARTNERSHIP" ||
                      businessType === "LIMITED LIABILITY PARTNERSHIP" ? (
                      <Text>
                        {directorData.length}/{MAX_DIRECTORS}
                      </Text>
                    ) : null}

                    {/* Render the director data */}
                    {directorData?.map((item, index) => {
                      console.log(item, "this is on director form");
                      return (
                        <Item
                          key={index}
                          title={
                            item?.customerDetails?.firstName +
                            item?.customerDetails?.lastName
                          }
                          index={index}
                          name={"Director"}
                        />
                      );
                    })}
                  </View>
                </View>


                {/* Benefical owner */}
                {businessType !== "SOLE TRADER" && businessType !== "ORDINARY PARTNERSHIP" && (
                  <View>
                    <View style={styles.buttonContainer}>
                      <Button
                        title="Beneficial owners"
                        textColor="white"
                        color="#212529"
                        style={styles.buttonColor}
                        onPress={() => handleSubmit("Beneficial owners")}
                      />
                      <Pressable
                        style={styles.plusButton}
                        onPress={() => onPress("Beneficial owners")}
                      >
                        <Text style={{ fontSize: 30, fontWeight: "bold" }}>+</Text>
                      </Pressable>
                    </View>
                    <View>
                      {BeneficialownersData?.map((item, index) => (
                        <Item
                          key={index} // Use a unique key for the list item
                          title={
                            item?.customerDetails?.firstName +
                            item?.customerDetails?.lastName
                          }
                          index={index}
                          name={"Beneficial owners"}
                        />
                      ))}
                    </View>
                  </View>
                )}


                {/* Controling intrest */}
                <View style={styles.buttonContainer}>
                  <Button
                    title="Controlling Interests"
                    textColor="white"
                    color="#212529"
                    style={styles.buttonColor}
                    onPress={() => handleSubmit("Controlling Interests")}
                  />
                  <Pressable
                    style={styles.plusButton}
                    onPress={() => onPress("Controlling Interests")}
                  >
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>+</Text>
                  </Pressable>
                </View>
                <View>
                  {/* <FlatList
              data={DATA}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={(item) => item.id}
              nestedScrollEnabled
            /> */}
                  {ControllingInterestsData?.map((item, index) => {
                    return (
                      <Item
                        title={
                          item?.customerDetails?.firstName +
                          item?.customerDetails?.lastName
                        }
                        index={index}
                        name={"Controlling Interests"}
                      />
                    );
                  })}
                </View>
                <View style={{ marginVertical: 20 }}>
                  <Button
                    title="Continue"
                    textColor="white"
                    color="#212529"
                    style={styles.bottombuttonColor}
                    onPress={handleApi}
                  />
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>

        {/* </AuthScreen> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonColor: {
    backgroundColor: "#212529",
    width: "80%",
  },
  bottombuttonColor: {
    backgroundColor: "#212529",
    width: "100%",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  plusButton: {
    height: 50,
    width: 50,
    color: "#000000",
    // padding:8,
    borderColor: "#2B2B2B",
    borderRadius: 8,
    borderWidth: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
});

export default RegistrationDirectororPartner;
