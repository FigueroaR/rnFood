import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
    // we get navigation from onPress used on ResultsList
    // inside navigation we have a function called getParam('')
    const id = navigation.getParam('id')
    const [result, setResult] = useState(null)
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data)
    }
    console.log(result)

    useEffect(() => {
        getResult(id)
    }, [])

    return(
        <View>
            <Text>Results Showw</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ResultsShowScreen;