import React from 'react'
import {  StyleSheet, Text, View, Image } from 'react-native'


const Tasks = (props) => {
    return (
        <View style={styles.taskItem}>
                <Text style={styles.taskItemText}>{props.text}</Text>
            <Image source={{ uri: 'https://www.iconsdb.com/icons/preview/red/delete-xxl.png' }} style={styles.deleteButton}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    taskItem: {
        backgroundColor: '#FFF2AB',
        padding: 12,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 25,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    taskItemText: {
        fontSize: 18, 
        maxWidth: '80%',
    },
    deleteButton: {
        width: 40,
        height: 40,
    }
});

export default Tasks