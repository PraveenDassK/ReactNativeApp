import { BlurView } from "expo-blur";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import moment from "moment";
import GlobalStyles from "../../../GlobalStyles";

const TransactionBody = ({
  onTransaction,
  description,
  amount,
  date,
  credit,
  index,
  lastElement,
}) => {
  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    }
    return str;
  }

  return (
    <BlurView
      tint="light"
      intensity={60}
      style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
    >
      <Pressable
        onPress={onTransaction}
        style={{
          flexDirection: "row",
          paddingHorizontal: "5%",
          paddingVertical: "2.5%",
          justifyContent: "space-between",
          borderBottomLeftRadius: index == -1 ? 10 : 0,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginRight: "5%",
            }}
          >
            <MaterialCommunityIcons
              name={credit ? "arrow-bottom-left" : "arrow-top-right"}
              size={24}
              color={credit ? "green" : "red"}
            />
          </View>
          <View>
            <Text style={styles.bold} numberOfLines={1}>
              {truncateString(description, 23)}
            </Text>
            <Text style={styles.subText}>{moment(date).calendar()}</Text>
          </View>
        </View>
        <View>
          <Text style={[styles.bold, { textAlign: "right" }]}>
            {!credit ? "-" : "+"} £{amount.toFixed(2)}
          </Text>
          <Text style={[styles.subText, { textAlign: "right" }]}>
            {moment(date).format("D MMM")}
          </Text>
        </View>
      </Pressable>
      <View
        style={{
          marginHorizontal: "5%",
          borderBottomColor: "white",
          borderBottomWidth: index == lastElement ? 0 : 3,
        }}
      />
    </BlurView>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontFamily: "Montserrat-SemiBold",
    color: GlobalStyles.Color.black,
    fontSize: 14,
  },
  subText: {
    fontSize: 12,
    lineHeight: 15,
    fontFamily: "Montserrat-Regular",
    color:GlobalStyles.Color.darkGray,
    marginTop:"5%"
  },
});

export default TransactionBody;
