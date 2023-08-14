import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React, { useContext } from "react";
import { ScrollView } from "react-native-gesture-handler";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";
import { AntDesign } from "@expo/vector-icons";
import Tagline from "../components/Tagline";
const XeroPage = () => {
  const { darkMode } = useContext(AuthContext);
  const dataForBottom = [
    {
      id: 1,
      title: "Automatic bank feeds",
      subTitle: "Bank transactions flow securely into Xero.",
      points: [
        "• Set up feeds from multiple banks",
        "• Get feeds from any number of bank accounts ",
        "• Import up to 12 months of historical data when you connect",
      ],
      image: require("../assets/Xero/Automatic.png"),
    },
    {
      id: 2,
      title: "Stay on top of business",
      subTitle: "Keep track of money coming in & going out.",
      points: [
        "• View a summary of the money coming in and going out on the dashboard",
        " • Categories transactions each day so a backlog doesn’t pile up",
      ],
      image: require("../assets/Xero/TopofBusiness.png"),
    },
    {
      id: 3,
      title: "Keep your data secure",
      subTitle: "Get a secure and reliable bank connection.",
      points: [
        "• Bank feeds are automatic and reliable ",
        "• All data sent from the bank to Xero is encrypted, so only Xero can open it",
      ],
      image: require("../assets/Xero/DataSecure.png"),
    },
  ];
  return (
    <ImageBackground
      source={
        darkMode === "DARK"
          ? require("../assets/backgrounds/profilepage/AccounVerificationLetter-dark.png")
          : require("../assets/backgrounds/profilepage/AccounVerificationLetter-white.png")
      }
      resizeMode="contain"
      imageStyle={{
        bottom: "-70%", // Whatever offset you want from the bottom
      }}
      style={{
        width: "100%",
        backgroundColor:
          darkMode === "DARK"
            ? GlobalStyles.Color.darkTheme_bg
            : GlobalStyles.Color.lightTheme_bg,
      }}
    >
      <ScrollView>
        <View style={{ paddingHorizontal: "5%", paddingVertical: "5%" }}>
          <View
            style={
              darkMode === "DARK"
                ? styles.darktopContainer
                : styles.topContainer
            }
          >
            <Image
              source={require("../assets/Xero/XeroLogo.png")}
              style={{ width: 100, height: 100 }}
            />
            <View>
              <Text style={styles.getReady}>GET READY! </Text>
              <Text
                style={
                  darkMode === "DARK"
                    ? styles.darkcomingsoon
                    : styles.comingsoon
                }
              >
                COMING SOON
              </Text>
            </View>
          </View>
          <View
            style={
              darkMode === "DARK"
                ? styles.darkbottomContainer
                : styles.bottomContainer
            }
          >
            <Text
              style={
                darkMode === "DARK" ? styles.darkboxHeader : styles.boxHeader
              }
            >
              What is Carbonyte + Xero Integration?
            </Text>
            <Text
              style={[
                darkMode === "DARK" ? styles.darkboxText : styles.boxText,
                { marginVertical: "3%" },
              ]}
            >
              Any business that signs up to the Carbonyte prepaid plans will get
              the access to Xero accounting software and its tools run, track
              and manage your business.{"\n"} {"\n"}Connect your Carbonyte bank
              account to Xero and set up bank feeds. Transactions flow securely,
              straight into Xero each business day.
            </Text>
          </View>
          <View
            style={
              darkMode === "DARK"
                ? styles.darkbottomContainer
                : styles.bottomContainer
            }
          >
            <Text
              style={
                darkMode === "DARK" ? styles.darkboxHeader : styles.boxHeader
              }
            >
              Features of Carbonyte + Xero Integration?
            </Text>
            {dataForBottom?.map((eachValue, index) => {
              console.log(eachValue);
              return (
                <View key={index}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 10,
                      alignItems: "center",
                      marginTop: "10%",
                    }}
                  >
                    <AntDesign
                      name="checkcircle"
                      size={24}
                      color={GlobalStyles.Color.skyblue}
                    />
                    <View>
                      <Text
                        style={
                          darkMode === "DARK"
                            ? styles.darkautomaticBank
                            : styles.automaticBank
                        }
                      >
                        {eachValue?.title}
                      </Text>
                      <Text
                        style={
                          darkMode === "DARK"
                            ? styles.darkboxText
                            : styles.boxText
                        }
                      >
                        {eachValue?.subTitle}
                      </Text>
                    </View>
                  </View>
                  {eachValue?.points.map((eachPoints, index) => (
                    <Text
                      style={[
                        darkMode === "DARK"
                          ? styles.darkboxText
                          : styles.boxText,
                        { marginVertical: "1%" },
                      ]}
                    >
                      {eachPoints}
                    </Text>
                  ))}

                  <View>
                    <Image
                      source={eachValue?.image}
                      alt="bottom_image"
                      resizeMode="contain"
                      style={{ width: "100%" }}
                    />
                  </View>
                </View>
                // <View>
                //   <Text>Hello</Text>
                // </View>
              );
            })}
          </View>
        </View>
        <View style={{ marginTop: "10%" }}>
          <Tagline darkMode={darkMode} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default XeroPage;

const styles = StyleSheet.create({
  topContainer: {
    width: "100%",
    padding: 20,
    backgroundColor: GlobalStyles.Color.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    borderRadius: 20,
  },
  darktopContainer: {
    width: "100%",
    padding: 20,
    backgroundColor: "rgba(255,255,255,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    borderRadius: 20,
  },
  bottomContainer: {
    width: "100%",
    padding: 20,
    backgroundColor: GlobalStyles.Color.white,
    borderRadius: 20,
    marginTop: "4%",
  },
  darkbottomContainer: {
    width: "100%",
    padding: 20,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 20,
    marginTop: "4%",
  },
  getReady: {
    color: GlobalStyles.Color.skyblue,
    fontFamily: "Montserrat",
    fontSize: 22,
  },
  comingsoon: {
    color: GlobalStyles.Color.darkTheme_bg,
    fontFamily: "Montserrat-Regular",
    fontSize: 22,
  },
  darkcomingsoon: {
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat-Regular",
    fontSize: 22,
  },
  boxHeader: {
    color: GlobalStyles.Color.secondaryDarkTheme_bg,
    fontSize: 18,
    fontFamily: "Montserrat",
  },
  darkboxHeader: {
    color: GlobalStyles.Color.white,
    fontSize: 18,
    fontFamily: "Montserrat",
  },
  boxText: {
    color: GlobalStyles.Color.secondaryDarkTheme_bg,
    fontSize: 12,
    fontFamily: "Montserrat-Regular",
  },
  darkboxText: {
    color: GlobalStyles.Color.white,
    fontSize: 12,
    fontFamily: "Montserrat-Regular",
  },
  automaticBank: {
    color: "#00003D",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
  },
  darkautomaticBank: {
    color: GlobalStyles.Color.skyblue,
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
  },
});
