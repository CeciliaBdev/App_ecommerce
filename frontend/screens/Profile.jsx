import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native'
import React, {useState} from 'react'
import {
    colors,
    defaultStyle,
    formHeading,
    AvatarSearch
  } from "../styles/styles";
import ButtonBox from '../components/ButtonBox';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const user = {
    name:"Cecilia",
    email:"test@gmail.com"

}
const loading = false;

const Profile = ({navigation}) => {

    const [avatar, setAvatar] = useState(null);

    const logoutHandler = () => {
        console.log('logout')
    }

    //navigation suivant le texte sur l'icône
    const navigateHandler = (text) => {
        switch (text) {
          case "Admin":
            navigation.navigate("adminpanel");
            break;
          case "Orders":
            navigation.navigate("orders");
            break;
          case "Profile":
            navigation.navigate("updateprofile");
            break;
          case "Password":
            navigation.navigate("changepassword");
            break;
          case "Sign Out":
            logoutHandler();
            break;
    
          default:
          case "Orders":
            navigation.navigate("orders");
            break;
        }
      };
  return (
        <>
    <View style={defaultStyle}>
      {/* Heading */}
      <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>Profile</Text>
        </View>

    {/* Loading */}
        {
            loading ? (
                <Loader />
            ) : (
                <>
                <View style={style.container}>
            <Image source={{
                            uri : avatar
                            }}
                            style={{
                            ...AvatarSearch, alignSelf:'center', backgroundColor:colors.color1, height:80, width:80
                            }}
                        />
        
            <TouchableOpacity
                    // disabled={loadingPic}
                    onPress={() =>
                    navigation.navigate("camera", { updateProfile: true })
                    }
                >
                    <Button
                    title="Change Photo"
                    //   disabled={loadingPic}
                    //   loading={loadingPic}
                    color={colors.color1}
                    />
                </TouchableOpacity>
                <Text style={style.name}>{user?.name}</Text>
                <Text style={{
                    fontWeight: "300",
                    color: colors.color2,
                    }}>{user?.email}</Text>
                </View>

                <View>
                    <View style={{
                        flexDirection: "row",
                        margin: 10,
                        justifyContent: "space-between",
                    }}>
                        <ButtonBox handler={navigateHandler} icon={'list'} text={'Orders'}/>
                        <ButtonBox handler={navigateHandler} icon={'dashboard'} text={'Admin'} reverse={true}/>
                        <ButtonBox handler={navigateHandler} icon={'pencil'} text={'Profile'}/>
             </View>
             <View
                style={{
                  flexDirection: "row",
                  margin: 10,
                  justifyContent: "space-evenly",
                }}
              >
                <ButtonBox
                  handler={navigateHandler}
                  text={"Password"}
                  icon={"key"}
                />
                <ButtonBox
                  handler={navigateHandler}
                  text={"Sign Out"}
                  icon={"sign-out"}
                />
              </View>
        </View>
        </>
            )
        }


            

    </View>
    <Footer />
    </>
  )
}


const style = StyleSheet.create({
    container: {
      elevation: 7,
      backgroundColor: colors.color3,
      padding: 30,
      borderRadius: 10,
      alignItems: "center",
    },
    name: {
      fontSize: 20,
      fontWeight: "500",
      marginTop: 10,
      color: colors.color2,
    },
  });

export default Profile