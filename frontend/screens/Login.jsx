import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, {useState} from 'react'
import { defaultStyle, colors, inputStyling } from '../styles/styles'
import { Button, TextInput } from 'react-native-paper'
import Footer from '../components/Footer'


const inputOptions = {
    style:inputStyling,
    mode:"outlined",
    activeOutlineColor:colors.color1,
}
//loader on button login
const loading = false;

const submitHandler = () => {
    //message alert
    // Alert.alert('test')
}
const Login = ({navigation}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


  return (
    <>
    <View style={defaultStyle}>

        <View style={{marginBottom:20}}>
            <Text style={style.heading}>Login</Text>
        </View>

        <View style={style.container}>
            <TextInput 
                {...inputOptions} 
                placeholder='Email' 
                keyboardType='email-address'
                value={email} 
                onChangeText={setEmail}
            />
            <TextInput 
                {...inputOptions} 
                placeholder='Password' 
                secureTextEntry={true}
                value={password} 
                onChangeText={setPassword}
            />

            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("forgetpassword")}>
                <Text style={style.forget}>Forget Password ?</Text>
            </TouchableOpacity> 

           <Button
                loading={loading}
                style={style.btn} 
                textColor={colors.color2} 
                //inactif si email ou password vide
                disabled={email === "" || password === ""}
                onPress={submitHandler}
                >
            Log In
            </Button>

            <Text style={style.or}>OR</Text>

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("signup")}
            >
                <Text style={style.link}>Sign Up</Text>
            </TouchableOpacity>


        </View>

    </View>

    <Footer activeRoute='profile'/>
    </>
  )
}
const LoginHandler = () => {

}

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

export default Login