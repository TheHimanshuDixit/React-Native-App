import React from 'react'
import { View, Image } from 'react-native'

const Images = () => {
    return (
        <View>
            <Image 
            style={{width: 200, height: 200}}
            source={require("../../../assets/OIP.jpg")} />
        </View>
    )
}

export default Images