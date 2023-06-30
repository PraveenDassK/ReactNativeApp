import React, { useContext, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import GlobalStyles from "../../GlobalStyles";
import AuthContext from "../auth/context";
import api from "../api/api_list";
import apiBeneficiaries from "../api/apiBeneficiaries";
import Button from "../components/AppButton";
import { verticalScale } from "../config/scaling";
import { Formik } from "formik";
import * as Yup from "yup";

import ErrorMessage from "../components/forms/ErrorMessage";
import KeyboardAvoider from "../components/KeyboardAvoider";
import CountdownBar from "../components/CountdownBar";
import { CheckBox } from "@rneui/themed";

const validationSchema = Yup.object().shape({
  accountName: Yup.string().required().min(1).max(30).label("Account name"),
  phoneNumber: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Phone number must be digits")
    .min(9)
    .max(11)
    .label("Phone number"),

  sortCode: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Sort code must be digits")
    .min(6, "Must be exactly 6 digits")
    .max(6, "Must be exactly 6 digits")
    .label("Sort code"),
  accNum: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Account number must be digits")
    .min(8, "Must be exactly 8 digits")
    .max(8, "Must be exactly 8 digits")
    .label("Account number"),
});

const items = [
  {
    id: 1,
    label: "IBAN",
    placeholder: "",
    initialValue: "iban",
  },
  {
    id: 2,
    label: "BIC",
    placeholder: "",
    initialValue: "bic",
  },
  {
    id: 3,
    label: "Currency",
    placeholder: "",
    initialValue: "currency",
  },
  {
    id: 4,
    label: "Refrence",
    placeholder: "",
    initialValue: "refrence",
  },
];

const AddBeneficiary = ({ navigation, route }) => {
  const authContext = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async ({
    iban,
    bic,
    currency,
    refrence,
  }) => {
    let requestObj = route.params
    requestObj.destinationIdentifier.iban = iban
    requestObj.destinationIdentifier.bic = bic
    requestObj.destinationIdentifier.currency = currency
    requestObj.externalRefrence = refrence
    console.log(requestObj)

    const checkRequestObj = {
      "paymentAccountId": "A122HTHM",
      "sortCode": "000000",
      "accountNumber": "12345674",
      "secondaryAccountId": "1",
      "accountType": "PERSONAL",
      "name": "a"
    }

    //API call
    const checkCall = await apiBeneficiaries.checkBeneficary(authContext.userId,checkRequestObj);
    console.log(checkCall)
    if(checkCall.result.code == "MATCHED"){

    }

    const beneficaryCall = await apiBeneficiaries.AddBeneficiary(authContext.userID, requestObj);
    console.log(beneficaryCall)
    console.log(beneficaryCall.data.details)
    //If the payee is a duplicate don't add them
    if (
      beneficaryCall.data.resultMessage ==
      '[{"field":"customer","code":"DUPLICATE","message":"Beneficiary already exists for Customer"}]'
    ) {
      alert("You already have this payee");
      return;
    }

    navigation.navigate("Account")
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <KeyboardAvoider>
      <CountdownBar currentPage={3} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, paddingVertical: verticalScale(60) }}>
          <Formik
            initialValues={{
              iban: "",
              bic: "",
              currency: "GBP",
              refrence: "Friend"
            }}
            onSubmit={handleSubmit}
          // validationSchema={validationSchema}
          >
            {({
              handleChange,
              handleSubmit,
              errors,
              setFieldTouched,
              touched,
            }) => (
              <>
                <View>
                  {items.map((item, index) => (
                    <View
                      key={item.id}
                      style={{
                        width: "90%",
                        marginLeft: "5%",
                        marginBottom: "5%",
                      }}
                    >
                      <Text style={{ fontSize: 14 }}>{item.label}</Text>
                      <TextInput
                        onBlur={() => setFieldTouched(item.initialValue)}
                        onChangeText={handleChange(item.initialValue)}
                        style={{ fontSize: 24, marginTop: "1%" }}
                      ></TextInput>
                      <View
                        style={{
                          height: 1,
                          backgroundColor: "black",
                          marginTop: "1%",
                          opacity: 0.7,
                        }}
                      />
                      <ErrorMessage
                        error={errors[item.initialValue]}
                        visible={touched[item.initialValue]}
                      />
                    </View>
                  ))}
                </View>
                <View
                  style={[
                    { flex: 1, justifyContent: "flex-end" }
                  ]}
                >
                  <TouchableOpacity style={styles.button}>
                    <Button title="Confirm" onPress={handleSubmit} />
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoider>
  );
};

const styles = StyleSheet.create({
  boxShadow: {},
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.DivContainer.backgroundColor,
  },
  bottom: {
    bottom: "5%",
    flex: 1,
    justifyContent: "flex-end",
  },

  button: {
    width: "90%",
    left: "5%",
  },
});

export default AddBeneficiary;
