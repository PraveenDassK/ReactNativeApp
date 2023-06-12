import { Alert } from "react-native";

export default terminateCardAlert = (terminateFn) =>
Alert.alert('Terminate Card', 'Are you sure you want to terminate your card?', [
  {
    text: 'No',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel',
  },
  {text: 'Yes', onPress: () => {
    console.log('OK Pressed: Terminated!!!')
    terminateFn()
}},
]);