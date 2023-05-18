import React from "react";
import { Formik } from "formik";
import { TouchableWithoutFeedback, StyleSheet, Keyboard } from "react-native";
import KeyboardAvoider from "../KeyboardAvoider";

function AppForm({ initialValues, onSubmit, validationSchema, children }) {
  return (
    <KeyboardAvoider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {() => <>{children}</>}
        </Formik>
      </TouchableWithoutFeedback>
    </KeyboardAvoider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppForm;
