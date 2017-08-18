import React, {Component} from 'react';
import {Text,StyleSheet,View} from 'react-native';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {items:[]}
    }

    render() {
        const items = ['Riding', 'Contact us'];
        return (
            <View style={styles.title}>
                <Text style={styles.text}></Text>
                <Text style={[styles.text, {fontSize: 20, textAlign: 'center'}]}>{items[0]}</Text>
                <Text style={[styles.text, {fontSize: 15, textAlign: 'right',marginRight:5}]}>{items[1]}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 30,
        padding: 5

    },
    text: {
        color: 'white',
        flex: 1
    },
});
