import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

class EventForm extends Component {
    state = {
        title: ""
    };
    handleChangeTitle = (value) => {
        this.setState({ title: value });
    }

    render() {
        return (
            <View style={styles.setwidth}>
                <Image source={{
                    width: 300,
                    height: 200,
                    uri: "https://www.aladinfoods.bg/files/images/276/hard_burger.png"
                }}
                />
                 <Text style={styles.setColor}>                       Burger</Text>
                <Text style={styles.setColor}>                       Price: 4$</Text>
                <View style={styles.setwidos}>
                <Image source={{
                    width: 300,
                    height: 200,
                    uri: "https://www.pngall.com/wp-content/uploads/4/Bowl-Chips.png"
                }}
                />
                <Text style={styles.setColor}>                       Potatoes</Text>
                <Text style={styles.setColor}>                       Price: 2$</Text>
                <View style={styles.setwidis}>
                <Image source={{
                    width: 300,
                    height: 200,
                    uri: "https://cdncloudcart.com/16398/products/images/39404/gazirana-napitka-coca-cola-ken-330-ml-image_5ea2cc6235fb6_800x800.png?1587731937"
                }}
                />
                 <Text style={styles.setColor}>                       Cola</Text>
                <Text style={styles.setColor}>                       Price: 1$</Text>
                </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    fieldContainer: {
        marginVertical: 20,
        backgroundColor: '#fff',
    },
    setColor: {
        color: `#ff8c00`,
        fontSize: 20,
    },
    setwidos: {
        bottom: 250,
        top: 30,
    },
    setwidis: {
        bottom: 250,
        top: 30,
    }
});
export default EventForm;