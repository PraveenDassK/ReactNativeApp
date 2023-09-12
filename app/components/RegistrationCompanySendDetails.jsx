import React, { useCallback, useContext, useEffect, useState } from "react";
//import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import GlobalStyles from "../../GlobalStyles";
import Button from "./AppButton";
import AuthScreen from "./AuthScreen";
import { Formik, Field, Form } from "formik";
import { CheckBox } from "@rneui/themed";
import PostCode from "./RegistrationPostCode.jsx";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../config/scaling";
const ConfirmDetailsBusiness = ({
  SaveDetails,
  setScreenToShow,
  data,
  companyType,
  aboutBusines,
  companyOperations,
  personalDetails,
  setRegistrationNumberDetails,
  setCompanyUsage,
  setCompanyInformation,
  setcompanyOperations,
  setPersonalDetails,
  addresses,
  setAddresses
}) => {
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [newAddress, setNewAddress] = useState(true);
  //state for business name change
  const [businessNameText, setBusinessNameText] = useState("");
  const [isName, setIsName] = useState(false);
  // state for business type
  const [isBusinessType, setIsBusinessType] = useState(false);
  const [businessTypeValue, setBusinessTypeValue] = useState("");
  //states for about business
  const [isAboutBusiness, setIsAboutBusiness] = useState(false);
  const [aboutBusinessValue, setAboutBusinessValue] = useState("");
  //States for opearating business
  const [isOpearating, setOpearating] = useState(false);
  const [opeartingValue, setOpearatingValue] = useState("");
  //state for main Customer Change
  const [isMainCustomer, setIsMainCustomer] = useState(false);
  const [mainCustomerValue, setMainCustomerValue] = useState("");

  //state for Customer outside UK
  const [isOutsideUK, setIsOutsideUk] = useState(false);
  const [outsideUKValue, setOutsideUKValue] = useState(false);
  console.log(addresses, "this is a confirmation");

  // states for setting source of income

  const [salesRevenue, setSalesRevenue] = useState(false);
  const [subscriptionRevenue, setSubscriptionRevenue] = useState(false);
  const [advertisingRevenue, setAdvertisingRevenue] = useState(false);
  const [affiliateIncome, setAffiliateIncome] = useState(false);
  const [licensingFranchisingRevenue, setLicensingFranchisingRevenue] =
    useState(false);
  const [rentalIncome, setRentalIncome] = useState(false);
  const [consultancyServicesIncome, setConsultancyServicesIncome] =
    useState(false);
  const [grantsSubsidiesIncome, setGrantsSubsidiesIncome] = useState(false);
  const [crowdfundingIncome, setCrowdfundingIncome] = useState(false);

  //state for showing source of income
  const [isEarning, setIsEarnings] = useState(false);
  const [earningValue, setEarningValue] = useState(null);

  //state for showing address edit
  const [isAddress, setIsAddress] = useState(false);
  const [addressValue, setAddressValue] = useState(null);
  const [formValue, setFormValue] = useState([]);
  useEffect(() => {
    getData();
  }, [getData]);

  const getData = useCallback(() => {
    let newArray = [];
    // newArray.push(data?.registered_office_address);
    let value = Object.values(addresses?.[0]).map(
      (eachvalue, index) => newArray.push(eachvalue)
    );
    setNewAddress(newArray.sort().join(", "));
  }, [newAddress, data]);
  const handleSubmit = async () => {
    setLoading(true);
    await SaveDetails(null, "CompanyConfirm");
    setLoading(false);
  };

  const handleBack = () => {
    setScreenToShow("CompanyUsage");
  };
  //handle edit for each field
  const handleEdit = (key, value) => {
    setModalVisible(true);
    // setSingleData(value);

    switch (key) {
      case "Name of the Business":
        setBusinessNameText(value);
        setIsName(true);
        break;
      case "Business Type":
        setBusinessTypeValue(value);
        setIsBusinessType(true);
        break;
      case "About your Business":
        setAboutBusinessValue(value);
        setIsAboutBusiness(true);

        break;
      case "Howlong have you been opearating":
        setOpearating(true);
        setOpearatingValue(value);
        break;
      case "Who are your main customers":
        setIsMainCustomer(true);
        setMainCustomerValue(value);
        break;
      case "customers outside":
        setIsOutsideUk(true);
        setOutsideUKValue(value);
        break;
      case "earning":
        setIsEarnings(true);
        setEarningValue(value);
        value?.map((eachValue, index) => {
          // if (eachValue ==="affiliateIncome"){

          // }
          switch (eachValue) {
            case "affiliateIncome":
              setAffiliateIncome(true);
              break;
            case "licensingFranchisingRevenue":
              setLicensingFranchisingRevenue(true);
              break;

            case "salesRevenue":
              setSalesRevenue(true);
              break;
            case "subscriptionRevenue":
              setSubscriptionRevenue(true);
              break;
            case "advertisingRevenue":
              setAdvertisingRevenue(true);
              break;
            case "rentalIncome":
              setRentalIncome(true);
              break;
            case "consultancyServicesIncome":
              setConsultancyServicesIncome(true);
              break;
            case "grantsSubsidiesIncome":
              setGrantsSubsidiesIncome(true);
              break;
            case "crowdfundingIncome":
              setCrowdfundingIncome(true);
              break;
          }
        });
        break;
      case "Location":
        setIsAddress(true);
        setAddressValue(value);
        // let newAddress = [
        //   {
        //     id: 1,
        //     label: "Address1",
        //     placeholder: "Enter the address line1",
        //     value: value?.address_line_1 === null ? "" : value?.address_line_1,
        //     initialValue: "address_line_1",
        //   },
        //   {
        //     id: 2,
        //     label: "Address2",
        //     placeholder: "Enter the address line2",
        //     value: value?.address_line_2 === null ? "" : value?.address_line_2,
        //     initialValue: "address_line_2",
        //   },
        //   {
        //     id: 3,
        //     label: "Country",
        //     placeholder: "Enter the country",
        //     value: value?.country === null ? "" : value?.country,
        //     initialValue: "country",
        //   },
        //   {
        //     id: 4,
        //     label: "Locality",
        //     placeholder: "Enter the locality",
        //     value: value?.locality === null ? "" : value?.locality,
        //     initialValue: "locality",
        //   },
        //   {
        //     id: 5,
        //     label: "Postal Code",
        //     placeholder: "Enter the postal code",
        //     value: value?.postal_code === null ? "" : value?.postal_code,
        //     initialValue: "postcode",
        //   },
        //   {
        //     id: 6,
        //     label: "Region",
        //     placeholder: "Enter the region",
        //     value: value?.region === null ? "" : value?.region,
        //     initialValue: "region",
        //   },
        // ];
        // setFormValue(newAddress);
        break;
    }

    // setIsName
  };

  // handle submit of each filed
  const handleModalFinish = () => {
    setModalVisible(false);
    if (isName) {
      const value = { ...data, company_name: businessNameText };
      console.log(value);
      setRegistrationNumberDetails(value);
      setIsName(false);
    } else if (isBusinessType) {
      const businessValue = {
        ...companyType,
        operationType: businessTypeValue,
      };
      setCompanyUsage(businessValue);
      setIsBusinessType(false);
    } else if (isAboutBusiness) {
      const aboutBusines = aboutBusinessValue;
      setCompanyInformation(aboutBusines);
      setIsAboutBusiness(false);
    } else if (isOpearating) {
      setcompanyOperations(opeartingValue);
      setOpearating(false);
    } else if (isMainCustomer) {
      const maincustomer = {
        ...companyType,
        main_customers: mainCustomerValue,
      };
      setCompanyUsage(maincustomer);
      setIsMainCustomer(false);
    } else if (isOutsideUK) {
      const maincustomer = {
        ...companyType,
        user_outofUK: outsideUKValue,
      };
      setCompanyUsage(maincustomer);
      setIsOutsideUk(false);
    } else if (isEarning) {
      const details = {
        salesRevenue: salesRevenue,
        subscriptionRevenue: subscriptionRevenue,
        advertisingRevenue: advertisingRevenue,
        affiliateIncome: affiliateIncome,
        licensingFranchisingRevenue: licensingFranchisingRevenue,
        rentalIncome: rentalIncome,
        consultancyServicesIncome: consultancyServicesIncome,
        grantsSubsidiesIncome: grantsSubsidiesIncome,
        crowdfundingIncome: crowdfundingIncome,
      };
      setPersonalDetails(getTrueItems(details));
      setIsEarnings(false);
    }
  };

  // function to get true value for income
  function getTrueItems(obj) {
    const trueItems = [];

    for (let key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === true) {
        trueItems.push(key);
      }
    }

    return trueItems;
  }
  //data for company business type
  const companyData = [
    { label: "LLC", value: "LLC" },
    { label: "SOLETRADER", value: "SOLETRADER" },
    { label: "OPARTNRSHP", value: "OPARTNRSHP" },
    { label: "LPARTNRSHP", value: "LPARTNRSHP" },
    { label: "LLP", value: "LLP" },
    { label: "PLC", value: "PLC" },
  ];
  //data for opearing years
  const timeOptions = [
    { label: "New ownership", value: "New ownership" },
    { label: "0 - 6 Months", value: "0 - 6 Months" },
    { label: "6 Months - 1 Year", value: "6 Months - 1 Year" },
    { label: "1 - 2 Years", value: "1 - 2 Years" },
    { label: "2 - 5 Years", value: "2 - 5 Years" },
    { label: "5 - 10 Years", value: "5 - 10 Years" },
    { label: "10+ Years", value: "10+ Years" },
  ];
  //data for outsideUk

  const outSideUkData = [
    { label: "True", value: true },
    { label: "False", value: false },
  ];

  const handleAddress = (value) => {
    console.log(value);
    setModalVisible(false);
    setAddresses([value]);

    // const editedAddress = { ...data, registered_office_address: value };
    // setAddressValue(editedAddress);
    // setRegistrationNumberDetails(editedAddress);
    let newArray = [];
     Object.values(value).map(
      (eachvalue, index) => newArray.push(eachvalue)
    );
    setNewAddress(newArray.sort().join(", "));
    setIsAddress(false);
  };
  return (
    <ScrollView>
      <AuthScreen
        title="Confirm Business details"
        img="turtleCard"
        handleBack={handleBack}
        height={400}
      >
        <EditComponents
          title={"Name of the Business"}
          value={data?.company_name}
          onPress={() => handleEdit("Name of the Business", data?.company_name)}
        />
        <EditComponents
          title={"Business Type"}
          value={companyType?.operationType}
          onPress={() =>
            handleEdit("Business Type", companyType?.operationType)
          }
        />
        <EditComponents
          title={"Location"}
          value={newAddress}
          onPress={() =>
            handleEdit("Location", addresses)
          }
        />
        <EditComponents
          title={"About your Business"}
          value={aboutBusines}
          onPress={() => handleEdit("About your Business", aboutBusines)}
        />
        <EditComponents
          title={"How are you earning?"}
          value={personalDetails.join("\n")}
          onPress={() => handleEdit("earning", personalDetails)}
        />
        <EditComponents
          title={`Howlong have you been${"\n"} opearating?`}
          value={companyOperations}
          onPress={() =>
            handleEdit("Howlong have you been opearating", companyOperations)
          }
        />
        <EditComponents
          title={`Who are your main customers?`}
          value={companyType?.main_customers}
          onPress={() =>
            handleEdit(
              "Who are your main customers",
              companyType?.main_customers
            )
          }
        />
        <EditComponents
          title={`Employee or customers outside${"\n"} of the UK?`}
          value={companyType?.user_outofUK}
          onPress={() =>
            handleEdit("customers outside", companyType?.user_outofUK)
          }
        />

        {loading ? (
          <Button
            title="Submission in progress"
            color="black"
            textColor="white"
            onPress={() => {}}
          />
        ) : (
          <Button
            title="Continue"
            color="black"
            textColor="white"
            onPress={handleSubmit}
          />
        )}
        <View style={styles.centeredView}>
          <Modal
            animationType="fade "
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
              setIsAboutBusiness(false);
              setIsBusinessType(false);
              setIsName(false);
            }}
          >
            <ScrollView>
              <View style={styles.modalMainView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Edit Details</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                      setIsAboutBusiness(false);
                      setIsBusinessType(false);
                      setIsName(false);
                      setOpearating(false);
                      setIsMainCustomer(false);
                      setIsEarnings(false)
                      setIsOutsideUk(false);
                      setIsAddress(false);
                    }}
                  >
                    <Text style={styles.textStyle}>X</Text>
                  </Pressable>
                </View>
                <View style={{ padding: "0%" }}>
                  {isName ? (
                    <TextInput
                      style={styles.textInput}
                      //   keyboardType="numeric"
                      onChangeText={(newText) => setBusinessNameText(newText)}
                      defaultValue={businessNameText}
                    />
                  ) : null}

                  {isBusinessType ? (
                    <Dropdown
                      style={[styles.textInput]}
                      containerStyle={styles.dropdownContainer}
                      data={companyData}
                      maxHeight={100}
                      labelField="label"
                      valueField="label"
                      placeholder={"Select an option"}
                      value={businessTypeValue}
                      defaultValue={businessTypeValue}
                      onChange={(item) => {
                        setBusinessTypeValue(item.value);
                      }}
                    />
                  ) : null}
                  {isAboutBusiness ? (
                    <TextInput
                      editable
                      multiline
                      numberOfLines={4}
                      maxLength={500}
                      minLength={250}
                      placeholder="Write about your business... (min 250 characters)"
                      placeholderTextColor="grey"
                      keyboardType="Text"
                      defaultValue={aboutBusinessValue}
                      onChangeText={(newText) => setAboutBusinessValue(newText)}
                      style={[styles.component1981Child, styles.childBorder]}
                    />
                  ) : null}
                  {isOpearating ? (
                    <Dropdown
                      style={[styles.textInput]}
                      containerStyle={styles.dropdownContainer}
                      data={timeOptions}
                      maxHeight={100}
                      labelField="label"
                      valueField="label"
                      placeholder={"Select an option"}
                      value={opeartingValue}
                      defaultValue={opeartingValue}
                      onChange={(item) => {
                        setOpearatingValue(item.value);
                      }}
                    />
                  ) : null}
                  {isMainCustomer ? (
                    <TextInput
                      style={styles.textInput}
                      //   keyboardType="numeric"
                      onChangeText={(newText) => setMainCustomerValue(newText)}
                      defaultValue={mainCustomerValue}
                    />
                  ) : null}
                  {isOutsideUK ? (
                    <Dropdown
                      style={[styles.textInput]}
                      containerStyle={styles.dropdownContainer}
                      data={outSideUkData}
                      maxHeight={100}
                      labelField="label"
                      valueField="value"
                      placeholder={"Select an option"}
                      value={outsideUKValue}
                      defaultValue={outsideUKValue}
                      onChange={(item) => {
                        setOutsideUKValue(item.value);
                      }}
                    />
                  ) : null}
                  {isEarning ? (
                    <Formik onSubmit={(values) => sendData(values)}>
                      {({ handleChange, handleSubmit, setFieldTouched }) => (
                        <View
                          style={[
                            styles.component1981,
                            styles.mt14,
                            { marginLeft: horizontalScale(10) },
                          ]}
                        >
                          <Text>Enter all that apply</Text>
                          <CheckBox
                            title="Sales revenue"
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            checkedColor="black"
                            checked={salesRevenue}
                            onPress={() => setSalesRevenue(!salesRevenue)}
                          />
                          <CheckBox
                            title="Subscription revenue"
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            checkedColor="black"
                            checked={subscriptionRevenue}
                            onPress={() =>
                              setSubscriptionRevenue(!subscriptionRevenue)
                            }
                          />
                          <CheckBox
                            title="Advertising revenue"
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            checkedColor="black"
                            checked={advertisingRevenue}
                            onPress={() =>
                              setAdvertisingRevenue(!advertisingRevenue)
                            }
                          />
                          <CheckBox
                            title="Affiliate income"
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            checkedColor="black"
                            checked={affiliateIncome}
                            onPress={() => setAffiliateIncome(!affiliateIncome)}
                          />
                          <CheckBox
                            title="Licensing or franchising"
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            checkedColor="black"
                            checked={licensingFranchisingRevenue}
                            onPress={() =>
                              setLicensingFranchisingRevenue(
                                !licensingFranchisingRevenue
                              )
                            }
                          />
                          <CheckBox
                            title="Rental income"
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            checkedColor="black"
                            checked={rentalIncome}
                            onPress={() => setRentalIncome(!rentalIncome)}
                          />
                          <CheckBox
                            title="Consultancy or professional services"
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            checkedColor="black"
                            checked={consultancyServicesIncome}
                            onPress={() =>
                              setConsultancyServicesIncome(
                                !consultancyServicesIncome
                              )
                            }
                          />
                          <CheckBox
                            title="Grants and subsidies"
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            checkedColor="black"
                            checked={grantsSubsidiesIncome}
                            onPress={() =>
                              setGrantsSubsidiesIncome(!grantsSubsidiesIncome)
                            }
                          />
                          <CheckBox
                            title="Crowdfunding"
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            checkedColor="black"
                            checked={crowdfundingIncome}
                            onPress={() =>
                              setCrowdfundingIncome(!crowdfundingIncome)
                            }
                          />
                        </View>
                      )}
                    </Formik>
                  ) : null}
                  {isAddress ? (
                    // <Formik
                    //   enablereinitialize
                    //   initialValues={{
                    //     address_line_1: formValue?.[0]?.value,
                    //     address_line_2: formValue?.[1]?.value,
                    //     country: formValue?.[2]?.value,
                    //     locality: formValue?.[3]?.value,
                    //     postal_code: formValue?.[4]?.value,
                    //     region: formValue?.[5]?.value,
                    //   }}
                    //   // validationSchema={validationSchema}
                    //   onSubmit={handleAddress}
                    // >
                    //   {({
                    //     handleChange,
                    //     handleSubmit,
                    //     errors,
                    //     setFieldTouched,
                    //     setFieldValue,
                    //     touched,
                    //   }) => (
                    //     <>
                    //       <View>
                    //         {formValue?.map((item, index) => (
                    //           <View key={item.id}>
                    //             <View
                    //               key={item.id}
                    //               style={{
                    //                 width: "90%",
                    //                 marginLeft: "5%",
                    //                 marginBottom: "5%",
                    //               }}
                    //             >
                    //               <Text style={styles.lable}>{item.label}</Text>
                    //               <TextInput
                    //                 onBlur={() =>
                    //                   setFieldTouched(item.initialValue)
                    //                 }
                    //                 onChangeText={handleChange(
                    //                   item.initialValue
                    //                 )}
                    //                 style={styles.textInput}
                    //                 placeholder={item.placeholder}
                    //                 // value={item.initialValue}
                    //                 defaultValue={item.value}
                    //               />

                    //               {/* <ErrorMessage
                    //                   error={errors[item.initialValue]}
                    //                   visible={touched[item.initialValue]}
                    //                 /> */}
                    //             </View>
                    //           </View>
                    //         ))}
                    //         <Button
                    //           title="Continue"
                    //           color="black"
                    //           textColor="white"
                    //           onPress={handleSubmit}
                    //         />
                    //       </View>
                    //     </>
                    //   )}
                    // </Formik>
                    <PostCode AddAddress={handleAddress} backgroundColor={"white"}/>

                  ) : null}
                  {!isAddress ? (
                    <Button
                      title="Continue"
                      color="black"
                      textColor="white"
                      onPress={handleModalFinish}
                    />
                  ) : null}
                </View>
              </View>
            </ScrollView>
          </Modal>
        </View>
      </AuthScreen>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalMainView: {
    backgroundColor: GlobalStyles.Color.gray_200,
    marginTop: "50%",
    marginHorizontal: "8%",
    padding: 20,
    borderRadius: 10,
  },

  modalView: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    flexDirection: "row",
    paddingVertical: 5,
  },
  modalText: {
    fontFamily: "Montserrat",
    fontSize: 14,
    color: GlobalStyles.Color.gray_2000,
  },
  textInput: {
    borderColor: GlobalStyles.Color.borderColor,
    backgroundColor: GlobalStyles.Color.white,
    borderWidth: 1,
    paddingHorizontal: "7%",
    paddingVertical: "5%",
    fontSize: 15,
    marginVertical: "10%",
    borderRadius: 5,
  },

  textStyle: {
    color: GlobalStyles.Color.lightBlack,
    fontSize: 16,
    fontFamily: "Montserrat",
  },
  childBorder: {
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: "#D3D3D3",
    opacity: 1,
    height: 100,
    marginTop: "2.5%",
    marginBottom: "5%",
  },
});

export default ConfirmDetailsBusiness;

const EditComponents = ({ title, value, onPress }) => {
  return (
    <View
      style={{
        marginVertical: "3%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View style={{ flex: 1 }}>
        <View>
          <Text
            style={{
              color: GlobalStyles.Color.black,
              fontSize: 15,
              fontFamily: "Montserrat-Regular",
              textTransform: "capitalize",
            }}
          >
            {title}
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: GlobalStyles.Color.black,
              fontSize: 15,
              fontFamily: "Montserrat",
              marginTop: 10,
            }}
          >
            {String(value)}
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Feather name="edit" size={24} color={GlobalStyles.Color.gray_700} />
      </TouchableOpacity>
    </View>
  );
};
