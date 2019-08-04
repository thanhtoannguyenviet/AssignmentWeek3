import React from 'react';
import {Text, View,Image,StyleSheet } from 'react-native';
function GamePlay(props){
    return(
            <View style={styles.info}>
                <Text>{props.playerName}</Text>
                <Image source={props.choice.uri} resizeMode="contain" style={styles.imgChoice}/>
                <Text>{props.choice.name}</Text>
            </View>
    );
}
const styles= StyleSheet.create({
    info:{
        flexDirection:'column',
        alignItems:'center',
       
    },
    imgChoice:{
        width:150,
        height:150
    }
})
export default GamePlay