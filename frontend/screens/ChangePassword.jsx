import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { defaultStyle, colors, inputStyling } from '../styles/styles'
import { Button, TextInput } from 'react-native-paper'
import Header from '../components/Header'


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
const ChangePassword = ({navigation}) => {

    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")



  return (
    <View style={defaultStyle}>
        <Header back={true}/>

        <View style={{marginBottom:20, paddingTop:70}}>
            <Text style={style.heading}>Change Password</Text>
        </View>

        <View style={style.container}>
          
            <TextInput 
                {...inputOptions} 
                placeholder='Old Password' 
                secureTextEntry={true}
                value={oldPassword} 
                onChangeText={setOldPassword}
            />
            <TextInput 
                {...inputOptions} 
                placeholder='New Password' 
                secureTextEntry={true}
                value={newPassword} 
                onChangeText={setNewPassword}
            />

           <Button
                loading={loading}
                style={style.btn} 
                textColor={colors.color2} 
                //inactif si email ou password vide
                disabled={oldPassword === "" || newPassword === ""}
                onPress={submitHandler}
                >
            Change
            </Button>



        </View>

    </View>

   
    
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
        //on enleve le margin car nous n'avons plus le footer
        // marginBottom:70
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
    }
})

export default ChangePassword 