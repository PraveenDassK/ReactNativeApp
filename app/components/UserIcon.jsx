import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import GlobalStyles from "../../GlobalStyles";
import ReactNativePinView from "react-native-pin-view";
import Icon from "react-native-vector-icons/Ionicons";

import AuthContext from "../auth/context";
import api from "../api/apiCall";

const UserIcon = ({
    name = "Default",
    size = 50,
    onPress
}) => {
    const [initals, setInitals] = useState("");
    const [colour, setColour] = useState("");

    /**
     * @dev Loads the data once
     */
    useEffect(() => {
        setInitalsForHook();
    }, [name]);

    /**
     *
     */
    const setInitalsForHook = () => {
        setInitals(getInitials(name));
        setColour(iconColour(name));
    };
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, { width: size, height: size }]}>
                <View style={styles.icon} backgroundColor={colour}>
                    <Text style={styles.initials}>{initals}</Text>
                </View>
                <Text style={styles.name}>{name}</Text>
            </View>
        </TouchableOpacity>

    );
};

const staticColors = [
    '#FFFACD', // Lemon Chiffon
    '#E6E6FA', // Lavender
    '#7FFFD4', // Aquamarine
    '#FFDAB9', // Peach Puff
    '#AFEEEE', // Pale Turquoise
    '#F08080', // Light Coral
    '#6495ED', // Cornflower Blue
    '#FFE4B5', // Moccasin
    '#98FB98', // Pale Green
    '#D8BFD8'  // Thistle
];

// Select a random color based on the given name
function iconColour(name) {
    const nameHash = getHash(name);
    const colors = staticColors;

    const randomIndex = nameHash % colors.length;

    return colors[randomIndex];
}

// Simple hash function to convert name into a numeric hash
function getHash(name) {
    let hash = 0;

    if (name.length === 0) {
        return hash;
    }

    for (let i = 0; i < name.length; i++) {
        const char = name.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0; // Convert to 32-bit integer
    }

    return Math.abs(hash);
}

function getInitials(name) {
    // Split the name into an array of words
    const words = name.split(" ");
    // Create an empty array to store the initials
    const initials = [];
    // Loop through the words
    for (let i = 0; i < words.length; i++) {
        // Get the first letter of each word and convert it to uppercase
        const firstLetter = words[i].charAt(0).toUpperCase();
        // Add the first letter to the initials array
        initials.push(firstLetter);
    }
    // Join the initials array into a string and return it
    return initials.join("");
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        borderWidth: 0,
        borderColor: 'black',
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

export default UserIcon;
