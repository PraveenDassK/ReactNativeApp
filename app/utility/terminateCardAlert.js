import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default terminateCardAlert = (terminateFn) =>
  Alert.alert(
    "Terminate Card",
    "Are you sure you want to terminate your card?",
    [
      {
        text: "No",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          
          terminateFn();
        },
      },
    ]
  );

  export const handleTerminate =()=> {
    
}
