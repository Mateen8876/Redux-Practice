import React from 'react';
import { Provider } from 'react-redux';
import store from './src/screens/store';
import CounterScreen from './src/screens/CounterScreen';
import StackNavigation from './src/Navigation/StackNavigation';

const App = () => {
    return (
        <Provider store={store}>
            <StackNavigation/>
        </Provider>
    );
};

export default App;
