import { View, Text, TouchableOpacity, Pressable, StyleSheet, ScrollView, Button } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from "../styles/styles";
import Header from '../components/Header';
import Heading from '../components/Heading';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import CartItem from '../components/CartItem';
import { useNavigation } from '@react-navigation/native';

export const cartItems = [{
    name:"Macbook",
    image:"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg", 
    product:'edsdsd',
    stock:3,
    price:2345, 
    quantity:2,
},
{
    name:"Iphone",
    image:"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg", 
    product:'edersd',
    stock:1,
    price:1345, 
    quantity:1,
},
{
    name:"Macbook",
    image:"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg", 
    product:'eeesdsd',
    stock:3,
    price:2345, 
    quantity:2,
},
{
    name:"Iphone",
    image:"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg", 
    product:'ederfrsd',
    stock:1,
    price:1345, 
    quantity:1,
}
]
const Cart = () => {

    const navigate = useNavigation()

    // sera complété avec le store - redux
    //mise à jour du store
    //fct decrementHandler
    const decrementHandler = (id, qty) => {
        console.log('decrease', id, qty)
    }
    //fct incrementHandler
    const incrementHandler = (id, qty, stock) => {
        console.log('increase', id, qty, stock)
    }

  return (
    <View style={{...defaultStyle, padding:0}}>

        {/* header */}
        <Header back={true} emptyCart={true}/>

        {/* heading */}
        <View style={{marginLeft:35}}>
            <Heading text1='Shopping' text2='Cart' />
        </View>
        

        <View style={{flex:1, paddingVertical:20}}>
            {/* scrollbar enlevé */}
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    cartItems.map((i, index) => (
                        <CartItem 
                        key={i.product} 
                        id={i.product} 
                        name={i.name} 
                        stock={i.stock}
                        amount={i.price}
                        imgSrc={i.image}
                        index={index}
                        qty={i.quantity}
                        incrementHandler={incrementHandler}
                        decrementHandler={decrementHandler}
                        />
                    ))
                }
            </ScrollView>
        </View>


        <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:35}}>
            <Text>Cart</Text>
            <Text>5 €</Text>
        </View>
        
        {/* placement du bouton paiement */}
        <View style={{  flexDirection: "row", justifyContent:'center', margin: 20, marginBottom: 80 }}>
        <Pressable style={({pressed}) => [
                    //chgmt background si button pressé
                        { backgroundColor: pressed ? colors.color1 : 'white',},style.button
                        ]}
                    // fct paiment
                    // onPress={() => console.log('test2')}
                    // si produits dans le panier => confirmOrder
                    onPress={cartItems.length > 0 ? () => navigate.navigate('confirmorder') : null}
                    >
                       
                    <MaterialIcons name="payments" size={20}/> 
                    <Text>Paiement</Text>
                </Pressable>
        </View>
        
    </View>
  )
}
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
        position:'absolute',
        // bottom:10
    }
})




export default Cart