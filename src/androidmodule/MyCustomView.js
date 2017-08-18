import {requireNativeComponent, View} from 'react-native';

var iface = {
    name: 'SwipeMenuListView',
    propTypes: {
        ...View.propTypes,// 包含默认的View的属性
    },
};

export default requireNativeComponent('MyCustomView', iface);