import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons'

const SearchBar = ({term, onTermChange}) => {
    return(
        <View style={styles.backgroundStyle} >
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput // we are passing down a call back function 'onTermChange'
                autocapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={ newTerm => onTermChange(newTerm)}    
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 15,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 15
    },
    inputStyle: {
        // borderColor: 'black',
        // borderWidth: 1,
        flex: 1, // use up as much space
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBar;

