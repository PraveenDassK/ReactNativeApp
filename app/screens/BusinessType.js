import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable, TextInput } from "react-native";
import GlobalStyles from "../../GlobalStyles";

const BusinessType = () => {
  const [name, onChangeName] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [type, onChangeType] = React.useState(null);
  const [nature, onChangeNature] = React.useState(null);
  const [date, onChangeDate] = React.useState(null);
  const [status, onChangeStatus] = React.useState(null);


  return (
    <View style={styles.businessType}>
      <View style={styles.companyStatusParent}>
        <Text
          style={[
            styles.companyStatus,
            styles.helloFlexBox,
            styles.companyColor,
            styles.companyTypo,
          ]}
        >
          Company Status
        </Text>
        <View
          style={[
            styles.iconIonicIosArrowDownParent,
            styles.helloParentLayout,
            styles.helloParentBorder,
            styles.helloParentPosition,
          ]}
        >
          <Image
            style={styles.iconIonicIosArrowDown}
            resizeMode="cover"
            source={require("../assets/icon-carbonytedownarrow.png")}
          />
          
          
          <Text style={[styles.hello, styles.helloTypo]}>
            Current status of the company
          </Text>
        </View>
        <View
          style={[
            styles.helloParent,
            styles.helloParentLayout,
            styles.helloParentBorder,
            styles.helloParentPosition,
          ]}
        >
          <Text style={[styles.hello, styles.helloTypo]}>dd-mm-yyyy</Text>
          <View style={styles.groupChild} />
          <View style={styles.layer}>
            <View style={[styles.vrstva98, styles.helloParentPosition]}>
              <Image
                style={[styles.vrstva98, styles.helloParentPosition]}
                resizeMode="cover"
                source={require("../assets/icon-calender.png")}
              />
              <View style={[styles.vrstva98Child, styles.vrstva98Layout]} />
              <View style={[styles.vrstva98Item, styles.vrstva98Layout]} />
            </View>
          </View>
        </View>
        
        
        <Text
          style={[
            styles.natureOfBusinessSic,
            styles.helloFlexBox,
            styles.companyColor,
            styles.companyTypo,
          ]}
        >
          Nature of business (SIC)
        </Text>
        
        
        <Text
          style={[
            styles.incorporatedOn,
            styles.helloFlexBox,
            styles.companyColor,
            styles.companyTypo,
          ]}
        >
          Incorporated on
        </Text>
        
        
        <Text
          style={[
            styles.companyName,
            styles.helloFlexBox,
            styles.companyColor,
            styles.companyTypo,
          ]}
        >
          Company name
        </Text>

        
        <View
          style={[
            styles.helloWrapper,
            styles.helloParentLayout,
            styles.helloParentBorder,
            styles.helloParentPosition,
          ]}
        >
          <TextInput 
            style={[styles.hello, styles.helloTypo]}
            placeholder="Company name"
            onChangeText = {onChangeName}
          />
        </View>
        <View style={styles.helloGroup}>
          <Text
            style={[styles.hello3, styles.helloFlexBox, styles.companyColor]}
          >
            Tell us about your Business
          </Text>
          <Text style={[styles.hello4, styles.helloTypo]}>
            Carbonyte would like to know your business details
          </Text>
        </View>
        
        
        <Text
          style={[
            styles.companyType,
            styles.helloFlexBox,
            styles.companyColor,
            styles.companyTypo,
          ]}
        >
          Company type
        </Text>
        
        
        <View style={styles.companyNumberParent}>
          <Text
            style={[
              styles.companyNumber,
              styles.helloFlexBox,
              styles.companyColor,
              styles.companyTypo,
            ]}
          >
            Company number
          </Text>
          <View
            style={[
              styles.helloContainer,
              styles.parentPosition,
              styles.helloParentBorder,
            ]}
          >
            <TextInput 
              style={[styles.hello, styles.helloTypo]}
              placeholder="Phone number"
              keyboardType="numeric"
              onChangeText = {onChangeNumber}
            />
          </View>
        </View>
        
        
        <View
          style={[
            styles.iconIonicIosArrowDownGroup,
            styles.helloParentLayout,
            styles.helloParentBorder,
            styles.helloParentPosition,
          ]}
        >
          <Image
            style={styles.iconIonicIosArrowDown}
            resizeMode="cover"
            source={require("../assets/icon-carbonytedownarrow.png")}
          />
          <Text style={[styles.hello, styles.helloTypo]}>
            Select your nature of business
          </Text>
        </View>
        <Pressable
          style={[styles.parentPosition, styles.helloParentLayout]}
          onPress={() => navigation.navigate("DirectorsOrPartners")}
        >
          <View style={[styles.rectangleParent, styles.parentPosition]}>
            <View style={styles.groupItem} />
            <View style={[styles.maskGroup236, styles.helloParentPosition]} />
          </View>
          <Text style={[styles.hello7, styles.helloFlexBox]}>Continue</Text>
        </Pressable>
       
       
        <View
          style={[
            styles.iconIonicIosArrowDownContainer,
            styles.helloParentLayout,
            styles.helloParentBorder,
            styles.helloParentPosition,
          ]}
        >
          <Image
            style={styles.iconIonicIosArrowDown}
            resizeMode="cover"
            source={require("../assets/icon-carbonytedownarrow.png")}
          />
          <Text style={[styles.hello, styles.helloTypo]}>
            Select your company type
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  helloFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  companyColor: {
    color: GlobalStyles.Color.indigo_100,
    textAlign: "left",
    left: 0,
  },
  companyTypo: {
    fontSize: GlobalStyles.FontSize.size_xl,
    color: GlobalStyles.Color.indigo_100,
  },
  helloParentLayout: {
    height: 60,
    right: 21,
  },
  helloParentBorder: {
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderStyle: "solid",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.white,
  },
  helloParentPosition: {
    left: 0,
    position: "absolute",
  },
  helloTypo: {
    color: GlobalStyles.Color.gray_700,
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  vrstva98Layout: {
    height: 3,
    backgroundColor: GlobalStyles.Color.blue_100,
    borderRadius: GlobalStyles.Border.br_7xs,
    top: 10,
    position: "absolute",
  },
  parentPosition: {
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  companyStatus: {
    marginTop: 193,
    top: "50%",
  },
  iconIonicIosArrowDown: {
    marginTop: -2.64,
    right: 26,
    width: 9,
    height: 5,
    top: "50%",
    position: "absolute",
  },
  hello: {
    marginTop: -6,
    left: 14,
  },
  iconIonicIosArrowDownParent: {
    marginTop: 217,
    top: "50%",
  },
  groupChild: {
    height: "38.33%",
    width: "7.06%",
    top: "31.67%",
    right: "7.06%",
    bottom: "30%",
    left: "85.89%",
    position: "absolute",
  },
  vrstva98: {
    width: 22,
    height: 20,
    top: 0,
  },
  vrstva98Child: {
    left: 3,
    width: 3,
  },
  vrstva98Item: {
    left: 8,
    width: 4,
  },
  layer: {
    height: "32.7%",
    width: "6.63%",
    top: "34.7%",
    right: "7.27%",
    bottom: "32.6%",
    left: "86.1%",
    position: "absolute",
  },
  helloParent: {
    marginTop: 97,
    top: "50%",
  },
  natureOfBusinessSic: {
    marginTop: -48,
    top: "50%",
  },
  incorporatedOn: {
    marginTop: 73,
    top: "50%",
  },
  companyName: {
    top: 94,
  },
  helloWrapper: {
    top: 118,
  },
  hello3: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",


    top: 0,
  },
  hello4: {
    marginTop: 14.74,
    left: 1,
  },
  helloGroup: {
    left: 2,
    height: 57,
    right: 0,
    top: 0,
    position: "absolute",
  },
  companyType: {
    marginTop: -169,
    top: "50%",
  },
  companyNumber: {
    top: 0,
  },
  helloContainer: {
    top: 24,
    right: 0,
  },
  companyNumberParent: {
    marginTop: -290,
    height: 84,
    right: 21,
    left: 0,
    top: "50%",
    position: "absolute",
  },
  iconIonicIosArrowDownGroup: {
    marginTop: -24,
    top: "50%",
  },
  groupItem: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: GlobalStyles.Color.gray_500,
    borderRadius: GlobalStyles.Border.br_lg,
    position: "absolute",
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    right: 0,
    top: 0,
  },
  rectangleParent: {
    right: 0,
    top: 0,
  },
  hello7: {
    top: "40%",
    left: "38.04%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
  },
  iconIonicIosArrowDownContainer: {
    marginTop: -145,
    top: "50%",
  },
  companyStatusParent: {
    width: 347,
    height: 1010,
  },
  businessType: {
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingTop: GlobalStyles.Padding.padding_5xl,
    paddingRight: 3,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default BusinessType;
