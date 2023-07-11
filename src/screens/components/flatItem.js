import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'
import { View } from 'react-native'

const Flatitem = () => {

    // either add key variable for uniqueness or add keyExtractor for creating unique key
    const data = [
        { key: "1", name: "Himanshu", age: 25 },
        { key: "2", name: "Harsh", age: 24 },
        { key: "3", name: "Kamal", age: 23 },
        { key: "4", name: "Aashutosh", age: 22 },
    ];

    return (
        <View>
            <FlatList
                // keyExtractor={(key) => {
                //     return key.key
                // }}
                horizontal={true}
                inverted={true}
                showsHorizontalScrollIndicator={false}
                // numColumns={2}
                style={styles.container}
                data={data}
                renderItem={({ item }) => {
                    return <Text key={item.key}>{item.name}</Text>
                }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 100,
    }
})

export default Flatitem