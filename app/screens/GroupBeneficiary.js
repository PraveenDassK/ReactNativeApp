import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Pressable,
  FlatList,
  KeyboardAvoidingView,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Dropdown } from "react-native-element-dropdown";
import Button from "../components/AppButton";
import ErrorMessage from "../components/forms/ErrorMessage";
import AuthContext from "../auth/context";
import KeyboardAvoider from "../components/KeyboardAvoider";
import Icon from "../components/Icon";
import { LinearGradient } from "expo-linear-gradient";
import apiBeneficiaries from "../api/apiBeneficiaries";
import GlobalStyles from "../../GlobalStyles";

const validationSchema = Yup.object().shape({
  createGroup: Yup.string().required().min(1).max(30).label("Group name"),
});

const DATA = [];

const BENEFICIARY = [];
const GroupBeneficiary = ({ navigation }) => {
  const [groupData, setGroupData] = useState(DATA);
  const [beneficiary, setBeneficiary] = useState(BENEFICIARY);
  const { userID, customerDetails, darkMode } = useContext(AuthContext);
  const [dropdownError, setDropDownError] = useState("");
  useEffect(() => {
    loadData();
  }, []);

  /**
   * @dev This loads the data of the user's beneficiary to add it to the list
   */
  const loadData = async () => {
    const request = await apiBeneficiaries.GetUserBeneficiaries(userID);
    
    setBeneficiary(request);
    await apiBeneficiaries.GetGroupBeneficiaries(customerDetails);
  };

  const handleSelect = (beneficiaryItem) => {
    
    setGroupData((prevData) => [...prevData, beneficiaryItem]);
  };

  const handleDelete = (flatIndex) => {
    setGroupData([
      ...groupData.filter((user, index) => {
        return index !== flatIndex;
      }),
    ]);
    
  };

  const handleSend = () => {
    
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
    
    if (beneficiaryData.length === 0) {
      return setDropDownError("Beneficiary is required*");
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
    <KeyboardAvoider>
      <View
        style={
          darkMode === "DARK" ? styles.darkmainContainer : styles.mainContainer
        }
      >
        <View style={styles.titleContainer}>
          <Text
            style={
              darkMode === "DARK"
                ? styles.darkcontainerText
                : styles.containerText
            }
          >
            Create Group
          </Text>
        </View>
        <Formik
          initialValues={{
            createGroup: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <>
              <View
                style={
                  darkMode === "DARK" ? styles.darkcontainer : styles.container
                }
              >
                <Text
                  style={
                    darkMode === "DARK"
                      ? styles.darkformLabel
                      : styles.formLabel
                  }
                >
                  Group Name
                </Text>
                <TextInput
                  placeholder="Enter the group name"
                  placeholderTextColor="#D3D3D3"
                  keyboardType="Text"
                  onBlur={() => setFieldTouched("createGroup")}
                  onChangeText={handleChange("createGroup")}
                  style={[
                    darkMode === "DARK"
                      ? styles.darkchildBorder
                      : styles.childBorder,
                    { padding: 10 },
                  ]}
                />
                <ErrorMessage
                  error={errors.createGroup}
                  visible={touched.createGroup}
                />
                <Text
                  style={[
                    darkMode === "DARK"
                      ? styles.darkformLabel
                      : styles.formLabel,
                    { marginTop: "5%" },
                  ]}
                >
                  Select Beneficiary
                </Text>
                <Dropdown
                  style={[
                    darkMode === "DARK" ? styles.darkdropdown : styles.dropdown,
                  ]}
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
                  placeholderStyle={{
                    color:
                      darkMode === "DARK" ? GlobalStyles.Color.white : null,
                  }}
                  selectedTextStyle={{
                    color:
                      darkMode === "DARK" ? GlobalStyles.Color.white : null,
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
                          darkMode={darkMode}
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
                <TouchableOpacity onPress={handleSubmit}>
                  <LinearGradient
                    colors={
                      darkMode === "DARK"
                        ? ["#178BFF", "#0101FD"]
                        : ["#212529", "#3A3A3A"]
                    }
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={
                      darkMode === "DARK"
                        ? styles.darkbuttonPayNew
                        : styles.buttonPayNew
                    }
                  >
                    <Text style={styles.buttonPayNewText}>Continue</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </View>
    </KeyboardAvoider>
  );
};

const BeneficiaryWidget = ({
  initials = "RG",
  name = "Ryan Garcia",
  onDelete = () => console.log("Delete"),
  onSend = () => console.log("Send"),
  darkMode,
}) => {
  return (
    <TouchableOpacity
      style={
        darkMode === "DARK"
          ? styles.darkbeneficiariesContainer
          : styles.beneficiariesContainer
      }
    >
      <Pressable
        onPress={onDelete}
        style={{ position: "absolute", zIndex: 10, right: 0 }}
      >
        <Icon name="minus-thick" iconColor="white" size={20} />
      </Pressable>
      <View
        style={
          darkMode === "DARK"
            ? styles.darkbeneficiariesItem
            : styles.beneficiariesItem
        }
      >
        <View style={styles.beneficiariesPlaceholder}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{initials}</Text>
        </View>
        <View
          style={
            darkMode === "DARK"
              ? styles.darkbeneficiariesText
              : styles.beneficiariesText
          }
        >
          <Text
            style={{
              fontSize: 12,
              color: darkMode === "DARK" ? GlobalStyles.Color.white : null,
            }}
            numberOfLines={1}
          >
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
  darkbeneficiariesContainer: {
    paddingTop: 10,
    paddingBottom: 24,
    width: 100,
    height: 142.5,
    // backgroundColor: GlobalStyles.Color.secondaryDarkTheme_bg,
  },
  beneficiariesText: {
    paddingTop: "2.5%",
  },
  darkbeneficiariesText: {
    paddingTop: "2.5%",
    color: GlobalStyles.Color.white,
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
  darkbeneficiariesItem: {
    height: 110,
    width: 90,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    padding: "10%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GlobalStyles.Color.secondaryDarkTheme_bg,
  },
  buttonContainer: {},
  mainContainer: {
    flex: 1,
    padding: "10%",
  },
  darkmainContainer: {
    flex: 1,
    padding: "10%",
    backgroundColor: GlobalStyles.Color.darkTheme_bg,
  },
  titleContainer: {
    flex: 1,

    justifyContent: "center",
  },
  container: { flex: 5, justifyContent: "center" },
  darkcontainer: {
    flex: 5,
    justifyContent: "center",
    // paddingTop:"10%",
    // backgroundColor: GlobalStyles.Color.secondaryDarkTheme_bg,
  },

  containerText: {
    fontSize: 30,
    fontFamily: "Montserrat",
  },
  darkcontainerText: {
    fontSize: 30,
    fontFamily: "Montserrat",
    color: GlobalStyles.Color.white,
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
  darkdropdown: {
    marginTop: 10,
    width: "100%",
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: GlobalStyles.Color.secondaryDarkTheme_bg,
    paddingHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 14,
    fontSize: 14,
    color: GlobalStyles.Color.darkGray,
    backgroundColor: GlobalStyles.Color.secondaryDarkTheme_bg,
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
  darkchildBorder: {
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: "#D3D3D3",
    opacity: 1,
    height: 50,
    marginTop: "2.5%",
    backgroundColor: GlobalStyles.Color.secondaryDarkTheme_bg,
    color: GlobalStyles.Color.white,
  },
  formLabel: { fontSize: 14, fontFamily: "Montserrat", marginBottom: 5 },
  darkformLabel: {
    fontSize: 14,
    fontFamily: "Montserrat",
    marginBottom: 5,
    color: GlobalStyles.Color.white,
  },
  buttonPayNew: {
    borderRadius: 10,
    // backgroundColor: GlobalStyles.Color.lightBlack,
    height: 47,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  darkbuttonPayNew: {
    borderRadius: 10,
    // backgroundColor: GlobalStyles.Color.gray_500,
    height: 47,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  buttonPayNewText: {
    color: GlobalStyles.Color.white,
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    // marginLeft: 6,
  },
});
