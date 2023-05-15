import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import {
    colors
  } from "../styles/styles";
  import { Avatar, Headline } from "react-native-paper";

const SelectComponent = ({
    visible, 
    setVisible, 
    setCategory, 
    setCategoryID, 
    categories=[]
}) => {
    const selectCategoryHandler = (item) => {
        // console.log(item)
        setCategory(item.category)
        setCategoryID(item._id) //modifie la categorieID
        setVisible(false) //ferme la fenetre (plus visible)
    }
  return (
    visible && (
        <View style={styles.container}>
        <TouchableOpacity onPress={() => setVisible(false)}>
          <Avatar.Icon
            size={30}
            style={{
              alignSelf: "flex-end",
              backgroundColor: colors.color1,
            }}
            icon={"close"}
          />
        </TouchableOpacity>
        <Headline style={styles.heading}> Select a Category</Headline>
        <ScrollView>
            {
                categories.map((i) => (
                    <Text key={i._id} onPress={() => selectCategoryHandler(i)} style={styles.text}>{i.category}</Text>
                ))
            }
        </ScrollView>
        </View>
    )
    
  )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.color2,
      position: "absolute",
      padding: 35,
      borderRadius: 20,
      width: "90%",
      height: "90%",
      alignSelf: "center",
      top: 40,
      borderColor:'lightgrey',
      shadowColor: '#171717',
      shadowOpacity: 0.4,
    },
    heading: {
      textAlign: "center",
      marginVertical: 10,
      backgroundColor: colors.color3,
      borderRadius: 5,
      padding: 3,
      color: colors.color2,
    },
    text: {
      fontSize: 17,
      fontWeight: "100",
      textTransform: "uppercase",
      marginVertical: 10,
    },
  });

export default SelectComponent