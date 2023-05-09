import { StyleSheet, Platform, StatusBar } from "react-native";

export const colors = {
    color1: "#c70049",
    color1_light: "rgba(227,25,99,1)",
    color1_light2: "rgba(199,0,73,0.8)",
    color2: "white",
    color3: "rgb(45,45,45)",
    color4: "transparent",
    color5: "#f2f2f2",
    color6: "#f7f7f7",
    color7: "purple" //violet
  };

export const defaultStyle = StyleSheet.create({
    padding: 35,
    paddingTop: Platform.OS === "ios" ? StatusBar.currentHeight : 0,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: colors.color2,
});

export const inputStyling = StyleSheet.create({
  height: 50,
  backgroundColor: colors.color1,
  marginVertical: 10,
  marginHorizontal: 20,
});
//rond avatar de l'icone
export const IconAvatar = StyleSheet.create({
  height: 50,
  backgroundColor: colors.color2,
  width: 50,
  borderRadius: 50, 
  position:"absolute",
  left:20,
  top:40,
  zIndex:10   
});
//left
export const AvatarLeft = StyleSheet.create({
  height: 50,
  backgroundColor: colors.color1,
  width: 50,
  borderRadius: 50, 
  position:"absolute",
  right:20,
  top:40,
  zIndex:10   
});
//search avatar icone
export const AvatarSearch = StyleSheet.create({
  height: 50,
  backgroundColor: colors.color2,
  width: 50,
  borderRadius: 50, 
  zIndex:10,
  shadowColor: '#171717',
  shadowOffset: {width: 0, height: 0},
  shadowOpacity: 0.4,
  shadowRadius: 6,
});
//icone
export const Icon = StyleSheet.create({
  lineHeight:50,
  textAlign:'center',
  fontSize: 30,
  color:"white",
});
//footer icon
export const avatarOptions = {
  color: colors.color2,
  fontSize: 40,
  padding:5,
  backgroundColor: colors.color1
};