import React, { useContext, useEffect, useState } from "react";
import {
    Text,
    TextInput,
    StyleSheet,
    View,
    ActivityIndicator,
    FlatList
} from "react-native";
import { moderateScale } from '../config/scaling'

import PinModal from "../components/PinModal";
import UserIcon from "../components/UserIcon";
import Button from "../components/AppButton";

const PROXY_TEAM_DATA = [{
    "name": "Ava Bel",
    "id": "1"
},
{
    "name": "Cal Dio",
    "id": "2"
},
{
    "name": "Efy Fey",
    "id": "2"
},
]
const Teams = ({ navigation }) => {
    const [showPinModal, setShowPinModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [teamData, setTeamData] = useState(PROXY_TEAM_DATA)
    useEffect(() => {
        // loadData()
    }, []);

    const onSuccess = () => {
        console.log("Success!");
        setShowPinModal(false);
    };

    if (showPinModal) {
        return (
            <View style={styles.mainContainer}>
                {showPinModal ? (
                    <PinModal
                        title="Enter your PIN"
                        success={() => onSuccess()}
                    />
                ) : null}
            </View>
        )
    }

    return (
        <View style={styles.mainContainer}>
            {/* <RecentTransactions
                amount={10}
            /> */}
            <View>
                <Text>
                    Your current team
                </Text>
                {teamData && (
                    <FlatList
                        data={teamData}
                        renderItem={({ item, index }) => (
                            <View style={styles.itemContainer}>
                                <UserIcon
                                    name={item.name}
                                    onPress={() => navigation.navigate("TeamsUser", item)}
                                />
                            </View>
                        )}
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}
                        numColumns={4}
                        contentContainerStyle={styles.flatListContent}

                    />
                )}
                <Button
                    title="Add another user"
                    onPress={() => navigation.navigate("TeamsUserAdd")}
                />
            </View>
        </View>
    );
};

export default Teams

const styles = StyleSheet.create({
    comingSoonText: {
        textTransform: "uppercase",
        fontSize: moderateScale(80),
        fontWeight: "bold",
        textAlign: "center",

    },
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",

    },
    flatListContent: {
        justifyContent: "space-between",
    },
    itemContainer: {
        padding: "5%",
    },
})