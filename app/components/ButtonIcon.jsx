import React, { useContext, useEffect, useRef, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    Pressable,
    ActivityIndicator,
} from "react-native";
import GlobalStyles from "../../GlobalStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ButtonIcon = ({ 
    name = "Default", 
    size = 50, 
    image = "dots-horizontal" 
}) => {
    return (
        <View style={[styles.container, { width: size, height: size }]}>
            <View style={styles.icon} backgroundColor={`#D8EBF9`}>
                <MaterialCommunityIcons
                    name={image}
                    size={30}
                />
            </View>
            <Text style={styles.name}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        borderWidth: 0,
        width: '100%',
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    initials: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    name: {
        fontSize: 12,
        color: 'black',
        marginTop: 5,
    },
});

export default ButtonIcon;
