import * as React from 'react';
import {Text, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function SignUpScreen() {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#003a8c', '#137fe9']}
                style={styles.gradient}>
                <Text> This is the sign Up screen</Text>    
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        flex: 1,
    }
});