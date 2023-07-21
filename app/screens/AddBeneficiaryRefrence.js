import React, { useContext, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
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
import { Dropdown } from "react-native-element-dropdown";
import ErrorMessage from "../components/forms/ErrorMessage";
import KeyboardAvoider from "../components/KeyboardAvoider";
import CountdownBar from "../components/CountdownBar";
import { CheckBox } from "@rneui/themed";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import StepProgress from "../components/SteeperCounter";
import PinModal from "../components/PinModal";

const validationSchema = Yup.object().shape({
  iban: Yup.string().matches(/^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/, "Invalid IBAN format"),

  bic: Yup.string().matches(/^[A-Za-z]{6}[A-Za-z0-9]{2}([A-Za-z0-9]{3})?$/, "Invalid BIC format"),

  currency: Yup.string().required("Currency type is required"),

  reference: Yup.string(),
});
const items = [
  {
    id: 1,
    label: "IBAN",
    placeholder: "Enter the IBAN",
    initialValue: "iban",
  },
  {
    id: 2,
    label: "BIC",
    placeholder: "Enter the BIC",
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
    placeholder: "Enter the reference",
    initialValue: "refrence",
  },
];

const AddBeneficiary = ({ navigation, route }) => {
  const authContext = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCard, setSelectedCard] = useState();
  const [currencyError, setCurrencyError] = useState("");
  const [showPinModal, setShowPinModal] = useState(false);
  let requestObj = route.params;
  console.log(authContext.userID);
  const handleSubmit = async ({ iban, bic, currency, refrence }) => {
    console.log()
    if (!selectedCard) {
      setCurrencyError("Need to Select Currency");
      return;
    } else {
      setCurrencyError("");
    }
    requestObj.destinationIdentifier.iban = iban;
    requestObj.destinationIdentifier.bic = bic;
    requestObj.destinationIdentifier.currency = selectedCard;
    requestObj.externalReference = refrence;
    console.log(requestObj);

    const checkRequestObj = {
      paymentAccountId: "A122HTHM",
      sortCode: "000000",
      accountNumber: "12345674",
      secondaryAccountId: "1",
      accountType: "PERSONAL",
      name: "a",
    };
    setShowPinModal(true);
  };
  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }
  const handleSuccess = async () => {
    setShowPinModal(false);
    setIsLoading(true);
    console.log(requestObj, "This is from api after pin");
    const checkCall = await apiBeneficiaries.checkBeneficary(
      authContext.userId,
      requestObj
    );
    console.log(checkCall, "this is call");
    // if (checkCall.result.code == "MATCHED") {
    // }

    const beneficaryCall = await apiBeneficiaries.AddBeneficiary(
      authContext.userID,
      requestObj
    );

    console.log(beneficaryCall, "this ass call");
    console.log(beneficaryCall.data, "Final data");
    //If the payee is a duplicate don't add them
    if (
      beneficaryCall.data.resultMessage ==
      '[{"field":"customer","code":"DUPLICATE","message":"Beneficiary already exists for Customer"}]'
    ) {
      setIsLoading(false);

      alert("You already have this payee");
      return navigation.navigate("SendMoney");
    }
    if (
      beneficaryCall.data.status == 200
    ) {
      setIsLoading(false);

      navigation.navigate("AddBeneficiarySuccess");
      
    } else {
      setIsLoading(false);

      alert(beneficaryCall.data.resultMessage);
      return navigation.navigate("AddBeneficiaryRefrence");
    }
  };
  if (showPinModal) {
    return (
      <View style={styles.mainContainer}>
        {/* <RecentTransactions
        amount={10}
      /> */}
        {showPinModal ? (
          <PinModal title="Enter your PIN" success={() => handleSuccess()} />
        ) : null}
      </View>
    );
  }
  const arrayData = [
    {
      label: "Pounds",
      value: "GBP",
    },
    {
      label: "Euros",
      value: "EUR",
    }
  ];

  const renderItem = (item) => {
    return (
      <View style={styles.dropDownarrayitem}>
        <View
          style={{
            width: 30,
            height: 30,
            backgroundColor: GlobalStyles.Color.borderColor,
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {item.label === "American dollars" && (
            <FontAwesome name="dollar" size={14} color="black" />
          )}
          {item.label === "Euros" && (
            <FontAwesome name="euro" size={14} color="black" />
          )}
          {item.label === "Pounds" && (
            <FontAwesome5 name="pound-sign" size={14} color="black" />
          )}
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text style={styles.textItem}>{item.label}</Text>
        </View>
      </View>
    );
  };

  return (
    <KeyboardAvoider>
      {/* <CountdownBar currentPage={3} /> */}
      <StepProgress currentStep={3} />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 24,
            backgroundColor: GlobalStyles.Color.white,
            marginTop: 27,
            borderRadius: 20,
          }}
        >
          <Formik
            initialValues={{
              iban: "",
              bic: "",
              currency: "GBP",
              refrence: "Friend",
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
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
                      <Text style={styles.lable}>{item.label}</Text>
                      {item.label === "Currency" ? (
                        <View>
                          <Dropdown
                            data={arrayData}
                            value={selectedCard}
                            labelField="label"
                            valueField="value"
                            // defalutValue="Mr"
                            onChange={(item) => {
                              console.log(item, "thsis is item selected");
                              setSelectedCard(item.value);
                              handleChange(item.value);
                            }}
                            style={styles.dropdown}
                            containerStyle={styles.containerStyle}
                            // renderRightIcon={() => (
                            //   <AntDesign name="checkcircle" size={24} color="green" />
                            // )}
                            renderItem={renderItem}
                            placeholder="Select Currency"
                            autoScroll={false}
                          />
                          <ErrorMessage
                            error={currencyError}
                            visible={currencyError}
                          />
                        </View>
                      ) : (
                        <TextInput
                          onBlur={() => setFieldTouched(item.initialValue)}
                          onChangeText={handleChange(item.initialValue)}
                          style={styles.inputBox}
                          placeholder={item.placeholder}
                        />
                      )}

                      <ErrorMessage
                        error={errors[item.initialValue]}
                        visible={touched[item.initialValue]}
                      />
                    </View>
                  ))}
                </View>
                <View style={[{ flex: 1, justifyContent: "flex-end" }]}>
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
  inputBox: {
    width: "100%",
    height: 46,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: GlobalStyles.Color.borderColor,
    paddingHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 14,
    fontSize: 14,
    color: GlobalStyles.Color.darkGray,
  },
  lable: {
    color: GlobalStyles.Color.black,
    fontFamily: "Montserrat",
    fontSize: 14,
  },
  containerStyle: {
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    // backgroundColor:"red",
    // color:"white",
  },
  dropdown: {
    width: "100%",
    height: 46,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: GlobalStyles.Color.borderColor,
    paddingHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 14,
    fontSize: 14,
    color: GlobalStyles.Color.darkGray,
  },
  dropDownarrayitem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 10,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default AddBeneficiary;
