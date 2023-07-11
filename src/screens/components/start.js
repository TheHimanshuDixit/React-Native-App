import { StyleSheet, Text } from 'react-native';

const Start = () => {

  const a = "Himanshu";
  const b = <Text>Start</Text>;

  const getfullname = (fname, lname) => {
    return fname + " " + lname;
  }

  return (
    <>
      <Text style={styles.textstyle}>Start {a}</Text>
      {b}
      <Text style={styles.textstyle}>{getfullname("Himanshu", "Dixit")}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  textstyle: {
    fontSize: 30,
    color: 'yellow'
  }
})

export default Start;