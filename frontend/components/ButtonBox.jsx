import {Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {
    colors
  } from "../styles/styles";

import Icon from 'react-native-vector-icons/FontAwesome'

const ButtonBox = ({icon, text, handler, reverse=false, loading=false}) => {
  return (
  
      <TouchableOpacity style={{
        backgroundColor: reverse ? colors.color1 : colors.color3,
        height: 80,
        width: 80,
        borderRadius: 20,
        alignItems: "center",
        justifyContent:'center'
      }}
      onPress={() => handler(text)}
      disabled={loading}>
            <Icon name={icon} size={30} color={colors.color2} />
            <Text
                style={{
                color: colors.color2,
                textAlign: "center",
                }}
            >{text}</Text>
        </TouchableOpacity>
   
  )
}

export default ButtonBox