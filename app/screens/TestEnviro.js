import React, { useEffect, useState, useContext } from "react";
import { FlatList, Text, StyleSheet, Image, View, Pressable, ScrollView } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import Button from "../components/Button";

import apiCarbon from "../api/apiCarbon"
import apiCall from "../api/apiCall"
import apiDevices from "../api/apiDevices"
import apiLogin from "../api/apiLogin"
import AuthContext from "../auth/context";

const devices = [
];

const TestEnviro = ({ navigation }) => {
  const { customerDetails } = useContext(AuthContext)
  const [devices, setDevices] = useState([])

  const renderItem = ({ item }) => {
    console.log("item", item)
    return (
      <View>
        <Text>{item.name}</Text>
      </View>)
  }

  useEffect(() => {
    loadData()
  }, [customerDetails])

  /**
   * @dev Loads the device data into devices
   * @returns Null if no customer details are present
   *          The return should only be for devlopment only
   */
  const loadData = async () => {
    console.log("load")
    if (!customerDetails) return;
    const request = await apiDevices.GetDevices(customerDetails)
    request.details.forEach((device, i) => {
      const newDevice = {
        id: i,
        device: device
      }
      setDevices(prevDevices => [...prevDevices, newDevice]);
    });
  }

  return (
    <View>
      <Button
        title="Reload"
        color="babyBlue"
        style={styles.boxShadow}
        onPress={() => loadData()}
      />

    </View>
  )
};

const styles = StyleSheet.create({
  page: {

  },

});

export default TestEnviro;
