import React, { useContext, useEffect, useState } from "react";
import { Text, StyleSheet, View, Image, Pressable, Switch, Button } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage"


const SecurityAndPrivacy = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);

  const { setIsAuth } = useContext(AuthContext)

  useEffect(() =>{
    restoreSignIn()
  }, [])

  useEffect(() => {
    if (isEnabled) {
      authStorage.storeSignInSetting(JSON.stringify({"signedIn":`${isEnabled}`}))
      console.log("isEnabled", isEnabled)
      setIsAuth(isEnabled)
    }
    if(!isEnabled){
      authStorage.storeSignInSetting(JSON.stringify({"signedIn":`${isEnabled}`}))
      setIsAuth(isEnabled)
      console.log("isNotEnabled", isEnabled)
    }
    
  },[isEnabled])


const restoreSignIn = async () => {
  console.log('trying for signIn in security')
  const token = await authStorage.getSignInSettings()
  if(!token) return
  console.log('restore token found in security',token.includes("true"))

  setIsEnabled(token.includes("true"))
 
}

// const restoreSignIn = async () => {
//   console.log('trying for restore sign in')
//   const token = await authStorage.getSignInSettings()
//   if(!token) return
//   console.log('restore token sign in',token, token.includes('true'))
//   setIsAuth(token.includes('true'))
// }

  const toggleSwitch =  () => {
    console.log('1', isEnabled)
    setIsEnabled(previousState => (!previousState));
  
    // console.log('2',isEnabled)
  }

  // const setCurrentAuth = () => {
  //    console.log('setAuth is Enabled value', isEnabled)
  // }
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

 

  return (
    <View style={styles.securityAndPrivacy}>
      <Text style={[styles.hello, styles.mr_546]}>Security</Text>
      <View style={[styles.helloParent, styles.mt1021, styles.mr40]}>
        <Text style={styles.hello1}>Security and Privacy</Text>
        <Text style={styles.changePasscode}>Change Passcode</Text>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={[styles.groupItem, styles.groupPosition]} />
        <View style={[styles.groupInner, styles.groupPosition]} />
        <View style={[styles.rectangleView, styles.groupPosition]} />
        <Text
          style={[styles.signInWithFaceId, styles.withTypo]}
        >{`Sign in with face ID `}</Text>
        <Text style={[styles.hideBalances, styles.withTypo]}>
          Hide balances
        </Text>
        <Text
          style={[styles.shareWithFriends, styles.withTypo]}
        >{`Share with friends `}</Text>
        <Text style={[styles.messagingWithFriends, styles.withTypo]}>
          Messaging with friends
        </Text>
        <View style={[styles.rectangleParent, styles.groupLayout]}>
          <Switch  
            style={[styles.groupChildPosition]}
            trackColor={{false: GlobalStyles.Color.gray_600, true:GlobalStyles.Color.blue_100}}
            thumbColor={isEnabled ?'#f4f3f4' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabled}
            />
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <Switch  
            style={[styles.groupChildPosition]}
            trackColor={{false: GlobalStyles.Color.gray_600, true:GlobalStyles.Color.blue_100}}
            thumbColor={isEnabled1 ?'#f4f3f4' : '#f4f3f4'}
            onValueChange={toggleSwitch1}
            value={isEnabled1}
            />
        </View>
        <View style={[styles.rectangleContainer, styles.groupLayout]}>
        <Switch  
            style={[styles.groupChildPosition]}
            trackColor={{false: GlobalStyles.Color.gray_600, true:GlobalStyles.Color.blue_100}}
            thumbColor={isEnabled2 ?'#f4f3f4' : '#f4f3f4'}
            onValueChange={toggleSwitch2}
            value={isEnabled2}
            />
        </View>
        <View style={[styles.groupView, styles.groupLayout]}>
        <Switch  
            style={[styles.groupChildPosition]}
            trackColor={{false: GlobalStyles.Color.gray_600, true:GlobalStyles.Color.blue_100}}
            thumbColor={isEnabled3 ?'#f4f3f4' : '#f4f3f4'}
            onValueChange={toggleSwitch3}
            value={isEnabled3}
            />
        </View>
        <Image
          style={[styles.iconMetroEye, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/icon-view.png")}
        />
        <Image
          style={[styles.iconAwesomeUserFriends, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon-profileplaceholder.png")}
        />
        <Image
          style={[styles.iconFeatherMessageCircle, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon-speechbubble.png")}
        />
        <Image
          style={[styles.iconFaceId, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/icon-faceid.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mr_546: {
    marginRight: -546,
  },
  mt1021: {
    marginTop: "5%",
  },
  mr40: {
    marginRight: 5,
  },
  groupPosition: {
    height: 57,
    borderRadius: GlobalStyles.Border.br_lg,
    right: 0,
    left: 0,
    position: "absolute",
    backgroundColor: GlobalStyles.Color.white,
  },
  withTypo: {
    left: 40,
    color: GlobalStyles.Color.gray_1400,
    lineHeight: 14,
    fontSize: GlobalStyles.FontSize.size_base,
    position: "absolute",
    textAlign: "left",

    fontWeight: "700",
  },
  groupLayout: {
    height: 26,
    width: 46,
    right: 15,
    position: "absolute",
  },
  groupChildPosition: {
    borderRadius: GlobalStyles.Border.br_sm,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  ellipseIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "11.54%",
    top: "11.54%",
    width: "43.48%",
    height: "76.92%",
    position: "absolute",
  },
  iconPosition: {
    position: "absolute",
    left: 13,
    top: "50%",
  },
  iconLayout: {
    height: 18,
    position: "absolute",
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_xs,
    color: GlobalStyles.Color.gray_800,
    textAlign: "left",

    fontWeight: "700",
  },
  hello1: {
    top: 0,
    fontSize: GlobalStyles.FontSize.size_8xl,


    color: GlobalStyles.Color.indigo_100,
    left: 0,
    position: "absolute",
    textAlign: "left",
    fontWeight: "700",
  },
  changePasscode: {
    marginTop: -97.5,
    width: 257,
    color: GlobalStyles.Color.gray_1400,
    lineHeight: 14,
    fontSize: GlobalStyles.FontSize.size_base,
    top: "50%",
    left: 0,
    position: "absolute",
    textAlign: "left",

    fontWeight: "700",
  },
  groupChild: {
    marginTop: -114.5,
    top: "50%",
  },
  groupItem: {
    marginTop: -39.5,
    top: "50%",
  },
  groupInner: {
    marginTop: 35.5,
    top: "50%",
  },
  rectangleView: {
    bottom: 0,
  },
  signInWithFaceId: {
    marginTop: -93.5,
    width: 134,
    top: "50%",
  },
  hideBalances: {
    marginTop: -18.5,
    width: 104,
    top: "50%",
  },
  shareWithFriends: {
    marginTop: 56.5,
    width: 129,
    top: "50%",
  },
  messagingWithFriends: {
    bottom: 23,
    width: 161,
  },
  groupChild1: {
    backgroundColor: GlobalStyles.Color.gray_100,
  },
  ellipseIcon: {
    right: "6.52%",
    left: "50%",
  },
  rectangleParent: {
    marginTop: -98.5,
    top: "50%",
  },
  groupChild2: {
    backgroundColor: GlobalStyles.Color.gray_600,
  },
  groupChild3: {
    right: "50%",
    left: "6.52%",
  },
  rectangleGroup: {
    marginTop: -21.5,
    top: "50%",
  },
  rectangleContainer: {
    marginTop: 48.5,
    top: "50%",
  },
  groupView: {
    bottom: 15,
  },
  iconMetroEye: {
    marginTop: -16.64,
    width: 17,
    height: 11,
    left: 13,
    top: "50%",
  },
  iconAwesomeUserFriends: {
    marginTop: 57.39,
    left: 9,
    width: 25,
    top: "50%",
  },
  iconFeatherMessageCircle: {
    bottom: 20,
    width: 18,
    left: 13,
  },
  iconFaceId: {
    marginTop: -95.24,
    width: 20,
    height: 20,
    left: 13,
    top: "50%",
  },
  helloParent: {
    width: "100%",
    height: 335,
  },
  arrowPosition: {
    top: "6%",
    position: "absolute",
  },
  arrowCircle: {
    marginTop: -10.11,
    marginLeft: 6.54,
    width: 15,
    height: 15,
  },
  securityAndPrivacy: {
    flex: 1,
    paddingLeft: 30,
    alignItems: "flex-end",
    width: "100%",
    backgroundColor: GlobalStyles.Color.white,
  },
});

export default SecurityAndPrivacy;
