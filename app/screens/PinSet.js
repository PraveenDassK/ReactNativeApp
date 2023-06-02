import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ActivityIndicator,
  Platform,
} from "react-native";
import GlobalStyles from "../../GlobalStyles";
import ReactNativePinView from "react-native-pin-view";
import Icon from "react-native-vector-icons/Ionicons";

import cardDetails from "../api/cardDetails";
import pinControl from "../api/pinControl";

import WebView from "react-native-webview";

const Pin = ({ route, navigation }) => {
  const webViewRef = useRef(null);
  const baseURL = "https://pin-web.demo.ext.test.cia.enfuce.com";
  const pinView = useRef(null);
  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const [enteredPin, setEnteredPin] = useState("");
  const [showCompletedButton, setShowCompletedButton] = useState(false);
  const [firstPin, setFirstPin] = useState("");
  const [title, setTitle] = useState(
    route.params?.title ? route.params.title : "Enter New Pin"
  );
  const [htmlContent, setContent] = useState(`
  <html>
    <head>
      <script>
        // JavaScript code in the header
        function myFunction() {
          console.log("Hello from JavaScript!");
          document.body.style.backgroundColor = 'green';
        }
      </script>
    </head>
    <body>
      <h1>Static HTML Content</h1>
      <button onclick="myFunction()">Click me</button>
    </body>
  </html>
`);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [injectedJavaScript, setInjectedJavaScript] = useState("");
  const [contentID, setContentID] = useState("");
  const [scriptTags, setTags] = useState("")

  useEffect(() => {
    // different ID to test
    // 714613712 // 46359612 // 38759312 // 687942912 // 714613712// Physical Card2 ID: 715767812 46765612, 46765612 46765412
    const loadData = async () => {
      //cardDetails.getPlasticCards('715767812');
      const response = await pinControl.getAccessToken("46765612");
      // console.log(
      //   "Pinset Response: ",
      //   response.replace(/(src="\/pinweb\/)/g, `src="${baseURL}/pinweb/`)
      // );
      
      const updatedURL = response.replace(
        /(src="\/pinweb\/)/g,
        `src="${baseURL}/pinweb/`
        );

      const scriptTagsMatch = updatedURL.match(/<script\b[^>]*>([\s\S]*?)<\/script>/gi);
      const regex = /requestPin\("([^"]+)"\)/;
      const match = response.match(regex);

      console.log("here", match[1]);
      console.log(updatedURL);
      console.log(scriptTagsMatch)

      setTags(scriptTagsMatch)
      setContentID(match[1]);
      setContent(updatedURL);
    };
    loadData();
  }, []);

  // useEffect(() => {
  //   loadIFrame();
  // }, []);

  /**
   * Pin display controlers
   */
  useEffect(() => {
    if (enteredPin.length > 0) {
      setShowRemoveButton(true);
    } else {
      setShowRemoveButton(false);
    }
    if (enteredPin.length === 4) {
      setShowCompletedButton(true);
    } else {
      setShowCompletedButton(false);
    }
  }, [enteredPin]);
  

  /**
   * @dev This is the controler if the pin is correct or not
   * @returns null If pin is incorrect
   */
  const checkPin = async () => {
    if (firstPin == "") {
      setFirstPin(enteredPin);
      pinView.current.clearAll();
      setTitle("Confirm Pin");
    } else if (firstPin == enteredPin) {
      alert("Pin set");

      //@todo change to enfuse
      //apiCall.SetPin(firstPin)
      navigation.navigate("Account");
    } else {
      alert("Pin does not match");
      pinView.current.clearAll();
      setTitle("Enter New Pin");
      setFirstPin("");
    }
  };

  const handleLoadEnd = () => {
    // setInjectedJavaScript("myFunction();");
    setLoading(false);
  };

  const handleError = (syntheticEvent) => {
    const { nativeEvent } = syntheticEvent;
    console.error("WebView error:", nativeEvent);
    setError(nativeEvent);
    setLoading(false);
  };
  const runFirst = `
      document.body.style.backgroundColor = 'blue';
      setTimeout(function() { window.alert('hi') }, 2000);
      (function() {
        console.log('Script executed!');
    
        var number = 42;
        console.log('The number is: ' + number);
      })();
      true; // note: this is required, or you'll sometimes get silent failures
    `;

  const handleWebViewLoad = () => {
  //   console.log(typeof contentID, contentID);
  //   const injectedJavaScript = `
  //   setTimeout(function() {
  //     requestPin("${contentID}");
  //   }, 0);
  // `;
  //   webViewRef.current.injectJavaScript(injectedJavaScript);
  console.log('cleaned\n',cleanedInjectedJavaScript)
    setLoading(false);
  };

  function handleiOSFunction() {
    // iOS-specific functionality
  }

  function handleAndroidFunction() {
    // Android-specific functionality
  }

  function handlePlatformFunction() {
    if (Platform.OS === "ios") {
      handleiOSFunction();
    } else if (Platform.OS === "android") {
      handleAndroidFunction();
    }
  }
//   const injectedJavaScript = `
//   var scripts = [
//     'https://pin-web.demo.ext.test.cia.enfuce.com/pinweb/forge-0.9.1.min.js',
//     'https://pin-web.demo.ext.test.cia.enfuce.com/pinweb/des.js',
//     'https://pin-web.demo.ext.test.cia.enfuce.com/pinweb/js/viewpin-89b8cc8f257eedb3c3acdef4e09fd73c.js'
//   ];

//   function loadScript(src) {
//     return new Promise(function(resolve, reject) {
//       var script = document.createElement('script');
//       script.src = src;
//       script.onload = resolve;
//       script.onerror = reject;
//       document.head.appendChild(script);
//     });
//   }

//   Promise.all(scripts.map(loadScript))
//     .then(function() {
//       console.log('Script in the head section executed!');
//       /*<![CDATA[*/
//       console.log('window.onload event triggered!');
//       requestPin("6e84bffc-6624-4a04-94ed-269428420b18");
//       /*]]>*/
//     });
// `;

const injectedJavaScript = scriptTags ? scriptTags.join('\n') : '';

const cleanedInjectedJavaScript = injectedJavaScript.replace(/\\"/g, '"');

  return (
    <View style={{ flex: 1 }}>
      {loading && <ActivityIndicator />}
      {error && <Text>Error: {error}</Text>}
      {htmlContent && contentID && (
        <WebView
          source={{ html: htmlContent }}
          originWhitelist={["*"]}
          injectedJavaScript={cleanedInjectedJavaScript}
          // style={{ marginTop: 20 }}
          // javaScriptEnabled={true}
          // domStorageEnabled={true}
          // startInLoadingState={true}
          // // onMessage={(event) => {}}
          // injectedJavaScript={`window.addEventListener('load', function() {
          //   document.body.style.backgroundColor = 'blue';
          //   requestPin(${contentID});

          // });`}
          // ref={webViewRef}
          onLoadEnd={handleWebViewLoad}
          // onError={handleError}
          // onMessage={(event) => {
          //   console.log('onMessage', event)
          //   const { data } = event.nativeEvent;
          //   if (data === "platform_handler") {
          //     handlePlatformFunction();
          //   }
          // }}
        />
      )}
    </View>
  );

  return (
    <View style={[styles.sendEnterPin1, styles.sendEnterPin1Child]}>
      <Text style={[styles.hello, styles.mt_615]}>{title}</Text>
      <ReactNativePinView
        style={[styles.sendEnterPin12, styles.sendEnterPin1Child]}
        inputSize={12}
        ref={pinView}
        pinLength={4}
        buttonSize={60}
        onValueChange={(value) => setEnteredPin(value)}
        buttonAreaStyle={{
          marginTop: 24,
        }}
        inputAreaStyle={{
          marginBottom: 24,
        }}
        inputViewEmptyStyle={{
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: GlobalStyles.Color.indigo_100,
        }}
        inputViewFilledStyle={{
          backgroundColor: GlobalStyles.Color.indigo_100,
        }}
        buttonTextStyle={{
          color: GlobalStyles.Color.indigo_100,
        }}
        onButtonPress={(key) => {
          if (key === "custom_left") {
            pinView.current.clear();
          }
          if (key === "custom_right") {
            checkPin();
          }
        }}
        customLeftButton={
          showRemoveButton ? (
            <Icon
              name={"ios-backspace"}
              size={36}
              color={GlobalStyles.Color.indigo_100}
            />
          ) : undefined
        }
        customRightButton={
          showCompletedButton ? (
            <View>
              <Text>Enter</Text>
            </View>
          ) : undefined
        }
      ></ReactNativePinView>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_615: {
    marginTop: 50,
  },
  mt82: {
    marginTop: 82,
  },
  mt28: {
    marginTop: -328,
  },
  ml1: {
    marginLeft: GlobalStyles.Margin.margin_7xs,
  },
  helloTypo2: {
    textAlign: "center",
    lineHeight: 35,
    fontSize: GlobalStyles.FontSize.size_9xl,
    left: 114,
    position: "absolute",
    color: GlobalStyles.Color.indigo_100,
  },
  helloTypo1: {
    left: 228,
    textAlign: "center",
    lineHeight: 35,
    fontSize: GlobalStyles.FontSize.size_9xl,
    position: "absolute",
    color: GlobalStyles.Color.indigo_100,
  },
  helloTypo: {
    left: 0,
    textAlign: "center",
    lineHeight: 35,
    fontSize: GlobalStyles.FontSize.size_9xl,
    position: "absolute",
    color: GlobalStyles.Color.indigo_100,
  },
  sendEnterPin1Child: {
    backgroundColor: GlobalStyles.Color.gray_200,
    width: "100%",
    height: 812,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_base,
    textAlign: "left",
    color: GlobalStyles.Color.indigo_100,
  },
  hello1: {
    top: 0,
  },
  hello2: {
    top: 84,
  },
  hello3: {
    top: 168,
  },
  hello4: {
    top: 252,
  },
  hello5: {
    top: 0,
  },
  hello6: {
    top: 84,
  },
  hello7: {
    top: 168,
  },
  hello8: {
    top: 0,
  },
  hello9: {
    top: 84,
  },
  hello10: {
    top: 168,
  },
  iconIonicIosBackspace: {
    right: 0,
    bottom: 10,
    width: 29,
    height: 23,
    position: "absolute",
  },
  helloParent: {
    width: 251,
    height: 282,
  },
  sendEnterPin1Item: {
    width: 100,
    height: 14,
  },
  sendEnterPin12: {
    backgroundColor: GlobalStyles.Color.gray_100,
    flex: 1,
    width: "100%",
    alignItems: "center",
    marginTop: 50,
  },
  sendEnterPin1: {
    backgroundColor: GlobalStyles.Color.gray_100,
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default Pin;
