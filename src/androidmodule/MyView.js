import React from 'react';
import MyCustomView from '../androidmodule/MyCustomView'
export default class MyView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <MyCustomView style={{backgroundColor:'yellow',width:100,height:100}}/>;
    }
}