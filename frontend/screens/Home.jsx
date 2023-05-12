import { View, Text, TouchableOpacity, Pressable, ScrollView } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import React, { useState} from 'react'
// import { useDispatch } from "react-redux";
import { defaultStyle, AvatarSearch, Icon, colors } from '../styles/styles'
import Header from '../components/Header'
import SearchModal from '../components/SearchModal'
import ProductCard from '../components/ProductCard'
import { useNavigation } from '@react-navigation/native'
import Footer from '../components/Footer'

export const products = [
  {
    price: 234,
    name:'test 1',
    _id: "324562",
    stock:23,
    category:'category1',
    images: [
      {
        url:"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
      }
    ]
  },
  {
    price: 534,
    name:'test 2',
    _id: "327862",
    stock:5,
    category:'category2',
    images: [
      {
        url:"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
      }
    ]
  },
  
];
const Home = () => {

  const categories = [
    {category:"Viennoiseries", _id:"sddddd"},
    {category:"Snacking", _id:"sddrfdd"},
    {category:"Pâtisseries", _id:"sdfrdd"},
    {category:"Boissons", _id:"sedrdd"},

]
  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  
  const navigate = useNavigation();

  const categoryButtonHandler = (id) => {
    setCategory(id)
  }

  const addToCardHandler = (id) => {
    console.log("add to cart",id)

  };
  

  return (
  
    <>
        {
          activeSearch && (
            <SearchModal 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              setActiveSearch={setActiveSearch}
              products={products}
            />
          )
        }
    {/* // spreadoperator  => on reprend le style et on ajoute le flex: ajuste la taille du header */}
    {/* //<View style={{...defaultStyle, flex:0}}></View> */}
    <View style={defaultStyle}>
      {/* Header */}
      <Header />

      {/* Heading view */}
      <View style={{
            paddingTop: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
        {/* Headin */}
          <View>
              <Text style={{fontSize:25}}>Our </Text>
              <Text style={{fontSize:25, fontWeight:"900"}}>Products </Text>
          </View>

        {/* Search bar */}
        <View >
        <TouchableOpacity style={AvatarSearch} onPress={() => setActiveSearch((prev) =>(!prev))}>
            <MaterialIcons name="search" style={{...Icon,color:'grey',  }  }     />
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories */}
      <View style={{
            flexDirection: "row",
          }}>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {
              categories.map((item, idenx) => (
                //* pressable = button on ios */
                <Pressable title="button" 
                style={{
                  backgroundColor: category===item._id ? colors.color7 : colors.color5,
                  borderRadius:50,
                  height:30,
                  marginVertical:20,
                  marginHorizontal:10,
                  paddingHorizontal:10,
                  justifyContent:'center',
                  alignItems:'center'
                }} 
                key={item._id}
                onPress={() => categoryButtonHandler(item._id)}>
                  <Text style={{fontSize:12, color:category===item._id ? 'white' : 'grey'}}>{item.category}</Text>
                </Pressable>
              ))
            }
            
      </ScrollView>
      </View>

      {/* Products */}
      <View style={{ flex: 1 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((item, index) => (
              <ProductCard
                stock={item.stock}
                name={item.name}
                price={item.price}
                image={item.images[0]?.url}
                addToCardHandler={addToCardHandler}
                id={item._id}
                key={item._id}
                i={index}
                navigate={navigate}
              />
            ))}
          </ScrollView>
        </View>   
    </View>

    <Footer activeRoute={'home'}/>
    </>
  )
}

export default Home