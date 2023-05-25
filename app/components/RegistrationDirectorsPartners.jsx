import React, { Fragment, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
 
} from "react-native";

import Screen from "./Screen";
import Button from "./AppButton";

const DIRECTORS = [
  { id: 1, firstname: "James", lastname: "Jones" },
  { id: 2, firstname: "Isiah", lastname: "Thomas" },
  { id: 3, firstname: "Juliet", lastname: "Newman" },
  { id: 4, firstname: "Eme", lastname: "Udoka" },
];
const BENEFITS = [
  { id: 1, firstname: "John", lastname: "Smith" },
  { id: 2, firstname: "Emily", lastname: "Davis" },
  { id: 3, firstname: "Michael", lastname: "Johnson" },
  { id: 4, firstname: "Sophia", lastname: "Wilson" },
];

const INTRESTS = [
  { id: 1, firstname: "Olivia", lastname: "Brown" },
  { id: 2, firstname: "Ethan", lastname: "Robinson" },
  { id: 3, firstname: "Ava", lastname: "Clark" },
  { id: 4, firstname: "William", lastname: "Adams" },
];

const RegistrationDirectorsPartners = () => {

  const [directors, setDirectors] = useState(DIRECTORS);
  const [beneficialOwners, setOwners] = useState(BENEFITS);
  const [controllingInterests, setIntrests] = useState(INTRESTS);

  const handleDelete = (id, items, setItems) => {
    const originalPeople = [...items];
    const filteredPeople = items.filter((director) => director.id !== id);
    setItems(filteredPeople);
  };

  return (
    <Screen>
    <View
          style={styles.mainContainer}
         
        >

      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
          <View onStartShouldSetResponder={() => true}>
            <View style={styles.directorPartnerContainer}>
              <DirectorPartnerItems
                title={"Directors"}
                items={directors}
                onDelete={(item) => handleDelete(item, directors, setDirectors)}
              />
            </View>
            <View style={styles.directorPartnerContainer}>
              <DirectorPartnerItems
                title={"Beneficial owners"}
                items={beneficialOwners}
                onDelete={(item) =>
                  handleDelete(item, beneficialOwners, setOwners)
                }
              />
            </View>
            <View style={styles.directorPartnerContainer}>
              <DirectorPartnerItems
                title={"Controlling intrests"}
                items={controllingInterests}
                onDelete={(item) =>
                  handleDelete(item, controllingInterests, setIntrests)
                }
              />
            </View>
          </View>

      </ScrollView>

          <Button title={"confirm"} textColor={"white"} color={"black"} />

        </View>
    </Screen>
  );
};

const DirectorPartnerItems = ({ items, onDelete, title }) => {
  return (
    <View>
      <RegistrationInputSelect
        name={title}
        onAdd={() => console.log("onAdd pressed ")}
      />

      {items.map((item) => (
        <Fragment key={item.id}>
          <RegistrationInputList
            firstname={item.firstname}
            onPress={() => onDelete(item.id)}
          />
        </Fragment>
      ))}
    </View>
  );
};

const RegistrationInputSelect = ({ name, onAdd }) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputTextContainer}>
        <Text>{name}</Text>
      </View>
      <TouchableOpacity onPress={onAdd} style={styles.inputIconContainer}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const RegistrationInputList = ({ firstname, onPress }) => {
  return (
    <View style={styles.inputListContainer}>
      <View style={styles.inputListTextContainer}>
        <Text>{firstname}</Text>
      </View>
      <Button
        title={"delete"}
        color="danger"
        style={{ width: "20%" }}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingVertical: 16,
    width: "100%",
  },
  directorPartnerContainer:{
    marginVertical: "2.5%"
  },
  dropdownContainer: {
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  dropdown: {
    dropdown: {
      height: 50,
      borderColor: "gray",
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
  },

  mainContainer: {
    flex: 1,
    justifyContent: "space-between",

    padding: "5%",
  },
  icon: {
    marginRight: 5,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",

    height: 50,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  inputTextContainer: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    marginRight: "2.5%",
  },
  inputIconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
  },
  inputListContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputListTextContainer: {
    flexDirection: "row",
    marginLeft: "5%",
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 14,
    color: "#D3D3D3",
  },
  selectedTextStyle: {
    fontSize: 16,
  },
});
export default RegistrationDirectorsPartners;
