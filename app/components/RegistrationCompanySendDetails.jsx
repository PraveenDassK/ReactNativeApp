import React, { useContext, useEffect, useState } from "react";
//import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import GlobalStyles from "../../GlobalStyles";
import Button from "./AppButton";
import AuthScreen from "./AuthScreen";
const ConfirmDetailsBusiness = ({
  SaveDetails,
  setScreenToShow,
  data,
  companyType,
  aboutBusines,
  companyOperations,
  companyUsage,
}) => {
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  console.log(data.registered_office_address, "this is a confirmation");
  const handleSubmit = async () => {
    setLoading(true);
    await SaveDetails(null, "CompanyConfirm");
    setLoading(false);
  };

  const handleBack = () => {
    setScreenToShow("CompanyUsage");
  };
  const handleEdit = (value) => {
    setModalVisible(true);
    // setSingleData(value);
  };

  return (
    <ScrollView>
      <AuthScreen
        title="Confirm Business details"
        img="turtleCard"
        handleBack={handleBack}
        height={400}
      >
        <EditComponents
          title={"Name of the Business"}
          value={data?.company_name}
          onPress={() => handleEdit()}
        />
        <EditComponents
          title={"Business Type"}
          value={companyType}
          onPress={() => handleEdit()}
        />
        <EditComponents
          title={"Location"}
          value={data?.company_name}
          onPress={() => handleEdit()}
        />
        <EditComponents
          title={"About your Business"}
          value={aboutBusines}
          onPress={() => handleEdit()}
        />
        <EditComponents
          title={"How are you earning?"}
          value={"Sales"}
          onPress={() => handleEdit()}
        />
        <EditComponents
          title={`Howlong have you been${"\n"} opearating?`}
          value={companyOperations}
          onPress={() => handleEdit()}
        />
        <EditComponents
          title={`Who are your main customers?`}
          value={data?.company_name}
          onPress={() => handleEdit()}
        />
        <EditComponents
          title={`Employee or customers outside${"\n"} of the UK?`}
          value={data?.company_name}
          onPress={() => handleEdit()}
        />

        {loading ? (
          <Button
            title="Submission in progress"
            color="black"
            textColor="white"
            onPress={() => {}}
          />
        ) : (
          <Button
            title="Continue"
            color="black"
            textColor="white"
            onPress={handleSubmit}
          />
        )}
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
                <Text style={styles.modalText}>Edit Details</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>X</Text>
                </Pressable>
              </View>
              <View style={{ padding: "0%" }}>
                <TextInput
                  style={styles.textInput}
                  //   keyboardType="numeric"
                  //   onChangeText={(newText) => checkText(newText)}
                  // defaultValue={singleData?.[1]}
                />

                <Button
                  title="Continue"
                  color="black"
                  textColor="white"
                  onPress={() => setModalVisible(false)}
                />
              </View>
            </View>
          </Modal>
        </View>
      </AuthScreen>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalMainView: {
    backgroundColor: GlobalStyles.Color.gray_200,
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
    paddingVertical: 5,
  },
  modalText: {
    fontFamily: "Montserrat",
    fontSize: 14,
    color: GlobalStyles.Color.gray_2000,
  },
  textInput: {
    borderColor: GlobalStyles.Color.borderColor,
    backgroundColor: GlobalStyles.Color.white,
    borderWidth: 1,
    paddingHorizontal: "7%",
    paddingVertical: "5%",
    fontSize: 15,
    marginVertical: "10%",
    borderRadius: 5,
  },

  textStyle: {
    color: GlobalStyles.Color.lightBlack,
    fontSize: 16,
    fontFamily: "Montserrat",
  },
});

export default ConfirmDetailsBusiness;

const EditComponents = ({ title, value, onPress }) => {
  return (
    <View
      style={{
        marginVertical: "3%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View>
        <View>
          <Text
            style={{
              color: GlobalStyles.Color.black,
              fontSize: 15,
              fontFamily: "Montserrat-Regular",
              textTransform: "capitalize",
            }}
          >
            {title}
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: GlobalStyles.Color.black,
              fontSize: 15,
              fontFamily: "Montserrat",
              marginTop: 10,
            }}
          >
            {value}
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Feather name="edit" size={24} color={GlobalStyles.Color.gray_700} />
      </TouchableOpacity>
    </View>
  );
};
