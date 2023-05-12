import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import {
    colors,
    defaultStyle,
    formHeading,
  } from "../../styles/styles";
  import Header from "../../components/Header";
import Loader from '../../components/Loader';
import ButtonBox from '../../components/ButtonBox';
import ProductListHeading from '../../components/ProductListHeading';
import ProductListItem from '../../components/ProductListItem';
import { products } from '../Home';
import Chart from '../../components/Chart';



const AdminPanel = ({navigation}) => {

    const loading = false;

    const navigateHandler = (text) => {
        switch (text) {
            case "Category":
              navigation.navigate("categories");
              break;
            case "All Orders":
              navigation.navigate("adminorders");
              break;
            case "Product":
              navigation.navigate("newproduct");
              break;
      
            default:
              navigation.navigate("adminorders");
              break;
          }
    }

    const deleteProductHandler = (id) => {
        console.log('delete', id)
    }
 
  return (
    <View style={defaultStyle}>
        <Header back={true} />

    {/* Heading */}
    <View style={{ marginBottom: 20, paddingTop:70 }}>
        <Text style={formHeading}>Admin Panel</Text>
    </View>

    {
        loading ? <Loader /> :
        (
            <>
            <View 
                style={{
              backgroundColor: colors.color3,
              borderRadius: 20,
              alignItems: "center",
            }}>
                <Chart inStock={12} outOfStock={2}/>
            </View>

            <View style={{
                flexDirection: "row",
                margin: 10,
                justifyContent: "space-between",
              }}>
                <ButtonBox handler={navigateHandler} icon={'plus'} text={'Product'}/>
                <ButtonBox handler={navigateHandler} icon={'list'} text={'All Orders'} reverse={true}/>
                <ButtonBox handler={navigateHandler} icon={'plus'} text={'Category'}/>
            </View>

              {/* label des colonnes */}
            <ProductListHeading />

              {/* on va lister les éléments du tableau "products" => Home.jsx */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
              {
                products.map((item, index) => (
                    <ProductListItem 
                        navigate={navigation}
                        deleteHandler={deleteProductHandler}
                        key={item._id}
                        id={item._id}
                        i={index}
                        price={item.price}
                        stock={item.stock}
                        name={item.name}
                        category={item.category}
                        //un tableau = donc la 1ere image
                        imgSrc={item.images[0].url}
                    />
                ))
              }
                </View>
            </ScrollView>
            </>
        )
    }
        
    </View>
  )
}

export default AdminPanel