import React, {useContext, useEffect, useState} from 'react';
import {Text, StyleSheet, View, Image, Pressable, Switch, ScrollView} from 'react-native';
import GlobalStyles from '../../GlobalStyles';
import AuthContext from '../auth/context';

import api from '../api/api_list';

const CardSettings = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);
  const toggleSwitch3 = () => setIsEnabled3((previousState) => !previousState);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    getSettings();
  }, []);

  const getSettings = async () => {
    console.log(authContext.accountID);
    const response = await api.GetToggles(authContext.accountID);
    const data = response.data.details;
    console.log(data);
    data.onlineTransactions ? setIsEnabled(true) : null;
    data.swipePayments ? setIsEnabled1(true) : null;
    data.atmWithdrawals ? setIsEnabled2(true) : null;
    data.contactlessPayments ? setIsEnabled3(true) : null;
  };

  const sendRequest = async () => {
    const response = await api.SetToggles(authContext.accountID, isEnabled, isEnabled1, isEnabled2, isEnabled3);
    console.log(response);
  };
  sendRequest();

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.titleTextRow}>
          <Text style={styles.titleText}>Settings</Text>
        </View>

        <Pressable style={styles.groupChild} onPress={() => console.log('wtf')}>
          <View
            style={{width: '80%', marginLeft: '10%', borderRadius: 15, marginTop: '5%', backgroundColor: 'white', height: 60, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image style={{height: '70%', resizeMode: 'contain', flex: 1, alignSelf: 'center', marginLeft: '5%'}} source={require('../assets/meter-1.png')} />
            <View style={{flex: 9, justifyContent: 'center', marginLeft: '2.5%'}}>
              <Text style={{fontWeight: '700'}}>Spending Limit</Text>
              <Text style={{fontWeight: '200', fontSize: 10}}>Set you monthly spending limit</Text>
            </View>
          </View>
        </Pressable>

        <Text style={{marginLeft: '10%', marginTop: '5%', fontSize: 12, fontWeight: '700'}}>Security</Text>

        <View style={{width: '80%', marginLeft: '10%', borderRadius: 15, marginTop: '5%', backgroundColor: 'white', height: 'auto'}}>
          <View style={{width: '100%', height: 85, borderRadius: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image style={{height: '70%', resizeMode: 'contain', flex: 1, alignSelf: 'center', marginLeft: '5%'}} source={require('../assets/globe.png')} />
            <View style={{flex: 7, justifyContent: 'center', marginLeft: '2.5%'}}>
              <Text style={{fontWeight: '700'}}>Online Transactions</Text>
              <Text style={{fontWeight: '200', fontSize: 10}}>
                Internet based transactions are generally high-risk. You can switch them off for extra security. Payments you make using mobile wallets like Apple Pay won’t be affected.
              </Text>
            </View>
            <Switch
              trackColor={{false: GlobalStyles.Color.gray_600, true: GlobalStyles.Color.blue_100}}
              thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          <View style={{width: '100%', height: 85, borderRadius: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image style={{height: '70%', resizeMode: 'contain', flex: 1, alignSelf: 'center', marginLeft: '5%'}} source={require('../assets/swipecard.png')} />
            <View style={{flex: 7, justifyContent: 'center', marginLeft: '2.5%'}}>
              <Text style={{fontWeight: '700'}}>Swipe Payments</Text>
              <Text style={{fontWeight: '200', fontSize: 10}}>Sometimes cards can be cloned, you can turn of the magnetic stripe here</Text>
            </View>
            <Switch
              trackColor={{false: GlobalStyles.Color.gray_600, true: GlobalStyles.Color.blue_100}}
              thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
              onValueChange={toggleSwitch1}
              value={isEnabled1}
            />
          </View>

          <View style={{width: '100%', height: 85, borderRadius: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image style={{height: '70%', resizeMode: 'contain', flex: 1, alignSelf: 'center', marginLeft: '5%'}} source={require('../assets/atm.png')} />
            <View style={{flex: 7, justifyContent: 'center', marginLeft: '2.5%'}}>
              <Text style={{fontWeight: '700'}}>ATM Withdrawals</Text>
              <Text style={{fontWeight: '200', fontSize: 10}}>Turn off ATM Withdrawals here</Text>
            </View>
            <Switch
              trackColor={{false: GlobalStyles.Color.gray_600, true: GlobalStyles.Color.blue_100}}
              thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
              onValueChange={toggleSwitch2}
              value={isEnabled2}
            />
          </View>

          <View style={{width: '100%', height: 85, borderRadius: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image style={{height: '70%', resizeMode: 'contain', flex: 1, alignSelf: 'center', marginLeft: '5%'}} source={require('../assets/contactlesspayment-1.png')} />
            <View style={{flex: 7, justifyContent: 'center', marginLeft: '2.5%'}}>
              <Text style={{fontWeight: '700'}}>Contactless Payments</Text>
              <Text style={{fontWeight: '200', fontSize: 10}}>Turn off contactless functionality</Text>
            </View>
            <Switch
              trackColor={{false: GlobalStyles.Color.gray_600, true: GlobalStyles.Color.blue_100}}
              thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
              onValueChange={toggleSwitch3}
              value={isEnabled3}
            />
          </View>
        </View>

        <View style={{width: '80%', marginLeft: '10%', borderRadius: 15, marginTop: '5%', backgroundColor: 'white', height: 'auto'}}>
          <Pressable onPress={() => navigation.navigate('ReplaceCard')}>
            <View style={{width: '100%', height: 60, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image style={{height: '70%', resizeMode: 'contain', flex: 1, alignSelf: 'center', marginLeft: '5%'}} source={require('../assets/reset.png')} />
              <View style={{flex: 9, justifyContent: 'center', marginLeft: '2.5%'}}>
                <Text style={{fontWeight: '700'}}>Replace Card</Text>
                <Text style={{fontWeight: '200', fontSize: 10}}>Lost, Stolen, Not Delivered</Text>
              </View>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Terminate')}>
            <View style={{width: '100%', height: 60, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image style={{height: '70%', resizeMode: 'contain', flex: 1, alignSelf: 'center', marginLeft: '5%'}} source={require('../assets/delete-redbin.png')} />
              <View style={{flex: 9, justifyContent: 'center', marginLeft: '2.5%'}}>
                <Text style={{fontWeight: '700'}}>Terminate Card</Text>
                <Text style={{fontWeight: '200', fontSize: 10}}>This card will be permanently terminated</Text>
              </View>
            </View>
          </Pressable>
        </View>

      <Pressable style={styles.groupChild} onPress={() => console.log('wtf')}>
                <View
                  style={{width: '80%', marginLeft: '10%', borderRadius: 15, marginTop: '5%', backgroundColor: 'white', height: 60, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Image style={{height: '70%', resizeMode: 'contain', flex: 1, alignSelf: 'center', marginLeft: '5%'}} source={require('../assets/meter-1.png')} />
                  <View style={{flex: 9, justifyContent: 'center', marginLeft: '2.5%'}}>
                    <Text style={{fontWeight: '700'}}>Upgrade Card</Text>
                    <Text style={{fontWeight: '200', fontSize: 10}}>Upgrade your card plan</Text>
                  </View>
                </View>
              </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: GlobalStyles.DivContainer.backgroundColor,
    height: 'auto',
    width: '100%',
    flex: GlobalStyles.DivContainer.flex,
    minHeight: 812,
  },

  titleTextRow: {
    marginTop: GlobalStyles.Title.marginTop,
    marginLeft: GlobalStyles.Title.marginLeft,
    width: GlobalStyles.Title.width,
  },

  titleText: {
    fontSize: GlobalStyles.Title.fontSize,
    fontWeight: GlobalStyles.Title.fontWeight,
  },
});

export default CardSettings;
