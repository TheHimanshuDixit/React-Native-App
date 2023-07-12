import { Button, Image, Text, TouchableOpacity, View } from 'react-native'

const Buttons = () => {
    return (
        <View>
            <Button
                title='button'
                // disabled={true}
                onPress={() => alert('button pressed')}
            />
            <TouchableOpacity
                onPress={() => alert('TouchableOpacity pressed')}
                style={{
                    backgroundColor: 'yellow',
                    padding: 10,
                    borderRadius: 10
                }}
            >
                <Image source={require('../../../assets/OIP.jpg')} />
                <Text>TouchableOpacity</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Buttons;