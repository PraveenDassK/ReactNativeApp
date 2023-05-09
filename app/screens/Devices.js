import React, { useEffect, useState, useContext } from "react";
import { FlatList, Text, StyleSheet, Image, View, Pressable, ScrollView } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import Button from "../components/Button";

import apiDevices from "../api/apiDevices"
import AuthContext from "../auth/context";


const Devices = ({ navigation }) => {
  const { customerDetails } = useContext(AuthContext)
  const [devices, setDevices] = useState([])

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

    //For each device add it to the hook
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
  container: {

  },

});

export default Devices;
