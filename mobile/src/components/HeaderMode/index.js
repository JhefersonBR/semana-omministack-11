import React, { useState, useEffect } from 'react';

import { View, Text, Switch, StyleSheet } from 'react-native';

import styles from './styles';

export default function HeaderMode(props) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = (previousState) => {
        setIsEnabled(previousState => !previousState);
        let [light, dark] = props.arrStyles;
        props.changeble(previousState ? dark : light);
    }
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{props.text}</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#ff6600" }}
                thumbColor={isEnabled ? "yellow" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    )
}