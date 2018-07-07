import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore/configureStore';
import App from './App';

const store= configureStore();
//configureStore is afunction
const ReactNRedux=()=>(
    <Provider store={store} >
        <App/>
    </Provider>
);
AppRegistry.registerComponent('placesnative', () => ReactNRedux);
