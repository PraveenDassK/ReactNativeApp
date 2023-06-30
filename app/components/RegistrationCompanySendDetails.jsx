import React, { useContext, useEffect, useState } from "react";
//import * as React from "react";
import {
  StyleSheet,
  Text,
} from "react-native";

import Button from "./AppButton";
import AuthScreen from "./AuthScreen";

const ConfirmDetailsBusiness = ({ SaveDetails, setScreenToShow, data}) => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    await SaveDetails(null, "CompanyConfirm");
    setLoading(false)
  };

  const handleBack = () => {
    console.log("!");
    setScreenToShow("CompanyUsage");
  };
  console.log(data)
  return (
    <AuthScreen title="Confirm Business details" img="turtleCard" handleBack={handleBack}>
      <Text>
        {data.company_name}
      </Text>
      {loading ?
        <Button
          title="Submission in progress"
          color="black"
          textColor="white"
          onPress={() => {}}
        />
        :
        <Button
          title="Continue"
          color="black"
          textColor="white"
          onPress={handleSubmit}
        />
      }

    </AuthScreen>
  );
};

const styles = StyleSheet.create({

});

export default ConfirmDetailsBusiness;
