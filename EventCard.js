import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function EventCard({ eventItem }) {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.title}>{eventItem.title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 10,
        paddingBottom: 20,
        margin: 10,
        marginBottom: 5
    },
    cardHeader: {
        flex: 1,
        flexDirection: 'row'
    }
});