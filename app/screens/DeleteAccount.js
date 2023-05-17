import React, { useEffect, useState, useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import Button from "../components/AppButton";
import apiAccount from "../api/apiAccount";
import AuthContext from "../auth/context";

const DeleteAccount = ({navigation}) => {

  const { 
    userID
  } = useContext(AuthContext);

  /**
   * @dev This handles the deletion of the current account
   */
  const handleDelete = async() =>{
    console.log("Delete")
    apiAccount.DeleteAccount(userID)

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
