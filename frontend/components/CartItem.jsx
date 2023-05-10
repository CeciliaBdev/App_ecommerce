import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const CartItem = ({name, amount, qty, stock, index, imgSrc, id, decrementHandler, incrementHandler, navigate}) => {
  return (
    <View style={{
        flexDirection:'row',
        height:100,
        marginVertical:20
    }}>
        <View style={{
            width:'40%',
            //pair ou impair
            backgroundColor: index % 2 === 0 ? colors.color1 : colors.color3,
            borderTopRightRadius:100, 
            borderBottomRightRadius:100,
    }}>
         <Image 
         source={ {uri : imgSrc } } 
         style={{ 
            width:80, 
            height:"80%", 
            resizeMode:"cover",
            top:'0%',
            left:"50%"
            }} />
    </View >

    <View style={{ 
            width:"40%",
            paddingHorizontal:25
            }}>
                <Text numberOfLines={1} style={{
                    fontSize:17,
                }}
                //rajout de la navigation vers la page du produits
                onPress={() => navigate.navigate("productdetails", {id})}>{name}</Text>
                <Text numberOfLines={1} style={{
                    fontSize:17,fontWeight:900
                }}>{amount}€</Text>
    </View>
    <View style={{ 
            alignItems:'center',
            width:'20%',
            height:80,
            justifyContent:'space-around',
            alignSelf:'center'            
            }}>
            <TouchableOpacity onPress={() => decrementHandler(id, qty)} >
                <MaterialIcons name="remove" size={25} style={{ color:colors.color3, backgroundColor:colors.color5}} />
            </TouchableOpacity>
            <Text style={{borderWidth:1, borderColor:colors.color5, height:25, width:25, textAlign:'center',padding:2}}>{qty}</Text>
            <TouchableOpacity onPress={() => incrementHandler(id, qty, stock)}>
                <MaterialIcons name="add" size={25} style={{ color:colors.color3, backgroundColor:colors.color5}}/>
            </TouchableOpacity>
                
    </View>
    



      
    </View>
  )
}

export default CartItem