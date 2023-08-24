import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
} from "react-native";
import RegistrationDirectororPartner from "../components/RegistartionDirectororPartner";
import RegistartionDirectorForm from "../components/RegistartionDirectorForm";
import Button from "../components/AppButton";

import { getCompanyType } from "../utility/companyTypeRefrence";

const DirectororPartner = ({ navigation }) => {
  const [directorData, setDirectorData] = useState([]);
  const [BeneficialownersData, setBeneficialownersData] = useState([]);
  const [ControllingInterestsData, setControllingInterestsData] = useState([]);

  const [registrationData, setRegistrationData] = useState({
    businessId: "CBFC015105",
    businessType: "SOLE TRADER",
  })
  
  const businessTypes = [
    "LIMITED COMPANY", //D B C S
    "SOLE TRADER", //D C
    "ORDINARY PARTNERSHIP", //DD C S
    "LIMITED PARTNERSHIP", //DD B C S
    "LIMITED LIABILITY PARTNERSHIP" //DD B C S
  ]

  console.log(registrationData.businessType)

  const [formView, setFormView] = useState(0);
  const [role, setRole] = useState("");
  const handleOnPress = (event) => {

    setRole(event);
    if (formView === 0) {
      setFormView(1);
    } else {
      setFormView(0);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {formView === 0 ? (
        <RegistrationDirectororPartner
          onPress={handleOnPress}
          setRole={setRole}
          directorData={directorData}
          BeneficialownersData={BeneficialownersData}
          ControllingInterestsData={ControllingInterestsData}
          setDirectorData={setDirectorData}
          setBeneficialownersData={setBeneficialownersData}
          setControllingInterestsData={setControllingInterestsData}
          businessType={registrationData.businessType}

        />
      ) : (
        <RegistartionDirectorForm
          role={role}
          setFormView={setFormView}
          setDirectorData={setDirectorData}
          directorData={directorData}
          BeneficialownersData={BeneficialownersData}
          ControllingInterestsData={ControllingInterestsData}
          setBeneficialownersData={setBeneficialownersData}
          setControllingInterestsData={setControllingInterestsData}
        />
        // <View><Text>Hello</Text></View>
      )}
      {/* <Button title={"continue"} onPress={()=>navigation.navigate("ProofOfID")}></Button> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    top: "10%",
    padding: "10%",
  },
  image: {
    height: "40%",
    top: "15%",
    alignSelf: "center",
    aspectRatio: 53.98 / 85.6,
    borderRadius: 5,
  },
  ProgressBar: {
    top: "32.5%",
    alignSelf: "center",
    height: "1%",
    resizeMode: "contain",
  },
});

export default DirectororPartner;
