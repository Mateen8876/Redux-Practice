import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { increment, decrement, setIncrementAllowed, reset } from '../screens/counterSlice'
import { Styles } from '../utils/styles';

const CounterScreen = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.value);
    const incrementAllowed = useSelector((state) => state.counter.incrementAllowed);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (text) => {
        setInputValue(text);
    };

    const handleStart = () => {
        dispatch(setIncrementAllowed(inputValue));
    };

    const handleReset = () => {
        dispatch(reset());
        setInputValue('');
    };

    return (
        <View style={Styles.container}>
            <Text style={styles.text}>{counter}</Text>

            <TouchableOpacity
                style={styles.incrementbackground}
                onPress={() => incrementAllowed && dispatch(increment())}
            >
                <Text style={{fontFamily:Styles.regularFont,color:Styles.secondaryColor}}>Increment</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.decrementbackground}
                onPress={() => incrementAllowed && dispatch(decrement())}
            >
                <Text style={styles.decrement}>Decrement</Text>
            </TouchableOpacity>

            <View style={styles.viewinput}>
                <TextInput
                    style={styles.input}
                    value={inputValue}
                    onChangeText={handleInputChange}
                    placeholder="Enter Value"
                    keyboardType="number-pad"
                    placeholderTextColor='black'
                />
            </View>

            <TouchableOpacity style={styles.addbackground} onPress={handleStart}>
                <Text style={styles.add}>Add</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.resetbackground} onPress={handleReset}>
                <Text style={styles.reset}>Reset</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CounterScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'black',
        textAlign: 'center',
        bottom: 100,
        justifyContent: 'center',
        fontSize: 30,
        alignItems: 'center',
    },
    input: {
        color: 'black',
        borderRadius: 20,
        top: 6,
        fontSize: 20,
        padding: 1,
        width: 370,
        height: 50,
        textAlign: 'center',
    },
    viewinput: {
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 20,
        top: 3,
        width: 380,
        justifyContent: 'center',
        alignItems: 'center',
    },
    increment: {
        color: 'black',
        fontSize: 25,
        top: 2,
    },
    incrementbackground: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 380,
        height: 50,
        borderRadius: 20,
        bottom: 50,
    },
    decrement: {
        color: 'white',
        fontSize: 25,
        top: 2,
    },
    decrementbackground: {
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        width: 380,
        height: 50,
        borderRadius: 20,
        bottom: 40,
    },
    resetbackground: {
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        width: 380,
        height: 50,
        borderRadius: 20,
        top: 45,
    },
    reset: {
        color: 'white',
        fontSize: 25,
        top: 4,
    },
    addbackground: {
        backgroundColor: 'yellow',
        top: 33,
        width: 380,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    add: {
        color: 'black',
        fontSize: 25,
        top: 4,
    },
});
