import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import ResultsDetail from './ResultsDetails'

const ResultsList = ({title, results, navigation}) => {
    //console.log(results)
    return (<View style={styles.containerStyle}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList
            horizontal //vert is default so hor
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({item}) => { return (
                <TouchableOpacity onPress={() => {navigation.navigate('ResultsShow')}}>
                    <ResultsDetail result={item}/>
                </TouchableOpacity>
                  )}}
        />
    </View>)
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    containerStyle: {
        marginBottom: 10
    }
})

export default ResultsList;