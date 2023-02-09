import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  Switch,
  Button,
  ScrollView
} from "react-native";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,

} from "accordion-collapse-react-native";
import { ListItem } from "@rneui/themed";
import GlobalStyles from "../../GlobalStyles";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

const Faq = ({ navigation }) => {
  const [expanded, setExpanded] = useState(false);

  return (
  <ScrollView>
    <View style={styles.mainContainer}>
      <View style={styles.titleTextRow}>
        <Text style={styles.titleText}>Frequently Asked Questions</Text>
      </View>

      <View style={styles.subTextRow}>
        <Text style={styles.subText}>
          Click on the questions to see the answers
        </Text>
      </View>

      <Collapse
        style={{
          width: "90%",
          backgroundColor: "white",
          height: "auto",
          borderRadius: 15,
          marginLeft: "5%",
          minHeight: 35,
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5%",
          padding: "1.5%",
        }}
      >
        <CollapseHeader>
          <View>
            <Text style={{ fontWeight: "700", fontSize: 16 }}>
              Carbon Tracker & Calculator
            </Text>
          </View>
        </CollapseHeader>
        <CollapseBody
          style={{ marginTop: "5%", marginBottom: "5%", textAlign: "center" }}
        >
          <Text>
            Calculate the emissions you produce through shopping, eating,
            travelling, and a variety of other activities.
          </Text>
        </CollapseBody>
      </Collapse>

      <Collapse
        style={{
          width: "90%",
          backgroundColor: "white",
          height: "auto",
          borderRadius: 15,
          marginLeft: "5%",
          minHeight: 35,
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5%",
          padding: "1.5%",
        }}
      >
        <CollapseHeader>
          <View>
            <Text style={{ fontWeight: "700", fontSize: 16 }}>Add funds</Text>
          </View>
        </CollapseHeader>
        <CollapseBody
          style={{ marginTop: "5%", marginBottom: "5%", textAlign: "center" }}
        >
          <Text>
            Add funds to your Carbonyte account. Now with Carbonyte, you can add
            funds to pay your bills or buy things with just one click
          </Text>
        </CollapseBody>
      </Collapse>

      <Collapse
        style={{
          width: "90%",
          backgroundColor: "white",
          height: "auto",
          borderRadius: 15,
          marginLeft: "5%",
          minHeight: 35,
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5%",
          padding: "1.5%",
        }}
      >
        <CollapseHeader>
          <View>
            <Text style={{ fontWeight: "700", fontSize: 16 }}>
              Send Money  
            </Text>
          </View>
        </CollapseHeader>
        <CollapseBody
          style={{ marginTop: "5%", marginBottom: "5%", textAlign: "center" }}
        >
          <Text>
            Sending money to your family and friends is now very easy. Start
            sending money through your Carbonyte app at any time, from
            anywhere.    
          </Text>
        </CollapseBody>
      </Collapse>

      <Collapse
        style={{
          width: "90%",
          backgroundColor: "white",
          height: "auto",
          borderRadius: 15,
          marginLeft: "5%",
          minHeight: 35,
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5%",
          padding: "1.5%",
        }}
      >
        <CollapseHeader>
          <View>
            <Text style={{ fontWeight: "700", fontSize: 16 }}>
              Bank Transaction Statement
            </Text>
          </View>
        </CollapseHeader>
        <CollapseBody
          style={{ marginTop: "5%", marginBottom: "5%", textAlign: "center" }}
        >
          <Text>
            Get a list of all transactions done from your Carbonyte account,
            monthly. Keep check on the detailed list of deposits and
            withdrawals.
          </Text>
        </CollapseBody>
      </Collapse>

      <Collapse
        style={{
          width: "90%",
          backgroundColor: "white",
          height: "auto",
          borderRadius: 15,
          marginLeft: "5%",
          minHeight: 35,
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5%",
          padding: "1.5%",
        }}
      >
        <CollapseHeader>
          <View>
            <Text style={{ fontWeight: "700", fontSize: 16 }}>
              Freeze or Unfreeze Card Virtually  
            </Text>
          </View>
        </CollapseHeader>
        <CollapseBody
          style={{ marginTop: "5%", marginBottom: "5%", textAlign: "center" }}
        >
          <Text>
            If you've lost your credit card or want to take a break from
            spending, freezing your card will allow you to pause the majority of
            new transactions.
          </Text>
        </CollapseBody>
      </Collapse>

      <Collapse
        style={{
          width: "90%",
          backgroundColor: "white",
          height: "auto",
          borderRadius: 15,
          marginLeft: "5%",
          minHeight: 35,
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5%",
          padding: "1.5%",
        }}
      >
        <CollapseHeader>
          <View>
            <Text style={{ fontWeight: "700", fontSize: 16 }}>
              Analyze Spending  
            </Text>
          </View>
        </CollapseHeader>
        <CollapseBody
          style={{ marginTop: "5%", marginBottom: "5%", textAlign: "center" }}
        >
          <Text>
            Set your savings goals, keep tabs on your credit, and track your
            transactions. Get the best professional financial data you need from
            our spending Analyzer.   
          </Text>
        </CollapseBody>
      </Collapse>

      <Collapse
        style={{
          width: "90%",
          backgroundColor: "white",
          height: "auto",
          borderRadius: 15,
          marginLeft: "5%",
          minHeight: 35,
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5%",
          padding: "1.5%",
        }}
      >
        <CollapseHeader>
          <View>
            <Text style={{ fontWeight: "700", fontSize: 16 }}>
              Plan Your Future Spending
            </Text>
          </View>
        </CollapseHeader>
        <CollapseBody
          style={{ marginTop: "5%", marginBottom: "5%", textAlign: "center" }}
        >
          <Text>
            Set your budget or be prepared with your spending for the coming
            week or month using the list of all upcoming expenses!
          </Text>
        </CollapseBody>
      </Collapse>

      <Collapse
        style={{
          width: "90%",
          backgroundColor: "white",
          height: "auto",
          borderRadius: 15,
          marginLeft: "5%",
          minHeight: 35,
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5%",
          padding: "1.5%",
        }}
      >
        <CollapseHeader>
          <View>
            <Text style={{ fontWeight: "700", fontSize: 16 }}>
              Virtual Forest
            </Text>
          </View>
        </CollapseHeader>
        <CollapseBody
          style={{ marginTop: "5%", marginBottom: "5%", textAlign: "center" }}
        >
          <Text>
            Depending on the type of your Carbonyte card, we will plant 1, 5 or
            10 trees a month. You can even check your virtual forest with our
            app.  
          </Text>
        </CollapseBody>
      </Collapse>

      <Collapse
        style={{
          width: "90%",
          backgroundColor: "white",
          height: "auto",
          borderRadius: 15,
          marginLeft: "5%",
          minHeight: 35,
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5%",
          padding: "1.5%",
        }}
      >
        <CollapseHeader>
          <View>
            <Text style={{ fontWeight: "700", fontSize: 16 }}>
              Buy Projects
            </Text>
          </View>
        </CollapseHeader>
        <CollapseBody
          style={{ marginTop: "5%", marginBottom: "5%", textAlign: "center" }}
        >
          <Text>
            With Carbonyte, you can buy projects that are based on
            sustainability. Contribute to saving the planet through your
            banking.
          </Text>
        </CollapseBody>
      </Collapse>

      <Collapse
        style={{
          width: "90%",
          backgroundColor: "white",
          height: "auto",
          borderRadius: 15,
          marginLeft: "5%",
          minHeight: 35,
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5%",
          padding: "1.5%",
        }}
      >
        <CollapseHeader>
          <View>
            <Text style={{ fontWeight: "700", fontSize: 16 }}>
              Establish a spending limit.
            </Text>
          </View>
        </CollapseHeader>
        <CollapseBody
          style={{ marginTop: "5%", marginBottom: "5%", textAlign: "center" }}
        >
          <Text>
            Don't worry if you're on a tight budget. With Carbonyte, you can set
            your spending limit for the week or even for the month and be on
            track with your finances.
          </Text>
        </CollapseBody>
      </Collapse>
      <View style={{width: "100%", height: 30}}/>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: GlobalStyles.DivContainer.backgroundColor,
    height: GlobalStyles.DivContainer.height,
    width: "100%",
    flex: GlobalStyles.DivContainer.flex,
  },

  titleTextRow: {
    marginTop: GlobalStyles.Title.marginTop,
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
  },

  titleText: {
    fontSize: GlobalStyles.Title.fontSize,
    fontWeight: GlobalStyles.Title.fontWeight,
  },

  subText: {
    fontSize: GlobalStyles.RowText.fontSize,
    fontWeight: GlobalStyles.RowText.fontWeight,
  },

  subTextRow: {
    marginTop: GlobalStyles.RowText.marginTop,
    width: GlobalStyles.DivContainer.width,
    marginLeft: GlobalStyles.DivContainer.marginLeft,
    fontColor: GlobalStyles.RowText.fontColor,
  },
});

export default Faq;
