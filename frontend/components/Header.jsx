import {TouchableOpacity } from 'react-native'
import React from 'react'
// import { Avatar } from 'react-native-paper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { IconAvatar, Icon, AvatarLeft } from '../styles/styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { colors } from '../styles/styles'

const Header = ({back, emptyCart=false}) => {

  const emptyCartHandler = () => {
    console.log("Empty Cart")
  }
  const navigate = useNavigation()
  const route = useRoute()

  return (
    <>
    {
      back && (
        <TouchableOpacity style={IconAvatar} onPress={() => navigate.goBack() }>
          <MaterialIcons name="arrow-back" color={route.name==="productdetails" ? colors.color2 : colors.color3 }  style={{...Icon, color:colors.color1}}   />
        </TouchableOpacity>
      )
    }
    <TouchableOpacity style={AvatarLeft}  onPress={emptyCart ? emptyCartHandler : () => navigate.navigate("cart")}>
      {
        emptyCart ? <MaterialIcons name="remove-shopping-cart" color={route.name==="productdetails" ? colors.color2 : colors.color3 }  style={Icon}   /> : <MaterialIcons name="shopping-cart" color={route.name==="productdetails" ? colors.color2 : colors.color3 }  style={Icon}   />
      }
      
    </TouchableOpacity>
       
    </>
  )
}

export default Header