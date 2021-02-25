import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    // we can make this async
    // instead of using .then 
    const searchApi = async () => {


        // if anything goes wrong with our try block, we catch the error
        try {
            const response = await  yelp.get('/search', {
                params: {
                    limit: 50,
                    term,
                    location: 'san jose'
                }
            })
            setResults(response.data.businesses)
        } catch (err) {
            setErrorMessage('Something went Wrong!')
        }

      
    }
    
    useEffect(( )=> {
        searchApi('Pasta')
    }, [])

    return(
        <View>
            {errorMessage ? <Text>{errorMessage}</Text> : null }
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}    
            />
            <Text>We have found {results.length} results </Text>
            
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen;

