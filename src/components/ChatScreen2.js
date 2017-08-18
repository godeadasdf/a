import React,{Component} from 'react';
import {Text, View} from 'react-native';

export default class ChatScreen extends Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    };

    render() {
        const { params } = this.props.navigation.state;
        return (<View>
                <Text>Chat with BB</Text>
            </View>
        );
    }
}