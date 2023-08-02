import React, { useEffect } from 'react';
import { StyleSheet, Keyboard, findNodeHandle, 
  TextInput, Animated, Easing, Platform, Dimensions
} from 'react-native';





const KeyboardAvoider = ({ yOffset = Platform.OS === 'ios' ? 200 : 0, children }) => {
  const ref = React.useRef(null);
  const [kbOffset, setKbOffset] = React.useState(0);
  const kbOffsetAnim = React.useRef(new Animated.Value(0)).current;


  
  const updateOffset = (toValue) => {
    setKbOffset(toValue);

   
    const duration =  100;
    const easing = Easing.out(Easing.ease);
  

    Animated.timing(kbOffsetAnim, {
      toValue: -toValue,
      duration: duration,
      useNativeDriver: true,
      easing: easing,
    }).start();
  }

  useEffect(() => {
    const kbShow = Keyboard.addListener(
      Platform.select({ios: "keyboardWillShow", android: "keyboardDidShow"}), 
      onKeyboardShow,
    );
    const kbHide = Keyboard.addListener(
      Platform.select({ios: "keyboardWillHide", android: "keyboardDidHide"}), 
      onKeyboardHide
    );
    
    return () => {
      kbShow.remove();
      kbHide.remove();
     
    }
  }, []);

  const onKeyboardShow = (e) => {
    setTimeout(() => {
      const textRef = TextInput.State.currentlyFocusedInput();
      textRef && measureTextInput(textRef, e);
    }, 100);
  }

  const measureTextInput = (textRef, e) => {
    const topY = e.endCoordinates.screenY;

    textRef.measureLayout(findNodeHandle(ref.current), 
      (x, y) => {
        const pageY = y;

        textRef.measure((x, y, width, height) => {
          const textInputY = pageY - kbOffset + height + yOffset; // y coordinate of the bottom of this component
          const offset = (textInputY > topY) ? (textInputY - topY) : 0;

          if (Platform.OS === 'android') updateOffset(Math.min(offset, yOffset));
          else updateOffset(offset);
        });
    }, ()=>{});
  }

  const onKeyboardHide = (e) => {
    updateOffset(0);
  }

  return(
    <Animated.View
      ref={ref}
      style={[styles.container, { transform: [{ translateY: kbOffsetAnim }]}]}
    >
      { children }
    </Animated.View>
  )
}
export default KeyboardAvoider;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
