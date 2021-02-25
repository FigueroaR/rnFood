import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native'


const ResultsDetails = ({result}) => {
    return(
        <View style={style.containerStyle}>
            <Image style={style.imageStyle} source={{uri: result.image_url}}/>
            <Text style={style.nameStyle} >{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    imageStyle: {
        borderRadius: 5,
        width: 250,
        height: 120
    },
    nameStyle: {
        fontWeight: 'bold'
    },
    containerStyle: {
        marginLeft: 15
    }
})

export default ResultsDetails;