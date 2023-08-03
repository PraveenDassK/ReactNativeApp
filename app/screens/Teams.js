import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { moderateScale } from "../config/scaling";

import PinModal from "../components/PinModal";
import UserIcon from "../components/UserIcon";
import Button from "../components/AppButton";
import AuthContext from "../auth/context";
import GlobalStyles from "../../GlobalStyles";
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
    id: "2",
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
    <View
      style={
        darkMode === "DARK" ? styles.darkmainContainer : styles.mainContainer
      }
    >
      {/* <RecentTransactions
                amount={10}
            /> */}
      <View style={{ marginTop: "20%" }}>
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
                />
              </View>
            )}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            numColumns={4}
            contentContainerStyle={styles.flatListContent}
          />
        )}
      </View>
      <Button
        title="Add another user"
        onPress={() => navigation.navigate("TeamsUserAdd")}
      />
      
    </View>
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
  heading: { fontSize: 22, fontWeight: "700" },
  darkheading: {
    fontSize: 22,
    fontWeight: "700",
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
