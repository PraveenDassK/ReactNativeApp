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
  TouchableOpacity
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
import images from '../assets/login/images'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  phoneNumber: Yup.string().required().min(10).max(10).label("Phone number"),
});

const RegistrationDirectororPartner = ({
  SaveDetails,
  navigation,
  onPress,
  setRole,
  back=true
}) => {
  const handleSubmit = async (type) => {
    console.log(type);
    // SaveDetails(type)
    // navigation.navigate("Directororpartner");
  };
  const handleBack = () => {
    console.log("!");
    navigation.navigate("SplashAnimation");
  };
  const DATA = [
    {
      id: "1",
      title: "Kumar",
    },
    {
      id: "2",
      title: "Anbu",
    },
    {
      id: "3",
      title: "Velan",
    },
    {
      id: "4",
      title: "Rajan",
    },
    {
      id: "5",
      title: "Vijay",
    },
    // {
    //   id: "6",
    //   title: "VelanR",
    // },
    // {
    //   id: "7",
    //   title: "VelanR",
    // },
    // {
    //   id: "8",
    //   title: "VelanR",
    // },
    // {
    //   id: "9",
    //   title: "VelanR",
    // },
    // {
    //   id: "10",
    //   title: "VelanR",
    // },
    // {
    //   id: "11",
    //   title: "VelanR",
    // },
  ];
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={{fontWeight:"bold",fontSize:24}}>{title}</Text>
      <AntDesign name="delete" size={24} color="red" />
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
                style={{ width :"100%",height:400}}
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
                <View style={styles.buttonContainer}>
                  <Button
                    title="Director"
                    textColor="white"
                    color="#212529"
                    style={styles.buttonColor}
                    onPress={() => console.log("Director")}
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
                  {/* <FlatList
              data={DATA}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={(item) => item.id}
              nestedScrollEnabled
            /> */}
                  {DATA.map((item) => {
                    return <Item title={item.title} />;
                  })}
                </View>
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
                  {/* <FlatList
              data={DATA}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={(item) => item.id}
              nestedScrollEnabled
            /> */}
                  {DATA.map((item) => {
                    return <Item title={item.title} />;
                  })}
                </View>
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
                  {DATA.map((item) => {
                    return <Item title={item.title} />;
                  })}
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
    marginVertical:10,
  },
});

export default RegistrationDirectororPartner;
