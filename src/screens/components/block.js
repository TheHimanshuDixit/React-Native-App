import { View, Image } from 'react-native'

const Block = (props) => {
    return (
        <View>
            <Image
                style={{ width: 200, height: 200 }}
                source={props.imgsource} />
        </View>
    )
}

export default Block