import React from 'react'
import { Text, TouchableOpacity,StyleSheet } from 'react-native'

function ButtonGroup(props) {
    return props.choice.map(item => {
        return (
            <TouchableOpacity key={item.name} style={styles.button} onPress={()=>props.onPressButton(item.name)}>
                <Text style={styles.text}>
                    {item.name}
                </Text>
            </TouchableOpacity>)
    })


}
const styles=StyleSheet.create({
    button:{
        backgroundColor:'brown',
        marginVertical:15,
        padding:10,
        borderRadius:10,
        width:100,
    },
    text:{
        color:'white',
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center'
    }
})
export default ButtonGroup