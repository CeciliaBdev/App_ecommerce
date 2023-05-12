import { View, Text, ScrollView, StyleSheet, TouchableOpacity, } from 'react-native'
import React, {useState} from 'react'
import { Avatar, Button, TextInput } from "react-native-paper";
import {
    colors,
    defaultStyle,
    formHeading,
    inputOptions,
  } from "../../styles/styles";
  import Header from '../../components/Header';

 const categories = [
    {
    name:'Laptop',
    _id:"azerty"
    },
    {
     name:'Iphone',
    _id:"querty"
    }
];

const Categories = () => {

    //loader dans le boutton 'add category'
    const loading = false; 
    const [category, setCategory] = useState('')

    //suppression categorie
    const deleteHandler = (id) => { console.log(`${id}`)}

    //ajout categorie
    const submitHandler = () => {
        console.log('add')
    }

  return (
    <View style={{...defaultStyle, backgroundColor:colors.color5}}>
        <Header back={true} />

    {/* Heading */}
    <View style={{ marginBottom: 20, paddingTop:70 }}>
        <Text style={formHeading}>Categories</Text>
    </View>


    <ScrollView style={{
          marginBottom: 20,
        }}
        showsVerticalScrollIndicator={false}>
            <View
                style={{
                backgroundColor: colors.color2,
                padding: 20,
                minHeight: 400,
          }}
        >
            {
                categories.map((i) => (
                    <CategoryCard 
                        name={i.name}
                        id={i._id}
                        key={i._id}
                        deleteHandler={deleteHandler}
                    />
                ))
            }
        </View>
    </ScrollView>

    <View style={styles.container}>
        <TextInput
                    {...inputOptions}
                    placeholder="Category"
                    value={category}
                    onChangeText={setCategory}
                />
         <Button
          textColor={colors.color2}
          style={{
            backgroundColor: colors.color1,
            margin: 20,
            padding: 6,
          }}
          loading={loading}
          //desactivé si pas de category rentré
          disabled={!category}
          onPress={submitHandler}
        >
          Add
        </Button>
    </View>
    </View>
  )
}



const CategoryCard = ({ name, id, deleteHandler }) => (
    <View style={styles.cardContainer}>
      <Text style={styles.cardText}>{name}</Text>
      <TouchableOpacity onPress={() => deleteHandler(id)}>
        <Avatar.Icon
          icon={"delete"}
          size={30}
          style={{
            backgroundColor: colors.color1,
          }}
        />
      </TouchableOpacity>
    </View>
  );
  const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: colors.color3,
      },
    cardContainer: {
      backgroundColor: colors.color2,
      borderColor:'lightgrey',
      shadowColor: '#171717',
      shadowOpacity: 0.3,
      margin: 10,
      padding: 15,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: 10,
    },
    cardText: {
      fontWeight: "600",
      textTransform: "uppercase",
      letterSpacing: 1,
    },
  });

  export default Categories