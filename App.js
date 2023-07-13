import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Start from './src/screens/components/start';
import Flatitem from './src/screens/components/flatItem';
import Images from './src/screens/components/Images';
import Buttons from './src/screens/components/buttons';
import Netflixcard from './src/screens/components/netflixcard';
import Multipleclass from './src/screens/components/Multipleclass';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>Hello App</Text>
        {/* <Start /> */}
        {/* <Flatitem /> */}
        {/* <Images /> */}
        {/* <Buttons /> */}
        {/* <Netflixcard /> */}
        <Multipleclass />
        <StatusBar style="auto" />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
    // backgroundColor: 'red'
  }
})
