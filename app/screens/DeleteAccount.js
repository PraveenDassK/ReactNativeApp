import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Button from "../components/AppButton";

const DeleteAccount = () => {
  return (
    <View style={styles.container}>
      <Text>Do you want to delete your account?</Text>
      <Button
        title="yes"
        textColor="black"
        color="white"
        onPress={() => console.log("yes pressed")}
      />
      <Button
        title="no"
        textColor="white"
        color="black"
        onPress={() => console.log("no pressed")}
      />
    </View>
  );
};

export default DeleteAccount;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: "10%" },
});
