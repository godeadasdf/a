import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';


export default class ChatScreen extends Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    };

    render() {
        const {navigate} = this.props.navigation;
        const {params} = this.props.navigation.state;
        return (<View>
                <Text>Chat with {params.user}</Text>
                <Button title="chat with BB" onPress={() => {
                    navigate('Chat2')
                }}/>
            </View>
        );
    }
}
