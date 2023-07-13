import { StyleSheet, Text, View } from "react-native"

const Multipleclass = () => {
    return (
        <View>
            <View style={[styles.first, styles.common]}><Text>Hello</Text></View>
            <View style={[styles.second, styles.common]}><Text>Hello</Text></View>
            <View style={[styles.third, styles.common]}><Text>Hello</Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    first: {
        backgroundColor: "red"
    },
    second: {
        backgroundColor: "yellow"
    },
    third: {
        backgroundColor: "pink"
    },
    common: {
        width: 50
    }

})

export default Multipleclass