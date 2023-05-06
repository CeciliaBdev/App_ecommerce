import { View, Text, TouchableOpacity, Image, Pressable, Button } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'

const ProductCard = ({ stock, name, price, image, id, addToCardHandler, i, navigate }) => {
  return (
    <View>
        <TouchableOpacity activeOpacity={1} onPress={() => navigate.navigate("productdetails", {id})}>
            {/* activeopacity = enleve l'effet blanc du clic */}
            <View style={{
                width: 250,
                alignItems: "center",
                justifyContent: "space-between",
                margin: 20,
                borderRadius: 20,
                height: 350,
                //impair ou pair = couleur differente
                backgroundColor: i % 2 === 0 ? colors.color1 : colors.color2,
                borderColor:'lightgrey',
                shadowColor: '#171717',
                shadowOpacity: 0.6,
                }}>

                {/* revoir la taille de l'image ?? */}
                <Image source={{
                     uri: image,
                    }}
                    style={{
                        width: "100%",
                        height: 200,
                        resizeMode: "contain",
                        position: "absolute",
                        left: 50,
                        top: 105,
                    }}
                />
                
                <View
                    style={{
                    flexDirection: "row",
                    padding: 20,
                    justifyContent: "space-between",
                    width: "100%",
                    }}
                >
                    <Text
                        numberOfLines={2}
                        style={{
                        color: i % 2 === 0 ? colors.color2 : colors.color3,
                        fontSize: 25,
                        fontWeight: "300",
                        width: "60%",
                        }}
                    >
                        {name}
                    </Text>

                    <Text
                        numberOfLines={2}
                        style={{
                        color: i % 2 === 0 ? colors.color2 : colors.color3,
                        fontSize: 20,
                        fontWeight: "700",
                        }}
                    >
                        {price}€
                    </Text>
                </View>

                <TouchableOpacity
                    style={{
                    backgroundColor: i % 2 === 0 ? colors.color2 : colors.color3,
                    borderRadius: 0,
                    paddingVertical: 5,
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    width: "100%",
                }}
                >
                    <Button
                        title="Add To Cart"
                        onPress={() => addToCardHandler(id, name, price, image, stock)}
                        color={i % 2 === 0 ? colors.color1 : colors.color2}
                    />
                </TouchableOpacity>

            </View>

        </TouchableOpacity>
    </View>
  )
}

export default ProductCard