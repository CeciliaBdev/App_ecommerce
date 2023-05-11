import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { defaultStyle, colors, formHeading } from '../styles/styles'
import Header from '../components/Header'
import Loader from '../components/Loader'
import { Headline } from 'react-native-paper'
import Orderitems from '../components/Orderitems'

const orders = [
    {
    _id:'dedde',
    shoppingInfo:{
        address:" rue du chateau",
        city:"Perpignan",
        country:"France",
        pinCode:66000
    },
    createdAt:"11-05-2023T1456", //this format for the backend
    orderStatus:"Processing",
    paymentMethod:"CASH",
    totalAmount:2000
    },
    {
    _id:'ddlde',
    shoppingInfo:{
        address:" chemin de st roch",
        city:"Eyguieres",
        country:"France",
        pinCode:13430
    },
    createdAt:"11-05-2023T1456", //this format for the backend
    orderStatus:"Processing",
    paymentMethod:"ONLINE",
    totalAmount:2000
    }
]
const Orders = () => {

    const loading = false;

  return (
    <View style={{...defaultStyle, backgroundColor:colors.color5}}>

        <Header back={true}/>
        <View style={{ marginBottom: 20, paddingTop:70 }}>
          <Text style={formHeading}>Orders</Text>
        </View>  
      
      {
        loading === true ?
        <Loader />
        : (
            <View style={{
                padding: 10,
                flex: 1,
              }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                {
                    orders.length > 0 ? orders.map((item, index) => (
                      <Orderitems 
                        key={item._id} 
                        id={item._id} 
                        i={index} 
                        price={item.totalAmount} 
                        status={item.orderStatus} 
                        paymentMethod={item.paymentMethod} 
                        // orderedOn={item.createdAt} 
                        //split de la date pour plus de compréhesion
                        orderedOn={item.createdAt.split("T")[0]} 
                        address={`${item.shoppingInfo.address}, ${item.shoppingInfo.city},${item.shoppingInfo.country} ${item.shoppingInfo.pinCode}`}
                      
                        //admin={true} //pour voir le bouton update
                        //loading={true} //icone qui load
                        />
                    )) : <Headline style={{ textAlign: "center" }}>No orders Yet</Headline>
                }
                </ScrollView>
            </View>
        )
      }
    </View>
  )
}

export default Orders