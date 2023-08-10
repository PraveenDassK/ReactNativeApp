import { StyleSheet, Text, View, Platform, Touchable } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import GlobalStyles from "../../GlobalStyles";

const CarbonDatePicker = ({ darkMode }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };
  const goToPreviousMonth = () => {
    const prevMonth = new Date(date);
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    setDate(prevMonth);
  };
  const goToNextMonth = () => {
    const nextMonth = new Date(date);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setDate(nextMonth);
  };
  return (
    <View style={styles.mainContainer}>
      <AntDesign
        name="left"
        size={24}
        color={
          darkMode === "DARK"
            ? GlobalStyles.Color.white
            : GlobalStyles.Color.blackaaaaaa
        }
        onPress={goToPreviousMonth}
      />
      <TouchableOpacity onPress={() => setShow(true)} style={styles.calender}>
        <MaterialIcons
          name="calendar-today"
          size={24}
          color={
            darkMode === "DARK"
              ? GlobalStyles.Color.white
              : GlobalStyles.Color.black
          }
        />

        <Text
          style={darkMode === "DARK" ? styles.darkdateText : styles.dateText}
        >
          {moment(date).format("MMMM  YYYY")}
        </Text>
      </TouchableOpacity>
      <AntDesign
        name="right"
        size={24}
        color={
          darkMode === "DARK"
            ? GlobalStyles.Color.white
            : GlobalStyles.Color.black
        }
        onPress={goToNextMonth}
      />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="spinner"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default CarbonDatePicker;

const styles = StyleSheet.create({
  calender: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  mainContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
  },
  dateText: {
    fontSize: 15,
    color: GlobalStyles.Color.black,
    fontFamily: "Montserrat",
  },
  darkdateText: {
    fontSize: 15,
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat",
  },
});
