import { View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { colors, avatarOptions } from '../styles/styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Footer = ({ activeRoute = 'home'}) => {

    const navigate = useNavigation()

    // montrer le footer si user connecté (pour la database)
    const loading = false

    const isAuthenticated = true;

    //navigation au click des icones du footer
    const navigationHandler = (key) =>{
        switch (key) {
            //navigationHandler(0)
            case 0:
              navigate.navigate("home");
              break;
            case 1:
              navigate.navigate("cart");
              break;
            case 2:
                //si authentifié => profile
              if (isAuthenticated) navigate.navigate("profile");
              // sinon page de login
              else navigate.navigate("login");
              break;
            default:
              navigate.navigate("home");
              break;
          }
    }

  return (
    loading === false && (
    //container footer
    <View style={{
        backgroundColor: colors.color1,
        borderTopRightRadius: 120,
        borderTopLeftRadius: 120,
        position: "absolute",
        width: "100%",
        bottom: 0,
      }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
            <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigationHandler(1)}
          >
            {/* <Avatar.Icon
              {...avatarOptions}
              icon={activeRoute === "cart" ? "shopping" : "shopping-outline"}
            /> */}
            {
                activeRoute === "cart"  ?
                //icone shopping cart pour connecté (existe pas en outline)
                //il faudrait un icone shopp non rempli
                <MaterialIcons name="shopping-cart" style={avatarOptions}/> :
                <MaterialIcons name="shopping-bag" style={avatarOptions}/>
            }
          
          </TouchableOpacity>
        

       
            <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigationHandler(2)}
          >
            {
              //ssi pas connecté => icone de login
              isAuthenticated === false
              ? <MaterialIcons name="login" style={avatarOptions}/> 
              :  activeRoute === "profile"  ?
                <MaterialIcons name="person" style={avatarOptions}/> :
                <MaterialIcons name="person-outline" style={avatarOptions}/>
            }
          
          </TouchableOpacity>
         
          </View>
        <View
          style={{
            position: "absolute",
            width: 80,
            height: 80,
            backgroundColor: colors.color2,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
            top: -40,
            alignSelf: "center",
            borderColor:colors.color1,
            borderWidth:1
          }}
        >
          <View
            style={{
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigationHandler(0)}
            >
              {
                activeRoute === "home"  ?
                //fouiller pour les icones
                //peut etre une couleur pour remplir ou non
                //j'ai revu le fond de l'icone
                <MaterialIcons name="home" style={{...avatarOptions, color:colors.color1, backgroundColor:colors.color2}}/> :
                <MaterialIcons name="home-filled" style={{...avatarOptions, color:colors.color1, backgroundColor:colors.color2}}/>
            }
            </TouchableOpacity>
          </View>
        </View>
        

        

    </View>
    )
  )
}

export default Footer