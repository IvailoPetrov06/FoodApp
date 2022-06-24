import React, { Component } from 'react';
import { View, FlatList, Button, StyleSheet, Image, Text } from 'react-native';
import EventCard from './EventCard';

const image = { uri: "https://cantonata.net/wp-content/uploads/revslider/pizza/home_pizza_slider_1.png" };
const localimage = require("./assets/home_pizza_slider_1.png");

class EventList extends Component {
    state = {
        events: []
    }
    render() {
        return (<View>
            <View style={styles.setwidth}>                                                                                                                                                                                                
            <Image source={{
                    width: 700,
                    height: 300,
                    uri: "https://cantonata.net/wp-content/uploads/revslider/pizza/home_pizza_slider_1.png"
                }}
                />                                                                                                                                                                    
            <FlatList
                data={this.state.events}
                renderItem={({ item }) => <EventCard eventItem={item} />}
            ></FlatList>
            <View style={styles.setit}>
                <Button color="orange"
                    onPress={() => this.props.navigation.navigate('EventForm')}
                    title='go to the products' />
                <View style={styles.fonts}>
                <Text style={styles.fonts}>                                                                                                                              PIZZA</Text>
                <Text style={styles.fonts}>                                                                                                                             _________</Text> 
                <Text style={styles.fonts}>                                                                                                                             50% OFF</Text>
                <Text style={styles.fonts}>                                                                                                                             __________</Text>
                </View>
                </View>
            </View>
        </View>);
    }
}
const styles = StyleSheet.create({
    setit: {
        top: 200,
        margin: 30,
        marginBottom: 5,
    },
    setwidth: {
        top: 200,
    },
    size: {
        bottom: 450,
    },
    fonts: {
        bottom: 460,
        color: `#ff0000`,
        fontSize: 20,
    }
});
export default EventList;