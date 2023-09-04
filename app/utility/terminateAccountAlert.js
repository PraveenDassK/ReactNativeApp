import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default terminateCardAlert = (terminateFn) =>
  Alert.alert(
    "Terminate Account",
    "Are you sure you want to Delete your Account?",
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
