import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
} from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import Footer from "../components/Footer";

const ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  
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
          <Text style={formHeading}>Forget Password</Text>
        </View>

        <View style={style.container}>
          <TextInput
            {...inputOptions}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <Button
            loading={loading}
            textColor={colors.color2}
            disabled={email === ""}
            style={style.btn}
            onPress={submitHandler}
          >
            Send OTP
          </Button>

          <Text style={style.or}>OR</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("login")}
          >
            <Text style={style.link}>Log In</Text>
          </TouchableOpacity>
        </View>
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

export default ForgetPassword;