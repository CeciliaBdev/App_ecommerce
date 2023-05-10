import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { defaultStyle, colors } from '../styles/styles'
import Header from '../components/Header'
import Heading from '../components/Heading'
import { cartItems } from './Cart'
import ConfirmOrderItem from '../components/ConfirmOrderItem'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';

const ConfirmOrder = () => {

    const itemsPrice = 400;
    const shoppingCharges =  200;
    const tax = 0.18 * itemsPrice;
    const totalAmount = itemsPrice + shoppingCharges + tax;

    const navigate = useNavigation();

  return (
    <View style={defaultStyle}>
        <Header back={true}/>

        {/* Heading */}
        <View style={{
            marginTop:-30
        }}>
            <Heading  text1='Confirm' text2='Order' />  
        </View>

        <View style={{paddingVertical:20, flex:1}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* affiche un recapitulatif des produits ajoutés  */}
            {
                cartItems.map(i => (
                   <ConfirmOrderItem 
                   key={i.product}
                   image={i.image}
                   price={i.price}
                   name={i.name}
                   quantity={i.quantity}
                   />
                ))
            }
            </ScrollView>

            <PriceTag heading={"Subtotal"} value={itemsPrice} />
            <PriceTag heading={"Shopping"} value={shoppingCharges} />
            <PriceTag heading={"Tax"} value={tax} />
            <PriceTag heading={"Total"} value={totalAmount} />

            <View style={{  flexDirection: "row", justifyContent:'center', margin: 20, marginBottom: -20 }}>
                <Pressable style={({pressed}) => [
                    //chgmt background si button pressé
                        { backgroundColor: pressed ? colors.color1 : 'white',},style.button
                        ]}
                    // fct 
                    onPress={() => navigate.navigate('payment', {
                        itemsPrice, shoppingCharges, tax, totalAmount
                    })}
                    >
                    <MaterialIcons name="payments" size={20}/> 
                    <Text>Paiement</Text>
                </Pressable>
             </View>

        </View>
        
      
    </View>
  )
}
const PriceTag = ({ heading, value }) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 5,
      }}
    >
      <Text style={{ fontWeight: "800" }}>{heading}</Text>
      <Text>{value} €</Text>
    </View>
)
const style = StyleSheet.create({
    
    button:{
        height:50, 
        borderWidth:1,
        width: '80%',
        borderRadius:15, 
        justifyContent:'center', 
        alignItems:'center', 
        borderColor:'lightgrey',
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        // backgroundColor:'white',
        flexDirection:'row', 
        gap:10,
        borderRadius:100,
    }
})

export default ConfirmOrder