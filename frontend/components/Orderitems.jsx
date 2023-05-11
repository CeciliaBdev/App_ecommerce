import { View, Text, StyleSheet, } from 'react-native'
import React from 'react'
import { colors } from "../styles/styles";
import { Button } from "react-native-paper";

const Orderitems = ({id,
    price,
    address,
    orderedOn,
    status,
    paymentMethod,
    updateHandler,
    admin = false,
    loading,
    //index i
    i = 0, }) => {
  return (
    <View style={{
        ...style.container,
        backgroundColor: i % 2 === 0 ? colors.color2 : colors.color3,
      }}>
      <Text style={{...style.text,backgroundColor: i % 2 === 0 ? colors.color3 : colors.color1,}}>ID - #{id}</Text>

      <TextBox title={'Adress'} value={address} i={i}/>
      <TextBox title={'Order On'} value={orderedOn} i={i}/>
      <TextBox title={'Price'} value={price} i={i}/>
      <TextBox title={'Status'} value={status} i={i}/>
      <TextBox title={'Payment Method'} value={paymentMethod} i={i}/>

      {/* // si mode admin = apparition du bouton update */}
      {
      admin && (
        <Button
          mode={"contained"}
          icon={"update"}
          textColor={i % 2 === 0 ? colors.color2 : colors.color3}
          style={{
            width: 120,
            alignSelf: "center",
            marginTop: 10,
            backgroundColor: i % 2 === 0 ? colors.color3 : colors.color2,
          }}
          onPress={() => updateHandler(id)}
          loading={loading}
          disabled={loading}
          title="Update"
        >Update</Button>

          
      )}

    </View>
  )
}

const TextBox = ({ title, value, i }) => (
    <Text
      style={{
        marginVertical: 6,
        color: i % 2 === 0 ? colors.color3 : colors.color2,
      }}
    >
      <Text style={{ fontWeight: "900" }}>{title} - </Text>
      {value}{title === "Price" ? "€" : ""}
      
    </Text>
  );

const style = StyleSheet.create({
    container: {
      padding: 20,
      borderRadius: 10,
      marginVertical: 10,
      elevation: 5,
    },
    text: {
      color: colors.color2,
      fontSize: 16,
      fontWeight: "900",
      marginHorizontal: -20,
      marginTop: -20,
      marginBottom: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
    },
  });

export default Orderitems