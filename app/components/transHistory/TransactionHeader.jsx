import { BlurView } from "expo-blur";
import { useState } from "react";
import { TouchableOpacity,View, Text, StyleSheet } from "react-native";

const TransactionHeader = ({ onTransactionFilter }) => {
    const selections = [
      { id: 1, name: "all" },
      { id: 2, name: "income" },
      { id: 3, name: "expenses" },
    ];
    const [isSelected, setSelected] = useState("all");
  
    const handleTransaction = (item) => {
      setSelected(item);
      onTransactionFilter(item);
    };
  
    return (
      <View style={[styles.transactionHeaderContainer, {backgroundColor: "rgba(255, 255, 255, 0.5)"}]}>
        <BlurView tint="light" intensity={60} style={styles.blurView}>
          {selections.map((selection) => (
            <TouchableOpacity
              key={selection.id}
              onPress={() => handleTransaction(selection.name)}
              style={{
                flex: 1,
                borderBottomWidth: 3,
                borderRightColor: "white",
                borderRightWidth: selection.name !== "expenses" ? 3 : 0,
                borderBottomColor:
                  selection.name == isSelected ? "blue" : "white",
                paddingBottom: "2.5%",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  textTransform: "capitalize",
                  opacity: selection.name == isSelected ? 1 : 0.5,
                }}
              >
                {selection.name}
              </Text>
            </TouchableOpacity>
          ))}
        </BlurView>
      </View>
    );
  };

  const styles = StyleSheet.create({
    transactionHeaderContainer: {
        marginTop: "5%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: "hidden",
      },
      blurView: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "5%",
        paddingBottom: "0%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
  })

export default TransactionHeader