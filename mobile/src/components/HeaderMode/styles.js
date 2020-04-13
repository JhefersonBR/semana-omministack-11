import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

export default StyleSheet.create({
    header: {
        minHeight: 40,
        backgroundColor : '#737380',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 10
    },

    headerText : {
        fontSize: 20,
        color: '#fff'
    }
})