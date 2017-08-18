import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    Button, TextInput, Image
} from 'react-native';
import Header from './src/components/header'


const styles = StyleSheet.create({
        container: {
            backgroundColor: 'black',
            justifyContent: 'flex-start',
            flex: 1,
        },
        contentArea: {
            flexDirection: 'column',
            backgroundColor: '#a4cdf0',
            justifyContent: 'space-between',
            flex: 1,
            marginHorizontal: 5
        },
        textUpper: {
            textAlign: 'center'
        }
    }
);


export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {sum: 0, text: ''}
    }

    render() {
        const items = ['Thanks for riding ofo!', 'Don\'t forget to lock the bike!'];
        return (
            <View style={styles.container}>
                <Header/>
                <View style={styles.contentArea}>

                    <View style={{
                        backgroundColor: 'white',
                        marginHorizontal: 20,
                        alignSelf: 'stretch',
                        marginTop: 5,
                        paddingVertical: 10
                    }}>
                        {items.map((value) => <Text key={value} style={{textAlign: 'center'}}>{value}</Text>)}
                    </View>
                    <View style={{alignSelf: 'center', backgroundColor: 'green'}}>
                        <Text>point</Text>
                    </View>
                    <View style={{
                        marginHorizontal: 20,
                        marginBottom: 20,
                        flexDirection: 'column',
                        alignItems: 'flex-start'
                    }}>
                        <View style={{backgroundColor: 'green'}}>
                            <Button title='locate' onPress={() => {
                            }}/>
                        </View>
                        <View style={{
                            height: 250,
                            backgroundColor: 'white',
                            alignSelf: 'stretch',
                            paddingHorizontal: 20
                        }}>
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 25,
                                fontFamily: 'Bauhaus',
                                fontWeight: 'bold',
                                marginTop: 20
                            }}>The trip cost you</Text>
                            <Text style={{textAlign: 'center', fontSize: 35}}>${this.state.sum.toFixed(2)}</Text>
                            <Text style={{textAlign: 'center'}}>Detail></Text>
                            <View style={{
                                marginTop: 15,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                borderColor: 'grey',
                                borderWidth: 1,
                                alignItems: 'center',
                                height: 40
                            }}>
                                <Image source={require('./mc.png')}
                                       style={{width: 30, resizeMode: 'contain', marginLeft: 15}}/>
                                <TextInput style={{width: 100, borderColor: 'white'}} password={true}/>
                                <Image source={require('./black_arrow.png')}
                                       style={{width: 15, resizeMode: 'contain', marginRight: 15}}/>
                            </View>
                            <View style={{marginTop:10,height:40,backgroundColor:'orange',justifyContent:'center'}}>
                                <Button title='Confirm And Pay' color='orange' onPress={() => {
                                }} style={{padding:10}}/>
                            </View>ssdsdsdsdsd

                        </View>
                    </View>
                </View>
            </View>
        );
    }
}


//AppRegistry.registerComponent('a', () => SimpleApp);
AppRegistry.registerComponent('a', () => Index);
//import './App'