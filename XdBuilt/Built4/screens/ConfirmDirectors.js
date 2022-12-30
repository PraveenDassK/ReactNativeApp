import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const ConfirmDirectors = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.confirmDirectors}
      onPress={() => navigation.navigate("LogoAnimation1")}
    >
      <View style={[styles.confirmDirectorsChild, styles.mt_49]} />
      <View style={[styles.helloParent, styles.mt10, styles.ml27]}>
        <Text style={[styles.hello, styles.helloFlexBox]}>
          Directors or Partners
        </Text>
        <Text style={[styles.hello1, styles.helloTypo]}>
          <Text style={styles.carbonyteWouldLike}>
            Carbonyte would like to know details of any
          </Text>
          <Text style={styles.carbonyteWouldLike}>
            Associates - usually the Directors or Partners
          </Text>
        </Text>
      </View>
      <Pressable
        style={[styles.wrapper, styles.mt_1568]}
        onPress={() => navigation.navigate("DirectorsOrPartners2")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/group-31042.png")}
        />
      </Pressable>
      <Text
        style={[styles.hello2, styles.mt_108, styles.ml50, styles.helloTypo]}
      >
        <Text style={styles.carbonyteWouldLike}>
          <Text style={styles.occupation1}>Occupation</Text>
        </Text>
        <Text style={styles.carbonyteWouldLike}>
          <Text style={styles.architect1}>Architect</Text>
        </Text>
        <Text style={styles.architect1} />
      </Text>
      <View style={[styles.director1Parent, styles.mt33, styles.ml25]}>
        <Text style={[styles.director1, styles.removeTypo]}>Director 1</Text>
        <Text style={[styles.remove, styles.removeTypo]}>Remove</Text>
        <Text style={[styles.personsWithSignificantContr, styles.removeTypo]}>
          Persons with significant control
        </Text>
        <View style={[styles.groupChild, styles.groupBorder]} />
        <Text style={[styles.hello3, styles.helloPosition]}>Nikunj VYAS</Text>
        <Text style={[styles.hello4, styles.helloPosition]}>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.occupation1}>Correspondence address</Text>
          </Text>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.architect1}>
              102, Mansion House, Bucknalls Lane,
            </Text>
          </Text>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.architect1}>
              Watford, Hertfordshire, United Kingdom,
            </Text>
          </Text>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.architect1}>WD25 9XX</Text>
          </Text>
        </Text>
        <Text style={[styles.hello5, styles.helloPosition]}>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.occupation1}>Date of birth</Text>
          </Text>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.architect1}>July 1987</Text>
          </Text>
        </Text>
        <Text style={[styles.hello6, styles.helloPosition]}>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.occupation1}>Role</Text>
          </Text>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.architect1}>Directors</Text>
            {` `}
          </Text>
        </Text>
        <Text style={[styles.hello7, styles.helloPosition]}>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.occupation1}>Appointed on</Text>
          </Text>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.architect1}>20 July 1</Text>987
          </Text>
        </Text>
        <Text style={[styles.hello8, styles.helloPosition]}>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.occupation1}>Nature of control</Text>
          </Text>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.architect1}>
              Ownership of shares – 75% or more
            </Text>
          </Text>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.architect1}>
              Ownership of voting rights - 75% or more
            </Text>
          </Text>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.architect1}>
              Right to appoint and remove directors
            </Text>
          </Text>
        </Text>
        <Text style={[styles.hello9, styles.helloPosition]}>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.occupation1}>Country of residence</Text>
          </Text>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.architect1}>United Kingdom</Text>
          </Text>
        </Text>
        <Text style={[styles.hello10, styles.helloPosition]}>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.occupation1}>Nationality</Text>
          </Text>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.architect1}>British</Text>
          </Text>
        </Text>
      </View>
      <View style={[styles.director2Parent, styles.mt107, styles.ml25]}>
        <Text style={[styles.director1, styles.removeTypo]}>Director 2</Text>
        <Text style={[styles.remove, styles.removeTypo]}>Remove</Text>
        <View style={[styles.groupItem, styles.groupBorder]} />
        <Text style={[styles.hello11, styles.helloPosition]}>Nikunj VYAS</Text>
        <Text style={[styles.hello12, styles.helloPosition]}>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.occupation1}>Correspondence address</Text>
          </Text>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.architect1}>
              102, Mansion House, Bucknalls Lane,
            </Text>
          </Text>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.architect1}>
              Watford, Hertfordshire, United Kingdom,
            </Text>
          </Text>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.architect1}>WD25 9XX</Text>
          </Text>
        </Text>
        <Text style={[styles.hello13, styles.helloPosition]}>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.occupation1}>Date of birth</Text>
          </Text>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.architect1}>July 1987</Text>
          </Text>
        </Text>
        <Text style={[styles.hello14, styles.helloPosition]}>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.occupation1}>Role</Text>
          </Text>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.architect1}>Directors</Text>
            {` `}
          </Text>
        </Text>
        <Text style={[styles.hello15, styles.helloPosition]}>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.occupation1}>Appointed on</Text>
          </Text>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.architect1}>20 July 1</Text>987
          </Text>
        </Text>
        <Text style={[styles.hello16, styles.helloPosition]}>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.occupation1}>Country of residence</Text>
          </Text>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.architect1}>United Kingdom</Text>
          </Text>
        </Text>
        <Text style={[styles.hello17, styles.helloPosition]}>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.occupation1}>Nationality</Text>
          </Text>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.architect1}>British</Text>
          </Text>
        </Text>
      </View>
      <View style={[styles.statusBarBlack, styles.mt10]}>
        <View style={[styles.rectangle, styles.timePosition]} />
        <View style={styles.statusBar}>
          <View style={[styles.time, styles.timePosition]}>
            <Text style={[styles.text1, styles.helloFlexBox]}>9:41</Text>
          </View>
          <Image
            style={styles.batteryIcon}
            resizeMode="cover"
            source={require("../assets/icon-awesomebatterythreequarters.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.networkPosition1]}
            resizeMode="cover"
            source={require("../assets/icon-awesomewifi.png")}
          />
          <View style={[styles.network, styles.networkPosition1]}>
            <View style={[styles.networkChild, styles.networkLayout]} />
            <View
              style={[
                styles.networkItem,
                styles.networkPosition,
                styles.networkLayout,
              ]}
            />
            <View
              style={[
                styles.networkInner,
                styles.networkPosition,
                styles.networkLayout,
              ]}
            />
            <View style={[styles.rectangleView, styles.networkLayout]} />
          </View>
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.mt1, styles.ml121]} />
      <View style={[styles.component208110Parent, styles.mt61, styles.ml25]}>
        <View style={[styles.component208110, styles.timePosition]}>
          <View style={styles.rectangleParent}>
            <View style={[styles.groupInner, styles.iconLayout]} />
            <View style={styles.maskGroup236} />
          </View>
        </View>
        <Text style={[styles.hello18, styles.helloFlexBox]}>Confirm</Text>
      </View>
      <Pressable
        style={[styles.rectangleGroup, styles.mt_60, styles.ml291]}
        onPress={() => navigation.navigate("DirectorsOrPartners2")}
      >
        <View style={[styles.groupInner, styles.iconLayout]} />
        <Image
          style={[styles.iconIonicIosAdd, styles.networkPosition]}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosadd.png")}
        />
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mt_49: {
    marginTop: GlobalStyles.Margin.margin_61xs,
  },
  mt10: {
    marginTop: GlobalStyles.Margin.margin_24xs,
  },
  ml27: {
    marginLeft: GlobalStyles.Margin.margin_4xs,
  },
  mt_1568: {
    marginTop: -1568,
  },
  mt_108: {
    marginTop: -108,
  },
  ml50: {
    marginLeft: 50,
  },
  mt33: {
    marginTop: GlobalStyles.Margin.margin_2xl,
  },
  ml25: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  mt107: {
    marginTop: 107,
  },
  mt1: {
    marginTop: GlobalStyles.Margin.margin_32xs,
  },
  ml121: {
    marginLeft: GlobalStyles.Margin.margin_54xl,
  },
  mt61: {
    marginTop: 61,
  },
  mt_60: {
    marginTop: GlobalStyles.Margin.margin_66xs,
  },
  ml291: {
    marginLeft: GlobalStyles.Margin.margin_91xl,
  },
  helloFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  helloTypo: {
    fontSize: GlobalStyles.FontSize.size_base,
    lineHeight: 20,
    textAlign: "left",
  },
  removeTypo: {
    fontSize: GlobalStyles.FontSize.size_xl,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    textAlign: "left",
    position: "absolute",
  },
  groupBorder: {
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderStyle: "solid",
    borderRadius: GlobalStyles.Border.br_4xl,
    bottom: 0,
    right: 0,
    left: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  helloPosition: {
    left: 25,
    fontSize: GlobalStyles.FontSize.size_base,
    top: "50%",
    textAlign: "left",
    color: GlobalStyles.Color.indigo,
    position: "absolute",
  },
  timePosition: {
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  networkPosition1: {
    width: 17,
    marginTop: -3,
    top: "50%",
    position: "absolute",
  },
  networkLayout: {
    width: 3,
    backgroundColor: GlobalStyles.Color.gray_1400,
    borderRadius: GlobalStyles.Border.br_7xs,
    bottom: 0,
  },
  networkPosition: {
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  confirmDirectorsChild: {
    backgroundColor: GlobalStyles.Color.gray_300,
    height: 1609,
    width: 375,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    lineHeight: 30,
    fontFamily: GlobalStyles.FontFamily.typoGrotesk,
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
    left: 0,
    top: 0,
  },
  carbonyteWouldLike: {
    margin: GlobalStyles.Margin.margin_33xs,
  },
  hello1: {
    marginTop: 6.74,
    left: 1,
    color: GlobalStyles.Color.gray_800,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    lineHeight: 20,
    top: "50%",
    position: "absolute",
  },
  helloParent: {
    width: 281,
    height: 85,
  },
  wrapper: {
    width: 55,
    height: 45,
  },
  occupation1: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
  },
  architect1: {
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  hello2: {
    lineHeight: 20,
    color: GlobalStyles.Color.indigo,
  },
  director1: {
    color: GlobalStyles.Color.indigo,
    fontWeight: "700",
    left: 0,
    top: 0,
  },
  remove: {
    right: -1,
    color: GlobalStyles.Color.blue,
    fontWeight: "700",
    top: 0,
  },
  personsWithSignificantContr: {
    top: 23,
    color: GlobalStyles.Color.indigo,
    left: 0,
  },
  groupChild: {
    top: 57,
  },
  hello3: {
    marginTop: -249.5,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
  },
  hello4: {
    marginTop: -206.5,
    lineHeight: 20,
  },
  hello5: {
    marginTop: -38.5,
    lineHeight: 20,
  },
  hello6: {
    marginTop: -102.5,
    lineHeight: 20,
  },
  hello7: {
    marginTop: 153.5,
    lineHeight: 20,
  },
  hello8: {
    marginTop: 226.5,
    lineHeight: 20,
  },
  hello9: {
    marginTop: 25.5,
    lineHeight: 20,
  },
  hello10: {
    marginTop: 89.5,
    lineHeight: 20,
  },
  director1Parent: {
    height: 651,
    width: 326,
  },
  groupItem: {
    top: 33,
  },
  hello11: {
    marginTop: -204.5,
    fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
  },
  hello12: {
    marginTop: -161.5,
    lineHeight: 20,
  },
  hello13: {
    marginTop: 6.5,
    lineHeight: 20,
  },
  hello14: {
    marginTop: -57.5,
    lineHeight: 20,
  },
  hello15: {
    marginTop: 198.5,
    lineHeight: 20,
  },
  hello16: {
    marginTop: 70.5,
    lineHeight: 20,
  },
  hello17: {
    marginTop: 134.5,
    lineHeight: 20,
  },
  director2Parent: {
    height: 513,
    width: 326,
  },
  rectangle: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    right: 0,
    backgroundColor: GlobalStyles.Color.white,
    bottom: 0,
  },
  text1: {
    fontSize: GlobalStyles.FontSize.size_4xl,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: GlobalStyles.FontFamily.roboto,
    color: GlobalStyles.Color.gray_1900,
    left: 0,
    top: 0,
  },
  time: {
    width: 40,
  },
  batteryIcon: {
    width: 22,
    height: 11,
    marginTop: -3,
    right: 0,
    top: "50%",
    position: "absolute",
  },
  wifiIcon: {
    right: 37,
    height: 12,
  },
  networkChild: {
    height: 4,
    left: 0,
    position: "absolute",
  },
  networkItem: {
    marginLeft: -3.5,
    height: 6,
  },
  networkInner: {
    marginLeft: 0.5,
    height: 9,
  },
  rectangleView: {
    right: 0,
    top: 0,
    position: "absolute",
  },
  network: {
    right: 68,
    height: 11,
  },
  statusBar: {
    marginTop: -15,
    right: 16,
    left: 15,
    height: 26,
    top: "50%",
    position: "absolute",
  },
  statusBarBlack: {
    height: 44,
    width: 375,
  },
  homeIndicator: {
    borderRadius: GlobalStyles.Border.br_8xl,
    backgroundColor: GlobalStyles.Color.black,
    width: 134,
    height: 5,
  },
  groupInner: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.gray_500,
    position: "absolute",
  },
  maskGroup236: {
    bottom: 13,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: -30,
    height: 60,
    right: 0,
    top: "50%",
    left: 0,
    position: "absolute",
  },
  component208110: {
    right: 0,
  },
  hello18: {
    top: "36.67%",
    left: "36.22%",
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 10,
    textTransform: "uppercase",
    color: GlobalStyles.Color.black,
    fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  component208110Parent: {
    width: 254,
    height: 60,
  },
  iconIonicIosAdd: {
    marginTop: -9.04,
    marginLeft: -9.04,
    width: 18,
    height: 18,
    top: "50%",
  },
  rectangleGroup: {
    width: 60,
    height: 60,
  },
  confirmDirectors: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default ConfirmDirectors;
