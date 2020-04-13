import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#262626'
    },
    header: {
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 15,
        color: '#fff'
    },

    headerTextBolt: {
        fontWeight: 'bold'
    },
    title:{
        fontSize: 30,
        marginBottom: 16,
        color: '#fff',
        fontWeight: 'bold'
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#fff'
    },

    incidentList: {
        marginTop: 32,
    },
    incident:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#4d4d4d',
        marginBottom: 16
    },

    incidentProperty:{
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold'
    },

    incidentValue:{
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#fff'
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailsButtonText: {
        color: '#ff6600',
        fontSize: 15,
        fontWeight: 'bold'
    }
});