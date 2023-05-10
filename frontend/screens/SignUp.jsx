import { View, Text, TouchableOpacity, StyleSheet, Alert, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  AvatarSearch,
  defaultImg
} from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import Footer from "../components/Footer";


const SignUp = ({ navigation }) => {
    const [avatar, setAvatar] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
   navigation.navigate("verify")
  };
  return (
    <>
      <View style={defaultStyle}>
        {/* Heading */}
        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>Sign Up</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={{
            padding:20,
            borderRadius:10,
            backgroundColor:colors.color3
        }}>
            <View style={{minHeight:950}}>

            {/* avatar */}
                <Image source={{
                        uri: avatar ? avatar : defaultImg,
                        }}
                        style={{
                        ...AvatarSearch, alignSelf:'center', backgroundColor:colors.color1, height:80, width:80
                        }}
                    />

            <TouchableOpacity onPress={() => navigation.navigate("camera")}>
              <Button textColor={colors.color1}>Change Photo</Button>
            </TouchableOpacity>

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
              secureTextEntry={true}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
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
                Sign Up
            </Button>

            <Text style={style.or}>OR</Text>

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("login")}
            >
                <Text style={style.link}>Log In</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
      </View>

      <Footer activeRoute="profile" />
    </>
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
      },
      or: {
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "100",
        color: colors.color2,
      },
      link: {
        alignSelf: "center",
        color: colors.color2,
        fontSize: 18,
        textTransform: "uppercase",
        marginVertical: 10,
        marginHorizontal: 20,
      },
    
})

export default SignUp;