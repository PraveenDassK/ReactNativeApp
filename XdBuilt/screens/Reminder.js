import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";

const Reminder = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.reminder}
      onPress={() => navigation.navigate("SplitBill")}
    >
      <View style={styles.reminderInner}>
        <View style={styles.groupParentPosition}>
          <View style={styles.groupParentPosition}>
            <View style={[styles.helloWrapper, styles.groupParentPosition]}>
              <Text style={[styles.hello, styles.helloTypo]}>
                Tap anywhere to continue
              </Text>
            </View>
          </View>
          <Text style={[styles.hello1, styles.helloTypo]}>
            <Text style={styles.aReminderHas}>A reminder has been sent</Text>
            <Text style={styles.aReminderHas}>to the group members</Text>
          </Text>
          <Image
            style={styles.iconAwesomeCheckCircle}
            resizeMode="cover"
            source={require("../assets/icon-awesomecheckcircle162.png")}
          />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupParentPosition: {
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  helloTypo: {
    textAlign: "center",
    fontFamily: GlobalStyles.FontFamily.helvetica,
    position: "absolute",
  },
  hello: {
    marginTop: 332.5,
    left: 120,
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_700,
    top: "50%",
  },
  helloWrapper: {
    borderTopLeftRadius: GlobalStyles.Border.br_4xl,
    borderTopRightRadius: GlobalStyles.Border.br_4xl,
    shadowColor: "rgba(1, 1, 253, 0.1)",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    backgroundColor: GlobalStyles.Color.white,
  },
  aReminderHas: {
    margin: GlobalStyles.Margin.margin_8xs,
  },
  hello1: {
    top: 458,
    left: 66,
    fontSize: GlobalStyles.FontSize.size_4xl,
    lineHeight: 24,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
  },
  iconAwesomeCheckCircle: {
    marginTop: -138.06,
    marginLeft: -93.56,
    left: "50%",
    width: 187,
    height: 187,
    top: "50%",
    position: "absolute",
  },
  reminderInner: {
    width: 375,
    height: 749,
  },
  reminder: {
    flex: 1,
    width: "100%",
    paddingTop: GlobalStyles.Padding.padding_md,
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default Reminder;
