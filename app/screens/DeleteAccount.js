import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Button from "../components/AppButton";

const DeleteAccount = ({navigation}) => {


  /**
   * @dev This handles the deletion of the current account
   */
  const handleDelete = async() =>{
    console.log("Delete")

  }
  return (
    <View style={styles.container}>
      <Text>Do you want to delete your account?</Text>
      <Button
        title="yes"
        textColor="black"
        color="white"
        onPress={() => handleDelete()}
      />
      <Button
        title="no"
        textColor="white"
        color="black"
        onPress={() => navigation.navigate("Account")}
      />
    </View>
  );
};

export default DeleteAccount;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: "10%" },
});
