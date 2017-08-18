import React from 'react';
import {
    View,
    AppRegistry,
    Text,
    Button,
} from 'react-native';
import ChatScreen from './src/components/ChatScreen'
import {StackNavigator} from 'react-navigation';
import * as InteractionManager from "react-native/Libraries/Interaction/InteractionMixin";
import ToastAndroid from "./src/androidmodule/ToastAndroid";
import MyView from './src/androidmodule/MyView';
import ChatScreen2 from "./src/components/ChatScreen2";

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        textAlign: 'center'
    };

    constructor(props) {
        super(props)
        this.state = {content: 1, content2: '111'}
        InteractionManager.runAfterInteractions(() => {
            // ...long-running synchronous task...
            setInterval(() => {
                this.changeState()
            }, 1000);
        });

    }

    changeState() {
        this.setState((prev) => {
            return {content: prev.content + 1};
        });
    }

    toast() {
        ToastAndroid.show('Awesome', ToastAndroid.SHORT);
    }

    render() {
        const {navigate} = this.props.navigation;
        return (<View>
            <Text>Hello, {this.state.content} {this.state.content2},</Text>
            <Button
                onPress={() => {
                    this.toast();
                    navigate('Chat', {user: 'kang'});
                }/*navigate('Chat',{user:'kang'})*/}
                title="Chat with Lucy"
            />
            <View style={{backgroundColor: 'blue', width: 100, height: 100}}><MyView/></View>
        </View>);

    }
}


const SimpleApp = StackNavigator({
    Home: {screen: HomeScreen},
    Chat: {screen: ChatScreen},
    Chat2: {screen: ChatScreen2},
});

AppRegistry.registerComponent('a', () => SimpleApp);