import React, { useState, useRef, useEffect } from "react";
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
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { CheckBox } from "@rneui/themed";
import Button from "./AppButton";
import { Formik } from "formik";
import * as Yup from "yup";
import colors from "../config/colors";
import ErrorMessage from "../components/forms/ErrorMessage";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Dropdown } from "react-native-element-dropdown";
import { CountryPicker } from "react-native-country-codes-picker";
import PhoneInput from "react-native-phone-number-input";
import GetPostCode from "../components/RegistrationPostCode";
import apiLogin from "../api/apiLogin";
import moment from "moment";
import * as Device from "expo-device";
import CountryPickerModal from "react-native-country-codes-picker";

const RegistartionDirectorForm = ({
  back = true,
  role,
  setFormView,
  setDirectorData,
  directorData,
  setBeneficialownersData,
  setControllingInterestsData,
  setSoleTraderData,
  setPartnersData,
  partnersData,
}) => {
  const [date, setDate] = useState(new Date());
  const [birthdate, setBirthDate] = useState(new Date());
  const [birthError, setBirthError] = useState("");
  const [birthShow, setBirthShow] = useState(false);
  const [title, setTitle] = useState("Mr");
  const [apiAddress, setAPIAddress] = useState();
  const [displaymode, setMode] = useState("date");
  const [isDisplayDate, setDateShow] = useState(false);
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState({
    code: "GB",
    dial_code: "+44",
    flag: "🇬🇧",
    name: {
      bg: "Великобритания",
      by: "Злучанае Каралеўства",
      cn: "英国",
      cz: "Spojené království",
      de: "Vereinigtes Königreich",
      ee: "Ühendkuningriik",
      el: "Ηνωμένο Βασίλειο",
      en: "United Kingdom",
      es: "Reino Unido",
      fr: "Royaume-Uni",
      he: "הממלכה המאוחדת",
      it: "Regno Unito",
      jp: "イギリス",
      nl: "Verenigd Koningkrijk",
      pl: "Zjednoczone Królestwo",
      pt: "Reino Unido",
      ro: "Regatul Unit",
      ru: "Объединенное Королевство",
      ua: "Об'єднане Королівство",
      zh: "英國",
    },
  });
  const [manualView, setManualView] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [isApplicant, setApplicant] = useState(false);
  const [formCheck, setIsFormCheck] = useState(false);
  const [postCode, setPostCode] = useState("");
  const phoneInput = useRef();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [addressData, setAddressData] = useState([]);
  const [address, setAddress] = useState(null);
  const [nationallityValue, setNationallity] = useState("");
  const [occupatioinValue, setOccupatioin] = useState("");
  const [genderValue, setGenderValue] = useState("");
  const [martialValue, setMartialValue] = useState("");
  const [maritalStatusError, setMartialStatus] = useState("");
  const [genderStatusError, setGenderStatus] = useState("");
  const [owenershipShares, setOwnweShipError] = useState(0);
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [countryStatusError, setCountryStatus] = useState("");
  const [nationallityStatusError, setNationallityStatus] = useState("");
  const [occupationStatusError, setOccupatioinStatus] = useState("");
  const [employementValue, setEmployementValue] = useState("");
  const currentTime = new Date();

  const roleMenu = [{ label: role, value: role }];
  const genderMenu = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Non-binary", value: "Nonbinary" },
  ];
  const nationalityMenu = [
    { label: "British", value: "British" },
    { label: "indian", value: "Indian" },
    { label: "Other", value: "Other" },
  ];
  const occupatioinMenu = [
    { label: "Doctor", value: "Doctor" },
    { label: "Lawyer", value: "Lawyer" },
    { label: "Other", value: "Other" },
  ];
  const employementMenu = [
    { label: "Full time", value: "Full time" },
    { label: "Part time", value: "Part time" },
    { label: "Unemployed", value: "Unemployed" },
    { label: "Student", value: "Student" },
  ];

  const martialMenu = [
    { label: "Single", value: "Single" },
    { label: "Married", value: "Married" },
    { label: "Widowed", value: "Widowed" },
    { label: "Separated", value: "Separated" },
    { label: "Divorced", value: "Divorced" },
  ];

  // finding small Device
  const { height, width } = useWindowDimensions();
  const [device, setDevice] = useState("");
  const smallDevice = { height: 650 };
  useEffect(() => {
    const deviceType = async () => {
      const deviceSize = await Device.getDeviceTypeAsync();

      setDevice(deviceSize);
    };
    deviceType();
  }, [height, width]);
  const isSmallDevice = height < smallDevice.height;
  /**
   * @dev This finds the correct postcodes
   */
  const handleAddress = async (postCode) => {
    // const response = await apiLogin.GetAddressByPostCode(postcode)
    // setAddressData(response)

    // Remove this on live
    const dummyAddress = [
      {
        label: "Fake address",
        value: {
          address1: "123 street",
          address2: "456 house",
          area: "Area 5",
          city: "City 6",
          locale: "en_GB",
          postcode: postCode,
        },
      },
    ];
    setAddressData(dummyAddress);
  };

  const handleOnchange = (values) => {
    console.log(values, "onchange");
  };

  const onChange = (event, selectedDate) => {
    // const currentDate = selectedDate || date;
    // setDate(currentDate);
    const currentDate = selectedDate;
    setDate(currentDate);
    setDateShow(false);
  };
  const onDobChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setBirthDate(currentDate);

    setBirthShow(false);
  };
  function validateDOB(dob) {
    var currentDate = moment(); // Get the current date and time
    var inputDate = moment(dob); // Parse the input DOB

    // Calculate the difference between current date and input DOB
    var yearsDiff = currentDate.diff(inputDate, "years");

    // Compare the difference with 18 to check if the person is 18 years or older
    if (yearsDiff >= 18) {
      return true; // DOB is valid and person is 18 years or older
    } else {
      return false; // DOB is not valid or person is under 18 years old
    }
  }
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

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .matches(/^[A-Za-z ]*$/, "First name can only contain letters and spaces")
      .required("First name is required"),
    lastName: Yup.string()
      .matches(/^[A-Za-z ]*$/, "Last name can only contain letters and spaces")
      .required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email address is required"),
    phone: Yup.string()
      .matches(/^[0-9]*$/, "Phone Number only contains numbers")
      .required("Phone number is required"),
    id: Yup.string().required("National Insurance No is required"),
    postCode: Yup.string().required("Post Code is required"),
    totalIncome: Yup.string().required("Total Income is required"),
    savings: Yup.string().required("Savings is required"),

    city: Yup.string().when([], {
      is: () => manualView === true,
      then: Yup.string().required('("City is required"'),
      otherwise: Yup.string().notRequired(),
    }),
    street: Yup.string().when([], {
      is: () => manualView === true,
      then: Yup.string().required("street is required"),
      otherwise: Yup.string().notRequired(),
    }),
    address: Yup.string().when([], {
      is: () => manualView === true,
      then: Yup.string().required("Address is required"),
      otherwise: Yup.string().notRequired(),
    }),
  });

  const handleSubmit = async ({
    firstName,
    lastName,
    email,
    phone,
    id,
    postCode,
    address,
    country,
    city,
    street,
    owenershipShares,
    totalIncome,
    savings,
  }) => {
    let roleLables;
    switch (role) {
      case "Director":
        roleLables = "DIRECTOR";
        break;
      case "Beneficial owners":
        roleLables = "BENE_OWNER";
        break;
      case "Controlling Interests":
        roleLables = "C_INTEREST";
        break;
      case "SOLE TRADER":
        roleLables = "SOLETRADER";
        break;
      case "Partners":
        roleLables = "PARTNER";
        break;
    }
    if (!martialValue) {
      setMartialStatus("MartialValue is required ");
    } else if (!genderValue) {
      setGenderStatus("Gender is required ");
    } else if (!employementValue) {
      setEmploymentStatus("Employement is required ");
    } else if (!countryCode?.name?.en) {
      setCountryStatus("Country is required ");
    } else if (!nationallityValue) {
      setNationallityStatus("Nationality is required ");
    } else if (validateDOB(birthdate) === false) {
      setBirthError("Age must be above 18yrs");
    } else if (role === "Beneficial owners" && !owenershipShares) {
      setOwnweShipError("Ownership shares is required");
    } else {
      setEmploymentStatus("");
      setGenderStatus(" ");
      setMartialStatus(" ");
      setOccupatioinStatus("");
      setNationallityStatus("");
      setEmploymentStatus("");
      setCountryStatus("");
      setBirthError("");
      const dataObj = {
        id: 0,
        customerId: "",
        emails: [
          {
            emailId: email,
          },
        ],

        phoneNumbers: [
          {
            phoneNo: phone,
          },
        ],

        customerDetails: {
          documentNo: "",

          documentType: "",
          address: !address ? apiAddress.address1 : `${address} ${street}`,

          firstName: firstName,

          dob: moment(birthdate).format("DD-MM-YYYY"),

          nationalId: id,

          lastName: lastName,

          postCode: !address ? apiAddress.postcode : postCode,

          postTown: !address ? apiAddress.area : city,

          country: countryCode?.name?.en,

          countryCode: "GBR",

          locale: !address ? apiAddress.locale : "en_GB",

          salutation: title,
          gender: genderValue,
          maritalStatus: martialValue,
          employmentDetails: employementValue,
        },
        income: {
          totalIncome: totalIncome,

          savings: savings,

          taxResidency: nationallityValue,

          incomeSources: ["Salary"],
        },

        key: "",

        role: roleLables,
        isApplicant: isApplicant,

        ownershipPercentage: Number(owenershipShares),

        marketingChoices: "string",

        acceptanceDateTime: moment(currentTime).format("DD-MM-YYYY"),

        policyVersion: "1",
      };

      console.log(dataObj, "this is object");
      // const IDs = businessType.businessId;
      // const response = await apiLogin.RegisterPersonalDirectorAccount(
      //   dataObj,
      //   IDs
      // );
      // console.log(response);
      // const ID = `CC${id}`;
      // const getResponse = await apiLogin.GetCustomerDetails(ID);
      // console.log(getResponse, "this is get");
      switch (role) {
        case "Director":
          setDirectorData((directorData) => [...directorData, dataObj]);
          break;
        case "Beneficial owners":
          setBeneficialownersData((directorData) => [
            ...directorData,
            // getResponse?.customerDetails?.firstName +
            //   getResponse?.customerDetails?.lastName,
            dataObj,
          ]);
          break;
        case "Controlling Interests":
          setControllingInterestsData((directorData) => [
            ...directorData,
            // getResponse?.customerDetails?.firstName +
            //   getResponse?.customerDetails?.lastName,
            dataObj,
          ]);
          break;
        case "Partners":
          setPartnersData((directorData) => [
            ...directorData,
            // getResponse?.customerDetails?.firstName +
            //   getResponse?.customerDetails?.lastName,
            dataObj,
          ]);
          break;
        case "SOLE TRADER":
          setSoleTraderData((directorData) => [
            ...directorData,
            // getResponse?.customerDetails?.firstName +
            //   getResponse?.customerDetails?.lastName,
            dataObj,
          ]);
          break;

        // default:
        //   return setDirectorData((directorData) => [
        //     ...directorData,
        //     getResponse.customerDetails.firstName +
        //       getResponse.customerDetails.lastName,
        //   ]);
      }
      setFormView(0);
    }
  };

  //For the country picker
  const sortCountries = (countries) => {
    const ukIndex = countries.findIndex((country) => country.code === "GB");
    const ukCountry = countries.splice(ukIndex, 1)[0];
    countries.sort((a, b) => a.name.localeCompare(b.name));
    countries.unshift(ukCountry);
    return countries;
  };

  const handleBack =()=>{
    setFormView(0)
  }

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
          <Text style={isSmallDevice ? styles.smallheader : styles.header}>
            Directors or Partners
          </Text>
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
              fontSize: isSmallDevice ? 14 : 16,
              letterSpacing: 0.4,
            }}
          >
            Carbonyte would like to know details of any {"\n"} Associates -
            usually the Directors or Partners
          </Text>
          <View style={{ width: "100%" }}>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                postCode: "",
                address: "",
                country: "",
                street: "",
                city: "",
                id: "",
                nationality: "",
                appoinmentDate: "",
                owenershipShares: "",
                totalIncome: "",
                savings: "",
              }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {({
                handleChange,
                handleSubmit,
                setFieldTouched,
                errors,
                touched,
              }) => (
                <View style={{ width: "100%" }}>
                  <View
                    style={{
                      width: "100%",
                      paddingHorizontal: 10,
                      marginVertical: 10,
                    }}
                  >
                    <Text style={styles.textStyle}>First Name</Text>
                    <View
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <Dropdown
                        data={data}
                        value={title}
                        labelField="label"
                        valueField="value"
                        defalutValue="Mr"
                        onChange={(item) => {
                          setTitle(item.value);
                        }}
                        style={styles.dropdown}
                        containerStyle={styles.containerStyle}
                      />
                      <TextInput
                        style={styles.firtNameText}
                        placeholder={
                          isSmallDevice
                            ? "Enter FirstName"
                            : "Enter the FirstName"
                        }
                        placeholderStyle={{ fontSize: isSmallDevice ? 10 : 14 }}
                        onChangeText={handleChange("firstName")}
                      />
                    </View>
                    <ErrorMessage
                      error={errors.firstName}
                      visible={touched.firstName}
                    />
                  </View>
                  <View
                    style={{
                      width: "100%",
                      paddingHorizontal: 10,
                      marginVertical: 10,
                    }}
                  >
                    <Text style={styles.textStyle}>Last Name</Text>
                    <TextInput
                      style={styles.textInuput}
                      placeholder="Enter the LastName"
                      onChangeText={handleChange("lastName")}
                    />
                    <ErrorMessage
                      error={errors.lastName}
                      visible={touched.lastName}
                    />
                  </View>
                  <View
                    style={{
                      width: "100%",
                      paddingHorizontal: 10,
                      marginTop: 10,
                    }}
                  >
                    <Text style={styles.textStyle}>Email Address</Text>
                    <TextInput
                      style={styles.textInuput}
                      placeholder="Enter the Email Address"
                      onChangeText={handleChange("email")}
                    />
                    <ErrorMessage
                      error={errors.email}
                      visible={touched.email}
                    />
                  </View>
                  <View
                    style={{
                      width: "100%",
                      padding: 10,
                      marginVertical: 10,
                    }}
                  >
                    <Text style={styles.textStyle}>Phone Number</Text>
                    {/* <TextInput
                    style={styles.textInuput}
                    placeholder="Enter the Phone Number"
                  /> */}
                    <PhoneInput
                      ref={phoneInput}
                      defaultValue={phoneNumber}
                      defaultCode="GB"
                      onChangeFormattedText={(text) => {
                        setPhoneNumber(text);
                      }}
                      onChangeText={handleChange("phone")}
                      withDarkTheme
                      withShadow
                      autoFocus
                      containerStyle={styles.textPhoneInuput}
                    />
                    <ErrorMessage
                      error={errors.phone}
                      visible={touched.phone}
                    />
                  </View>
                  <View style={{ width: "100%", padding: 10, marginTop: 0 }}>
                    <Text style={styles.textStyle}>Gender</Text>
                    <Dropdown
                      data={genderMenu}
                      value={genderValue}
                      labelField="label"
                      valueField="value"
                      placeholder="Please enter your Gender"
                      onChange={(item) => {
                        setGenderValue(item.value, { shouldValidate: true });
                      }}
                      style={styles.addressDropdown}
                      containerStyle={styles.containerStyle}
                    />
                    <ErrorMessage
                      error={genderStatusError}
                      visible={genderStatusError}
                    />
                  </View>
                  <View style={{ width: "100%", padding: 10, marginTop: 0 }}>
                    <Text style={styles.textStyle}>Marital Status</Text>
                    <Dropdown
                      data={martialMenu}
                      value={martialValue}
                      labelField="label"
                      valueField="value"
                      placeholder="Please enter your Marital Status"
                      onChange={(item) => {
                        setMartialValue(item.value, { shouldValidate: true });
                        handleChange("maritalStatus")(item.value);
                      }}
                      style={styles.addressDropdown}
                      containerStyle={styles.containerStyle}
                    />
                    <ErrorMessage
                      error={maritalStatusError}
                      visible={maritalStatusError}
                    />
                    {/* {maritalStatusError && (
                      <Text>{errors.maritalStatus}</Text>
                    )} */}
                  </View>
                  <View style={{ width: "100%", padding: 10, marginTop: 0 }}>
                    <Text style={styles.textStyle}>Employement Details</Text>
                    <Dropdown
                      data={employementMenu}
                      value={employementValue}
                      labelField="label"
                      valueField="value"
                      placeholder={
                        isSmallDevice
                          ? "Employement Details"
                          : "Please enter your Employement Details"
                      }
                      onChange={(item) => {
                        setEmployementValue(item.value);
                      }}
                      style={styles.addressDropdown}
                      containerStyle={styles.containerStyle}
                    />
                    <ErrorMessage
                      error={employmentStatus}
                      visible={employmentStatus}
                    />
                  </View>
                  <View
                    style={{
                      width: "100%",
                      padding: 10,
                      marginTop: 0,
                    }}
                  >
                    <Text style={styles.textStyle}>
                      National Insurance number
                    </Text>
                    <TextInput
                      style={styles.textInuput}
                      placeholder={
                        isSmallDevice
                          ? "National Insurance No"
                          : "Enter your National Insurance No"
                      }
                      onChangeText={handleChange("id")}
                    />
                    <ErrorMessage error={errors.id} visible={touched.id} />
                  </View>
                  {manualView && (
                    <View>
                      <View
                        style={{
                          width: "100%",
                          paddingHorizontal: 10,
                          marginTop: 10,
                        }}
                      >
                        <Text style={styles.textStyle}>
                          Building Name or Number
                        </Text>
                        <TextInput
                          style={styles.textInuput}
                          placeholder="Enter Building Name or Number"
                          onChangeText={handleChange("address")}
                        />
                        <ErrorMessage
                          error={errors.address}
                          visible={touched.address}
                        />
                      </View>
                      <View
                        style={{
                          width: "100%",
                          paddingHorizontal: 10,
                          marginTop: 10,
                        }}
                      >
                        <Text style={styles.textStyle}>Street</Text>
                        <TextInput
                          style={styles.textInuput}
                          placeholder="Enter Name of the street"
                          onChangeText={handleChange("street")}
                        />
                        <ErrorMessage
                          error={errors.street}
                          visible={touched.street}
                        />
                      </View>
                      <View
                        style={{
                          width: "100%",
                          paddingHorizontal: 10,
                          marginTop: 10,
                        }}
                      >
                        <Text style={styles.textStyle}>City</Text>
                        <TextInput
                          style={styles.textInuput}
                          placeholder="Enter the City"
                          onChangeText={handleChange("city")}
                        />
                        <ErrorMessage
                          error={errors.city}
                          visible={touched.city}
                        />
                      </View>
                    </View>
                  )}
                  <View style={{ width: "100%", padding: 10, marginTop: 10 }}>
                    <Text style={styles.textStyle}>Post Code</Text>
                    <TextInput
                      style={styles.textInuput}
                      placeholder="Enter the PostCode"
                      onChangeText={(event) => {
                        handleChange("postCode")(event);
                        setPostCode(event);
                        handleAddress(event);
                      }}
                    />
                    {manualView && (
                      <Text
                        style={styles.enterManually}
                        onPress={() => setManualView(false)}
                      >
                        Enter Postcode
                      </Text>
                    )}
                    <ErrorMessage
                      error={errors.postCode}
                      visible={touched.postCode}
                    />
                  </View>
                  {!manualView && (
                    <View style={{ width: "100%", padding: 10, marginTop: 10 }}>
                      <Text style={styles.textStyle}>Address</Text>
                      <Dropdown
                        data={addressData}
                        value={title}
                        labelField="label"
                        valueField="value"
                        onChange={(item) => {
                          setAPIAddress(item.value);
                        }}
                        style={styles.addressDropdown}
                        containerStyle={styles.containerStyle}
                      />
                      <Text
                        style={styles.enterManually}
                        onPress={() => setManualView(true)}
                      >
                        Enter Manually
                      </Text>
                    </View>
                  )}
                  <View style={{ width: "100%", padding: 10, marginTop: 10 }}>
                    <Text style={styles.textStyle}>Role</Text>
                    <Dropdown
                      data={roleMenu}
                      disable={true}
                      value={role}
                      labelField="label"
                      valueField="value"
                      onChange={(item) => {
                        setTitle(item.value);
                      }}
                      style={styles.addressDropdown}
                      containerStyle={styles.containerStyle}
                    />
                  </View>
                  <View
                    style={{
                      width: "100%",
                      paddingHorizontal: 10,
                      marginTop: 0,
                    }}
                  >
                    <Text style={styles.textStyle}>Date of Birth </Text>
                    <TouchableOpacity
                      onPress={() => setBirthShow(true)}
                      style={styles.textCountryInuput}
                    >
                      {birthdate && (
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Text
                            style={{
                              color: "#212529",
                              fontSize: 20,
                              fontFamily: "Montserrat-Regular",
                            }}
                          >
                            {`${birthdate.toLocaleDateString("en-US")}`}
                          </Text>
                          <MaterialIcons
                            name="date-range"
                            size={26}
                            color="#999999"
                          />
                        </View>
                      )}
                    </TouchableOpacity>
                    {birthShow && (
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={birthdate}
                        mode={"date"}
                        is24Hour={true}
                        display="spinner"
                        onChange={onDobChange}
                      />
                    )}
                    <ErrorMessage error={birthError} visible={birthError} />
                  </View>

                  <View style={{ width: "100%", padding: 10, marginTop: 10 }}>
                    <Text
                      style={styles.textStyle}
                      onPress={() => setShow(true)}
                    >
                      Country of residence
                    </Text>
                    <TouchableOpacity
                      onPress={() => setShow(true)}
                      style={styles.textCountryInuput}
                    >
                      {countryCode?.dial_code && (
                        <Text
                          style={{
                            color: "#212529",
                            fontSize: 20,
                            fontFamily: "Montserrat-Regular",
                          }}
                        >
                          {`  ${countryCode?.name?.en}`}
                        </Text>
                      )}
                      {!countryCode?.dial_code && (
                        <Text
                          style={{
                            color: "#999999",
                            fontSize: isSmallDevice ? 14 : 20,
                          }}
                        >
                          Select the Country of residence{" "}
                        </Text>
                      )}
                    </TouchableOpacity>
                    <CountryPicker
                      show={show}
                      // when picker button press you will get the country object with dial code
                      pickerButtonOnPress={(item) => {
                        setCountryCode(item);
                        setShow(false);
                        handleChange("country");
                      }}
                    />
                    <ErrorMessage
                      error={countryStatusError}
                      visible={countryStatusError}
                    />
                  </View>
                  <View style={{ width: "100%", padding: 10, marginTop: 10 }}>
                    <Text style={styles.textStyle}>Nationality</Text>
                    <Dropdown
                      data={nationalityMenu}
                      value={nationallityValue}
                      labelField="label"
                      valueField="value"
                      placeholder="Please enter the Nationality"
                      onChange={(item) => {
                        setNationallity(item.value);
                      }}
                      style={styles.addressDropdown}
                      containerStyle={styles.containerStyle}
                    />
                    <ErrorMessage
                      error={nationallityStatusError}
                      visible={nationallityStatusError}
                    />
                  </View>

                  <View
                    style={{
                      width: "100%",
                      paddingHorizontal: 10,
                      marginTop: 0,
                    }}
                  >
                    <Text style={styles.textStyle}>Appointed on </Text>
                    <TouchableOpacity
                      onPress={() => setDateShow(true)}
                      style={styles.textCountryInuput}
                    >
                      {date && (
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{
                              color: "#212529",
                              fontSize: 20,
                              fontFamily: "Montserrat-Regular",
                            }}
                          >
                            {`${date.toLocaleDateString("en-US")}`}
                          </Text>
                          <MaterialIcons
                            name="date-range"
                            size={26}
                            color="#999999"
                          />
                        </View>
                      )}
                    </TouchableOpacity>
                    {isDisplayDate && (
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={"date"}
                        is24Hour={true}
                        display="spinner"
                        onChange={onChange}
                      />
                    )}
                  </View>

                  <View
                    style={{
                      width: "100%",
                      padding: 10,
                      marginTop: 10,
                    }}
                  >
                    <Text style={styles.textStyle}>Total Income</Text>
                    <TextInput
                      style={styles.textInuput}
                      placeholder="Total income"
                      onChangeText={handleChange("totalIncome")}
                      keyboardType="numeric"
                    />
                    <ErrorMessage
                      error={errors.totalIncome}
                      visible={touched.totalIncome}
                    />
                  </View>

                  <View
                    style={{
                      width: "100%",
                      paddingHorizontal: 10,
                      marginTop: 10,
                    }}
                  >
                    <Text style={styles.textStyle}>Savings</Text>
                    <TextInput
                      style={styles.textInuput}
                      placeholder="Enter the Savings Amount"
                      onChangeText={handleChange("savings")}
                      keyboardType="numeric"

                    />
                    <ErrorMessage
                      error={errors.savings}
                      visible={touched.savings}
                    />
                  </View>
                  {role === "Director" ||
                  role === "SOLE TRADER" ||
                  role === "Partners" ? (
                    <View>
                      <CheckBox
                        title="Is this the person applying?"
                        checkedIcon="check-square-o"
                        uncheckedIcon="square-o"
                        checkedColor="black"
                        checked={isApplicant}
                        onPress={() => setApplicant(!isApplicant)}
                        textStyle={{ fontSize: 16, color: "#212529" }}
                      />
                    </View>
                  ) : null}

                  <View>
                    <CheckBox
                      title="Persons with significant control"
                      checkedIcon="check-square-o"
                      uncheckedIcon="square-o"
                      checkedColor="black"
                      checked={isChecked}
                      onPress={() => setChecked(!isChecked)}
                      textStyle={{ fontSize: 16, color: "#212529" }}
                    />
                    <ErrorMessage
                      error={owenershipShares}
                      visible={owenershipShares}
                    />
                  </View>
                  {isChecked && (
                    <View style={{ width: "100%", padding: 20, marginTop: 10 }}>
                      <Text style={{ color: "#212529", fontSize: 20 }}>
                        Nature of control
                      </Text>
                      <View style={styles.bottomContainer}>
                        <View style={styles.bottomContainerInside}>
                          <View>
                            <Text
                              style={{
                                color: "#0101FD",
                                fontSize: isSmallDevice ? 14 : 16,
                                fontWeight: "bold",
                              }}
                            >
                              Ownership of shares
                            </Text>
                          </View>
                          <View style={styles.percentageContainer}>
                            <TextInput
                              style={styles.textPercentageInuput}
                              onChangeText={handleChange("owenershipShares")}
                              keyboardType="numeric"

                            />
                            <Text
                              style={{
                                color: "#0101FD",
                                fontSize: isSmallDevice ? 14 : 16,
                                fontWeight: "bold",
                              }}
                            >
                              %
                            </Text>
                          </View>
                        </View>
                        <View style={styles.bottomContainerInside}>
                          <View>
                            <Text
                              style={{
                                color: "#0101FD",
                                fontSize: isSmallDevice ? 14 : 16,
                                fontWeight: "bold",
                              }}
                            >
                              Ownership of voting rights
                            </Text>
                          </View>
                          <View style={styles.percentageContainer}>
                            <TextInput
                              style={styles.textPercentageInuput}
                              onChangeText={handleChange(
                                "owenershipvotingrights"
                              )}
                              keyboardType="numeric"

                            />
                            <Text
                              style={{
                                color: "#0101FD",
                                fontSize: isSmallDevice ? 14 : 16,
                                fontWeight: "bold",
                              }}
                            >
                              %
                            </Text>
                          </View>
                        </View>
                        <View style={styles.bottomContainerInside}>
                          <View>
                            <Text
                              style={{
                                color: "#0101FD",
                                fontSize: isSmallDevice ? 14 : 16,
                                fontWeight: "bold",
                              }}
                            >
                              Right to appoint &{"/n"} remove directors
                            </Text>
                          </View>
                          <View style={styles.percentageContainer}>
                            <CheckBox
                              checkedIcon="check-square-o"
                              uncheckedIcon="square-o"
                              checkedColor="#0101FD"
                              checked={formCheck}
                              onPress={() => setIsFormCheck(!formCheck)}
                              style={{ width: 40, height: 40 }}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  )}

                  <View style={{ width: "100%", padding: 10, marginTop: 10 }}>
                    <Button
                      title="Continue"
                      textColor="white"
                      color="black"
                      style={styles.buttonColor}
                      onPress={handleSubmit}
                    />
                  </View>
                </View>
              )}
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
  smallheader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#212529",
  },
  textInuput: {
    borderColor: "#EBEBEB",
    borderRadius: 10,
    height: 50,
    width: "100%",
    padding: 5,
    paddingLeft: 20,
    borderWidth: 2,
    marginTop: 10,
    fontSize: 20,
  },
  textCountryInuput: {
    borderColor: "#EBEBEB",
    borderRadius: 10,
    height: 50,
    width: "100%",
    padding: 10,
    borderWidth: 2,
    marginTop: 10,
    fontSize: 20,
  },
  firtNameText: {
    borderColor: "#EBEBEB",
    borderRadius: 10,
    height: 50,
    width: "70%",
    padding: 5,
    paddingLeft: 20,
    borderWidth: 2,
    marginTop: 10,
    fontSize: 20,
  },
  textStyle: {
    color: "#212529",
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
  },
  dropdown: {
    borderColor: "#EBEBEB",
    borderRadius: 10,
    height: 50,
    width: "28%",
    padding: 1,
    fontSize: 16,
    paddingLeft: 20,
    borderWidth: 2,
    // marginBottom: "5%",
    marginTop: "2.5%",
    opacity: 1,
  },
  dropdownContainer: {
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  containerStyle: {
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    // backgroundColor:"red",
    // color:"white",
  },
  addressDropdown: {
    borderColor: "#EBEBEB",
    borderRadius: 10,
    height: 50,
    width: "100%",
    // padding: 4,
    fontSize: 16,

    paddingLeft: 20,
    borderWidth: 2,
    marginBottom: "5%",
    marginTop: "2.5%",
    opacity: 1,
  },
  enterManually: {
    textAlign: "right",
    color: "#0101FD",
    fontWeight: "bold",
  },
  datePicker: {
    width: "100%",
    height: 70,
  },
  bottomContainer: {
    borderColor: "#E8E8E8",
    borderRadius: 10,
    width: "100%",
    borderWidth: 2,
    marginHorizontal: 5,
    paddingHorizontal: 5,
    marginVertical: 20,
  },
  bottomContainerInside: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  percentageContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  textPercentageInuput: {
    borderColor: "#EBEBEB",
    borderRadius: 5,
    height: 40,
    color: "#0101FD",
    width: 50,
    padding: 5,
    borderWidth: 4,
    fontSize: 20,
  },
  textPhoneInuput: {
    borderColor: "#EBEBEB",
    borderRadius: 10,
    height: 60,
    width: "100%",
    borderWidth: 2,
    marginTop: 10,
    fontSize: 20,
    elevation: 0,
  },
});
