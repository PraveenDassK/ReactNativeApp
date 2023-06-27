import React, {
    useContext,
    useEffect,
    useState,
} from "react";
import {
    StyleSheet,
    View,
} from "react-native";
import DoughnutChart from "../components/DoughnutChart";
import AuthContext from "../auth/context";
import AppText from "../components/Text";
import apiCarbon from "../api/apiCarbon";

const CarbonSpendGraph = ({ }) => {
    const [carbnonSpendData, setCarbonSpendData] = useState([]);
    const { userID, accountID } = useContext(AuthContext);
    const [totalFootprint, setTotalFootprint] = useState(false);

    useEffect(() => {
        loadData();
    }, [accountID, userID]);

    const loadData = async () => {
        const carbonSpendData = await apiCarbon.GetCarbonSpending();
        setCarbonSpendData(carbonSpendData.chartData);
        setTotalFootprint(carbonSpendData.total);
    }
    return (
        <View>
            <DoughnutChart
                data={carbnonSpendData}
                children={
                    <View>
                        <AppText
                            style={{
                                fontSize: 50,
                                fontWeight: "700",
                                width: 250,
                                textAlign: "center",
                            }}
                        >
                            {totalFootprint}
                        </AppText>
                        <AppText
                            style={{
                                fontSize: 20,
                                fontWeight: "700",
                                width: 250,
                                textAlign: "center",
                            }}
                        >
                            kg CO{"\u2082"}
                        </AppText>
                    </View>
                }
            />
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
    },
    name: {
        fontSize: 12,
        color: 'black',
        marginTop: 5,
    },
});

export default CarbonSpendGraph;