import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";

const ButtonIcon = ({
    name = "Default",
    size = 50,
    image = "dots-horizontal",
    onPress
}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, { width: size, height: size }]}>
                <View style={styles.icon} backgroundColor={`#D8EBF9`}>
                    <MaterialCommunityIcons
                        name={image}
                        size={30}
                    />
                </View>
                <Text style={styles.name}>{name}</Text>
            </View>
        </TouchableOpacity>

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
