import React, { useContext, useEffect, useState } from "react"; 
import { StyleSheet, View, SafeAreaView, Text, TextInput, Image,Pressable, useWindowDimensions, Dimensions, TouchableWithoutFeedback, Keyboard} from "react-native";
import Screen from "./Screen";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";
import apiLoginRegister from "../api/apiLogin";
import * as Yup from 'yup';
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"

import Button from "./Button"
import { Formik, Field, Form } from 'formik';
import { Dropdown } from 'react-native-element-dropdown';
import { CheckBox } from '@rneui/themed';

const CompanyDetails = ({SaveDetails}) => {
    const [name, setName] = useState("");
    const [type, setType] = useState(null)
    const [isFocus, setIsFocus] = useState(false);

    const sendDetails = (type) => {
        SaveDetails(null,"CompanyDetails")
    }

    const options =  [
        "Crop Production",
        "Animal Production and Aquaculture",
        "Forestry and Logging",
        "Fishing, Hunting and Trapping",
        "Support Activities for Agriculture and Forestry",
        "Oil and Gas Extraction",
        "Mining (except Oil and Gas)",
        "Support Activities for Mining",
        "Utilities",
        "Construction of Buildings",
        "Heavy and Civil Engineering Construction",
        "Specialty Trade Contractors",
        "Food Manufacturing",
        "Beverage and Tobacco Product Manufacturing",
        "Textile Mills",
        "Textile Product Mills",
        "Apparel Manufacturing",
        "Leather and Allied Product Manufacturing",
        "Wood Product Manufacturing",
        "Paper Manufacturing",
        "Printing and Related Support Activities",
        "Petroleum and Coal Products Manufacturing",
        "Chemical Manufacturing",
        "Plastics and Rubber Products Manufacturing",
        "Nonmetallic Mineral Product Manufacturing",
        "Primary Metal Manufacturing",
        "Fabricated Metal Product Manufacturing",
        "Machinery Manufacturing",
        "Computer and Electronic Product Manufacturing",
        "Electrical Equipment, Appliance, and Component Manufacturing",
        "Transportation Equipment Manufacturing",
        "Furniture and Related Product Manufacturing",
        "Miscellaneous Manufacturing",
        "Merchant Wholesalers, Durable Goods",
        "Merchant Wholesalers, Nondurable Goods",
        "Wholesale Trade Agents and Brokers",
        "Motor Vehicle and Parts Dealers",
        "Building Material and Garden Equipment and Supplies Dealers",
        "Food and Beverage Retailers",
        "Furniture, Home Furnishings, Electronics, and Appliance Retailers",
        "General Merchandise Retailers",
        "Health and Personal Care Retailers",
        "Gasoline Stations and Fuel Dealers",
        "Clothing, Clothing Accessories, Shoe, and Jewelry Retailers",
        "Sporting Goods, Hobby, Musical Instrument, Book, and Miscellaneous Retailers",
        "Air Transportation",
        "Rail Transportation",
        "Water Transportation",
        "Truck Transportation",
        "Transit and Ground Passenger Transportation",
        "Pipeline Transportation",
        "Scenic and Sightseeing Transportation",
        "Support Activities for Transportation",
        "Postal Service",
        "Couriers and Messengers",
        "Warehousing and Storage",
        "Motion Picture and Sound Recording Industries",
        "Publishing Industries",
        "Broadcasting and Content Providers",
        "Telecommunications",
        "Computing Infrastructure Providers, Data Processing, Web Hosting, and Related Services",
        "Web Search Portals, Libraries, Archives, and Other Information Services",
        "Monetary Authorities-Central Bank",
        "Credit Intermediation and Related Activities",
        "Securities, Commodity Contracts, and Other Financial Investments and Related Activities",
        "Insurance Carriers and Related Activities",
        "Funds, Trusts, and Other Financial Vehicles",
        "Real Estate",
        "Rental and Leasing Services",
        "Lessors of Nonfinancial Intangible Assets (except Copyrighted Works)",
        "Professional, Scientific, and Technical Services",
        "Management of Companies and Enterprises",
        "Administrative and Support Services",
        "Waste Management and Remediation Services",
        "Educational Services",
        "Ambulatory Health Care Services",
        "Hospitals",
        "Nursing and Residential Care Facilities",
        "Social Assistance",
        "Performing Arts, Spectator Sports, and Related Industries",
        "Museums, Historical Sites, and Similar Institutions",
        "Amusement, Gambling, and Recreation Industries",
        "Accommodation",
        "Food Services and Drinking Places",
        "Repair and Maintenance",
        "Personal and Laundry Services",
        "Religious, Grantmaking, Civic, Professional, and Similar Organizations",
        "Private Households",
        "Executive, Legislative, and Other General Government Support",
        "Justice, Public Order, and Safety Activities",
        "Administration of Human Resource Programs",
        "Administration of Environmental Quality Programs",
        "Administration of Housing Programs, Urban Planning, and Community Development",
        "Administration of Economic Programs",
        "Space Research and Technology",
        "National Security and International Affairs"
      ];

    return (
        <Screen>
            <Text>Your company details</Text>
            <Formik
            onSubmit={(values) => sendData(values)}
            >
            {({ handleChange, handleSubmit, setFieldTouched}) => (
                <View style={[styles.component1981, styles.mt14,{marginLeft:horizontalScale(10)}]}>
                    <Text>First name</Text>
                    <TextInput 
                        keyboardType="Text" 
                        onBlur={() => setFieldTouched("phoneNumber")}
                        onChangeText={setName("phoneNumber")}
                        style={[styles.component1981Child, styles.childBorder, {padding:10}]} 
                    />
                    <Text>Business type</Text>
                    <Dropdown
                        data={options}
                        maxHeight={100}
                        labelField="label"
                        valueField="value"
                        placeholder={'Select an option'}
                        value={type}
                        onChange={item => {
                            setType(item.value);
                            setIsFocus(false);
                        }}
                    />
                  </View>                  
                )}
            </Formik>
            <Button title="Continue" color="babyBlue" onPress={() => sendDetails()} />
        </Screen>
  );
};

const styles = StyleSheet.create({
});

export default CompanyDetails;
