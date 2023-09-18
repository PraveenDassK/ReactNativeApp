import React, { useContext, useEffect, useState } from "react";
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
  Modal
} from "react-native";
import Screen from "./Screen";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";
import apiLoginRegister from "../api/apiLogin";
import * as Yup from "yup";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../config/scaling";

import Button from "./AppButton";
import { Formik, Field, Form } from "formik";
import { Dropdown } from "react-native-element-dropdown";
import { CheckBox } from "@rneui/themed";
import AuthScreen from "./AuthScreen";
import Privacy from "./PrivacyPolicy";
import VerifyReferralCode from "./verifyReferralCode";

const CompanyDetails = ({ SaveDetails, setScreenToShow }) => {
  const [type, setType] = useState(null);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleSubmit = ({ incomeDetails }) => {


    const currencyPattern = /^\$?\d+(,\d{3})*(\.\d{2})?$/;

    //If currency isn't correct



    if (!currencyPattern.test(incomeDetails)) {
      return alert("Please enter a valid amount")
    }

    if (type == null) {
      return alert("Please put in a business type")
    }

    if (!privacyPolicy) {
      return alert("Please accept the privacy policy")
    }

    SaveDetails({
      income: incomeDetails,
      companyType: type
    }, "CompanyDetails"
    );
  };

  const handleBack = () => {

    setScreenToShow("RegistrationNumber");
  };

  function sortOptions(options) {
    return options.sort((a, b) => {
      const labelA = a.label.toUpperCase();
      const labelB = b.label.toUpperCase();

      if (labelA < labelB) {
        return -1;
      }
      if (labelA > labelB) {
        return 1;
      }
      return 0;
    });
  }

  const options = [
    {
      label: "Crop Production",
      value: "Crop Production"
    },
    {
      label: "Animal Production and Aquaculture",
      value: "Animal Production and Aquaculture",
    },
    { label: "Forestry and Logging", value: "Forestry and Logging" },
    {
      label: "Fishing, Hunting and Trapping",
      value: "Fishing, Hunting and Trapping",
    },
    {
      label: "Support Activities for Agriculture and Forestry",
      value: "Support Activities for Agriculture and Forestry",
    },
    { label: "Oil and Gas Extraction", value: "Oil and Gas Extraction" },
    {
      label: "Mining (except Oil and Gas)",
      value: "Mining (except Oil and Gas)",
    },
    {
      label: "Support Activities for Mining",
      value: "Support Activities for Mining",
    },
    { label: "Utilities", value: "Utilities" },
    { label: "Construction of Buildings", value: "Construction of Buildings" },
    {
      label: "Heavy and Civil Engineering Construction",
      value: "Heavy and Civil Engineering Construction",
    },
    {
      label: "Specialty Trade Contractors",
      value: "Specialty Trade Contractors",
    },
    { label: "Food Manufacturing", value: "Food Manufacturing" },
    {
      label: "Beverage and Tobacco Product Manufacturing",
      value: "Beverage and Tobacco Product Manufacturing",
    },
    { label: "Textile Mills", value: "Textile Mills" },
    { label: "Textile Product Mills", value: "Textile Product Mills" },
    { label: "Apparel Manufacturing", value: "Apparel Manufacturing" },
    {
      label: "Leather and Allied Product Manufacturing",
      value: "Leather and Allied Product Manufacturing",
    },
    {
      label: "Wood Product Manufacturing",
      value: "Wood Product Manufacturing",
    },
    { label: "Paper Manufacturing", value: "Paper Manufacturing" },
    {
      label: "Printing and Related Support Activities",
      value: "Printing and Related Support Activities",
    },
    {
      label: "Petroleum and Coal Products Manufacturing",
      value: "Petroleum and Coal Products Manufacturing",
    },
    { label: "Chemical Manufacturing", value: "Chemical Manufacturing" },
    {
      label: "Plastics and Rubber Products Manufacturing",
      value: "Plastics and Rubber Products Manufacturing",
    },
    {
      label: "Nonmetallic Mineral Product Manufacturing",
      value: "Nonmetallic Mineral Product Manufacturing",
    },
    {
      label: "Primary Metal Manufacturing",
      value: "Primary Metal Manufacturing",
    },
    {
      label: "Fabricated Metal Product Manufacturing",
      value: "Fabricated Metal Product Manufacturing",
    },
    { label: "Machinery Manufacturing", value: "Machinery Manufacturing" },
    {
      label: "Computer and Electronic Product Manufacturing",
      value: "Computer and Electronic Product Manufacturing",
    },
    {
      label: "Electrical Equipment, Appliance, and Component Manufacturing",
      value: "Electrical Equipment, Appliance, and Component Manufacturing",
    },
    {
      label: "Transportation Equipment Manufacturing",
      value: "Transportation Equipment Manufacturing",
    },
    {
      label: "Furniture and Related Product Manufacturing",
      value: "Furniture and Related Product Manufacturing",
    },
    {
      label: "Miscellaneous Manufacturing",
      value: "Miscellaneous Manufacturing",
    },
    {
      label: "Merchant Wholesalers, Durable Goods",
      value: "Merchant Wholesalers, Durable Goods",
    },
    {
      label: "Merchant Wholesalers, Nondurable Goods",
      value: "Merchant Wholesalers, Nondurable Goods",
    },
    {
      label: "Wholesale Trade Agents and Brokers",
      value: "Wholesale Trade Agents and Brokers",
    },
    {
      label: "Motor Vehicle and Parts Dealers",
      value: "Motor Vehicle and Parts Dealers",
    },
    {
      label: "Building Material and Garden Equipment and Supplies Dealers",
      value: "Building Material and Garden Equipment and Supplies Dealers",
    },
    {
      label: "Food and Beverage Retailers",
      value: "Food and Beverage Retailers",
    },
    {
      label:
        "Furniture, Home Furnishings, Electronics, and Appliance Retailers",
      value:
        "Furniture, Home Furnishings, Electronics, and Appliance Retailers",
    },
    {
      label: "General Merchandise Retailers",
      value: "General Merchandise Retailers",
    },
    {
      label: "Health and Personal Care Retailers",
      value: "Health and Personal Care Retailers",
    },
    {
      label: "Gasoline Stations and Fuel Dealers",
      value: "Gasoline Stations and Fuel Dealers",
    },
    {
      label: "Clothing, Clothing Accessories, Shoe, and Jewelry Retailers",
      value: "Clothing, Clothing Accessories, Shoe, and Jewelry Retailers",
    },
    {
      label:
        "Sporting Goods, Hobby, Musical Instrument, Book, and Miscellaneous Retailers",
      value:
        "Sporting Goods, Hobby, Musical Instrument, Book, and Miscellaneous Retailers",
    },
    { label: "Air Transportation", value: "Air Transportation" },
    { label: "Rail Transportation", value: "Rail Transportation" },
    { label: "Water Transportation", value: "Water Transportation" },
    { label: "Truck Transportation", value: "Truck Transportation" },
    {
      label: "Transit and Ground Passenger Transportation",
      value: "Transit and Ground Passenger Transportation",
    },
    { label: "Pipeline Transportation", value: "Pipeline Transportation" },
    {
      label: "Scenic and Sightseeing Transportation",
      value: "Scenic and Sightseeing Transportation",
    },
    {
      label: "Support Activities for Transportation",
      value: "Support Activities for Transportation",
    },
    { label: "Postal Service", value: "Postal Service" },
    { label: "Couriers and Messengers", value: "Couriers and Messengers" },
    { label: "Warehousing and Storage", value: "Warehousing and Storage" },
    {
      label: "Motion Picture and Sound Recording Industries",
      value: "Motion Picture and Sound Recording Industries",
    },
    { label: "Publishing Industries", value: "Publishing Industries" },
    {
      label: "Broadcasting and Content Providers",
      value: "Broadcasting and Content Providers",
    },
    { label: "Telecommunications", value: "Telecommunications" },
    {
      label:
        "Computing Infrastructure Providers, Data Processing, Web Hosting, and Related Services",
      value:
        "Computing Infrastructure Providers, Data Processing, Web Hosting, and Related Services",
    },
    {
      label:
        "Web Search Portals, Libraries, Archives, and Other Information Services",
      value:
        "Web Search Portals, Libraries, Archives, and Other Information Services",
    },
    {
      label: "Monetary Authorities-Central Bank",
      value: "Monetary Authorities-Central Bank",
    },
    {
      label: "Credit Intermediation and Related Activities",
      value: "Credit Intermediation and Related Activities",
    },
    {
      label:
        "Securities, Commodity Contracts, and Other Financial Investments and Related Activities",
      value:
        "Securities, Commodity Contracts, and Other Financial Investments and Related Activities",
    },
    {
      label: "Insurance Carriers and Related Activities",
      value: "Insurance Carriers and Related Activities",
    },
    {
      label: "Funds, Trusts, and Other Financial Vehicles",
      value: "Funds, Trusts, and Other Financial Vehicles",
    },
    {
      label: "Funds, Trusts, and Other Financial Vehicles",
      value: "Funds, Trusts, and Other Financial Vehicles",
    },
    { label: "Real Estate", value: "Real Estate" },
    {
      label: "Rental and Leasing Services",
      value: "Rental and Leasing Services",
    },
    {
      label:
        "Lessors of Nonfinancial Intangible Assets (except Copyrighted Works)",
      value:
        "Lessors of Nonfinancial Intangible Assets (except Copyrighted Works)",
    },
    {
      label: "Professional, Scientific, and Technical Services",
      value: "Professional, Scientific, and Technical Services",
    },
    {
      label: "Management of Companies and Enterprises",
      value: "Management of Companies and Enterprises",
    },
    {
      label: "Administrative and Support Services",
      value: "Administrative and Support Services",
    },
    {
      label: "Waste Management and Remediation Services",
      value: "Waste Management and Remediation Services",
    },
    { label: "Educational Services", value: "Educational Services" },
    {
      label: "Ambulatory Health Care Services",
      value: "Ambulatory Health Care Services",
    },
    { label: "Hospitals", value: "Hospitals" },
    {
      label: "Nursing and Residential Care Facilities",
      value: "Nursing and Residential Care Facilities",
    },
    { label: "Social Assistance", value: "Social Assistance" },
    {
      label: "Performing Arts, Spectator Sports, and Related Industries",
      value: "Performing Arts, Spectator Sports, and Related Industries",
    },
    {
      label: "Museums, Historical Sites, and Similar Institutions",
      value: "Museums, Historical Sites, and Similar Institutions",
    },
    {
      label: "Amusement, Gambling, and Recreation Industries",
      value: "Amusement, Gambling, and Recreation Industries",
    },
    { label: "Accommodation", value: "Accommodation" },
    {
      label: "Food Services and Drinking Places",
      value: "Food Services and Drinking Places",
    },
    { label: "Repair and Maintenance", value: "Repair and Maintenance" },
    {
      label: "Personal and Laundry Services",
      value: "Personal and Laundry Services",
    },
    {
      label:
        "Religious, Grantmaking, Civic, Professional, and Similar Organizations",
      value:
        "Religious, Grantmaking, Civic, Professional, and Similar Organizations",
    },
    { label: "Private Households", value: "Private Households" },
    {
      label: "Executive, Legislative, and Other General Government Support",
      value: "Executive, Legislative, and Other General Government Support",
    },
    {
      label: "Justice, Public Order, and Safety Activities",
      value: "Justice, Public Order, and Safety Activities",
    },
    {
      label: "Administration of Human Resource Programs",
      value: "Administration of Human Resource Programs",
    },
    {
      label: "Administration of Environmental Quality Programs",
      value: "Administration of Environmental Quality Programs",
    },
    {
      label:
        "Administration of Housing Programs, Urban Planning, and Community Development",
      value:
        "Administration of Housing Programs, Urban Planning, and Community Development",
    },
    {
      label: "Administration of Economic Programs",
      value: "Administration of Economic Programs",
    },
    {
      label: "Space Research and Technology",
      value: "Space Research and Technology",
    },
    {
      label: "National Security and International Affairs",
      value: "National Security and International Affairs",
    },
  ];

  return (
    <Screen>
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setVisible(!visible);
        }}
      >
        <Privacy setIsOpen={setVisible} />
      </Modal>
      <AuthScreen
        title="Your company details"
        img="elephantCard2"
        handleBack={handleBack}
      >
        <Formik
          initialValues={{
            type: "",
            incomeDetails: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleSubmit, setFieldTouched, values }) => (
            <View style={[styles.component1981, styles.mt14]}>
              <Text>Annual income</Text>
              <TextInput
                value={"£" + values.incomeDetails}
                keyboardType="numeric"
                onBlur={() => setFieldTouched("incomeDetails")}
                onChangeText={(text) => handleChange("incomeDetails")(text.replace(/^£/, ""))}
                style={[styles.childBorder, { padding: 10 }]}
              />
              <Text>Business type</Text>
              <Dropdown
                style={[styles.dropdown]}
                containerStyle={styles.dropdownContainer}
                data={sortOptions(options)}
                maxHeight={150}
                labelField="label"
                valueField="value"
                placeholder={"Select an option"}
                searchPlaceholder={"Search..."}
                search={true}
                value={type}
                onChange={(item) => {
                  setType(item.value);
                }}
              />

              <VerifyReferralCode />

              <CheckBox
                title="I have read and accepted the Privacy Policy"
                checked={privacyPolicy}
                checkedColor="black"
                onPress={() => setPrivacyPolicy(!privacyPolicy)}
              />
              <Button
                title="View privacy policy"
                color="black"
                textColor="white"
                onPress={() => setVisible(true)}
              />



              <Button
                title="Continue"
                color="black"
                textColor="white"
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
      </AuthScreen>
    </Screen>
  );
};

const styles = StyleSheet.create({
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
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  childBorder: {
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: "#D3D3D3",
    opacity: 1,
    height: 50,
    marginTop: "2.5%",
    marginBottom: "5%",
  },
});

export default CompanyDetails;
