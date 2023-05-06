import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'

const SearchItem = ({ price, name, imgSrc, handler }) => (
    <TouchableOpacity onPress={handler}>
      <View
        style={{
          padding: 30,
          borderRadius: 10,
          backgroundColor: colors.color,
        //   width: "100%",
          alignItems: "center",
          justifyContent: "flex-end",
          flexDirection: "row",
          marginVertical: 30,
          borderWidth:1,
          borderColor:'lightgrey',
          shadowColor: '#171717',
          shadowOpacity: 0.2,
        }}
      >
        <Image
          source={{
            uri: imgSrc,
          }}
          style={{
            width: 80,
            height: 100,
            position: "absolute",
            resizeMode: "contain",
            top: 0,
            // top:-15,
            left: 10,
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        />
  
        <View style={{ width: "80%", paddingHorizontal: 30 }}>
          <Text numberOfLines={1}>{name}</Text>
          <Text
            numberOfLines={1}
            style={{
              fontWeight: "900",
            }}
          >
            ₹{price}
          </Text>
          {/* Headline a remplacer par un autre composant  => par un Text */}
        </View>
      </View>
    </TouchableOpacity>
  );

export default SearchItem