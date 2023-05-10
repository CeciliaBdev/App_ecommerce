import { View, Text } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from "../styles/styles";

const Heading = ({text1='Our', text2="Products"}) => {
  return (
    <View style={{paddingTop:100}}>
        <Text style={{fontSize:25}}>{text1}</Text>
        <Text style={{fontSize:25, fontWeight:900}}>{text2}</Text>
    </View>
  )
}

export default Heading