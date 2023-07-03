import { BlurView } from "expo-blur";
import { Pressable,View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import moment from "moment";

const TransactionBody = ({
    onTransaction,
    description,
    amount,
    date,
    credit,
    index,
    lastElement,
  }) => {
    return (
      <BlurView tint="light" intensity={60} style={{backgroundColor: "rgba(255, 255, 255, 0.5)"}}>
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
              <Text style={styles.bold}>{description}</Text>
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
    bold: { fontWeight: "700" },
    subText: { opacity: 0.5, fontSize: 10, lineHeight: 15 },
  })

export default TransactionBody