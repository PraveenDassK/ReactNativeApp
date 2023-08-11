import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  ImageBackground,
} from "react-native";
import { moderateScale } from "../config/scaling";
import LinearAccountButton from "../components/LinearAccountButton";
import PinModal from "../components/PinModal";
import UserIcon from "../components/UserIcon";
import Button from "../components/AppButton";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";
import Tagline from "../components/Tagline";
const PROXY_TEAM_DATA = [
  {
    name: "Ava Bel",
    id: "1",
  },
  {
    name: "Cal Dio",
    id: "2",
  },
  {
    name: "Efy Fey",
    id: "3",
  },

  {
    name: "Eva Bel",
    id: "5",
  },
  {
    name: "Cal Peter",
    id: "6",
  },
  {
    name: "Eva Bel",
    id: "7",
  },
  {
    name: "Eva Bel",
    id: "8",
  },
  {
    name: "Ava Gel",
    id: "9",
  },
];
const Teams = ({ navigation }) => {
  const [showPinModal, setShowPinModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { darkMode } = useContext(AuthContext);
  const [teamData, setTeamData] = useState(PROXY_TEAM_DATA);
  // useEffect(() => {
  //   // loadData()
  // }, []);

  const onSuccess = () => {
    setShowPinModal(false);
  };

  if (showPinModal) {
    return (
      <View style={styles.mainContainer}>
        {showPinModal ? (
          <PinModal title="Enter your PIN" success={() => onSuccess()} />
        ) : null}
      </View>
    );
  }

  return (
    <ImageBackground
      source={
        darkMode === "DARK"
          ? require("../assets/backgrounds/teams/Teams-dark.png")
          : require("../assets/backgrounds/teams/Teams-white.png")
      }
      resizeMode="contain"
      imageStyle={{
        bottom: "-70%", // Whatever offset you want from the bottom
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
      <View
        // style={
        //   darkMode === "DARK" ? styles.darkmainContainer : styles.mainContainer
        // }
        style={{ padding: "6%" }}
      >
        {/* <RecentTransactions
                amount={10}
            /> */}
        <View
          style={{
            marginVertical: "10%",
            backgroundColor:
              darkMode === "DARK" ? "rgba(255,255,255,0.2)" : "white",
            padding: "7%",
            borderRadius: 20,
          }}
        >
          <View style={{ marginBottom: "5%" }}>
            <Text
              style={darkMode === "DARK" ? styles.darkheading : styles.heading}
            >
              Your current team
            </Text>
          </View>
          {teamData && (
            <FlatList
              data={teamData}
              renderItem={({ item, index }) => (
                <View style={styles.itemContainer}>
                  <UserIcon
                    name={item.name}
                    onPress={() => navigation.navigate("TeamsUser", item)}
                    darkMode={darkMode}
                    size={70}
                    fontSize={30}
                  />
                </View>
              )}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              numColumns={3}
              contentContainerStyle={styles.flatListContent}
            />
          )}
        </View>
        <LinearAccountButton
          title="Add New Team Member"
          onPress={() => navigation.navigate("TeamsUserAdd")}
          darkMode={darkMode}
        />
      </View>
      <Tagline darkMode={darkMode} />
    </ImageBackground>
  );
};

export default Teams;

const styles = StyleSheet.create({
  comingSoonText: {
    textTransform: "uppercase",
    fontSize: moderateScale(80),
    fontWeight: "bold",
    textAlign: "center",
  },
  heading: { fontSize: 18, fontFamily: "Montserrat" },
  darkheading: {
    fontSize: 18,
    fontFamily: "Montserrat",
    color: GlobalStyles.Color.white,
  },

  mainContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignContent: "center",
    padding: "5%",
  },
  darkmainContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignContent: "center",
    padding: "5%",
    backgroundColor: GlobalStyles.Color.darkTheme_bg,
  },
  flatListContent: {
    justifyContent: "space-between",
  },
  itemContainer: {
    padding: "5%",
  },
});
