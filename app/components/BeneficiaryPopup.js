import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import GlobalStyles from "../../GlobalStyles";

const BeneficiaryPopup = ({ modalVisible, setModalVisible }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade "
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalMainView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>New payee account name</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>X</Text>
            </Pressable>
          </View>
          <Text style={styles.bottomText}>
            For additional security and to help protect against fraud, we'll
            check the details you provide against the payee's account details,
            including the name on their account.
            {"\n"}
            {"\n"}
            Although this does not prevent all types of fraud, this will help
            give you reassurance that you are paying the correct person.
          </Text>
        </View>
      </Modal>
    </View>
  );
};

export default BeneficiaryPopup;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalMainView: {
    backgroundColor: GlobalStyles.Color.white,
    marginTop: "50%",
    marginHorizontal: "8%",
    padding: 20,
    borderRadius: 10,
  },
  modalView: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    flexDirection: "row",
    paddingVertical:5,
  },
  modalText:{
    fontFamily:"Montserrat",
    fontSize:14,
    color:GlobalStyles.Color.gray_2000,
  },
  textStyle:{
    color:GlobalStyles.Color.lightBlack,
    fontSize:16,
    fontFamily:"Montserrat"
  },
  bottomText:{
    color:GlobalStyles.Color.gray_2000,
    fontFamily:"Montserrat-Regular",
    fontSize:12,
  }
});
