import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const ResultsShowScreen = ({navigation}) => {
    // we get navigation from onPress used on ResultsList
    // inside navigation we have a function called getParam('')
    const id = navigation.getParam('id')
    
    return(
        <View>
            <Text>Results Show</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ResultsShowScreen;