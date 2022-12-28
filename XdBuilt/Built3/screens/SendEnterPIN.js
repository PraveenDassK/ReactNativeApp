import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const SendEnterPIN = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.sendEnterPin}
      onPress={() => navigation.navigate("SentMoney")}
    >
      <View style={styles.sendEnterPinChild} />
      <View style={[styles.iconFeatherArrowLeftWrapper, styles.mt_766]}>
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </View>
      <Text style={[styles.hello, styles.mt10, styles.ml35]}>
        Setup Your Pin
      </Text>
      <Image
        style={[styles.sendEnterPinItem, styles.mt78, styles.ml111]}
        resizeMode="cover"
        source={require("../assets/group-32217.png")}
      />
      <View style={[styles.ellipseParent, styles.mt79]}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-14.png")}
        />
        <Image
          style={[
            styles.groupItem,
            styles.groupChildPosition3,
            styles.groupChildLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-14.png")}
        />
        <Image
          style={[
            styles.groupInner,
            styles.groupChildPosition2,
            styles.groupChildLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-14.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.groupChildPosition1]}
          resizeMode="cover"
          source={require("../assets/ellipse-15.png")}
        />
        <Image
          style={[
            styles.groupChild1,
            styles.groupChildPosition1,
            styles.groupChildPosition3,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-15.png")}
        />
        <Image
          style={[styles.groupChildPosition1, styles.groupChildPosition2]}
          resizeMode="cover"
          source={require("../assets/ellipse-15.png")}
        />
        <Image
          style={[styles.groupChild3, styles.groupChildPosition1]}
          resizeMode="cover"
          source={require("../assets/ellipse-15.png")}
        />
        <Image
          style={[
            styles.groupChild4,
            styles.groupChildPosition,
            styles.groupChildLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-14.png")}
        />
        <Image
          style={[
            styles.groupChild5,
            styles.groupChildPosition,
            styles.groupChildPosition3,
            styles.groupChildLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-14.png")}
        />
        <Image
          style={[
            styles.groupChildPosition,
            styles.groupChildPosition2,
            styles.groupChildLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-14.png")}
        />
        <Text style={[styles.hello1, styles.helloTypo2]}>1</Text>
        <Text style={[styles.hello2, styles.helloTypo2]}>4</Text>
        <Text style={[styles.hello3, styles.helloTypo2]}>7</Text>
        <Text style={[styles.hello4, styles.helloTypo1]}>2</Text>
        <Text style={[styles.hello5, styles.helloTypo1]}>5</Text>
        <Text style={[styles.hello6, styles.helloTypo1]}>8</Text>
        <Text style={[styles.hello7, styles.helloTypo1]}>0</Text>
        <Text style={[styles.hello8, styles.helloTypo]}>3</Text>
        <Text style={[styles.hello9, styles.helloTypo]}>6</Text>
        <Text style={[styles.hello10, styles.helloTypo]}>9</Text>
        <Image
          style={styles.iconIonicMdBackspace}
          resizeMode="cover"
          source={require("../assets/icon-ionicmdbackspace.png")}
        />
      </View>
      <View style={[styles.component208167Parent, styles.mt91, styles.ml25]}>
        <View style={[styles.component208167, styles.groupChildPosition]}>
          <View style={[styles.rectangleParent, styles.groupChildPosition]}>
            <View style={styles.rectangleView} />
            <View style={[styles.maskGroup236, styles.groupChildPosition]} />
          </View>
        </View>
        <Text style={styles.hello11}>Continue</Text>
      </View>
      <View style={[styles.sendEnterPinChild, styles.mt_812]} />
      <View style={[styles.iconFeatherArrowLeftWrapper, styles.mt_45]}>
        <Image
          style={styles.iconFeatherArrowLeft}
          resizeMode="cover"
          source={require("../assets/icon-featherarrowleft.png")}
        />
      </View>
      <Text style={[styles.hello, styles.mt_35, styles.ml35]}>
        Setup Your Pin
      </Text>
      <Image
        style={[styles.sendEnterPinItem, styles.mt_13, styles.ml111]}
        resizeMode="cover"
        source={require("../assets/group-32217.png")}
      />
      <View style={[styles.ellipseParent, styles.mt_306]}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-14.png")}
        />
        <Image
          style={[
            styles.groupItem,
            styles.groupChildPosition3,
            styles.groupChildLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-14.png")}
        />
        <Image
          style={[
            styles.groupInner,
            styles.groupChildPosition2,
            styles.groupChildLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-14.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.groupChildPosition1]}
          resizeMode="cover"
          source={require("../assets/ellipse-15.png")}
        />
        <Image
          style={[
            styles.groupChild1,
            styles.groupChildPosition1,
            styles.groupChildPosition3,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-15.png")}
        />
        <Image
          style={styles.groupChildPosition2}
          resizeMode="cover"
          source={require("../assets/ellipse-15.png")}
        />
        <Image
          style={[styles.groupChild3, styles.groupChildPosition1]}
          resizeMode="cover"
          source={require("../assets/ellipse-15.png")}
        />
        <Image
          style={[
            styles.groupChild4,
            styles.groupChildPosition,
            styles.groupChildLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-14.png")}
        />
        <Image
          style={[
            styles.groupChild5,
            styles.groupChildPosition,
            styles.groupChildPosition3,
            styles.groupChildLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/ellipse-14.png")}
        />
        <Image
          style={[styles.groupChildPosition2, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-14.png")}
        />
        <Text style={[styles.hello1, styles.helloTypo2]}>1</Text>
        <Text style={[styles.hello2, styles.helloTypo2]}>4</Text>
        <Text style={[styles.hello3, styles.helloTypo2]}>7</Text>
        <Text style={[styles.hello4, styles.helloTypo1]}>2</Text>
        <Text style={[styles.hello5, styles.helloTypo1]}>5</Text>
        <Text style={[styles.hello6, styles.helloTypo1]}>8</Text>
        <Text style={[styles.hello7, styles.helloTypo1]}>0</Text>
        <Text style={[styles.hello8, styles.helloTypo]}>3</Text>
        <Text style={[styles.hello9, styles.helloTypo]}>6</Text>
        <Text style={[styles.hello10, styles.helloTypo]}>9</Text>
        <Image
          style={styles.iconIonicMdBackspace}
          resizeMode="cover"
          source={require("../assets/icon-ionicmdbackspace.png")}
        />
      </View>
      <View style={[styles.component208167Parent, styles.mt_60, styles.ml25]}>
        <View style={[styles.component208167, styles.groupChildPosition]}>
          <View style={[styles.rectangleParent, styles.groupChildPosition]}>
            <View style={styles.rectangleView} />
            <View style={[styles.maskGroup236, styles.groupChildPosition]} />
          </View>
        </View>
        <Text style={styles.hello11}>Continue</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mt_766: {
    marginTop: GlobalStyles.Margin.margin_59xs,
  },
  mt10: {
    marginTop: GlobalStyles.Margin.margin_16xs,
  },
  ml35: {
    marginLeft: GlobalStyles.Margin.margin_13xl,
  },
  mt78: {
    marginTop: GlobalStyles.Margin.margin_39xl,
  },
  ml111: {
    marginLeft: GlobalStyles.Margin.margin_45xl,
  },
  mt79: {
    marginTop: GlobalStyles.Margin.margin_40xl,
  },
  mt91: {
    marginTop: 91,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_3xl,
  },
  mt_812: {
    marginTop: GlobalStyles.Margin.margin_61xs,
  },
  mt_45: {
    marginTop: -45,
  },
  mt_35: {
    marginTop: GlobalStyles.Margin.margin_37xs,
  },
  mt_13: {
    marginTop: -13,
  },
  mt_306: {
    marginTop: -306,
  },
  mt_60: {
    marginTop: -60,
  },
  groupChildLayout: {
    height: 65,
    width: 66,
  },
  groupChildPosition3: {
    marginTop: -73,
    top: "50%",
  },
  groupChildPosition2: {
    marginTop: 8,
    top: "50%",
  },
  groupChildPosition1: {
    width: 65,
    marginLeft: -33.5,
    height: 65,
    left: "50%",
    position: "absolute",
  },
  groupChildPosition: {
    right: 0,
    position: "absolute",
  },
  helloTypo2: {
    textAlign: "center",
    fontSize: GlobalStyles.FontSize.size_7xl,
    left: 24,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    color: GlobalStyles.Color.indigo,
    position: "absolute",
  },
  helloTypo1: {
    left: 132,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_7xl,
    color: GlobalStyles.Color.indigo,
    position: "absolute",
  },
  helloTypo: {
    left: 241,
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontSize: GlobalStyles.FontSize.size_7xl,
    color: GlobalStyles.Color.indigo,
    position: "absolute",
  },
  sendEnterPinChild: {
    width: 375,
    height: 812,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  iconFeatherArrowLeft: {
    marginLeft: -0.5,
    bottom: 4,
    width: 17,
    height: 17,
    left: "50%",
    position: "absolute",
  },
  iconFeatherArrowLeftWrapper: {
    width: 55,
    height: 45,
    backgroundColor: GlobalStyles.Color.gray_300,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_6xl,
    fontWeight: "700",
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
  },
  sendEnterPinItem: {
    width: 142,
    height: 13,
  },
  groupChild: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    top: "50%",
    left: 0,
    position: "absolute",
  },
  groupInner: {
    left: 0,
    position: "absolute",
  },
  ellipseIcon: {
    top: 0,
  },
  groupChild1: {
    top: "50%",
  },
  groupChild3: {
    bottom: 0,
  },
  groupChild4: {
    top: 0,
  },
  groupChild5: {
    top: "50%",
  },
  hello1: {
    top: 16,
  },
  hello2: {
    top: 96,
  },
  hello3: {
    top: 176,
  },
  hello4: {
    top: 16,
  },
  hello5: {
    top: 96,
  },
  hello6: {
    top: 176,
  },
  hello7: {
    top: 257,
  },
  hello8: {
    top: 16,
  },
  hello9: {
    top: 96,
  },
  hello10: {
    top: 176,
  },
  iconIonicMdBackspace: {
    right: 19,
    bottom: 22,
    width: 28,
    height: 21,
    position: "absolute",
  },
  ellipseParent: {
    width: 283,
    height: 306,
    alignSelf: "center",
  },
  rectangleView: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_md,
    backgroundColor: GlobalStyles.Color.gray_500,
    position: "absolute",
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    left: 0,
    top: 0,
  },
  rectangleParent: {
    marginTop: -30,
    height: 60,
    top: "50%",
    left: 0,
  },
  component208167: {
    bottom: 0,
    left: 0,
    top: 0,
  },
  hello11: {
    top: "36.67%",
    left: "40.8%",
    fontSize: GlobalStyles.FontSize.size_base,
    lineHeight: 17,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  component208167Parent: {
    width: 326,
    height: 60,
  },
  sendEnterPin: {
    backgroundColor: GlobalStyles.Color.white,
    flex: 1,
    width: "100%",
  },
});

export default SendEnterPIN;
