import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TextInput,
  ScrollView,
  Image,
  Pressable,
  useWindowDimensions,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";
import colors from "../config/colors";
import ErrorMessage from "../components/forms/ErrorMessage";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Dropdown } from "react-native-element-dropdown";
import AppDropdown from "./AppDropdown";
// import AppDropdown from "../components/AppDropdown";

// const data = [
//   { label: 'Item 1', value: '1' },
//   { label: 'Item 2', value: '2' },
//   { label: 'Item 3', value: '3' },
//   { label: 'Item 4', value: '4' },
//   { label: 'Item 5', value: '5' },
//   { label: 'Item 6', value: '6' },
//   { label: 'Item 7', value: '7' },
//   { label: 'Item 8', value: '8' },
// ];

const RegistartionDirectorForm = ({ back = true }) => {
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState("");

  const handleOnchange = (values) => {
    console.log(values, "onchange");
  };
  const data = [
    { label: "Mr", value: "Mr" },
    { label: "Mrs", value: "Mrs" },
    { label: "Miss", value: "Miss" },
    { label: "Ms", value: "Ms" },
    { label: "Dr", value: "Dr" },
    { label: "Prof", value: "Prof" },
    { label: "Rev", value: "Rev" },
    { label: "Capt", value: "Capt" },
    { label: "Sir", value: "Sir" },
    { label: "Madam", value: "Madam" },

    { label: "Lord", value: "Lord" },

    { label: "Lady", value: "Lady" },
    { label: "Esq", value: "Esq" },
  ];

  return (
    <ScrollView>
      <View style={{ backgroundColor: "#ffffff" }}>
        <View
          style={{
            display: "flex",
            height: 100,
            // backgroundColor: "#ffffff",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
              <MaterialCommunityIcons name="keyboard-backspace" size={30} />
            </TouchableOpacity>
          )}
        </View>
        <View
          style={{
            // display: "flex",
            // height: 100,
            backgroundColor: "#F6F6F6",
            padding: 25,
            justifyContent: "center",
            alignItems: "center",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <Text style={styles.header}>Directors or Partners</Text>
        </View>
        {/* <ScrollView> */}
        <View
          style={{
            display: "flex",
            // height: 100,
            width: "100%",
            flexDirection: "column",
            backgroundColor: "#FFFFFF",
            alignItems: "center",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingTop: 30,
            paddingHorizontal: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#212529",
              fontSize: 16,
              letterSpacing: 0.4,
            }}
          >
            Carbonyte would like to know details of any {"\n"} Associates -
            usually the Directors or Partners
          </Text>
          <View style={{ width: "100%" }}>
            <Formik
              initialValues={{
                title: "",
                amount: "",
                toAccount: "",
                fromAccount: "",
                timePeriod: "",
              }}
              //   onSubmit={handleSubmit}
              //   validationSchema={validationSchema}
            >
              <View style={{ width: "100%" }}>
                <View style={{ width: "100%", padding: 10, marginTop: 10 }}>
                  {/* <AppDropdown/> */}

                  <Dropdown
                    data={data}
                    value={title}
                    onChange={(item) => {
                      console.log(item, "thsis is item selected");
                      setTitle(item.value);
                    }}
                    labelField="label"
                    valueField="value"
                    
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    containerStyle={styles.containerStyle}
                  />
                  <Text style={styles.textStyle}>First Name</Text>
                  <TextInput
                    style={styles.textInuput}
                    placeholder="Enter the FirstName"
                  />
                </View>
                <View style={{ width: "100%", padding: 10, marginTop: 10 }}>
                  <Text style={styles.textStyle}>Last Name</Text>
                  <TextInput
                    style={styles.textInuput}
                    placeholder="Enter the LastName"
                  />
                </View>
                <View style={{ width: "100%", padding: 10, marginTop: 10 }}>
                  <Text style={styles.textStyle}>Post Code</Text>
                  <TextInput
                    style={styles.textInuput}
                    placeholder="Enter the PostCode"
                  />
                </View>
                <View style={{ width: "100%", padding: 10, marginTop: 10 }}>
                  <Text style={styles.textStyle}>First Name</Text>
                  <TextInput
                    style={styles.textInuput}
                    placeholder="Enter the FirstName"
                  />
                </View>
                <View style={{ width: "100%", padding: 10, marginTop: 10 }}>
                  <Text style={styles.textStyle}>First Name</Text>
                  {/* <AppDropdown
                    data={DropDownData}
                    value={title}
                    onChange={setTitle}
                    placeholder="Select Title"
                  /> */}
                </View>
                <View style={{ width: "100%", padding: 10, marginTop: 10 }}>
                  <Text style={styles.textStyle}>Schedulde date & time</Text>
                  {/* <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="datetime"
                    is24Hour={true}
                    display="spinner"
                    //   onChange={onChange}
                  /> */}
                </View>
              </View>
            </Formik>
          </View>
        </View>
        {/* </ScrollView> */}
      </View>
    </ScrollView>
  );
};

export default RegistartionDirectorForm;

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#212529",
  },
  textInuput: {
    borderColor: "#EBEBEB",
    borderRadius: 5,
    height: 70,
    width: "100%",
    padding: 5,
    paddingLeft: 20,
    borderWidth: 4,
    marginTop: 10,
    fontSize: 20,
  },
  textStyle: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
  dropdown: {
    borderRadius: 10,
    borderWidth: 0.5,
    height: 50,
    paddingHorizontal: 8,
    marginBottom: "5%",
    marginTop: "2.5%",
    opacity: 1,
    borderColor: "#D3D3D3",
  },
  dropdownContainer: {
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  containerStyle: {
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    backgroundColor:"red",
    color:"white",
  },
});
