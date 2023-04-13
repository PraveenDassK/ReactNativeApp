import React, { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import Screen from "../components/Screen";
import GlobalStyles from "../../GlobalStyles";
import apiCall from "../api/apiCall";
import AuthContext from "../auth/context";
import moment from "moment";

const ChooseCardsStandard5 = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const [data, setData] = useState({});
  const [numTrees, setTrees] = useState(0);
  const [numCarbon, setCarbon] = useState(0);
  const [projects, setProjects] = useState([]);

  //Calls the API once during load
  useEffect(() => {
    loadData();
  }, []);

  //Gets the data for the user
  const loadData = async () => {
    let response = await apiCall.GetUserImpact("CC1");
    const assets = response.allAssets;
    console.log(assets)
    let trees = 0;
    let carbon = 0;
    assets.forEach((element) => {
      element.type == "TREE" ? (trees += element.count) : null;
      carbon += element.offset;
    });
    let projects = [];
    for (let i = 0; i < 4; i++) {
      projects.push(assets[i]);
      console.log(assets[i]);
    }
    setProjects(projects);
    setTrees(trees);
    setCarbon(Math.round(carbon));
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleTextRow}>
        <Text style={styles.titleText}>
          Shrink your footprint, but also grow your hand print!
        </Text>
      </View>

      <View
        style={{
          width: "80%",
          height: 75,
          flexDirection: "row",
          marginLeft: "10%",
          marginTop: "5%",
        }}
      >
        <View style={{ flex: 3, backgroundColor: "rgba(65, 160, 57, 0.3)", borderRadius: 15 }}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                flex: 5,
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
                textAlignVertical: "center",
                marginLeft: "2.5%",
                fontWeight: "700",
                fontSize: 35
              }}
            >
              {numTrees}
            </Text>
            <View
              style={{
                flexDirection: "column",
                flex: 5,
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
                textAlignVertical: "center",
                height: 75,
                marginRight: "2.5%"
              }}
            >
              <Text style={{}}>Total</Text>
              <Text style={{fontWeight: "700"}}>Assets</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 6,
            backgroundColor: "rgba(136, 136, 136, 0.3)",
            marginLeft: "5%",
            borderRadius: 15,
          }}
        >
        <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        flex: 5,
                        alignItems: "center",
                        justifyContent: "center",
                        alignSelf: "center",
                        textAlignVertical: "center",
                        marginLeft: "2.5%",
                        fontWeight: "700",
                        fontSize: 35
                      }}
                    >
                      {numCarbon}
                    </Text>
                    <View
                      style={{
                        flexDirection: "column",
                        flex: 5,
                        alignItems: "center",
                        justifyContent: "center",
                        alignSelf: "center",
                        textAlignVertical: "center",
                        height: 75,
                        marginRight: "2.5%"
                      }}
                    >
                      <Text style={{}}>C0₂ Removed</Text>
                      <Text style={{fontWeight: "700"}}>Tons</Text>
                    </View>
                  </View>

        </View>
      </View>

      <View style={styles.subTextRow}>
        <Text style={styles.subTextAssets}>Assets</Text>
        <Text style={styles.subTextDescriptor}>(1 Tonne = 1 CO2 Token)</Text>
        <Text style={styles.subTextToken}>Token</Text>
      </View>
      <Pressable
        style={[styles.transactionBox, styles.rounded]}
        onPress={() => navigation.navigate("Transactions")}
      >
        <View style={{ height: 75, flexDirection: "row" }}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: "white",
              borderColor: "black",
              alignSelf: "center",
              marginLeft: "2.5%",
            }}
          >
            <Image
              style={{
                resizeMode: "contain",
                height: "90%",
                width: "90%",
                borderRadius: 25,
                marginTop: "5%",
                marginLeft: "5%",
              }}
              resizeMode="cover"
              source={require("../assets/tree.png")}
            />
          </View>
          <View
            style={{
              flex: 3.5,
              alignSelf: "center",
              justifyContent: "space-evenly",
              marginLeft: "5%",
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "700" }}>
              {" "}
              {projects[0]?.name}
            </Text>
            <Text style={{}}>
                    {moment(projects[0]?.lastUpdated).format("MMM Do YY")}
</Text>
          </View>
          <View
            style={{
              flex: 5,
              justifyContent: "space-evenly",
              alignItems: "flex-end",
              marginRight: "2.5%",
            }}
          >
            <Text style={{ marginRight: "2.5%", fontWeight: "700" }}>
                                                £{projects[0]?.displayTonnePrice}

            </Text>
          </View>
        </View>
      </Pressable>

      <Pressable
        style={[styles.transactionBox, styles.rounded]}
        onPress={() => navigation.navigate("Transactions")}
      >
        <View style={{ height: 75, flexDirection: "row" }}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: "white",
              borderColor: "black",
              alignSelf: "center",
              marginLeft: "2.5%",
            }}
          >
            <Image
              style={{
                resizeMode: "contain",
                height: "90%",
                width: "90%",
                borderRadius: 25,
                marginTop: "5%",
                marginLeft: "5%",
              }}
              resizeMode="cover"
              source={require("../assets/tree.png")}
            />
          </View>
          <View
            style={{
              flex: 3.5,
              alignSelf: "center",
              justifyContent: "space-evenly",
              marginLeft: "5%",
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "700" }}>
              {""}
              {projects[2]?.name}
            </Text>
            <Text style={{}}>
                    {moment(projects[1]?.lastUpdated).format("MMM Do YY")}
