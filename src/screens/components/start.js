import { StyleSheet, Text } from 'react-native';

const Start = () => {
  return (
    <Text style={styles.textstyle}>Start</Text>
  )
}

const styles = StyleSheet.create({
    textstyle: {
        fontSize: 30,
        color: 'yellow'
    }
})

export default Start;