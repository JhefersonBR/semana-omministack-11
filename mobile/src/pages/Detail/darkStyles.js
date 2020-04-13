import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#262626'

    },

    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    incident:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#4d4d4d',
        marginBottom: 16,
        marginTop: 48,
    },

    incidentProperty:{
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 24,
    },

    incidentValue:{
        marginTop: 8,
        fontSize: 15,
        color: '#fff'
    },

    contactBox:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#4d4d4d',
        marginBottom: 16,
    },

    heroTitle:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#ff6600',
        lineHeight: 30,
    },

    heroDescription: {
        fontSize: 15,
        color: '#fff',
        marginTop: 16,
    },

    actions:{
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    action: {
        backgroundColor: '#ff6600',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: 'bold'
    }
});
