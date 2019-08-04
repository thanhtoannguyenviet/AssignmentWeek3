import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
function CountGroup(props=0) {
    return (
        <View style={styles.row}>
            <View style={styles.column}>
                <Text style={styles.text}><MaterialCommunityIcons name="crown" size={32} color="green" /> {props.Win}</Text>
                <Text style={styles.text}>{parseInt(props.Win*100/props.Battle)}%</Text>
            </View>
            <View>
                <Text style={styles.text}><MaterialCommunityIcons name="knife" size={32} color="red" /> {props.Lose}</Text>
                <Text style={styles.text}>{parseInt(props.Lose*100/props.Battle)}%</Text>
            </View>
            <View>
                <Text style={styles.text}><MaterialCommunityIcons name="sword-cross" size={32} color="gray" /> {props.Battle}</Text>
                <Text style={styles.text}>{parseInt(100-((props.Win+props.Lose)*100/props.Battle))}%</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },text:{
        fontSize:30,
        textAlign:'center'
    }
})
export default CountGroup
