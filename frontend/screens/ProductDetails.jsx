
import {
    View,
    Text,
    Dimensions,
    Image,
    StyleSheet,
    TouchableOpacity,
    Pressable
  } from "react-native";
  import React, { useEffect, useRef, useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Carousel from 'react-native-snap-carousel'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Toast } from "react-native-toast-message/lib/src/Toast";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;

const ProductDetails = () => {

    const name = 'Test name';
    const price = 245;
    const stock = 4;
    const description = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, molestiae. Nostrum, quas, tenetur, similique nulla soluta provident suscipit laudantium quod quos ad vero minus`

    const isCarousel = useRef(null);

    //fonction des boutons incrementQty et decrementQty
    // states des boutons + et -
    const [quantity, setQuantity] = useState(1)
    const incrementQty = () => {
        // si stock atteint
        if (stock <= quantity) return
        setQuantity((prev) => prev + 1)
    }
    const decrementQty = () => {
        if (quantity <= 1) return
        // pour pas descendre sous 1
        setQuantity((prev) => prev - 1)
    }

    //function ajout via le bouton add
    const addToCardHandler = () => {
        if (stock === 0) return Toast.show({
            type:"error",
            text1:"Out of stock",
            // text2:" le texte 2"
        })
        Toast.show({
            type:"success",
            text1:` ${quantity} Added to cart`,
        })
    }
    const images = [
        {
            id: 'deee',
            // source:require('../assets/test1.png'),
            url:"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
        },
        {
            id: 'deee',
            // source:require('../assets/test1.png'),
            url:"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
        }
    ]
  return (
    <View style={{...defaultStyle, padding:0, backgroundColor: colors.color1}}>
        <Header back={true}/>
      
      <Carousel
        layout="stack"
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        data={images}
        renderItem={CarouselCardItem}
      />
      {/* revoir marginTop si besoin d'ajustement */}
       <View style={{ backgroundColor: colors.color2, padding:35, flex:1, marginTop:-280,borderTopLeftRadius: 55,
          borderTopRightRadius: 55, }}>
            <Text numberOfLines={2} style={{ fontSize: 25,}}>{name}</Text>
            <Text style={{fontSize: 18,fontWeight: "900",}}>{price}€</Text>
            <Text style={{letterSpacing: 1,lineHeight: 20,marginVertical: 15, textAlign:"justify"}}numberOfLines={8}>{description}</Text>

            <View style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            paddingHorizontal: 5,
          }}>
                <Text style={{color: colors.color3,fontWeight: "200",}}>Quantity</Text>
                <View style={{
              width: 80,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
                {/* on peut personnaliser les boutons  */}
                    <TouchableOpacity onPress={decrementQty} >
                        <MaterialIcons name="remove-circle-outline" size={20} style={{ color:colors.color1}} />
                    </TouchableOpacity>
                        <Text >{quantity}</Text>
                    <TouchableOpacity onPress={incrementQty}>
                        <MaterialIcons name="add-circle-outline" size={20} style={{ color:colors.color1}}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex:1, flexDirection: "row", justifyContent:'center', margin: 20 }}>
              
                <Pressable style={({pressed}) => [
                    //chgmt background si button pressé
                        { backgroundColor: pressed ? colors.color1 : 'white',},style.button,
                        ]}
                    // fct ajout au panier au press
                        onPress={addToCardHandler}>
                    <MaterialIcons name="shopping-cart" size={20}/> 
                    <Text>Add</Text>
                </Pressable>
                
            </View>
            
        
      </View>
    </View>
  )
}

const CarouselCardItem = ({ item, index }) => (
    <View style={style.container} key={index}>
    {/* ici on utilise l'url */}
      <Image source={ {uri : item.url} } style={style.image} />
      {/* si on utilise le chemin (require) */}
      {/* <Image source={ item.source } style={style.image} /> */}

    </View>
  );


  const style = StyleSheet.create({
    container: {
      backgroundColor: colors.color1,
      width: ITEM_WIDTH,
      paddingVertical: 120,
      height: 380,
    },
    image: {
      width: ITEM_WIDTH,
      resizeMode: "contain",
      height: 200,
    },
    button:{
        height:40, 
        borderWidth:1,
        width: '100%',
        borderRadius:15, 
        justifyContent:'center', 
        alignItems:'center', 
        borderColor:'lightgrey',
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        // backgroundColor:'white',
        flexDirection:'row', 
        gap:10,
    }
})

export default ProductDetails