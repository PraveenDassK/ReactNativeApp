import React from 'react'
import { Dropdown } from 'react-native-element-dropdown';

const AppDropdown = () => {
  return (
    <Dropdown
style={[styles.dropdown]}
containerStyle={styles.dropdownContainer}
data={genderData}
maxHeight={100}
labelField="label"
valueField="value"
placeholder={'Select an option'}
placeholderStyle={{fontSize: 14, color: "#D3D3D3"}}
value={gender}
onChange={item => {
    setGender(item.value);
    setIsFocus(false);
}}
/>
  )
}
 const styles = StyleSheet.create({
    dropdown: {
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

