import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Pressable,
  FlatList,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Dropdown } from "react-native-element-dropdown";
import Button from "../components/AppButton";
import ErrorMessage from "../components/forms/ErrorMessage";
import AuthContext from "../auth/context";

import Icon from "../components/Icon";

import apiBeneficiaries from "../api/apiBeneficiaries";

const validationSchema = Yup.object().shape({
  createGroup: Yup.string().required().min(1).max(30).label("Group name"),
});

const DATA = [];

const BENEFICIARY = [];
const GroupBeneficiary = ({ navigation }) => {
  const [groupData, setGroupData] = useState(DATA);
  const [beneficiary, setBeneficiary] = useState(BENEFICIARY);
  const { userID, customerDetails } = useContext(AuthContext);
  const [dropdownError, setDropDownError] = useState("");
  useEffect(() => {
    loadData();
  }, []);

  /**
   * @dev This loads the data of the user's beneficiary to add it to the list
   */
  const loadData = async () => {
    const request = await apiBeneficiaries.GetUserBeneficiaries(userID);
    console.log(request);
    setBeneficiary(request);
    await apiBeneficiaries.GetGroupBeneficiaries(customerDetails);
  };

  const handleSelect = (beneficiaryItem) => {
    console.log(beneficiaryItem);
    setGroupData((prevData) => [...prevData, beneficiaryItem]);
  };

  const handleDelete = (flatIndex) => {
    setGroupData([
      ...groupData.filter((user, index) => {
        return index !== flatIndex;
      }),
    ]);
    console.log("deleted");
  };

  const handleSend = () => {
    console.log("handleSent");
  };

  /**
   *
   * @param {*} param0
   */
  const handleSubmit = async ({ createGroup }) => {
    let beneficiaryData = [];
    groupData.forEach((beneficiary) => {
      beneficiaryData.push({
        beneficiariesId: beneficiary.id,
        beneficiariesName: beneficiary.name,
      });
    });
    console.log(beneficiaryData, "this is data of group");
    if (beneficiaryData.length === 0) {
      return setDropDownError("Fiels is required*");
    } else {
      const success = await apiBeneficiaries.CreateNewGroupBeneficiary({
        carbonyteId: customerDetails,
        groupName: createGroup,
        beneficiariesDetails: beneficiaryData,
      });

      if (success) {
      } else {
      }
      alert("Your group has been made");
      navigation.navigate("SendMoney");
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.containerText}>Create Group</Text>
      </View>
      <Formik
        initialValues={{
          createGroup: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <View style={styles.container}>
              <Text>Group Name</Text>
              <TextInput
                placeholder="Enter the group name"
                placeholderTextColor="#D3D3D3"
                keyboardType="Text"
                onBlur={() => setFieldTouched("createGroup")}
                onChangeText={handleChange("createGroup")}
                style={[styles.childBorder, { padding: 10 }]}
              />
              <ErrorMessage
                error={errors.createGroup}
                visible={touched.createGroup}
              />
              <Text style={{ marginTop: "5%" }}>Select Beneficiary</Text>
              <Dropdown
                style={[styles.dropdown]}
                containerStyle={styles.dropdownContainer}
                data={beneficiary}
                maxHeight={100}
                labelField="name"
                valueField="id"
                placeholder={"Select"}
                value={1}
                onChange={(item) => {
                  handleSelect(item);
                  // setStatus(item.value);
                  // setIsFocus(false);
                }}
              />
              <ErrorMessage error={dropdownError} visible={dropdownError} />
              <View>
                {groupData && (
                  <FlatList
                    data={groupData}
                    renderItem={({ item, index }) => (
                      <BeneficiaryWidget
                        initials={item.name[0]}
                        name={item.name}
                        onDelete={() => handleDelete(index)}
                        onSend={handleSend}
                      />
                    )}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  />
                )}
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <Button
                title="create group"
                textColor="white"
                color="black"
                onPress={handleSubmit}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const BeneficiaryWidget = ({
  initials = "RG",
  name = "Ryan Garcia",
  onDelete = () => console.log("Delete"),
  onSend = () => console.log("Send"),
}) => {
  return (
    <TouchableOpacity style={styles.beneficiariesContainer}>
      <Pressable
        onPress={onDelete}
        style={{ position: "absolute", zIndex: 10, right: 0 }}
      >
        <Icon name="minus-thick" iconColor="white" size={20} />
      </Pressable>
      <View style={styles.beneficiariesItem}>
        <View style={styles.beneficiariesPlaceholder}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{initials}</Text>
        </View>
        <View style={styles.beneficiariesText}>
          <Text style={{ fontSize: 12 }} numberOfLines={1}>
            {name}
          </Text>
        </View>
      </View>
      <Pressable
        onPress={onSend}
        style={{ position: "absolute", bottom: 2, right: "38%" }}
      >
        <Icon name="navigation-variant-outline" size={30} />
      </Pressable>
    </TouchableOpacity>
  );
};

export default GroupBeneficiary;

const styles = StyleSheet.create({
  beneficiariesPlaceholder: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "violet",
    width: "100%",
    height: "80%",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#D3D3D3",
  },
  beneficiariesContainer: {
    paddingTop: 10,
    paddingBottom: 24,
    width: 100,
    height: 142.5,
  },
  beneficiariesText: {
    paddingTop: "2.5%",
  },
  beneficiariesItem: {
    height: 110,
    width: 90,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    padding: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {},
  mainContainer: {
    flex: 1,
    padding: "10%",
  },
  titleContainer: {
    flex: 1,

    justifyContent: "center",
  },
  container: { flex: 5, justifyContent: "center" },
  containerText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  dropdown: {
    borderRadius: 10,
    borderWidth: 0.5,
    height: 50,
    paddingHorizontal: 8,
    marginBottom: "5%",
    marginTop: "2.5%",
    opacity: 1,
    borderColor: "#D3D3D3",
  },
  dropdownContainer: {
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  childBorder: {
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: "#D3D3D3",
    opacity: 1,
    height: 50,
    marginTop: "2.5%",
  },
});
