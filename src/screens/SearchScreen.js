import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    console.log(term)
    return(
        <View>
            <SearchBar 
                term={term} 
                onTermChange={ (newTerm) => setTerm(newTerm)}
                onTermSubmit={() => console.log('Submitted')}    
            />
            <Text>Search Screen, {term}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen;

