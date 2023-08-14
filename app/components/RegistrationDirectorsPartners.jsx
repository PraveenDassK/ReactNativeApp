import React, { useState, useContext, Fragment, } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,

} from "react-native";
import AuthContext from "../auth/context";

import Screen from "./Screen";
import Button from "./AppButton";

import RegistrationCompanyDBCDetails from "./RegistrationCompanyDBCDetails";
import RegistrationCompanyDBCDetails2 from "./RegistrationCompanyDBCDetails2";

import apiLogin from "../api/apiLogin";

const RegistrationDirectorsPartners = ({ SaveDetails}) => {

  const [isAdding, setIsAdding] = useState("")
  const [userType, setType] = useState("")
  const [directors, setDirectors] = useState([])
  const [beneficalOwners, setIntrests] = useState([])
  const [controlingIntrests, setOwners] = useState([])

  const handleDelete = (id, items, setItems) => {
    const originalPeople = [...items];
    const filteredPeople = items.filter((director) => director.id !== id);
    setItems(filteredPeople);
  };

  const handleAdd = (name) => {
    setIsAdding(true)
  }
  const handleNext = () => {
    SaveDetails(null, "CompanyDirectors");
  }

  const register = async () => {
    const obj = [
      {
        "id": 0,
        "customerId": "",
        "emails": [
          {
            "emailId": "jack.h@carbonyte.io"
          }
        ],
        "phoneNumbers": [
          {
            "phoneNo": "7927201649"
          }
        ],
        "customerDetails": {
          "documentNo": "",
          "documentType": "",
          "address": "40 South way",
          "firstName": "Jack",
          "dob": "01-01-1970",
          "nationalId": "2",
          "lastName": "Huang",
          "postCode": "HA9 0SQ",
          "postTown": "London",
          "country": "England",
          "locale": "en_GB",
          "salutation": "MR",
          "gender": "Male",
          "maritalStatus": "Single",
          "employmentDetails": "Employed"
        },
        "income": {
          "totalIncome": "",
          "savings": "",
          "taxResidency": "",
          "incomeSources": [
            "string"
          ]
        },
        "key": "",
        "role": "Director",
        "ownershipPercentage": 51,
        "marketingChoices": "string"
      }
    ]

    const registration = await apiLogin.RegisterBusinessDirectors("12870376",obj)

    //handleNext()
  }

  return (
    <Screen>
      {isAdding ? <RegistrationCompanyDBCDetails userType={userType} setIsAdding={setIsAdding}
        setDirectors={setDirectors}
        setIntrests={setIntrests}
        setOwners={setOwners}
      /> :
        <View
          style={styles.mainContainer}
        ><Text>Please enter the relevent people</Text>

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
                  setIsAdding={() => { handleAdd(); setType("Dir") }}
                />
              </View>
              <View style={styles.directorPartnerContainer}>
                <DirectorPartnerItems
                  title={"Beneficial owners"}
                  items={beneficalOwners}
                  onDelete={(item) =>
                    handleDelete(item, beneficalOwners, setOwners)
                  }
                  setIsAdding={() => { handleAdd(); setType("Ben") }}
                />
              </View>
              <View style={styles.directorPartnerContainer}>
                <DirectorPartnerItems
                  title={"Controlling intrests"}
                  items={controlingIntrests}
                  onDelete={(item) =>
                    handleDelete(item, controlingIntrests, setIntrests)
                  }
                  setIsAdding={() => { handleAdd(); setType("Con") }}
                />
              </View>
            </View>

          </ScrollView>
          <Button title={"confirm"} textColor={"white"} color={"black"} onPress={register} />

        </View>
      }
    </Screen>
  );
};

const DirectorPartnerItems = ({ items, onDelete, title, setIsAdding, }) => {
  return (
    <View>
      <RegistrationInputSelect
        name={title}
        onAdd={
          setIsAdding
        }
      />

      {items.map((item) => (
        <Fragment key={item.id}>
          <RegistrationInputList
            firstName={item.firstName}
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
      <TouchableOpacity onPress={() => { onAdd(name); console.log("!") }} style={styles.inputIconContainer}>
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
