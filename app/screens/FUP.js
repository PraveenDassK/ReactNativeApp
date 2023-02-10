import React, { useState, useContext} from "react";
import { TextInput, Text, StyleSheet, View } from "react-native";
import GlobalStyles from "../../GlobalStyles";
import apiweb3 from "../api/web3_api";
import AuthContext from "../auth/context";

const FUP = ({navigation}) => {
    const [data, setData] = useState(null)
  useEffect(() => {
    loadData()
  },[])
  
  const loadData = async () => {
    const response = await apiweb3.GetNFTId(1)
    setData(response)
    console.log(response)
  }
  <Text
  style={{
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
    height: "100%",
    fontWeight: "700",
  }}
>
  {data}
</Text>
}

export default FUP;