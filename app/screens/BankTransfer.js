import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../../GlobalStyles";

const BankTransfer = ({navigation}) => {
  return (
    <View style={styles.bankTransfer}>
      <Pressable
        style={styles.bankTransferParent}
        onPress={() => navigation.navigate("Account3")}
      >
        <Text style={styles.bankTransfer1}>Bank Transfer</Text>

      </Pressable>
      <Text
        style={[styles.hello, styles.mt39_75, styles.mr281, styles.helloTypo1]}
      >
        Recent
      </Text>
      <View style={[styles.rectangle, styles.mt8_75, styles.ml1]} />
      <View style={[styles.rectangle, styles.mt22_75, styles.ml1]} />
      <View style={[styles.rectangle, styles.mt22_75, styles.ml1]} />
      <View style={[styles.rectangle, styles.mt22_75, styles.ml1]} />
      <View style={[styles.rectangle, styles.mt22_75, styles.ml1]} />
      <View style={[styles.rectangle, styles.mt23_75, styles.ml1]} />
      <Image
        style={[styles.bankTransferChild, styles.mt_53_25, styles.mr261]}
        resizeMode="cover"
        source={require("../assets/image-groupicons.png")}
      />
      <View style={[styles.maskGroup236, styles.mt_46_25, styles.ml4]} />
      <Pressable
        style={[styles.groupParent, styles.mt_647_25, styles.ml1]}
        onPress={() => navigation.navigate("AddBeneficiary")}
      >
        <View style={[styles.rectangleParent, styles.maskGroup2361Position]}>
          <View style={styles.groupChild} />
          <View style={[styles.maskGroup2361, styles.maskGroup2361Position]} />
        </View>
        <Text style={[styles.hello1, styles.helloTypo1]}>Add Beneficiary</Text>
      </Pressable>
      <Text
        style={[styles.hello2, styles.mt_403_25, styles.mr59, styles.helloTypo]}
      >
        To Hudson Maia *1234
      </Text>
      <Text
        style={[styles.hello2, styles.mt_46_25, styles.mr59, styles.helloTypo]}
      >
        To Hudson Maia *1234
      </Text>
      <Text
        style={[styles.hello2, styles.mt_46_25, styles.mr59, styles.helloTypo]}
      >
        To Hudson Maia *1234
      </Text>
      <Text
        style={[styles.hello2, styles.mt_46_25, styles.mr59, styles.helloTypo]}
      >
        To Hudson Maia *1234
      </Text>
      <Text
        style={[styles.hello2, styles.mt_47_25, styles.mr59, styles.helloTypo]}
      >
        To Hudson Maia *1234
      </Text>
      <Text
        style={[styles.hello2, styles.mt_46_25, styles.mr59, styles.helloTypo]}
      >
        To Hudson Maia *1234
      </Text>
      <Text
        style={[styles.hello2, styles.mt_1_25, styles.ml266, styles.helloTypo]}
      >
        -£500
      </Text>
      <Text
        style={[styles.hello2, styles.mt_1_25, styles.ml266, styles.helloTypo]}
      >
        -£500
      </Text>
      <Text
        style={[styles.hello2, styles.mt_1_25, styles.ml266, styles.helloTypo]}
      >
        -£500
      </Text>
      <Text
        style={[styles.hello2, styles.mt_1_25, styles.ml266, styles.helloTypo]}
      >
        -£500
      </Text>
      <Text
        style={[styles.hello2, styles.mt_1_25, styles.ml266, styles.helloTypo]}
      >
        -£500
      </Text>
      <Text
        style={[styles.hello2, styles.mt_1_25, styles.ml266, styles.helloTypo]}
      >
        -£500
      </Text>
      <Text
        style={[styles.hello14, styles.mt_3_25, styles.mr30, styles.helloTypo]}
      >{`Monthly - Next : 01 October  `}</Text>
      <Text
        style={[styles.hello14, styles.mt_3_25, styles.mr30, styles.helloTypo]}
      >{`Monthly - Next : 01 October  `}</Text>
      <Text
        style={[styles.hello14, styles.mt_3_25, styles.mr30, styles.helloTypo]}
      >{`Monthly - Next : 01 October  `}</Text>
      <Text
        style={[styles.hello14, styles.mt_3_25, styles.mr30, styles.helloTypo]}
      >{`Monthly - Next : 01 October  `}</Text>
      <Text
        style={[styles.hello14, styles.mt_3_25, styles.mr30, styles.helloTypo]}
      >{`Monthly - Next : 01 October  `}</Text>
      <Text
        style={[styles.hello14, styles.mt_3_25, styles.mr30, styles.helloTypo]}
      >{`Monthly - Next : 01 October  `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt39_75: {
    marginTop: 39.75,
  },
  mr281: {
    marginRight: 281,
  },
  mt8_75: {
    marginTop: 8.75,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  mt22_75: {
    marginTop: GlobalStyles.Margin.margin_3xs,
  },
  mt23_75: {
    marginTop: 23.75,
  },
  mt_53_25: {
    marginTop: -53.25,
  },
  mr261: {
    marginRight: 261,
  },
  mt_46_25: {
    marginTop: GlobalStyles.Margin.margin_13xs,
  },
  ml4: {
    marginLeft: 4,
  },
  mt_647_25: {
    marginTop: -647.25,
  },
  mt_403_25: {
    marginTop: -403.25,
  },
  mr59: {
    marginRight: GlobalStyles.Margin.margin_2xl,
  },
  mt_47_25: {
    marginTop: -47.25,
  },
  mt_1_25: {
    marginTop: GlobalStyles.Margin.margin_9xs,
  },
  ml266: {
    marginLeft: GlobalStyles.Margin.margin_8xl,
  },
  mt_3_25: {
    marginTop: GlobalStyles.Margin.margin_10xs,
  },
  mr30: {
    marginRight: GlobalStyles.Margin.margin_sm,
  },
  helloTypo1: {
    textAlign: "left",
  },
  maskGroup2361Position: {
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  helloTypo: {
    fontSize: GlobalStyles.FontSize.size_xs,
    textAlign: "left",
  },
  bankTransfer1: {
    marginLeft: -64.5,
    top: 40,
    left: "50%",
    fontSize: GlobalStyles.FontSize.size_4xl,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
    position: "absolute",
  },
  iconIonicIosArrowForward: {
    marginTop: -3.24,
    top: "50%",
    left: 1,
    width: 11,
    height: 6,
    position: "absolute",
  },
  iconIonicIosArrowForwardWrapper: {
    top: 10,
    right: 23,
    left: 19,
    height: 27,
    position: "absolute",
  },
  bankTransferParent: {
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
    width: 375,
    height: 749,
    backgroundColor: GlobalStyles.Color.white,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.gray_700,
  },
  rectangle: {
    borderRadius: GlobalStyles.Border.br_4xl,
    backgroundColor: GlobalStyles.Color.gray_200,
    width: 330,
    height: 64,
  },
  bankTransferChild: {
    width: 46,
    height: 410,
  },
  maskGroup236: {
    width: 331,
    height: 47,
  },
  groupChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.gray_500,
    position: "absolute",
    width: "100%",
  },
  maskGroup2361: {
    bottom: 13,
  },
  rectangleParent: {
    bottom: 0,
  },
  hello1: {
    top: "40%",
    left: "29.14%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    position: "absolute",
  },
  groupParent: {
    width: "100%",
    height: 60,
  },
  hello2: {
    color: GlobalStyles.Color.indigo_100,
    fontWeight: "700",
    fontSize: GlobalStyles.FontSize.size_xs,
  },
  hello14: {
    color: GlobalStyles.Color.gray_700,
  },
  bankTransfer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default BankTransfer;
