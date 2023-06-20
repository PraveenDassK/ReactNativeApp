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

const RegistartionDirectorForm = ({ back = true }) => {
  const [date, setDate] = useState(new Date());

  return (
    <>
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
        <ScrollView>
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
                    <TextInput
                      style={styles.textInuput}
                      placeholder="Enter the FirstName"
                    />
                  </View>
                  {/* <View>
                    <Text>Schedulde date & time</Text>
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      mode="datetime"
                      is24Hour={true}
                      display="spinner"
                      //   onChange={onChange}
                    />
                  </View> */}
                </View>
              </Formik>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
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
});
