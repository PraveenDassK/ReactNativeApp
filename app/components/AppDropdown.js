import React from 'react'
import { StyleSheet } from 'react-native';

import { Dropdown } from 'react-native-element-dropdown';

const AppDropdown = ({data, placeholder, onChange}) => {
  return (
    <Dropdown
style={[styles.dropdown]}
containerStyle={styles.dropdownContainer}
data={data}
maxHeight={100}
labelField="label"
valueField="value"
placeholder={placeholder}
placeholderStyle={{fontSize: 14, color: "#D3D3D3"}}
value={0}
onChange={item => onChange(item)}
/>
  )
}
 const styles = StyleSheet.create({
    dropdown: {
      width:"100%",
        borderRadius: 10,
        borderWidth: 0.5,
        height: 50,
        paddingHorizontal: 8,
        marginBottom: "5%",
        marginTop: "2.5%",
        opacity: 1,
        borderColor: "#D3D3D3",
    
      },
      dropdownContainer: {
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
      },
 })
export default AppDropdown

