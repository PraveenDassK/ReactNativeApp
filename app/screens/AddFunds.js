import React, { useContext, useEffect, useState} from "react";
import { Text, StyleSheet, Image, View, Pressable, TextInput, Keyboard, TouchableWithoutFeedback } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"


import api from "../api/api_list"
import AuthContext from "../auth/context";

import { Dropdown, MultiSelect } from 'react-native-element-dropdown';

const AddFunds = ({navigation}) => {
  //Card data
  const authContext = useContext(AuthContext)
  const [data, setData] = useState({})

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [cardData, setCard] = useState([]);

  //let cardData = [{label: "01614842", value: "01614842"}]
  //Calls the API once during load
  useEffect(() => {
    loadData()
  },[])
  
  //Gets the data for the user
  const loadData = async () => {
    const response = await api.GetAccount();
    const data = response.data.details

    let accountList = {
      label: data.identifiers[0].accountNumber,
      value: data.identifiers[0].accountNumber
    }

    console.log(accountList)
    setCard(prevArray => [accountList])
  }

  console.log(cardData)
  //Screen components
  const [amount, setAmount] = useState("")
  const [userData, setCode] = useState("")
  const reciver = "e11fc";
  const sortCode = ""
  const accountCode = ""
  let fromName = ""

  let payment = (amount ? amount : 1).toString()

  const requestContact = (amount) => {
    console.log(amount)
    navigation.navigate("Pin",{
      amount: amount, 
      name: value,
      successScreen: "Success",
      successText: "Your funds have been sent",
      finishScreen: "AccountMain"
    })
  }
  console.log(amount)
 
  return (
    <View style={styles.requestContact}>
      <Pressable 
        style={styles.groupParent}
        onPress={Keyboard.dismiss}
      >
        <View style={styles.helloParent}>

          <Text style={[styles.hello1, styles.helloTypo]}>{fromName}{'\n'}</Text>
          <Text style={[styles.hello2, styles.helloTypo]}>{accountCode}</Text>
          <Text style={[styles.hello5, styles.helloTypo]}>{sortCode}</Text>
          
          <Text style={[styles.Select_account, styles.helloTypo]}>Select Account</Text>
          <View style={[styles.selectBox]}
          >
            
          <Dropdown style={styles.dropdownStyle}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={cardData}
          maxHeight={50}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select a card' : '....'}
          value={cardData}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
          </View>
        </View>

        
        <View
          style={[
            styles.groupItem,
            styles.groupPosition1,
          ]}
        />

        <View style={[styles.groupContainer, styles.helloParent2Position]}>
          <View style={[styles.hello4, styles.groupViewPosition]}>
          <Pressable
              onPress={() => {
                setAmount("20")
              }}
            >
            <Text style={[styles.hello4, styles.helloColor]}>
              £20
            </Text>
            </Pressable>

          </View>
          <View style={[]}>
          <Pressable
              onPress={() => {
                setAmount("50")
              }}
            >
            <Text style={[styles.hello4, styles.helloColor]}>
              £50
            </Text>
            </Pressable>

          </View>
          <View
            style={[
              styles.helloParent1,
              styles.parentPosition,
              styles.parentPosition1,
            ]}
          >
            <Pressable
              onPress={() => {
                setAmount("100")
              }}
            >
            <Text style={[styles.hello4, styles.helloColor]}>
              £100
            </Text>
            </Pressable>

          </View>
        </View>
        <View style={[styles.helloParent2, styles.helloParent2Position]}>
          <Text style={[styles.hello7]}>
            Pay{"\n"}
          </Text>
          <TextInput style={[styles.hello8, styles.helloTypo1]} 
            placeholder={"£"+payment} keyboardType="numeric"
            onChangeText = {newText => setAmount(newText)}
          />
          <View
            style={[
              styles.lineView,
              styles.parentPosition,
              styles.lineViewBorder,
            ]}
          />
        </View>
        <Pressable
          style={styles.groupPressable}
          onPress={() => requestContact(amount)}
        >
          <View
            style={[
              styles.rectangleParent,
              styles.parentPosition,
              styles.parentPosition1,
            ]}
          >
            <View style={styles.rectangleView} />
            <View style={[styles.maskGroup236, styles.parentPosition]} />
          </View>
          <Text style={styles.hello9}>ADD FUNDS</Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
 dropdownStyle: {
    width: "95%",
    marginLeft: "2.5%",
    backgroundColor: "#F6F5F8",
  }, selectedTextStyle: {
    color: "black",
    marginLeft: "15%",
    marginTop: "1.5%"
  },
  selectBox:{
    backgroundColor:"pink",
    width:"90%",
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "5%",
    height: "30%",
    borderRadius: 15,
    backgroundColor: "#F6F5F8",
  },
  Select_account: {
    top: verticalScale(-5),
    left: "5.5%",
  }, inputSearchStyle: {
    width: 100},
  helloTypo1: {
    textAlign: "center",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloColor: {
    color: GlobalStyles.Color.gray_700,
    textAlign: "center",
  },
  helloTypo2: {
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_700,
    width:"100%",
    textAlign:"center",
  },
  helloTypo: {
    color: GlobalStyles.Color.indigo_100,
    fontSize: GlobalStyles.FontSize.size_4xl,
    textAlign: "center",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  lineViewBorder: {
    height: verticalScale(2),
    borderTopWidth: 1,
    borderColor: "#707070",
    borderStyle: "solid",
  },
  groupPosition1: {},
  helloParent2Position: {
    width: "100%",
    top: "50%",
    position: "absolute",
  },
  groupViewPosition: {
    width: "25%",
    bottom: verticalScale(0),
    top: verticalScale(0),
    position: "absolute",
  },
  groupPosition: {
    height: "17%",
    width: horizontalScale(18),
    bottom: verticalScale(0),
    left: "50%",
    position: "absolute",
  },
  parentPosition: {
    right: "10%",
    position: "absolute",
  },
  parentPosition1: {
    bottom: verticalScale(0),
    right: horizontalScale(0),
    top: verticalScale(0),
  },
  hello: {
    top: verticalScale(148),
  },
  groupChild: {},
  hello1: {
    textAlign:"center",
    fontWeight: "700",
  },
  hello2: {
    top: verticalScale(120),
    width:"100%",
    textAlign:"center",
  },
  hello5: {
    top: verticalScale(150),
    width:"100%",
    textAlign:"center",
  },
  helloParent: {
    top: verticalScale(44),
    height: verticalScale(172),
    width:"100%",
    position: "absolute",
  },
  groupItem: {},
  hello3: {},
  iconMaterialKeyboardVoice: {

    top: "50%",
    position: "absolute",
  },
  helloGroup: {
    marginTop: verticalScale(44.5),
    borderRadius: GlobalStyles.Border.br_5xl,
    backgroundColor: GlobalStyles.Color.gray_200,
    height: verticalScale(42),
    right: horizontalScale(31),
  },
  hello4: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    lineHeight: verticalScale(65),
    top: verticalScale(0),
    width: "100%",
  },
  groupInner: {
    marginLeft: horizontalScale(-7.94),
  },
  helloContainer: {
    width: "100%",
    left: "10%",

  },
  groupIcon: {},
  groupView: {
    left: "50%",
  },
  groupChild1: {},
  helloParent1: {
    width: horizontalScale(76),
  },
  groupContainer: {
    marginTop: verticalScale(150),
    height: verticalScale(50),
    width: "100%"
  },
  hello7: {
    width:"100%",
    textAlign:"center",
    fontSize: GlobalStyles.FontSize.size_xl,
  },
  hello8: {
    top: verticalScale(28),
    textAlign: "center",
    width:"100%",
    fontSize: GlobalStyles.FontSize.size_13xl,
    color: GlobalStyles.Color.gray_700,
  },
  lineView: {
  top: verticalScale(110),
  width: "90%",
  left: "5%",
    bottom: verticalScale(-1),

  },
  helloParent2: {

  },
  rectangleView: {
    height: "100%",
    top: "-20%",
    left: "5%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: "#D8EBF9",
    position: "absolute",
    width: "90%",
  },
  maskGroup236: {

    top: verticalScale(0),
    left: horizontalScale(0),
  },
  rectangleParent: {
    left: horizontalScale(0),
  },
  hello9: {
    width:"100%",
    textAlign:"center",
    textAlignVertical: "center",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.white,
    textAlign: "center",
    top:"15%"
  },
  groupPressable: {
    bottom: verticalScale(49),
    height: verticalScale(60),
    width:"100%",
    position: "absolute",
  },
  groupParent: {

    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: horizontalScale(0),
      height: verticalScale(-3),
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: "100%",
    height: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
  requestContact: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.gray_100,
  },
});

export default AddFunds;
