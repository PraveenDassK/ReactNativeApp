import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { Picker } from "react-native-web";
import GlobalStyles from "../../GlobalStyles";
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SelectCountry } from 'react-native-element-dropdown';
import {useState} from "react";

const data = [
  { label: 'United Kingdom', value: '44' },
  { label: 'United States of America', value: '1' },
  { label: 'India', value: '91' },
];

const CountryOfResidence = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };
  return (
    <View style={styles.countryOfResidence}>
      <View style={styles.groupParent}>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupPosition2]} />
          <Text style={[styles.hello, styles.helloTypo, styles.helloTypo1]}>
            Terms and Conditions
          </Text>
        </View>
        <View style={[styles.helloParent, styles.groupPosition1]}>
          <Text style={[styles.hello1, styles.hello1Color]}>
            Country of Incorporated In
          </Text>
          <Text style={[styles.hello2, styles.helloTypo, styles.helloTypo1]}>
            <Text style={styles.theTermsAnd}>
              The terms and services which apply to you, will{"\n"}
            </Text>
            <Text style={styles.theTermsAnd}>
              depend on your country of residence.
            </Text>
          </Text>
        </View>
        <Text
          style={[
            styles.selectYourCountry,
            styles.unitedKingdomTypo,
            styles.hello1Color,
          ]}
        >
          Select your country
        </Text>
        <View style={[styles.groupContainerPosition, styles.groupPosition]}>
          <Pressable
            style={[
              styles.rectangleGroup,
              styles.groupPosition,
              styles.groupPosition1,
            ]}
            onPress={() => navigation.navigate("Address1")}
          >
            <View
              style={[
                styles.groupItem,
                styles.groupItemLayout,
                styles.groupPosition2,
              ]}
            />
            <View style={[styles.maskGroup236, styles.groupPosition1]} />
          </Pressable>
          <Text style={[styles.hello3, styles.helloTypo]}>
            Accept and Continue
          </Text>
        </View>
        {/* <View
          style={[
            styles.iconIonicIosArrowDownParent,
            styles.groupItemLayout,
            styles.groupContainerPosition,
          ]}
        >
          <Image
            style={styles.iconIonicIosArrowDown}
            resizeMode="cover"
            source={require("../assets/icon-carbonytedownarrow.png")}
          />
          <Text style={[styles.unitedKingdom, styles.unitedKingdomTypo]}>
            United Kingdom
          </Text>
        </View> */}
        
        <Dropdown
          style={[styles.iconIonicIosArrowDownDropdown,
            styles.groupItemLayout,
            styles.groupContainerPosition,
            isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'United Kingdom' : 'Country'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition2: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  helloTypo: {
    textAlign: "left",
    position: "absolute",
  },
  helloTypo1: {
    color: GlobalStyles.Color.gray_700,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    top: "50%",
  },
  groupPosition1: {
    right: 0,
    top: 0,
  },
  hello1Color: {
    color: GlobalStyles.Color.indigo_100,
    left: 0,
  },
  unitedKingdomTypo: {
    fontSize: GlobalStyles.FontSize.size_xl,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  groupPosition: {
    bottom: 0,
    position: "absolute",
  },
  groupItemLayout: {
    borderRadius: GlobalStyles.Border.br_lg,
    position: "absolute",
  },
  groupContainerPosition: {
    height: 60,
    left: 0,
    right: 4,
  },
  groupChild: {
    borderRadius: GlobalStyles.Border.br_6xl,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  hello: {
    marginTop: -141.52,
    left: 95,
  },
  rectangleParent: {
    bottom: 92,
    height: 328,
    left: 0,
    right: 4,
    position: "absolute",
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",


    top: 0,
    color: GlobalStyles.Color.indigo_100,
    textAlign: "left",
    position: "absolute",
  },
  theTermsAnd: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello2: {
    marginTop: 4.74,
    left: 1,
    lineHeight: 20,
  },
  helloParent: {
    left: 2,
    height: 77,
    position: "absolute",
  },
  selectYourCountry: {
    marginTop: -204,
  },
  groupItem: {
    backgroundColor: GlobalStyles.Color.blue_100,
  },
  maskGroup236: {
    bottom: 13,
    left: 0,
    position: "absolute",
  },
  rectangleGroup: {
    left: 0,
  },
  hello3: {
    top: "40%",
    left: "22.7%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.white,
    textAlign: "left",
  },
  iconIonicIosArrowDown: {
    marginTop: -2.64,
    right: 26,
    width: 9,
    height: 5,
    top: "50%",
    position: "absolute",
  },
  unitedKingdom: {
    marginTop: -6,
    left: 16,
    color: GlobalStyles.Color.blue_100,
  },
  iconIonicIosArrowDownParent: {
    marginTop: -181,
    borderStyle: "solid",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    top: "50%",
    backgroundColor: GlobalStyles.Color.white,
  },
  groupParent: {
    width: 330,
    height: 654,
  },
  countryOfResidence: {
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: GlobalStyles.Padding.padding_5xl,
    paddingRight: 20,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red'
 },
 /////////////////////////
 iconIonicIosArrowDownDropdown: {
  marginTop: -170,
  borderStyle: "solid",
  borderColor: "#e8e8e8",
  borderWidth: 1,
  top: "50%",
  backgroundColor: GlobalStyles.Color.white,
},
 container: {
  backgroundColor: 'white',
  padding: 16,
},
dropdown: {
  height: 50,
  borderColor: 'gray',
  borderWidth: 0.5,
  borderRadius: 8,
  paddingHorizontal: 8,
},
icon: {
  marginRight: 5,
},
label: {
  position: 'absolute',
  backgroundColor: 'white',
  left: 22,
  top: 2,
  zIndex: 999,
  paddingHorizontal: 8,
  fontSize: 14,
},
placeholderStyle: {
  fontSize: 16,
  color:  GlobalStyles.Color.blue_100,
  left: 10.
},
selectedTextStyle: {
  fontSize: 16,
  color:  GlobalStyles.Color.blue_100,
  left: 10.
},
iconStyle: {
  width: 20,
  height: 20,
  right: 10,
},
inputSearchStyle: {
  height: 40,
  fontSize: 16,
},
});



export default CountryOfResidence;
