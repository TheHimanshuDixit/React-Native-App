import { View } from 'react-native'
import Block from './block'

const Images = () => {
    return (
        <View>
            <Block imgsource={require("../../../assets/OIP.jpg")} />
        </View>
    )
}

export default Images