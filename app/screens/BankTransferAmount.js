import React, { useContext, useEffect, useState, Keyboard } from "react";
import { StyleSheet, View, Text, Image, TextInput, Pressable } from "react-native";
import GlobalStyles from "../../GlobalStyles";

const BankTransferAmount = ({navigation}) => {
  const [amount, setAmount] = useState("")
  const [note, setNote] = useState("")
  const [userData, setCode] = useState("")
  const reciver = "Me";
  const sortCode = "00-00-00"
  const accountCode = "01234567890"  
  let payment = (amount ? amount : 1).toString()

  console.log(payment)

  const send = (amount) => {
    console.log(amount)
    navigation.navigate("Pin")
  }

  return (
    <View style={styles.bankTransferAmount}>
      <View style={styles.groupParent}>
        <View style={[styles.groupChild, styles.groupPosition1]} />
        <View style={styles.helloParent}>
          <Text style={[styles.hello, styles.helloTypo2, styles.helloTypo3]}>
            {reciver}
          </Text>
          <Text style={[styles.hello1, styles.helloTypo2, styles.helloTypo3]}>
            {"\n"}Receiver
          </Text>
          <Text style={[styles.hello2, styles.helloTypo2, styles.helloTypo3]}>
          {"\n" + accountCode}
          </Text>
          <Text style={[styles.hello3, styles.helloTypo, styles.helloTypo3]}>
          {"\n" + sortCode}
          </Text>
        </View>
        <View style={styles.groupContainer}>
          <View style={[styles.helloGroup, styles.helloPosition]}>
            <Pressable
              onPress={() => {
                setAmount(20)
              }}
            >
            <Text style={[styles.hello4, styles.helloTypo]}>£20</Text>
            </Pressable>
          </View>

          <Pressable
              onPress={() => {
                setAmount(50)
              }}
            >
          <View style={[styles.helloContainer, styles.helloPosition]}>
            <Text style={[styles.hello4, styles.helloTypo]}>£50</Text>

          </View>
          </Pressable>

          <Pressable
              onPress={() => {
                setAmount(100)
              }}
            >
            <View style={[styles.groupView, styles.groupPosition1]}>
              <Text style={[styles.hello4, styles.helloTypo]}>£100</Text>

            </View>
          </Pressable>

        </View>
        <View style={[styles.helloParent1, styles.helloParent1Position]}>
          <Text style={[styles.hello7, styles.helloTypo]}>Pay</Text>
          <TextInput style={[styles.hello8, styles.helloTypo2, styles.helloTypo4]}
           keyboardType="numeric"
           placeholder= {"£" + payment}
          />
          <View style={[styles.lineView, styles.lineViewPosition]} />
        </View>
        <View style={styles.helloParent2}>
          <TextInput style={[styles.hello9, styles.helloTypo, styles.helloTypo1]}
            placeholder={"Add a note"}
          />
        </View>
        <View style={[styles.maskGroup236, styles.helloParent1Position]} />
        
        <View style={styles.groupParent1}>
        <Pressable
          style={styles.groupParent1}
          onPress={() => send(amount)}
        >
          <View style={[styles.rectangleParent, styles.groupPosition1]}>
            <View style={styles.rectangleView} />
            <View style={[styles.maskGroup2361, styles.lineViewPosition]} />
          </View>
          <Text style={[styles.hello10, styles.helloTypo2, styles.helloTypo4]}>
            Send
          </Text>
          </Pressable>
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition1: {
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  helloTypo2: {
    textAlign: "center",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloTypo3: {
    color: GlobalStyles.Color.indigo_100,
    fontSize: GlobalStyles.FontSize.size_4xl,
    textAlign: "center",
    width:"100%"
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  helloTypo: {
    color: GlobalStyles.Color.gray_700,
    textAlign: "center",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  helloTypo1: {
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_700,
  },
  helloPosition: {
    width: 82,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  groupPosition: {
    height: 17,
    width: 18,
    left: "50%",
    bottom: 0,
    position: "absolute",
  },
  helloParent1Position: {
    right: 32,
    left: 33,
    top: "50%",
    position: "absolute",
  },
  helloTypo4: {
    textAlign: "center",
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  lineViewPosition: {
    right: 0,
    position: "absolute",
  },
  groupChild: {
    borderTopLeftRadius: GlobalStyles.Border.br_4xl,
    borderTopRightRadius: GlobalStyles.Border.br_4xl,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    left: 0,
    backgroundColor: GlobalStyles.Color.white,
  },
  hello: {
    top: 34,
    left: 2,
  },
  hello1: {
    left: 9,
    top: -10,
  },
  hello2: {
    top: 44,
    left: 0,
  },
  hello3: {
    top: 80,
    left: 25,
  },
  helloParent: {
    top: "10%",
    width: "100%",
    position: "absolute",
  },
  hello4: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    lineHeight: 42,
    left: 20,
    top: 0,
  },
  groupItem: {
    marginLeft: -7.94,
  },
  helloGroup: {
    left: 0,
  },
  groupInner: {
    marginLeft: -7.71,
  },
  helloContainer: {
    marginLeft: -27.5,
    left: "50%",
  },
  groupIcon: {
    marginLeft: -7.22,
  },
  groupView: {
    width: 76,
  },
  groupContainer: {
    marginTop: 149,
    height: 50,
    left: 33,
    right: 31,
    top: "50%",
    position: "absolute",
  },
  hello7: {
    left: "50%",
    fontSize: GlobalStyles.FontSize.size_xl,
    top: 0,
  },
  hello8: {
    top: 28,
    left: "35%",
    fontSize: GlobalStyles.FontSize.size_13xl,
    lineHeight: 37,
    color: GlobalStyles.Color.blue_100,
  },
  lineView: {
    bottom: -1,
    left: -1,
    borderStyle: "solid",
    borderColor: "#707070",
    borderTopWidth: 1,
    height: 2,
  },
  helloParent1: {
    marginTop: "-20%",
    height: 125,
    width:"100%"
  },
  hello9: {
    top: 5,
    left: 13,
  },
  iconMaterialKeyboardVoice: {
    marginTop: -9.35,
    right: 16,
    width: 14,
    height: 19,
    top: "50%",
    position: "absolute",
  },
  helloParent2: {
    marginTop: 44.5,
    left: 32,
    borderRadius: GlobalStyles.Border.br_5xl,
    backgroundColor: GlobalStyles.Color.gray_200,
    height: 42,
    right: 31,
    top: "50%",
    position: "absolute",
  },
  maskGroup236: {
    marginTop: 129.5,
    height: 47,
  },
  rectangleView: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.blue_100,
    position: "absolute",
    width: "100%",
  },
  maskGroup2361: {
    bottom: 13,
    left: 0,
    top: 0,
  },
  rectangleParent: {
    left: 0,
  },
  hello10: {
    top: "40%",
    width:"100%",
    textAlign:"center",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.white,
  },
  groupParent1: {
    right: 24,
    bottom: "5%",
    height: 60,
    left: 25,
    position: "absolute",
  },
  groupParent: {
    width: "200%",
    height: "100%",
  },
  bankTransferAmount: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.gray_100,
  },
});

export default BankTransferAmount;