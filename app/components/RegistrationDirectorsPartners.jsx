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

import RegistrationCompanyDBCDetails from "./RegistrationCompanyDBCDetails";
import RegistrationCompanyDBCDetails2 from "./RegistrationCompanyDBCDetails2";

const DIRECTORS = [
  {
    id: 1,
    "email": "jack.h@carbonyte.io",
    "phoneNumber": "7927201649",
    "address": {
      address1: "123 street",
      address2: "456 house",
      area: "Area 5",
      city: "City 6",
      locale: "en_GB",
      postcode: "WD40 1UB"
    },
    firstName: "Jack",
    lastName: "Huang",
    "dob": "01-01-1970",
    "nationalID": "2",
    "country": "UK",
    "gender": "Male",
    "ownershipPercentage": "50",
    "role": "Director"
  }
];
const BENEFITS = [

];

const INTRESTS = [

];

const RegistrationDirectorsPartners = ({navigation}) => {


  const [directors, setDirectors] = useState(DIRECTORS);
  const [beneficialOwners, setOwners] = useState(BENEFITS);
  const [controllingInterests, setIntrests] = useState(INTRESTS);

  const [screen, setScreen] = useState("")

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
                navigation={navigation}
                title={"Directors"}
                items={directors}
                onDelete={(item) => handleDelete(item, directors, setDirectors)}
              />
            </View>
            <View style={styles.directorPartnerContainer}>
              <DirectorPartnerItems
                navigation={navigation}
                title={"Beneficial owners"}
                items={beneficialOwners}
                onDelete={(item) =>
                  handleDelete(item, beneficialOwners, setOwners)
                }
              />
            </View>
            <View style={styles.directorPartnerContainer}>
              <DirectorPartnerItems
                navigation={navigation}
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

const DirectorPartnerItems = ({ navigation, items, onDelete, title }) => {
  return (
    <View>
      <RegistrationInputSelect
        name={title}
        onAdd={() => {
          console.log("onAdd pressed ")
          navigation.navigate('RegistrationDBC')
        }}
      />

      {items.map((item) => (
        <Fragment key={item.id}>
          <RegistrationInputList
            firstName={item.firstName}
            onPress={() => onDelete(item.id)}
          />
          {console.log(item)}
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

const RegistrationInputList = ({ firstName, onPress }) => {
  return (
    <View style={styles.inputListContainer}>
      <View style={styles.inputListTextContainer}>
        <Text>{firstName}</Text>
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
  directorPartnerContainer: {
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
