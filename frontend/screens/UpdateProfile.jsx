import { View, Text,StyleSheet, Alert, ScrollView } from "react-native";
import React, { useState } from "react";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
} from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import Header from "../components/Header";


const UpdateProfile = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [pinCode, setPinCode] = useState("");

    //bouton desactivé si input vides
    const disableBtn =
    !name || !email || !password || !address || !city || !country || !pinCode;

  
  const loading = false;
  const submitHandler = () => {
   //message alert
  //  Alert.alert('test')
  };
  return (
      <View style={defaultStyle}>
        <Header back={true} />

        {/* Heading */}
        <View style={{ marginBottom: 20, paddingTop:70 }}>
          <Text style={formHeading}>Edit Profile</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={{
            padding:20,
            borderRadius:10,
            backgroundColor:colors.color3
        }}>
            <View style={{minHeight:950}}>

            <TextInput
                {...inputOptions}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />

            <TextInput
                {...inputOptions}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
              {...inputOptions}
              placeholder="Address"
              value={address}
              onChangeText={setAddress}
            />
            <TextInput
              {...inputOptions}
              placeholder="City"
              value={city}
              onChangeText={setCity}
            />

            <TextInput
              {...inputOptions}
              placeholder="Country"
              value={country}
              onChangeText={setCountry}
            />

            <TextInput
              {...inputOptions}
              placeholder="Pin Code"
              value={pinCode}
              onChangeText={setPinCode}
            />

            <Button
                loading={loading}
                textColor={colors.color2}
                disabled={disableBtn}
                style={style.btn}
                onPress={submitHandler}
            >
               Update
            </Button>
            </View>
        </ScrollView>
      </View>

  );
};

const style = StyleSheet.create({
    
    
    container:{
        flex:1,
        padding:20,
        backgroundColor:colors.color3, borderRadius:5,
        justifyContent:'center',
        //reajustement margin pour laisser de la place au footer
        marginBottom:70
    },
    btn: {
        backgroundColor: colors.color1,
        margin: 20,
        padding: 6,
      }
    
})

export default UpdateProfile;