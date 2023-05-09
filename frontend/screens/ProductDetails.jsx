
import {
    View,
    Text,
    Dimensions,
    Image,
    StyleSheet,
    TouchableOpacity,
  } from "react-native";
  import React, { useEffect, useRef, useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Carousel from 'react-native-snap-carousel'

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;

const ProductDetails = () => {

    
    const isCarousel = useRef(null);

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
      height: 250,
    },
})

export default ProductDetails