</Text>
          </View>
          <View
            style={{
              flex: 5,
              justifyContent: "space-evenly",
              alignItems: "flex-end",
              marginRight: "2.5%",
            }}
          >
            <Text style={{ marginRight: "2.5%", fontWeight: "700" }}>
                                    £{projects[1]?.displayTonnePrice}

            </Text>
          </View>
        </View>
      </Pressable>

      <Pressable
        style={[styles.transactionBox, styles.rounded]}
        onPress={() => navigation.navigate("Transactions")}
      >
        <View style={{ height: 75, flexDirection: "row" }}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: "white",
              borderColor: "black",
              alignSelf: "center",
              marginLeft: "2.5%",
            }}
          >
            <Image
              style={{
                resizeMode: "contain",
                height: "90%",
                width: "90%",
                borderRadius: 25,
                marginTop: "5%",
                marginLeft: "5%",
              }}
              resizeMode="cover"
              source={require("../assets/tree.png")}
            />
          </View>
          <View
            style={{
              flex: 3.5,
              alignSelf: "center",
              justifyContent: "space-evenly",
              marginLeft: "5%",
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "700" }}>
              {""}
              {projects[2]?.name}
            </Text>
            <Text style={{}}>
                    {moment(projects[2]?.lastUpdated).format("MMM Do YY")}
</Text>
          </View>
          <View
            style={{
              flex: 5,
              justifyContent: "space-evenly",
              alignItems: "flex-end",
              marginRight: "2.5%",
            }}
          >
            <Text style={{ marginRight: "2.5%", fontWeight: "700" }}>
                        £{projects[2]?.displayTonnePrice}

            </Text>
          </View>
        </View>
      </Pressable>

      <Pressable
        style={[styles.transactionBox, styles.rounded]}
        onPress={() => navigation.navigate("Transactions")}
      >
        <View style={{ height: 75, flexDirection: "row" }}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: "white",
              borderColor: "black",
              alignSelf: "center",
              marginLeft: "2.5%",
            }}
          >
            <Image
              style={{
                resizeMode: "contain",
                height: "90%",
                width: "90%",
                borderRadius: 25,
                marginTop: "5%",
                marginLeft: "5%",
              }}
              resizeMode="cover"
              source={require("../assets/tree.png")}
            />
          </View>
          <View
            style={{
              flex: 3.5,
              alignSelf: "center",
              justifyContent: "space-evenly",
              marginLeft: "5%",
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "700" }}>
              {""}
              {projects[3]?.name}
            </Text>
            <Text style={{}}>

            {moment(projects[3]?.lastUpdated).format("MMM Do YY")}</Text>
          </View>
          <View
            style={{
              flex: 5,
              justifyContent: "space-evenly",
              alignItems: "flex-end",
              marginRight: "2.5%",
            }}
          >
            <Text style={{ marginRight: "2.5%", fontWeight: "700" }}>
            £{projects[3]?.displayTonnePrice}

            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: GlobalStyles.DivContainer.backgroundColor,
    height: GlobalStyles.DivContainer.height,
    width: "100%",
    flex: GlobalStyles.DivContainer.flex,
  },

  titleTextRow: {
    marginTop: GlobalStyles.Title.marginTop,
    marginLeft: GlobalStyles.Title.marginLeft,
    width: GlobalStyles.Title.width,
  },

  titleText: {
    fontSize: GlobalStyles.Title.fontSize,
    fontWeight: GlobalStyles.Title.fontWeight,
  },

  subText: {
    fontSize: GlobalStyles.RowText.fontSize,
    fontWeight: GlobalStyles.RowText.fontWeight,
  },

  subTextRow: {
    marginTop: GlobalStyles.RowText.marginTop,
    marginLeft: GlobalStyles.RowText.marginLeft,
    width: "80%",
    fontColor: GlobalStyles.RowText.fontColor,
  },

  transactionDiv: {
    height: 100,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlignVertical: "center",
    alignContent: "center",
  },
  transactionsContainer: {
    height: "auto",
    width: "80%",
    marginLeft: "10%",
    marginTop: "12.5%",
    borderRadius: 15,
  },
  transactionBox: {
    width: "80%",
    height: 80,
    marginTop: "5%",
    backgroundColor: "white",
    marginLeft: "10%",
    borderRadius: 15,
  },

  subTextAssets: {
    flex: 1.5,
    fontWeight: "700",
    fontSize: 12,
  },

  subTextDescriptor: {
    marginLeft: "1%",
    flex: 4.5,
    fontSize: 10,
  },

  subTextRow: {
    Width: "100%",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ChooseCardsStandard5;
