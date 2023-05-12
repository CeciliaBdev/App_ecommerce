import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import {
    colors,
    defaultStyle,
    formHeading,
  } from "../../styles/styles";
  import Header from "../../components/Header";
  import Loader from "../../components/Loader";
import Orderitems from '../../components/Orderitems';
import { orders } from '../Orders';
import { Headline } from 'react-native-paper';

const AdminOrders = () => {

    const loading = false;

    const processOrderLoading = false;

    const updateHandler = () => {

    }

  return (
    <View style={{
        ...defaultStyle,
        backgroundColor: colors.color5,
      }}>

        <Header back={true} />

        <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>All Orders</Text>
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
                      
                        admin={true} //pour voir le bouton update
                        updateHandler={updateHandler}
                        loading={processOrderLoading} //icone qui load
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

export default AdminOrders