import React from 'react';
import { StyleSheet, Text } from 'react-native';

function GameStatus(props){
   let color=props.result=='Victory!'?'green':'red';
   if(props.result=='Tie game!') color='white';
    return <Text style={[styles.text,{color:color}]}>Result:{props.result}</Text>
    
}
const styles=StyleSheet.create({
   
    text:{
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center',
        position:"absolute",
        bottom:15
    }
})
export default GameStatus