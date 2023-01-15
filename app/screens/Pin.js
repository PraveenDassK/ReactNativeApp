import React, { useContext, useEffect, useState, Keyboard } from "react";
import { Text, StyleSheet, Image, Pressable, View} from "react-native";
//import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../../GlobalStyles";

const Pin = () => {
  const title = "Setup Your Pin";

  const [count, setCount] = useState("")

  const enterNumber = (_num) => {
    count.length > 3 ? null : setCount(count + _num);

  }
  const removeNumber = () => {
    setCount(count.slice(0, -1))
  }

  const submit = () => {
    console.log(count) 
  }
  console.log(count)

  return (
    <View style={styles.pin}>
      <View style={styles.helloParent}>
        <Text style={styles.hello}>{title}</Text>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/icon-progress14.png")}
        />
        <Pressable
          onPress={() => {
            enterNumber(1)
          }}
          style={[styles.button]}
        >
          <Text style={[styles.hello1, styles.helloTypo2]}>1</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            enterNumber(4)
          }}
          style={[styles.button]}
        >
            <Text style={[styles.hello2, styles.helloTypo2]}>4</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            enterNumber(7)
          }}
          style={[styles.button]}
        >
        <Text style={[styles.hello3, styles.helloTypo2]}>7</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            enterNumber(2)
          }}
          style={[styles.button]}
        >
        <Text style={[styles.hello4, styles.helloTypo1]}>2</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            enterNumber(5)
          }}
          style={[styles.button]}
        >
          <Text style={[styles.hello5, styles.helloTypo1]}>5</Text>
          </Pressable>
          <Pressable
          onPress={() => {
            enterNumber(8)
          }}
          style={[styles.button]}
        >
          <Text style={[styles.hello6, styles.helloTypo1]}>8</Text>
          </Pressable>
          <Pressable
          onPress={() => {
            enterNumber(0)
          }}
          style={[styles.button]}
        >
          <Text style={[styles.hello7, styles.helloTypo1]}>0</Text>
          </Pressable>
          <Pressable
          onPress={() => {
            enterNumber(3)
          }}
          style={[styles.button]}
        >
          <Text style={[styles.hello8, styles.helloTypo]}>3</Text>
          </Pressable>
          <Pressable
          onPress={() => {
            enterNumber(6)
          }}
          style={[styles.button]}
        >
          <Text style={[styles.hello9, styles.helloTypo]}>6</Text>
          </Pressable>
          <Pressable
          onPress={() => {
            enterNumber(9)
          }}
          style={[styles.button]}
        >
          <Text style={[styles.hello10, styles.helloTypo]}>9</Text>
          </Pressable>
        <Pressable
          onPress={() => removeNumber()}
        >
        <Image
          style={styles.iconIonicMdBackspace}
          source={require("../assets/icon-backspace.png")}
        />
        </Pressable>

        <Pressable
          style={[
            styles.groupParent,
            styles.groupParentPosition,
            styles.parentPosition,
          ]}
          onPress={() => submit()}
        >
          <View
            style={[
              styles.rectangleParent,
              styles.groupParentPosition,
              styles.parentPosition,
            ]}
          >
            <View style={styles.rectangleView} />
            <View style={[styles.maskGroup236, styles.groupParentPosition]} />
          </View>
          
          <Text style={styles.hello11}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button:{
    width:"10%",
  },
  groupPosition: {
    height: 65,
    width: 66,
    left: 21,
    top: "50%",
    position: "absolute",
  },
  groupChildPosition1: {
    width: 65,
    marginLeft: -34,
    height: 65,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  groupChildPosition: {
    right: 22,
    height: 65,
    width: 66,
    top: "50%",
    position: "absolute",
  },
  helloTypo2: {
    textAlign: "center",
    fontSize: GlobalStyles.FontSize.size_9xl,
    left: "200%",
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  helloTypo1: {
    left: "500%",
    textAlign: "center",
    fontSize: GlobalStyles.FontSize.size_9xl,
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  helloTypo: {
    left: "800%",
    textAlign: "center",
    fontSize: GlobalStyles.FontSize.size_9xl,
    color: GlobalStyles.Color.indigo_100,
    position: "absolute",
  },
  groupParentPosition: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  parentPosition: {
    bottom: 0,
    left: 0,
    right: 0,
  },
  hello: {
    fontSize: GlobalStyles.FontSize.size_8xl,
    fontWeight: "700",
    color: GlobalStyles.Color.indigo_100,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  groupChild: {
    marginLeft: -77,
    top: 105,
    width: 142,
    height: 13,
    left: "50%",
    position: "absolute",
  },
  groupItem: {
    marginTop: -130,
  },
  groupInner: {
    marginTop: -50,
  },
  ellipseIcon: {
    marginTop: 31,
  },
  groupChild1: {
    marginTop: -130,
  },
  groupChild2: {
    marginTop: -50,
  },
  groupChild3: {
    marginTop: 31,
  },
  groupChild4: {
    marginTop: 111,
  },
  groupChild5: {
    marginTop: -130,
  },
  groupChild6: {
    marginTop: -50,
  },
  groupChild7: {
    marginTop: 31,
  },
  hello1: {
    top: 217,
  },
  hello2: {
    top: 297,
  },
  hello3: {
    top: 377,
  },
  hello4: {
    top: 217,
  },
  hello5: {
    top: 297,
  },
  hello6: {
    top: 377,
  },
  hello7: {
    top: 458,
  },
  hello8: {
    top: 217,
  },
  hello9: {
    top: 297,
  },
  hello10: {
    top: 377,
  },
  iconIonicMdBackspace: {
    left: "75%",
    top: "850%",
  },
  rectangleView: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: GlobalStyles.Border.br_lg,
    backgroundColor: GlobalStyles.Color.gray_500,
    position: "absolute",
    width: "100%",
  },
  maskGroup236: {
    bottom: 13,
    left: 0,
    right: 0,
    top: 0,
  },
  rectangleParent: {
    top: 0,
    bottom: 0,
  },
  hello11: {
    top: "35%",
    width:"100%",
    fontSize: GlobalStyles.FontSize.size_lg,
    textTransform: "uppercase",
    color: GlobalStyles.Color.white,
    textAlign: "center",
    position: "absolute",
  },
  groupParent: {
    height: 60,
  },
  helloParent: {
    width: "100%",
    height: "100%",
  },
  pin: {
    backgroundColor: "#f3f0f4",
    flex: 1,
    paddingLeft: GlobalStyles.Padding.padding_8xs,
    paddingTop: "10%",
    paddingRight: GlobalStyles.Padding.padding_8xs,
    width: "100%",
  },
});

export default Pin;
