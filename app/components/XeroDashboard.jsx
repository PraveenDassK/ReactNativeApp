import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";

const XeroDashboard = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/2138922/pexels-photo-2138922.jpeg?auto=compress&cs=tinysrgb&w=600",
          }}
          style={{ height: 100, width: 130 }}
        />
      </View>
      <View>
        <Text
          style={{
            color: "#212529",
            textAlign: "center",
            fontSize: 12,
            fontFamily: "Montserrat",
            fontWeight: "regular",
          }}
        >
          Sync your Carbonyte bank {`\n`}directly into your XERO account and
          {`\n`}
          keep a track of all your transactions.
        </Text>
      </View>
      <View style={{ width: "100%" ,display:"flex",alignItems:"center"}}>
        <Pressable style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Know more</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default XeroDashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
    paddingVertical: 20,
  },
  sendButton: {
    height: 60,
    width: "50%",
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  sendButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "normal",
  },
});
