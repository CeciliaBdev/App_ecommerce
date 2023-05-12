import { View, Text, ScrollView } from 'react-native'
import React, {useState} from 'react'
import {
    colors,
    defaultStyle,
    formHeading,
    inputOptions,
    inputStyling,
  } from "../../styles/styles";
  import Header from "../../components/Header";
  import Loader from "../../components/Loader";
import { Button, TextInput } from 'react-native-paper';
import SelectComponent from '../../components/SelectComponent';

const UpdateProduct = ({navigation, route}) => {

    const loading = false;
    const loadingOther = false;
    // console.log(route.params)
    //   resultat : {"key": "updateproduct-s4h-dbjnkJVElqkroxZAn", "name": "updateproduct", "params": {"id": "324562"}, "path": undefined}
    const [id] = useState(route.params.id)
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [category, setCategory] = useState("Laptop");
    const [categoryID, setCategoryID] = useState("");
    const [categories, setCategories] = useState([
        {
            _id:"deeff", category:"category1"
        },
        {
            _id:"dffff", category:"category2"
        },
        {
            _id:"dmpff", category:"category3"
        }
    ]);
    const [visible, setVisible] = useState(false);

    const submitHandler = () => {

    }


  return (
    //fragment 
    <>
    <View style={{
        ...defaultStyle,
        backgroundColor: colors.color5,
      }}>

        <Header back={true} />

        <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Update product</Text>

        </View>
        {
        loading === true ?
             <Loader />
        : (
            <ScrollView 
                style={{
                padding: 20,
                elevation: 10,
                borderRadius: 10,
                backgroundColor: colors.color3
              }}>
                 <View
                    style={{
                    justifyContent: "center",
                    height: 650,
                }}
                >
                    <Button onPress={() => navigation.navigate("productimages", {
                        id, 
                        images:[],

                    })}  textColor={colors.color1}>Manage Images</Button>

                    <TextInput
                                {...inputOptions}
                                placeholder="Name"
                                value={name}
                                onChangeText={setName}
                    />
                    <TextInput
                        {...inputOptions}
                        placeholder="Description"
                        value={description}
                        onChangeText={setDescription}
                    />
                    <TextInput
                        {...inputOptions}
                        placeholder="Price"
                        keyboardType="number-pad"
                        value={price}
                        onChangeText={setPrice}
                    />
                    <TextInput
                        {...inputOptions}
                        placeholder="Stock"
                        value={stock}
                        keyboardType="number-pad"
                        onChangeText={setStock}
                    />
                    <Text
                    style={{
                    ...inputStyling,
                    textAlign: "center",
                    borderRadius: 3,
                    height:60,
                    paddingVertical:20,
                    }}
                    onPress={() => setVisible(true)}
                    >
                {category}
                </Text>
                <Button
                    textColor={colors.color2}
                    style={{
                    backgroundColor: colors.color1,
                    margin: 20,
                    padding: 6,
                    }}
                    onPress={submitHandler}
                    loading={loadingOther}
                    disabled={loadingOther}
                >
                    Update
                </Button>


            </View>
            </ScrollView>
        )
        }
        
    </View>

    <SelectComponent 
        visible={visible}
        setVisible={setVisible}
        setCategory={setCategory}
        setCategoryID={setCategoryID}
        categories={categories}
    />
   </>
  )
}

export default UpdateProduct