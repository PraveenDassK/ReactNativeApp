import * as React from "react";
import { Text, StyleSheet, View, Image, ScrollView } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import GlobalStyles from "../../GlobalStyles";
import { horizontalScale, verticalScale, moderateScale } from "../config/scaling"


const Analytics = ({navigation}) => {
  return (
    <ScrollView>
    <View style={styles.analytics}>
      <View style={styles.groupParent}>
        <View style={[styles.groupContainer, styles.groupShadowBox]}>
          <View style={[styles.helloParent, styles.helloPosition]}>
            <Text style={[styles.hello, styles.helloTypo3]}>Total Spend</Text>
            <Text style={[styles.hello1, styles.helloColor, styles.helloTypo2]}>
              £ 1200.00
            </Text>
          </View>
          <Text style={[styles.hello2, styles.helloPosition]}>
            <Text style={styles.noOf}>No. of{" "}</Text>
            <Text style={styles.noOf}>Payments</Text>
          </Text>
          <Text style={[styles.hello3, styles.helloTypo2]}>1000</Text>
          <Image
            style={[styles.groupChild, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-6058.png")}
          />
        </View>
        <View
          style={[
            styles.groupView,
            styles.groupParentPosition2,
            styles.groupShadowBox,
          ]}
        >
          <View style={[styles.helloGroup, styles.helloGroupPosition]}>
            <Text style={[styles.hello4, styles.helloTypo1, styles.helloTypo3]}>
              <Text style={styles.noOf}>Average Monthly{" "}</Text>
              <Text style={styles.noOf}>Spendings</Text>
            </Text>
            <Text style={[styles.hello5, styles.helloColor, styles.helloTypo2]}>
              £ 500.00
            </Text>
          </View>
          <Image
            style={[styles.groupChild, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-6058.png")}
          />
        </View>
        <View style={[styles.groupParent1, styles.groupParentPosition1]}>
          <View style={[styles.helloContainer, styles.helloGroupPosition]}>
            <Text style={[styles.hello6, styles.helloTypo3]}>Balance</Text>
            <Text style={[styles.hello7, styles.helloColor]}>£ 500.00</Text>
          </View>
          <Image
            style={[styles.groupChild, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-60582.png")}
          />
        </View>
        <Text style={[styles.hello8, styles.hello8Typo]}>Analytics</Text>
        <View style={[styles.groupParent2, styles.groupParentPosition2]}>
          <View
            style={[styles.rectangleParent, styles.rectangleParentPosition]}
          >
            <View style={[styles.rectangle, styles.rectangleShadowBox]} />
            <View style={[styles.rectangle1, styles.rectanglePosition]} />
            <View
              style={[
                styles.lanceBogrolWrapper,
                styles.lanceWrapperLayout,
                styles.lanceWrapperPosition,
              ]}
            >
              <Text
                style={[
                  styles.lanceBogrol,
                  styles.historyFlexBox,
                  styles.lancePosition,
                ]}
              >
                Shopping
              </Text>
            </View>
            <Text style={[styles.text, styles.textTypo3, styles.textPosition]}>
              £1458
            </Text>
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require("../assets/bagshoppingsolid.png")}
            />
            <Text style={[styles.text1, styles.textTypo2]}>
              <Text style={styles.kgCo}>7.2 kg CO</Text>
              <Text style={styles.text2}>2</Text>
            </Text>
          </View>
          <View style={[styles.groupPosition, styles.rectangleParentPosition]}>
            <View style={[styles.rectangle, styles.rectangleShadowBox]} />
            <View style={[styles.rectangle3, styles.rectanglePosition]} />
            <View
              style={[
                styles.lanceBogrolContainer,
                styles.lanceWrapperLayout,
                styles.lanceWrapperPosition,
              ]}
            >
              <Text
                style={[
                  styles.lanceBogrol,
                  styles.historyFlexBox,
                  styles.lancePosition,
                ]}
              >{`Food & Beverages`}</Text>
            </View>
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require("../assets/group-1804.png")}
            />
            <Text style={[styles.text3, styles.textTypo3, styles.textPosition]}>
              £1458
            </Text>
            <Text style={[styles.text4, styles.textTypo2]}>
              <Text style={styles.kgCo}>7.2 kg CO</Text>
              <Text style={styles.text2}>2</Text>
            </Text>
          </View>
          <View
            style={[styles.rectangleContainer, styles.rectangleParentPosition]}
          >
            <View style={[styles.rectangle, styles.rectangleShadowBox]} />
            <View style={[styles.rectangle5, styles.rectanglePosition]} />
            <View
              style={[
                styles.lanceBogrolFrame,
                styles.lanceWrapperLayout,
                styles.lanceWrapperPosition,
              ]}
            >
              <Text
                style={[
                  styles.lanceBogrol,
                  styles.historyFlexBox,
                  styles.lancePosition,
                ]}
              >
                Transport
              </Text>
            </View>
            <Image
              style={styles.iconAwesomeCar}
              resizeMode="cover"
              source={require("../assets/icon-awesomecar1.png")}
            />
            <Text style={[styles.text3, styles.textTypo3, styles.textPosition]}>
              £1458
            </Text>
            <Text style={[styles.text4, styles.textTypo2]}>
              <Text style={styles.kgCo}>7.2 kg CO</Text>
              <Text style={styles.text2}>2</Text>
            </Text>
          </View>
          <View
            style={[styles.rectangleParent1, styles.rectangleParentPosition]}
          >
            <View style={[styles.rectangle, styles.rectangleShadowBox]} />
            <View style={[styles.rectangle7, styles.rectanglePosition]} />
            <View
              style={[
                styles.lanceBogrolWrapper1,
                styles.lanceWrapperLayout,
                styles.lanceWrapperPosition,
              ]}
            >
              <Text
                style={[
                  styles.lanceBogrol,
                  styles.historyFlexBox,
                  styles.lancePosition,
                ]}
              >
                Health
              </Text>
            </View>
            <Image
              style={[styles.groupChild1, styles.helloGroupPosition]}
              resizeMode="cover"
              source={require("../assets/group-30299.png")}
            />
            <Text style={[styles.text3, styles.textTypo3, styles.textPosition]}>
              £1458
            </Text>
            <Text style={[styles.text4, styles.textTypo2]}>
              <Text style={styles.kgCo}>7.2 kg CO</Text>
              <Text style={styles.text2}>2</Text>
            </Text>
          </View>
          <View style={[styles.lanceBogrolParent, styles.lanceParentLayout]}>
            <Text style={[styles.lanceBogrol4, styles.lanceTypo]}>
              Spendings
            </Text>
            <Image
              style={[styles.iconFeatherPieChart, styles.iconPosition1]}
              resizeMode="cover"
              source={require("../assets/icon-featherpiechart.png")}
            />
          </View>
        </View>
        <View style={styles.groupWrapper}>
          <View style={styles.path23773Parent}>
            <Image
              style={[styles.path23773Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/path-23773.png")}
            />
            <Image
              style={[styles.path23772Icon, styles.path23772IconPosition]}
              resizeMode="cover"
              source={require("../assets/path-23772.png")}
            />
            <Image
              style={[styles.path33379Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/image-linebreak.png")}
            />
            <Image
              style={[styles.path33375Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/image-linebreak.png")}
            />
            <Image
              style={[styles.path33377Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/image-linebreak.png")}
            />
            <Image
              style={[styles.path33373Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/image-linebreak.png")}
            />
            <Image
              style={[styles.path33378Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/image-linebreak.png")}
            />
            <Image
              style={[styles.path33374Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/image-linebreak.png")}
            />
            <Image
              style={[styles.path33376Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/image-linebreak.png")}
            />
            <Image
              style={styles.path33371Icon}
              resizeMode="cover"
              source={require("../assets/path-33371.png")}
            />
            <ScrollView
              style={[styles.scrollGroup16, styles.path23772IconPosition]}
              contentContainerStyle={styles.scrollGroup16Content}
            >
              <Text style={styles.hello9}>Mar</Text>
              <Text style={[styles.hello9, styles.mt_12, styles.ml129]}>
                Jun
              </Text>
              <Text style={[styles.hello9, styles.mt_12, styles.ml43]}>
                Apr
              </Text>
              <Text
                style={[
                  styles.hello12,
                  styles.mt_12,
                  styles.ml172,
                  styles.helloColor,
                ]}
              >
                Jul
              </Text>
              <Text style={[styles.hello9, styles.mt_12, styles.ml84]}>
                May
              </Text>
              <Text style={[styles.hello9, styles.mt_12, styles.ml213]}>
                Aug
              </Text>
              <Text style={[styles.hello9, styles.mt_12, styles.ml256]}>
                Sept
              </Text>
              <Text style={[styles.hello9, styles.mt_12, styles.ml303]}>
                Oct
              </Text>
              <Text style={[styles.hello9, styles.mt_12, styles.ml344]}>
                Nov
              </Text>
              <Text style={[styles.hello9, styles.mt_12, styles.ml391]}>
                Dec
              </Text>
              <Text style={[styles.hello9, styles.mt_12, styles.ml434]}>
                Jan
              </Text>
              <Text style={[styles.hello9, styles.mt_12, styles.ml479]}>
                Feb
              </Text>
            </ScrollView>
            <View style={styles.lineView} />
            <Image
              style={styles.ellipseIcon}
              resizeMode="cover"
              source={require("../assets/ellipse-3200.png")}
            />
            <Image
              style={[styles.groupChild2, styles.groupChild2Layout]}
              resizeMode="cover"
              source={require("../assets/ellipse-3199.png")}
            />
            <View style={styles.union23Parent}>
              <Image
                style={[styles.union23Icon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon-speechbubble.png")}
              />
              <Text style={styles.hello21}>£ 20.00</Text>
            </View>
          </View>
        </View>
        <View style={[styles.groupParent3, styles.groupParentPosition1]}>
          <View style={[styles.groupParent4, styles.groupParentShadowBox]}>
            <View style={[styles.lanceLayout, styles.groupPosition]}>
              <Text
                style={[
                  styles.lanceBogrol5,
                  styles.historyFlexBox,
                  styles.lancePosition,
                ]}
              >
                Wallmart
              </Text>
              <Text style={[styles.moneyTransfer, styles.moneyTypo]}>
                <Text style={styles.noOf}>September 22, 2022{"\n"}</Text>
                <Text style={styles.noOf}>12:06 PM</Text>
              </Text>
            </View>
            <Image
              style={[styles.walmartIconLayout, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/walmarticon.png")}
            />
            <Text style={[styles.text12, styles.textTypo1]}>£1458</Text>
            <Text style={[styles.text13, styles.textTypo]}>
              <Text style={styles.kgCo4}>7.2 kg CO</Text>
              <Text style={styles.text14}>2</Text>
            </Text>
          </View>
          <View style={[styles.groupParent5, styles.groupParentShadowBox]}>
            <View style={[styles.lanceLayout, styles.groupPosition]}>
              <Text
                style={[
                  styles.lanceBogrol5,
                  styles.historyFlexBox,
                  styles.lancePosition,
                ]}
              >
                Adidas
              </Text>
              <Text style={[styles.moneyTransfer, styles.moneyTypo]}>
                <Text style={styles.noOf}>September 22, 2022{"\n"}</Text>
                <Text style={styles.noOf}>12:06 PM</Text>
              </Text>
            </View>
            <Image
              style={[styles.walmartIconLayout, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/logo-addidas.png")}
            />
          </View>
          <View
            style={[
              styles.groupParent6,
              styles.parentLayout,
              styles.rectangleShadowBox,
            ]}
          >
            <View style={[styles.maskGroup14Position, styles.lanceLayout]}>
              <Text
                style={[
                  styles.lanceBogrol5,
                  styles.historyFlexBox,
                  styles.lancePosition,
                ]}
              >
                Grocery Market
              </Text>
              <Text style={[styles.moneyTransfer, styles.moneyTypo]}>
                <Text style={styles.noOf}>September 22, 2022{"\n"}</Text>
                <Text style={styles.noOf}>12:06 PM</Text>
              </Text>
            </View>
            <Image
              style={[styles.maskGroup14Position, styles.walmartIconLayout]}
              resizeMode="cover"
              source={require("../assets/logo-addidas.png")}
            />
            <Image
              style={[styles.groupChild3, styles.groupChildPosition]}
              resizeMode="cover"
              source={require("../assets/group-30454.png")}
            />
            <Text style={[styles.text15, styles.textTypo1]}>£1458</Text>
            <Text style={[styles.text16, styles.textTypo]}>
              <Text style={styles.kgCo4}>7.2 kg CO</Text>
              <Text style={styles.text14}>2</Text>
            </Text>
          </View>
          <Text
            style={[styles.history, styles.historyFlexBox, styles.hello8Typo]}
          >
            Recent Transactions
          </Text>
          <Image
            style={[styles.transationsIcon, styles.lanceParentLayout]}
            resizeMode="cover"
            source={require("../assets/icon-withdraw.png")}
          />
          <Text style={[styles.text18, styles.textTypo1]}>£1458</Text>
          <Text style={[styles.text19, styles.textTypo]}>
            <Text style={styles.kgCo4}>7.2 kg CO</Text>
            <Text style={styles.text14}>2</Text>
          </Text>
        </View>
        <View style={[styles.groupParent7, styles.groupParentPosition2]}>
          <View style={[styles.groupParent8, styles.groupParentShadowBox]}>
            <View
              style={[
                styles.lanceBogrolParent3,
                styles.groupParentPosition,
                styles.groupFrameSpaceBlock,
              ]}
            >
              <Text
                style={[
                  styles.lanceBogrol8,
                  styles.historyFlexBox,
                  styles.lancePosition,
                ]}
              >
                House Rent
              </Text>
              <Text style={[styles.moneyTransfer3, styles.moneyTypo]}>
                Due Tomorrow
              </Text>
            </View>
            <Text style={[styles.text21, styles.textTypo3]}>£350.00</Text>
            <Image
              style={[styles.walmartIconLayout, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/walmarticon1.png")}
            />
          </View>
          <View style={[styles.groupParent9, styles.groupParentShadowBox]}>
            <View
              style={[
                styles.groupFrame,
                styles.groupParentPosition,
                styles.groupFrameSpaceBlock,
              ]}
            >
              <View style={styles.path23773Parent}>
                <Text
                  style={[
                    styles.lanceBogrol8,
                    styles.historyFlexBox,
                    styles.lancePosition,
                  ]}
                >
                  Amazon Prime
                </Text>
                <Text style={[styles.moneyTransfer3, styles.moneyTypo]}>
                  in 5 Days
                </Text>
              </View>
            </View>
            <Text style={[styles.text22, styles.textTypo3]}>£50.00</Text>
            <Image
              style={[styles.walmartIconLayout, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/logo-addidas.png")}
            />
          </View>
          <View style={[styles.groupParent10, styles.groupParentShadowBox]}>
            <View style={[styles.groupParent11, styles.groupParentPosition]}>
              <View
                style={[styles.lanceBogrolWrapper2, styles.lanceWrapperLayout]}
              >
                <Text
                  style={[
                    styles.lanceBogrol10,
                    styles.historyFlexBox,
                    styles.lancePosition,
                  ]}
                >
                  Netflix
                </Text>
              </View>
              <View
                style={[styles.moneyTransferWrapper, styles.groupChild2Layout]}
              >
                <Text style={[styles.moneyTransfer5, styles.moneyTypo]}>
                  in a week
                </Text>
              </View>
            </View>
            <Text style={[styles.text22, styles.textTypo3]}>£70.00</Text>
            <Image
              style={[styles.walmartIconLayout, styles.groupPosition]}
              resizeMode="cover"
              source={require("../assets/logo-addidas.png")}
            />
          </View>
          <View style={[styles.lanceBogrolParent5, styles.lanceParentLayout]}>
            <Text style={[styles.lanceBogrol11, styles.lanceTypo]}>
              Upcoming Spendings
            </Text>
            <Image
              style={[styles.iconFeatherPieChart1, styles.iconPosition1]}
              resizeMode="cover"
              source={require("../assets/icon-featherpiechart.png")}
            />
          </View>
          <Image
            style={[styles.groupChild4, styles.groupChildPosition]}
            resizeMode="cover"
            source={require("../assets/group-30454.png")}
          />
        </View>
        <View style={styles.historyParent}>
        <Pressable
          onPress={() => navigation.navigate("AccountMain")}
        >
          <Text style={[styles.history1, styles.historyTypo]}>Account</Text>
        </Pressable>
          <Text style={[styles.history2, styles.historyFlexBox]}>Analysis</Text>
        <Pressable
          onPress={() => navigation.navigate("Carbon")}
        >
          <Text style={[styles.history3, styles.historyTypo]}>Carbon</Text>
        </Pressable>
          <Pressable
          onPress={() => navigation.navigate("Settings")}
        >
          <Text style={[styles.history4, styles.historyTypo]}>Profile</Text>
        </Pressable>
          </View>
        <View style={[styles.helloParent1, styles.parentLayout]}>
          <Text style={[styles.hello22, styles.helloTypo1]}>Day</Text>
          <Text style={[styles.hello23, styles.helloTypo]}>Week</Text>
          <Text style={[styles.hello24, styles.helloTypo1, styles.helloColor]}>
            Month
          </Text>
          <Text style={[styles.hello25, styles.helloTypo]}>Year</Text>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mt_12: {
    marginTop: GlobalStyles.Margin.margin_11xs,
  },
  ml129: {
    marginLeft: GlobalStyles.Margin.margin_4xl,
  },
  ml43: {
    marginLeft: GlobalStyles.Margin.margin_xl,
  },
  ml172: {
    marginLeft: GlobalStyles.Margin.margin_5xl,
  },
  ml84: {
    marginLeft: GlobalStyles.Margin.margin_3xl,
  },
  ml213: {
    marginLeft: GlobalStyles.Margin.margin_6xl,
  },
  ml256: {
    marginLeft: GlobalStyles.Margin.margin_7xl,
  },
  ml303: {
    marginLeft: GlobalStyles.Margin.margin_10xl,
  },
  ml344: {
    marginLeft: GlobalStyles.Margin.margin_11xl,
  },
  ml391: {
    marginLeft: GlobalStyles.Margin.margin_12xl,
  },
  ml434: {
    marginLeft: GlobalStyles.Margin.margin_13xl,
  },
  ml479: {
    marginLeft: GlobalStyles.Margin.margin_14xl,
  },
  scrollGroup16Content: {
    flexDirection: "column",
    paddingTop: 2,
  },
  groupShadowBox: {
    height: 88,
    width: "50%",
    top: 177,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(1, 1, 253, 0.05)",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.white,
  },
  helloPosition: {
    left: 11,
    position: "absolute",
  },
  helloTypo3: {
    fontSize: GlobalStyles.FontSize.size_base,
    color: GlobalStyles.Color.indigo_100,
    left: 0,
  },
  helloColor: {
    color: GlobalStyles.Color.blue_100,
    fontWeight: "700",
  },
  helloTypo2: {
    lineHeight: 24,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: 0,
    position: "absolute",
  },
  groupParentPosition2: {
    right: 30,
    position: "absolute",
  },
  helloGroupPosition: {
    left: 15,
    position: "absolute",
  },
  helloTypo1: {
    lineHeight: 16,
    textAlign: "left",
    position: "absolute",
  },
  groupParentPosition1: {
    right: 29,
    position: "absolute",
  },
  hello8Typo: {
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
  },
  rectangleParentPosition: {
    height: 33,
    right: 0,
    left: 0,
  },
  rectangleShadowBox: {
    elevation: 20,
    shadowRadius: 20,
    right: 0,
    bottom: 0,
    left: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(1, 1, 253, 0.05)",
  },
  rectanglePosition: {
    borderBottomLeftRadius: GlobalStyles.Border.br_3xl,
    borderTopLeftRadius: GlobalStyles.Border.br_3xl,
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  lanceWrapperLayout: {
    height: 12,
    position: "absolute",
  },
  lanceWrapperPosition: {
    left: "10%",
    marginTop: -5.5,
    height: 12,
    top: "50%",
  },
  historyFlexBox: {
    letterSpacing: 1,
    textAlign: "left",
    position: "absolute",
  },
  lancePosition: {
    left: "0%",
    letterSpacing: 1,
    top: "50%",
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.indigo_100,
  },
  textTypo3: {
    textAlign: "right",
    letterSpacing: 1,
    top: "50%",
    fontWeight: "700",
    fontSize: GlobalStyles.FontSize.size_base,
    position: "absolute",
  },
  textPosition: {
    right: "4%",
    textAlign: "right",
    color: GlobalStyles.Color.blue_100,
  },
  textTypo2: {
    letterSpacing: 0,
    right: "5%",
    textAlign: "right",
    color: GlobalStyles.Color.gray_700,
    fontWeight: "700",
    position: "absolute",
  },
  lanceParentLayout: {
    height: 20,
    position: "absolute",
  },
  lanceTypo: {
    marginTop: -8.5,
    letterSpacing: 1,
    top: "50%",
    fontWeight: "700",
    fontSize: GlobalStyles.FontSize.size_2xl,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  iconPosition1: {
    bottom: "-5.03%",
    top: "0%",
    height: "105.03%",
    left: "0%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  path23772IconPosition: {
    left: 21,
    position: "absolute",
  },
  iconPosition: {
    opacity: 0.03,
    height: 1,
    right: 9,
    left: 21,
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupChild2Layout: {
    height: 10,
    position: "absolute",
  },
  groupParentShadowBox: {
    height: 64,
    borderRadius: GlobalStyles.Border.br_4xl,
    elevation: 20,
    shadowRadius: 20,
    right: 0,
    left: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(1, 1, 253, 0.05)",
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  groupPosition: {
    marginTop: -16,
    top: "50%",
    position: "absolute",
  },
  moneyTypo: {
    color: GlobalStyles.Color.gray_900,
    fontSize: GlobalStyles.FontSize.size_3xs,
    letterSpacing: 1,
    left: "0%",
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  textTypo1: {
    fontSize: GlobalStyles.FontSize.size_5xl,
    right: "6%",
    textAlign: "right",
    letterSpacing: 1,
    top: "50%",
    color: GlobalStyles.Color.blue_100,
    fontWeight: "700",
    position: "absolute",
  },
  textTypo: {
    right: "6%",
    textAlign: "right",
    letterSpacing: 1,
    color: GlobalStyles.Color.gray_700,
    fontWeight: "700",
    position: "absolute",
  },
  parentLayout: {
    borderRadius: GlobalStyles.Border.br_4xl,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  lanceLayout: {
    height: 36,
    width: "100%",
    marginLeft: -97.08,
    left: "50%",
  },
  walmartIconLayout: {
    width: 34,
    height: 34,
    left: 14,
  },
  groupChildPosition: {
    height: 17,
    width: 18,
    left: "50%",
    bottom: -40,
    position: "absolute",
  },
  groupParentPosition: {
    height: 24,
    marginTop: -10,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupFrameSpaceBlock: {
    marginLeft: -97,
    height: 24,
    marginTop: -10,
  },
  historyTypo: {
    opacity: 0.3,
    letterSpacing: 1,
    fontSize: GlobalStyles.FontSize.size_xl,
    color: GlobalStyles.Color.gray_700,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  helloTypo: {
    color: GlobalStyles.Color.gray_800,
    lineHeight: 16,
    fontSize: GlobalStyles.FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  hello: {
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    top: 0,
    position: "absolute",
  },
  hello1: {
    fontSize: GlobalStyles.FontSize.size_2xl,
    width: 100,
    bottom: -10,
    left: 0,
  },
  helloParent: {
    width: 80,
    height: 35,
    top: 12,
  },
  noOf: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello2: {
    bottom: 6,
    lineHeight: 12,
    color: GlobalStyles.Color.gray_700,
    fontSize: GlobalStyles.FontSize.size_xs,
    textAlign: "left",
  },
  hello3: {
    right: 14,
    bottom: 5,
    fontSize: GlobalStyles.FontSize.size_xl,
    color: GlobalStyles.Color.gray_700,
  },
  groupChild: {
    opacity: 0.2,
    right: 0,
    bottom: 0,
    top: 0,
  },
  groupContainer: {
    left: 37,
    width: 142,
    top: 177,
    position: "absolute",
  },
  hello4: {
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    top: 0,
  },
  hello5: {
    left: 6,
    fontSize: GlobalStyles.FontSize.size_xl,
    bottom: 0,
  },
  helloGroup: {
    right: 15,
    height: 61,
    bottom: 13,
    left: 15,
  },
  groupView: {
    width: 142,
    top: 177,
    right: 30,
  },
  hello6: {
    marginTop: -8,
    top: "50%",
    fontWeight: "700",
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  hello7: {
    fontSize: 28,
    lineHeight: 30,
    right: -1,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  helloContainer: {
    marginTop: -13.5,
    right: 19,
    height: 28,
    top: "50%",
  },
  groupParent1: {
    top: 90,
    height: 65,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(1, 1, 253, 0.05)",
    borderRadius: GlobalStyles.Border.br_lg,
    right: 29,
    left: 37,
    backgroundColor: GlobalStyles.Color.white,
  },
  hello8: {
    top: 51,
    fontSize: GlobalStyles.FontSize.size_8xl,
    left: 27,
    textAlign: "left",
    position: "absolute",
  },
  rectangle: {
    borderRadius: GlobalStyles.Border.br_3xl,
    top: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  rectangle1: {
    right: 255,
    backgroundColor: GlobalStyles.Color.violet_200,
  },
  lanceBogrol: {
    marginTop: -6,
  },
  lanceBogrolWrapper: {
    width: "100%",
  },
  text: {
    marginTop: -11.25,
  },
  bagShoppingSolidIcon: {
    marginTop: -8.01,
    marginLeft: -345.26,
    width: 13,
    height: 15,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  kgCo: {
    fontSize: GlobalStyles.FontSize.size_4xs,
  },
  text2: {
    fontSize: GlobalStyles.FontSize.size_9xs,
    verticalAlign: "sub",
  },
  text1: {
    bottom: 2,
  },
  rectangleParent: {
    marginTop: -58,
    top: "50%",
    position: "absolute",
  },
  rectangle3: {
    right: 124,
    backgroundColor: GlobalStyles.Color.orange_100,
  },
  lanceBogrolContainer: {
    width: "100%",
  },
  groupIcon: {
    top: 10,
    left: 13,
    width: 13,
    height: 13,
    position: "absolute",
  },
  text3: {
    marginTop: -12.25,
  },
  text4: {
    bottom: 3,
  },
  rectangle5: {
    right: 155,
    backgroundColor: GlobalStyles.Color.green_100,
  },
  lanceBogrolFrame: {
    width: "100%",
  },
  iconAwesomeCar: {
    right: 290,
    bottom: 10,
    left: 14,
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    top: 12,
    position: "absolute",
  },
  rectangleContainer: {
    marginTop: 26,
    top: "50%",
    position: "absolute",
  },
  rectangle7: {
    right: 196,
    backgroundColor: GlobalStyles.Color.orange_200,
  },
  lanceBogrolWrapper1: {
    width: "100%",
  },
  groupChild1: {
    marginTop: -3.53,
    width: 12,
    height: 11,
    top: "50%",
  },
  rectangleParent1: {
    bottom: 0,
    position: "absolute",
  },
  lanceBogrol4: {
    left: "21.54%",
  },
  iconFeatherPieChart: {
    width: "16.16%",
    right: "83.84%",
  },
  lanceBogrolParent: {
    width: 130,
    left: 0,
    top: 0,
  },
  groupParent2: {
    marginTop: -421.24,
    height: 202,
    left: 27,
    top: "50%",
  },
  path23773Icon: {
    top: 16,
    bottom: 20,
    right: 0,
  },
  path23772Icon: {
    top: 8,
    height: 130,
    opacity: 0.4,
    right: 7,
    overflow: "hidden",
    maxWidth: "100%",
    left: 21,
  },
  path33379Icon: {
    marginTop: -12.33,
    top: "50%",
  },
  path33375Icon: {
    marginTop: -55.92,
    top: "50%",
  },
  path33377Icon: {
    marginTop: 31.25,
    top: "50%",
  },
  path33373Icon: {
    top: 15,
  },
  path33378Icon: {
    marginTop: 8.5,
    top: "50%",
  },
  path33374Icon: {
    marginTop: -35.08,
    top: "50%",
  },
  path33376Icon: {
    marginTop: 52.08,
    top: "50%",
  },
  path33371Icon: {
    bottom: 24,
    opacity: 0.27,
    height: 1,
    right: 9,
    left: 21,
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  hello9: {
    color: GlobalStyles.Color.gray_700,
    fontSize: GlobalStyles.FontSize.size_xs,
    textAlign: "left",
  },
  hello12: {
    fontSize: GlobalStyles.FontSize.size_xs,
    textAlign: "left",
  },
  scrollGroup16: {
    right: 21,
    height: 50,
    bottom: 10,
  },
  lineView: {
    marginTop: -50,
    marginLeft: 42.94,
    borderStyle: "dashed",
    borderColor: "#707070",
    borderRadius: 0.001,
    borderRightWidth: 1,
    width: 2,
    height: 115,
    opacity: 0.51,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  ellipseIcon: {
    marginTop: -51,
    marginLeft: 32.94,
    width: 22,
    height: 22,
    opacity: 0.45,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupChild2: {
    marginTop: -45,
    marginLeft: 38.94,
    width: 10,
    left: "50%",
    top: "50%",
  },
  union23Icon: {
    right: -18,
    bottom: -18,
    top: 0,
  },
  hello21: {
    fontSize: GlobalStyles.FontSize.size_3xs,
    left: 15,
    bottom: 13,
    color: GlobalStyles.Color.blue_100,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  union23Parent: {
    marginLeft: 12.94,
    width: 63,
    height: 34,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  path23773Parent: {
    right: 0,
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupWrapper: {
    marginTop: -117.24,
    height: 188,
    top: "50%",
    right: 0,
    left: 0,
    position: "absolute",
  },
  lanceBogrol5: {
    marginTop: -18,
    fontWeight: "700",
  },
  moneyTransfer: {
    marginTop: -4,
  },
  text12: {
    marginTop: -15,
  },
  kgCo4: {
    fontSize: GlobalStyles.FontSize.size_xs,
  },
  text14: {
    fontSize: GlobalStyles.FontSize.size_6xs,
    verticalAlign: "sub",
  },
  text13: {
    bottom: 8,
  },
  groupParent4: {
    top: 39,
  },
  groupParent5: {
    marginTop: -23.99,
    top: "50%",
  },
  maskGroup14Position: {
    marginTop: -27.49,
    top: "50%",
    position: "absolute",
  },
  groupChild3: {
    marginLeft: -8.2,
  },
  text15: {
    marginTop: -28.49,
  },
  text16: {
    marginTop: -4.02,
    top: "50%",
  },
  groupParent6: {
    height: 87,
  },
  history: {
    marginTop: -138.99,
    left: "11.29%",
    top: "50%",
    fontSize: GlobalStyles.FontSize.size_2xl,
  },
  transationsIcon: {
    top: 1,
    left: 5,
    width: 19,
  },
  text18: {
    marginTop: -9.99,
  },
  text19: {
    marginTop: 14.48,
    top: "50%",
  },
  groupParent3: {
    marginTop: 108.26,
    height: 278,
    left: 27,
    top: "50%",
  },
  lanceBogrol8: {
    marginTop: -12,
    fontWeight: "700",
  },
  moneyTransfer3: {
    marginTop: 2,
  },
  lanceBogrolParent3: {
    width: "100%",
  },
  text21: {
    right: "6%",
    marginTop: -6,
    color: GlobalStyles.Color.indigo_100,
  },
  groupParent8: {
    marginTop: -99.24,
    top: "50%",
  },
  groupFrame: {
    width: "100%",
  },
  text22: {
    right: "6%",
    marginTop: -6,
    color: GlobalStyles.Color.indigo_100,
  },
  groupParent9: {
    marginTop: -23.24,
    top: "50%",
  },
  lanceBogrol10: {
    marginTop: -6,
    fontWeight: "700",
  },
  lanceBogrolWrapper2: {
    right: 7,
    left: 0,
    top: 0,
  },
  moneyTransfer5: {
    marginTop: -5,
  },
  moneyTransferWrapper: {
    right: 0,
    bottom: 0,
    left: 0,
  },
  groupParent11: {
    marginLeft: -98,
    width: "100%",
    height: 24,
    marginTop: -10,
  },
  groupParent10: {
    bottom: 25,
  },
  lanceBogrol11: {
    left: "11.91%",
  },
  iconFeatherPieChart1: {
    width: "8.94%",
    right: "91.06%",
  },
  lanceBogrolParent5: {
    width: 235,
    left: 0,
    top: 0,
  },
  groupChild4: {
    marginLeft: -8.19,
  },
  groupParent7: {
    height: 284,
    left: 27,
    bottom: 0,
  },
  history1: {
    left: 0,
    marginTop: -4,
  },
  history2: {
    marginLeft: -63.5,
    left: "50%",
    fontSize: GlobalStyles.FontSize.size_xl,
    color: GlobalStyles.Color.gray_700,
    fontWeight: "700",
    top: 0,
  },
  history3: {
    marginLeft: 21.5,
    left: "50%",
    marginTop: -8,
  },
  history4: {
    right: -1,
    marginTop: -10,
  },
  historyParent: {
    right: 47,
    left: 35,
    height: 16,
    top: -30,
    position: "absolute",
    justifyContent:"space-evenly"
  },
  hello22: {
    left: "10%",
    top: 11,
    fontSize: GlobalStyles.FontSize.size_xl,
    color: GlobalStyles.Color.gray_700,
  },
  hello23: {
    left: "30%",
    top: 11,
  },
  hello24: {
    left: "55%",
    top: 11,
    fontSize: GlobalStyles.FontSize.size_xl,
  },
  hello25: {
    left: "80%",
    top: 12,
  },
  helloParent1: {
    marginTop: -180.24,
    right: 27,
    left: 27,
    top: "50%",
    height: 35,
  },
  groupParent: {
    width: "100%",
    height: 1500,
  },
  analytics: {
    flex: 1,
    width: "100%",
    paddingTop: GlobalStyles.Padding.padding_2xs,
    paddingRight: GlobalStyles.Padding.padding_12xs,
    backgroundColor: GlobalStyles.Color.gray_100,
  },
});

export default Analytics;
