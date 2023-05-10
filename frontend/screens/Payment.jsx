import { View, Text, StyleSheet, TouchableOpacity, Pressable, Button, Input } from 'react-native'
import React, {useState, useMemo} from 'react'
import { defaultStyle, colors } from '../styles/styles'
import Header from '../components/Header'
import Heading from '../components/Heading'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import RadioGroup from 'react-native-radio-buttons-group';

// const RadioButton = ({ onPress, selected, children }) => {
//     return (
//       <View style={style.radioButtonContainer}>
//         <TouchableOpacity onPress={onPress} style={style.radioButton}>
//           {selected ? <View style={style.radioButtonIcon} /> : null}
//         </TouchableOpacity>
//         <TouchableOpacity onPress={onPress}>
//           <Text style={style.radioButtonText}>{children}</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

const Payment = ({navigation, route}) => {

    const radioButtons = useMemo(() => ([
        {
            id: 'CASH', // acts as primary key, should be unique and non-empty string
            label: 'Monnaie',
            // value: 'CASH'
        },
        {
            id: 'ONLINE',
            label: 'Online',
            // value: 'ONLINE'
        }
    ]), []);

    //etat initial en monnaie
    const [paymentMethod, setPaymentMethod] = useState('CASH');
    // console.log(paymentMethod)

    //authentification
    const isAuthenticated = true;

    //si pas authentifier => redirection vers login
    const redirectToLogin = () => {
        navigation.navigate('login')
    }

    //methode de paiement sur plade
    const cashHandler = () => {
        console.log('paiement en cash')
    }

    //methode de paiement en ligne
    const onlineHandler = () => {
        console.log('paiement en ligne')
    }

  return (
    <View style={defaultStyle}>

        <Header back={true}/>
        <View style={{
            marginTop:-30
        }}>
            <Heading  text1='Payment' text2='Method' />  
        </View>

        <View style={style.container}>
            {/* revoir le style des boutons radio */}
            <RadioGroup 
                radioButtons={radioButtons} 
                onPress={setPaymentMethod}
                selectedId={paymentMethod}
                layout='row'
            />
        </View> 

        <View style={{ alignItems:'center'}}>
        <Pressable style={({pressed}) => [
                    //chgmt background si button pressé
                        { backgroundColor: pressed ? colors.color1 : 'white',},style.button
                        ]}
                    // fct si authentifié => cash ou online sinon redirect vers login
                    onPress={
                        !isAuthenticated
                        ? redirectToLogin
                        : paymentMethod === "CASH"
                        ? () => cashHandler()
                        : onlineHandler
                    }
                    >
                    <Text>{
                    paymentMethod === 'CASH' ? 'Place Order' : 'Payer'
                    }</Text>
            </Pressable>
        </View>
            
      
    </View>
  )
}
const style = StyleSheet.create({
    
    container:{
        backgroundColor: colors.color3,
        padding: 30,
        borderRadius: 10,
        marginVertical: 20,
        flex: 1,
        justifyContent: "center",
        alignItems:'center',
     },
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
    }
    
})


export default Payment