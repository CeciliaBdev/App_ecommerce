import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { defaultStyle, colors, formHeading, inputOptions } from '../styles/styles'

import { Button, TextInput } from "react-native-paper";
import Footer from "../components/Footer";

const Verify = ({ navigation }) => {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  
const loading = false
  const submitHandler = () => {
    navigation.navigate('login')
  };
  return (
    <>
      <View style={defaultStyle}>
        {/* Heading */}
        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>Reset Password</Text>
        </View>

        <View style={style.container}>
          <TextInput
            {...inputOptions}
            placeholder="OTP"
            secureTextEntry={true}
            keyboardType="number-pad"
            value={otp}
            onChangeText={setOtp}
          />

          <TextInput
            {...inputOptions}
            placeholder="New Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          <Button
            loading={loading}
            textColor={colors.color2}
            disabled={otp === "" || password === ""}
            style={style.btn}
            onPress={submitHandler}
          >
            Reset
          </Button>

          <Text style={style.or}>OR</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("forgetpassword")}
          >
            <Text style={style.link}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer activeRoute="profile" />
    </>
  );
};

const style = StyleSheet.create({
    
    heading:{
       fontSize:25,
       fontWeight:"500",
       textAlign:'center',
       backgroundColor:colors.color3,
       color:colors.color2,
       padding:5,
       borderRadius:5
    },
    container:{
        flex:1,
        padding:20,
        backgroundColor:colors.color3, borderRadius:5,
        justifyContent:'center',
        //reajustement margin pour laisser de la place au footer
        marginBottom:70
    },
    forget:{
        color:colors.color2,
        marginHorizontal: 20,
        marginVertical:10,
        alignSelf:"flex-end",
        fontWeight:"200"
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

export default Verify;