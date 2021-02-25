import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const ResultsList = ({title, results}) => {
    //console.log(results)
    return (<View>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text>results{results.length}</Text>
    </View>)
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default ResultsList;