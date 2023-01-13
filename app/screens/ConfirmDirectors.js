import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable, ScrollView } from "react-native";

import GlobalStyles from "../../GlobalStyles";

const ConfirmDirectors = ({navigation}) => {


  return (
    <ScrollView>
    <Pressable
      style={styles.confirmDirectors}
      onPress={() => navigation.navigate("LogoAnimation1")}
    >
      <View style={styles.groupParent}>
        <View style={styles.helloParent}>
          <Text style={[styles.hello, styles.helloFlexBox, styles.helloColor]}>
            Directors or Partners
          </Text>
          <Text style={styles.hello1}>
            <Text style={styles.carbonyteWouldLike}>
              Carbonyte would like to know details of any{" "}
            </Text>
            <Text style={styles.carbonyteWouldLike}>
              Associates - usually the Directors or Partners
            </Text>
          </Text>
        </View>
        <Text style={[styles.hello2, styles.helloPosition]}>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.occupation1}>Occupation</Text>
          </Text>
          <Text style={styles.carbonyteWouldLike}>
            <Text style={styles.architect1}>Architect</Text>
          </Text>
          <Text style={styles.architect1} />
        </Text>
        <View style={styles.director1Parent}>
          <Text
            style={[styles.director1, styles.removeTypo, styles.helloColor]}
          >
            Director 1
          </Text>
          <Text style={[styles.remove, styles.removeTypo]}>Remove</Text>
          <Text
            style={[
              styles.personsWithSignificantContr,
              styles.removeTypo,
              styles.helloColor,
            ]}
          >
            Persons with significant control
          </Text>
          <View style={[styles.groupChild, styles.groupBorder]} />
          <Text style={[styles.hello3, styles.helloPosition]}>Nikunj VYAS{"\n"}</Text>
          <Text style={[styles.hello4, styles.helloPosition]}>
            <Text style={styles.carbonyteWouldLike}>
              <Text style={styles.occupation1}>Correspondence address{"\n"}</Text>
            </Text>
            <Text style={styles.carbonyteWouldLike}>
              <Text style={styles.architect1}>
                102, Mansion House, Bucknalls Lane,{"\n"}
              </Text>
            </Text>
            <Text style={styles.carbonyteWouldLike}>
              <Text style={styles.architect1}>
                Watford, Hertfordshire, United Kingdom,{"\n"}
              </Text>
            </Text>
            <Text style={styles.carbonyteWouldLike}>
              <Text style={styles.architect1}>WD25 9XX{"\n"}</Text>
            </Text>
          </Text>
          <Text style={[styles.hello5, styles.helloPosition]}>
            <Text style={styles.carbonyteWouldLike}>
              <Text style={styles.occupation1}>Date of birth{"\n"}</Text>
            </Text>
            <Text style={styles.carbonyteWouldLike}>
              <Text style={styles.architect1}>July 1987{"\n"}</Text>
            </Text>
          </Text>
          <Text style={[styles.hello6, styles.helloPosition]}>
            <Text style={styles.carbonyteWouldLike}>
              <Text style={styles.occupation1}>Role{"\n"}</Text>
            </Text>
            <Text style={styles.carbonyteWouldLike}>
              <Text style={styles.architect1}>Directors{"\n"}</Text>
              {` `}
            </Text>
          </Text>
          <Text style={[styles.hello7, styles.helloPosition]}>
            <Text style={styles.carbonyteWouldLike}>
              <Text style={styles.occupation1}>Appointed on{"\n"}</Text>
            </Text>
            <Text style={styles.carbonyteWouldLike}>
              <Text style={styles.architect1}>20 July 1987{"\n"}</Text>
            </Text>
          </Text>
          <Text style={[styles.hello8, styles.helloPosition]}>
            <Text style={styles.carbonyteWouldLike}>
              <Text style={styles.occupation1}>Nature of control{"\n"}</Text>
            </Text>
            <Text style={styles.carbonyteWouldLike}>
              <Text style={styles.architect1}>
                Ownership of shares – 75% or more{"\n"}
              </Text>
            </Text>
            <Text style={styles.carbonyteWouldLike}>
              <Text style={styles.architect1}>
                Ownership of voting rights - 75% or more{"\n"}
              </Text>
            </Text>
            <Text style={styles.carbonyteWouldLike}>
              <Text style={styles.architect1}>
                Right to appoint and remove directors{"\n"}
              </Text>
            </Text>
          </Text>
          <Text style={[styles.hello9, styles.helloPosition]}>
            <Text style={styles.carbonyteWouldLike}>
              <Text style={styles.occupation1}>Country of residence{"\n"}</Text>
            </Text>
            <Text style={styles.carbonyteWouldLike}>
              <Text style={styles.architect1}>United Kingdom{"\n"}</Text>
            </Text>
          </Text>
          <Text style={[styles.hello10, styles.helloPosition]}>
            <Text style={styles.carbonyteWouldLike}>
              <Text style={styles.occupation1}>Nationality{"\n"}</Text>
            </Text>
            <Text style={styles.carbonyteWouldLike}>
              <Text style={styles.architect1}>British{"\n"}</Text>
            </Text>
          </Text>
        </View>
        <View style={styles.director2Parent}>
          <Text
            style={[styles.director1, styles.removeTypo, styles.helloColor]}
          >
            Director 2
          </Text>
          <Text style={[styles.remove, styles.removeTypo]}>Remove{"\n"}</Text>
          <View style={[styles.groupItem, styles.groupBorder]} />
          <Text style={[styles.hello11, styles.helloPosition]}>
            Nikunj VYAS{"\n"}
          </Text>
          <Text style={[styles.hello12, styles.helloPosition]}>
            <Text style={styles.carbonyteWouldLike}>
              <Text style={styles.occupation1}>Correspondence address{"\n"}</Text>
            </Text>
            <Text style={styles.carbonyteWouldLike}>
              <Text style={styles.architect1}>
                102, Mansion House, Bucknalls Lane,{"\n"}
              </Text>
            </Text>
            <Text style={styles.carbonyteWouldLike}>
              <Text style={styles.architect1}>
                Watford, Hertfordshire, United Kingdom,{"\n"}
              </Text>
            </Text>
            <Text style={styles.carbonyteWouldLike}>
              <Text style={styles.architect1}>WD25 9XX{"\n"}</Text>
            </Text>
          </Text>
          <Text style={[styles.hello13, styles.helloPosition]}>
            <Text style={styles.carbonyteWouldLike}>
              <Text style={styles.occupation1}>Date of birth{"\n"}</Text>
            </Text>
            <Text style={styles.carbonyteWouldLike}>
              <Text style={styles.architect1}>July 1987{"\n"}</Text>
            </Text>
          </Text>
          <Text style={[styles.hello14, styles.helloPosition]}>
            <Text style={styles.carbonyteWouldLike}>
              <Text style={styles.occupation1}>Role{"\n"}</Text>
            </Text>
            <Text style={styles.carbonyteWouldLike}>
              <Text style={styles.architect1}>Directors{"\n"}</Text>
              {` `}
            </Text>
          </Text>
          <Text style={[styles.hello15, styles.helloPosition]}>
            <Text style={styles.carbonyteWouldLike}>
              <Text style={styles.occupation1}>Appointed on{"\n"}</Text>
            </Text>
            <Text style={styles.carbonyteWouldLike}>
              <Text style={styles.architect1}>20 July 1987{"\n"}</Text>
            </Text>
          </Text>
          <Text style={[styles.hello16, styles.helloPosition]}>
            <Text style={styles.carbonyteWouldLike}>
              <Text style={styles.occupation1}>Country of residence{"\n"}</Text>
            </Text>
            <Text style={styles.carbonyteWouldLike}>
              <Text style={styles.architect1}>United Kingdom{"\n"}</Text>
            </Text>
          </Text>
          <Text style={[styles.hello17, styles.helloPosition]}>
            <Text style={styles.carbonyteWouldLike}>
              <Text style={styles.occupation1}>Nationality{"\n"}</Text>
            </Text>
            <Text style={styles.carbonyteWouldLike}>
              <Text style={styles.architect1}>British{"\n"}</Text>
            </Text>
          </Text>
        </View>
        <View style={[styles.groupContainer, styles.groupPosition]}>
          <View style={styles.rectangleParent}>
            <View style={styles.groupInner} />
            <View style={styles.maskGroup236} />
          </View>
          <Text style={[styles.hello18, styles.helloFlexBox]}>Confirm{"\n"}</Text>
        </View>
        <Pressable
          style={[styles.rectangleGroup, styles.groupPosition]}
          onPress={() => navigation.navigate("DirectorsOrPartners2")}
        >
          <View style={styles.groupInner} />
          <Image
            style={styles.iconIonicIosAdd}
            resizeMode="cover"
            source={require("../assets/icon-blackadd.png")}
          />
        </Pressable>
      </View>
    </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  helloFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  helloColor: {
    color: GlobalStyles.Color.indigo_100,
    left: 0,
  },
  helloPosition: {
    left: 25,
    fontSize: GlobalStyles.FontSize.size_base,
    top: "50%",
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  removeTypo: {
    fontSize: GlobalStyles.FontSize.size_xl,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
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
  groupPosition: {
    height: 60,
    bottom: 0,
    position: "absolute",
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    top: 0,
  },
  carbonyteWouldLike: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello1: {
    marginTop: 4.74,
    left: 1,
    color: GlobalStyles.Color.gray_700,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    lineHeight: 20,
    fontSize: GlobalStyles.FontSize.size_base,
    top: "50%",
    textAlign: "left",
    position: "absolute",
    width:"100%"
  },
  helloParent: {
    right: 43,
    left: 2,
    height: 77,
    top: 0,
    position: "absolute",
  },
  occupation1: {
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
  },
  architect1: {
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  hello2: {
    marginTop: -63,
    lineHeight: 20,
  },
  director1: {
    fontWeight: "700",
    top: 0,
  },
  remove: {
    right: -1,
    color: GlobalStyles.Color.blue_100,
    fontWeight: "700",
    top: 0,
  },
  personsWithSignificantContr: {
    top: 23,
  },
  groupChild: {
    top: 55,
  },
  hello3: {
    marginTop: -248.5,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
  },
  hello4: {
    marginTop: -205.5,
    lineHeight: 20,
  },
  hello5: {
    marginTop: -37.5,
    lineHeight: 20,
  },
  hello6: {
    marginTop: -101.5,
    lineHeight: 20,
  },
  hello7: {
    marginTop: 154.5,
    lineHeight: 20,
  },
  hello8: {
    marginTop: 227.5,
    lineHeight: 20,
  },
  hello9: {
    marginTop: 26.5,
    lineHeight: 20,
  },
  hello10: {
    marginTop: 90.5,
    lineHeight: 20,
  },
  director1Parent: {
    top: 112,
    height: 649,
    right: 0,
    left: 0,
    position: "absolute",
  },
  groupItem: {
    top: 31,
  },
  hello11: {
    marginTop: -203.5,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
    fontWeight: "700",
  },
  hello12: {
    marginTop: -160.5,
    lineHeight: 20,
  },
  hello13: {
    marginTop: 7.5,
    lineHeight: 20,
  },
  hello14: {
    marginTop: -56.5,
    lineHeight: 20,
  },
  hello15: {
    marginTop: 199.5,
    lineHeight: 20,
  },
  hello16: {
    marginTop: 71.5,
    lineHeight: 20,
  },
  hello17: {
    marginTop: 135.5,
    lineHeight: 20,
  },
  director2Parent: {
    bottom: 121,
    height: 511,
    right: 0,
    left: 0,
    position: "absolute",
  },
  groupInner: {
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
  maskGroup236: {
    bottom: 13,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  hello18: {
    top: "40%",
    left: "50%",
    marginLeft: -40,
    fontSize: GlobalStyles.FontSize.size_lg,
    lineHeight: 20,
    textTransform: "uppercase",
    color: GlobalStyles.Color.white,
    // fontFamily: GlobalStyles.FontFamily.helvetica,
  },
  groupContainer: {
    width: "70%",
    left: 0,
  },
  iconIonicIosAdd: {
    marginTop: -9.04,
    marginLeft: -9.04,
    left: "50%",
    width: 18,
    height: 18,
    top: "50%",
    position: "absolute",
  },
  rectangleGroup: {
    width: 60,
    right: 0,
  },
  groupParent: {
    width: "100%",
    height: 1436,
  },
  confirmDirectors: {
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_7xs,
    paddingRight: GlobalStyles.Padding.padding_8xs,
    paddingBottom: GlobalStyles.Padding.padding_8xs,
    width: "100%",
    backgroundColor: GlobalStyles.Color.gray_100,
  },
});

export default ConfirmDirectors;
