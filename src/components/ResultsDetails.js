import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native'


const ResultsDetails = ({result}) => {
    return(
        <View>
            <Text>{result.name}</Text>
        </View>
    )
}

const style = StyleSheet.create({})

export default ResultsDetails;