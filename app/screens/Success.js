import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

import GlobalStyles from "../../GlobalStyles";

const Success = ({route, navigation}) => {
  console.log(route?.params?.params?.successText)
  const text = route?.params?.params?.successText
  const path = route?.params?.params?.finishScreen ? route.params.finishScreen : "AccountTab"
  console.log(path)
  return (
    <Pressable
      style={styles.requested}
      onPress={() => navigation.navigate(path, {reload: true})}
    >
     <View style={styles.mainContainer}>
         <View style={styles.titleTextRow}>
             <Text style={styles.titleText}>Success</Text>
         </View>

         <View style={styles.subTextRow}>
             <Text style={styles.subText}>Transaction has completed successfully</Text>
         </View>

        <Image
                  style={styles.image}
                  source={require("../assets/babyblueCircle.png")}
                />

                  <Text style={{fontSize: 20, width: "100%",fontWeight: "700", textAlign: "center", marginTop: "15%"}}>{text}{'\n'}</Text>

                 <Text style={{bottom: 0, textAlign: "center", position: "absolute", width: "100%", marginBottom: "5%"}}>Tap anywhere to continue</Text>
    </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
mainContainer: {
        backgroundColor:  GlobalStyles.DivContainer.backgroundColor,
        height: GlobalStyles.DivContainer.height,
        width: "100%",
        flex: GlobalStyles.DivContainer.flex,
    },

    titleTextRow: {
        marginTop: GlobalStyles.Title.marginTop,
        width: GlobalStyles.DivContainer.width,
            marginLeft: GlobalStyles.DivContainer.marginLeft,
    },

    titleText: {
        fontSize: GlobalStyles.Title.fontSize,
        fontWeight: GlobalStyles.Title.fontWeight,
    },

    subText: {
        fontSize: GlobalStyles.RowText.fontSize,
        fontWeight: GlobalStyles.RowText.fontWeight,
    },

    subTextRow: {
        marginTop: GlobalStyles.RowText.marginTop,
        width: GlobalStyles.DivContainer.width,
            marginLeft: GlobalStyles.DivContainer.marginLeft,
        fontColor: GlobalStyles.RowText.fontColor,
    },
    requested: {
    width: "100%",
    height: "100%"
    },

    image: {
    width: "90%",
    resizeMode: "contain",
    marginLeft: "5%",
    height: "25%",
    marginTop: "50%"


    }

});

export default Success;
