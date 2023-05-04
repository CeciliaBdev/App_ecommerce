import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { IconAvatar, Icon } from '../styles/styles'

const Header = () => {
  return (
    <>
        <TouchableOpacity style={IconAvatar}>
             <MaterialIcons name="arrow-back" color="black"  style={Icon}   />
        </TouchableOpacity>
    </>
  )
}

export default Header