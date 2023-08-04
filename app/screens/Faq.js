import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  Switch,
  Button,
  ImageBackground,
  ScrollView,
} from "react-native";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from "accordion-collapse-react-native";
import { ListItem } from "@rneui/themed";
import GlobalStyles from "../../GlobalStyles";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

const Faq = ({ navigation }) => {
  const [expanded, setExpanded] = useState(false);
  const { darkMode } = useContext(AuthContext);
  return (
    <ImageBackground
      source={
        darkMode === "DARK"
          ? require("../assets/dashboardDark/carbonbottom.png")
          : require("../assets/backgrounds/spendingLimit.jpg")
      }
      resizeMode="contain"
      imageStyle={{
        bottom: "-65%", // Whatever offset you want from the bottom
      }}
      style={{
        width: "100%",
        flex: 1,
        backgroundColor:
          darkMode === "DARK"
            ? GlobalStyles.Color.darkTheme_bg
            : GlobalStyles.Color.lightTheme_bg,
      }}
    >
      <ScrollView>
        <View>
          <View style={styles.titleTextRow}>
            <Text
              style={
                darkMode === "DARK" ? styles.darktitleText : styles.titleText
              }
            >
              Frequently Asked Questions
            </Text>
          </View>

          <View style={styles.subTextRow}>
            <Text
              style={darkMode === "DARK" ? styles.darksubText : styles.subText}
            >
              Click on the questions to see the answers
            </Text>
          </View>

          <Collapse
            style={{
              width: "90%",
              backgroundColor:
                darkMode === "DARK" ? "rgba(255,255,255,0.2)" : "white",
              height: "auto",
              borderRadius: 15,
              marginLeft: "5%",
              minHeight: 35,
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5%",
              padding: "1.5%",
            }}
          >
            <CollapseHeader style={{ flexDirection: "row" }}>
              <View style={styles.collapseTextContainer}>
                <Text
                  style={{
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: 16,
                    color:
                      darkMode === "DARK"
                        ? GlobalStyles.Color.white
                        : GlobalStyles.Color.secondaryDarkTheme_bg,
                  }}
                >
                  Carbon Tracker & Calculator
                </Text>
              </View>
            </CollapseHeader>
            <CollapseBody
              style={{
                marginTop: "5%",
                marginBottom: "5%",
                textAlign: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat-Regular",

                  color:
                    darkMode === "DARK"
                      ? GlobalStyles.Color.white
                      : GlobalStyles.Color.secondaryDarkTheme_bg,
                }}
              >
                Calculate the emissions you produce through shopping, eating,
                travelling, and a variety of other activities.
              </Text>
            </CollapseBody>
          </Collapse>

          <Collapse
            style={{
              width: "90%",
              backgroundColor:
                darkMode === "DARK" ? "rgba(255,255,255,0.2)" : "white",

              height: "auto",
              borderRadius: 15,
              marginLeft: "5%",
              minHeight: 35,
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5%",
              padding: "1.5%",
            }}
          >
            <CollapseHeader style={{ flexDirection: "row" }}>
              <View style={styles.collapseTextContainer}>
                <Text
                  style={{
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: 16,
                    color:
                      darkMode === "DARK"
                        ? GlobalStyles.Color.white
                        : GlobalStyles.Color.secondaryDarkTheme_bg,
                  }}
                >
                  Add funds
                </Text>
              </View>
            </CollapseHeader>
            <CollapseBody
              style={{
                marginTop: "5%",
                marginBottom: "5%",
                textAlign: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat-Regular",

                  color:
                    darkMode === "DARK"
                      ? GlobalStyles.Color.white
                      : GlobalStyles.Color.secondaryDarkTheme_bg,
                }}
              >
                Add funds to your Carbonyte account. Now with Carbonyte, you can
                add funds to pay your bills or buy things with just one click
              </Text>
            </CollapseBody>
          </Collapse>

          <Collapse
            style={{
              width: "90%",
              backgroundColor:
                darkMode === "DARK" ? "rgba(255,255,255,0.2)" : "white",

              borderRadius: 15,
              marginLeft: "5%",
              minHeight: 35,
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5%",
              padding: "1.5%",
            }}
          >
            <CollapseHeader style={{ flexDirection: "row" }}>
              <View style={styles.collapseTextContainer}>
                <Text
                  style={{
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: 16,
                    color:
                      darkMode === "DARK"
                        ? GlobalStyles.Color.white
                        : GlobalStyles.Color.secondaryDarkTheme_bg,
                  }}
                >
                  Send Money  
                </Text>
              </View>
            </CollapseHeader>
            <CollapseBody
              style={{
                marginTop: "5%",
                marginBottom: "5%",
                textAlign: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat-Regular",

                  color:
                    darkMode === "DARK"
                      ? GlobalStyles.Color.white
                      : GlobalStyles.Color.secondaryDarkTheme_bg,
                }}
              >
                Sending money to your family and friends is now very easy. Start
                sending money through your Carbonyte app at any time, from
                anywhere.    
              </Text>
            </CollapseBody>
          </Collapse>

          <Collapse
            style={{
              width: "90%",
              backgroundColor:
                darkMode === "DARK" ? "rgba(255,255,255,0.2)" : "white",

              height: "auto",
              borderRadius: 15,
              marginLeft: "5%",
              minHeight: 35,
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5%",
              padding: "1.5%",
            }}
          >
            <CollapseHeader style={{ flexDirection: "row" }}>
              <View style={styles.collapseTextContainer}>
                <Text
                  style={{
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: 16,
                    color:
                      darkMode === "DARK"
                        ? GlobalStyles.Color.white
                        : GlobalStyles.Color.secondaryDarkTheme_bg,
                  }}
                >
                  Bank Transaction Statement
                </Text>
              </View>
            </CollapseHeader>
            <CollapseBody
              style={{
                marginTop: "5%",
                marginBottom: "5%",
                textAlign: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat-Regular",

                  color:
                    darkMode === "DARK"
                      ? GlobalStyles.Color.white
                      : GlobalStyles.Color.secondaryDarkTheme_bg,
                }}
              >
                Get a list of all transactions done from your Carbonyte account,
                monthly. Keep check on the detailed list of deposits and
                withdrawals.
              </Text>
            </CollapseBody>
          </Collapse>

          <Collapse
            style={{
              width: "90%",
              backgroundColor:
                darkMode === "DARK" ? "rgba(255,255,255,0.2)" : "white",

              height: "auto",
              borderRadius: 15,
              marginLeft: "5%",
              minHeight: 35,
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5%",
              padding: "1.5%",
            }}
          >
            <CollapseHeader style={{ flexDirection: "row" }}>
              <View style={styles.collapseTextContainer}>
                <Text
                  style={{
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: 16,
                    color:
                      darkMode === "DARK"
                        ? GlobalStyles.Color.white
                        : GlobalStyles.Color.secondaryDarkTheme_bg,
                  }}
                >
                  Freeze or Unfreeze Card Virtually  
                </Text>
              </View>
            </CollapseHeader>
            <CollapseBody
              style={{
                marginTop: "5%",
                marginBottom: "5%",
                textAlign: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat-Regular",

                  color:
                    darkMode === "DARK"
                      ? GlobalStyles.Color.white
                      : GlobalStyles.Color.secondaryDarkTheme_bg,
                }}
              >
                If you've lost your credit card or want to take a break from
                spending, freezing your card will allow you to pause the
                majority of new transactions.
              </Text>
            </CollapseBody>
          </Collapse>

          <Collapse
            style={{
              width: "90%",
              backgroundColor:
                darkMode === "DARK" ? "rgba(255,255,255,0.2)" : "white",

              height: "auto",
              borderRadius: 15,
              marginLeft: "5%",
              minHeight: 35,
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5%",
              padding: "1.5%",
            }}
          >
            <CollapseHeader style={{ flexDirection: "row" }}>
              <View style={styles.collapseTextContainer}>
                <Text
                  style={{
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: 16,
                    color:
                      darkMode === "DARK"
                        ? GlobalStyles.Color.white
                        : GlobalStyles.Color.secondaryDarkTheme_bg,
                  }}
                >
                  Analyze Spending  
                </Text>
              </View>
            </CollapseHeader>
            <CollapseBody
              style={{
                marginTop: "5%",
                marginBottom: "5%",
                textAlign: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat-Regular",

                  color:
                    darkMode === "DARK"
                      ? GlobalStyles.Color.white
                      : GlobalStyles.Color.secondaryDarkTheme_bg,
                }}
              >
                Set your savings goals, keep tabs on your credit, and track your
                transactions. Get the best professional financial data you need
                from our spending Analyzer.   
              </Text>
            </CollapseBody>
          </Collapse>

          <Collapse
            style={{
              width: "90%",
              backgroundColor:
                darkMode === "DARK" ? "rgba(255,255,255,0.2)" : "white",

              height: "auto",
              borderRadius: 15,
              marginLeft: "5%",
              minHeight: 35,
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5%",
              padding: "1.5%",
            }}
          >
            <CollapseHeader style={{ flexDirection: "row" }}>
              <View style={styles.collapseTextContainer}>
                <Text
                  style={{
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: 16,
                    color:
                      darkMode === "DARK"
                        ? GlobalStyles.Color.white
                        : GlobalStyles.Color.secondaryDarkTheme_bg,
                  }}
                >
                  Plan Your Future Spending
                </Text>
              </View>
            </CollapseHeader>
            <CollapseBody
              style={{
                marginTop: "5%",
                marginBottom: "5%",
                textAlign: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat-Regular",

                  color:
                    darkMode === "DARK"
                      ? GlobalStyles.Color.white
                      : GlobalStyles.Color.secondaryDarkTheme_bg,
                }}
              >
                Set your budget or be prepared with your spending for the coming
                week or month using the list of all upcoming expenses!
              </Text>
            </CollapseBody>
          </Collapse>

          <Collapse
            style={{
              width: "90%",
              backgroundColor:
                darkMode === "DARK" ? "rgba(255,255,255,0.2)" : "white",

              height: "auto",
              borderRadius: 15,
              marginLeft: "5%",
              minHeight: 35,
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5%",
              padding: "1.5%",
            }}
          >
            <CollapseHeader style={{ flexDirection: "row" }}>
              <View style={styles.collapseTextContainer}>
                <Text
                  style={{
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: 16,
                    color:
                      darkMode === "DARK"
                        ? GlobalStyles.Color.white
                        : GlobalStyles.Color.secondaryDarkTheme_bg,
                  }}
                >
                  Virtual Forest
                </Text>
              </View>
            </CollapseHeader>
            <CollapseBody
              style={{
                marginTop: "5%",
                marginBottom: "5%",
                textAlign: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat-Regular",

                  color:
                    darkMode === "DARK"
                      ? GlobalStyles.Color.white
                      : GlobalStyles.Color.secondaryDarkTheme_bg,
                }}
              >
                Depending on the type of your Carbonyte card, we will plant 1, 5
                or 10 trees a month. You can even check your virtual forest with
                our app.  
              </Text>
            </CollapseBody>
          </Collapse>

          <Collapse
            style={{
              width: "90%",
              backgroundColor:
                darkMode === "DARK" ? "rgba(255,255,255,0.2)" : "white",

              height: "auto",
              borderRadius: 15,
              marginLeft: "5%",
              minHeight: 35,
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5%",
              padding: "1.5%",
            }}
          >
            <CollapseHeader style={{ flexDirection: "row" }}>
              <View style={styles.collapseTextContainer}>
                <Text
                  style={{
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: 16,
                    color:
                      darkMode === "DARK"
                        ? GlobalStyles.Color.white
                        : GlobalStyles.Color.secondaryDarkTheme_bg,
                  }}
                >
                  Buy Projects
                </Text>
              </View>
            </CollapseHeader>
            <CollapseBody
              style={{
                marginTop: "5%",
                marginBottom: "5%",
                textAlign: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat-Regular",

                  color:
                    darkMode === "DARK"
                      ? GlobalStyles.Color.white
                      : GlobalStyles.Color.secondaryDarkTheme_bg,
                }}
              >
                With Carbonyte, you can buy projects that are based on
                sustainability. Contribute to saving the planet through your
                banking.
              </Text>
            </CollapseBody>
          </Collapse>

          <Collapse
            style={{
              width: "90%",
              backgroundColor:
                darkMode === "DARK" ? "rgba(255,255,255,0.2)" : "white",

              height: "auto",
              borderRadius: 15,
              marginLeft: "5%",
              minHeight: 35,
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5%",
              padding: "1.5%",
            }}
          >
            <CollapseHeader style={{ flexDirection: "row" }}>
              <View style={styles.collapseTextContainer}>
                <Text
                  style={{
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: 16,
                    color:
                      darkMode === "DARK"
                        ? GlobalStyles.Color.white
                        : GlobalStyles.Color.secondaryDarkTheme_bg,
                  }}
                >
                  Establish a spending limit.
                </Text>
              </View>
            </CollapseHeader>
            <CollapseBody
              style={{
                marginTop: "5%",
                marginBottom: "5%",
                textAlign: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat-Regular",

                  color:
                    darkMode === "DARK"
                      ? GlobalStyles.Color.white
                      : GlobalStyles.Color.secondaryDarkTheme_bg,
                }}
              >
                Don't worry if you're on a tight budget. With Carbonyte, you can
                set your spending limit for the week or even for the month and
                be on track with your finances.
              </Text>
            </CollapseBody>
          </Collapse>
          <View style={{ width: "100%", height: 30 }} />
        </View>
        <View style={{ height: 150 }} />
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  collapseTextContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    backgroundColor: GlobalStyles.DivContainer.backgroundColor,
    height: GlobalStyles.DivContainer.height,
    minHeight: 900,
    width: "100%",
    flex: GlobalStyles.DivContainer.flex,
  },

  titleTextRow: {
    marginTop: GlobalStyles.Title.marginTop,
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
  },

  titleText: {
    fontSize: GlobalStyles.Title.fontSize,
    fontWeight: GlobalStyles.Title.fontWeight,
  },
  darktitleText: {
    fontSize: GlobalStyles.Title.fontSize,
    fontWeight: GlobalStyles.Title.fontWeight,
    color: GlobalStyles.Color.white,
  },

  subText: {
    fontSize: GlobalStyles.RowText.fontSize,
    fontWeight: GlobalStyles.RowText.fontWeight,
  },
  darksubText: {
    fontSize: GlobalStyles.RowText.fontSize,
    fontWeight: GlobalStyles.RowText.fontWeight,
    color: GlobalStyles.Color.white,
  },

  subTextRow: {
    marginTop: GlobalStyles.RowText.marginTop,
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
    fontColor: GlobalStyles.RowText.fontColor,
  },
});

export default Faq;
