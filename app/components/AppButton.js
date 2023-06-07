import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import colors from "../config/colors";

function AppButton({
  title,
  onPress,
  color = "black",
  style,
  textColor = "white",
  transform,
  textTransform,
  visible = false,
  disabled = false,
  counter = false,
  onDelete,
  onAdd
}) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, { backgroundColor: colors[color] }, style]}
      onPress={onPress}
    >
      <View style={styles.textContainer}>
        {counter && (
          <TouchableOpacity
            style={{
              flex: 1,
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={onDelete}
          >
            <Icon name="minus" color="white" />
            {/* <Text style={{color: "white"}}>-</Text> */}
          </TouchableOpacity>
        )}
        <View style={{justifyContent: "center", alignItems: "center"}}>
          <Text
            style={[
              styles.text,
              { color: textColor, flex: counter ? 3 : 0 , textTransform: textTransform},
              transform,
              
            ]}
          >
            {title}
          </Text>
        </View>
        {counter && (
          <TouchableOpacity
            style={{
              flex: 1,
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={onAdd}
          >
            <Icon name="plus" color="white" />
            {/* <Text style={{color: "white"}}>+</Text> */}
          </TouchableOpacity>
        )}
        {visible && (
          <ActivityIndicator
            style={{ position: "absolute", left: "25%" }}
            size={"small"}
            color="white"
          />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.babyBlue,
    borderRadius: 10,
    borderColor: colors.black,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 15,
    width: "100%",
    height: 50,
    marginVertical: 10,
  },
  text: {
    color: colors.black,
    fontSize: 15,
    textTransform: "capitalize",
    fontWeight: "700",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

export default AppButton;
