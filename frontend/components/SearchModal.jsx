import { View, Text, Platform, StatusBar, TextInput, StyleSheet, ScrollView, BackHandler } from 'react-native'
import React, {useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../styles/styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SearchItem from './SearchItem'



const SearchModal = ({ searchQuery, setActiveSearch, setSearchQuery, products = []}) => {


    const navigate = useNavigation()

    // retour en arriere sur android
    // vide la serchbar
    // sur iphone comment tester en réel ?
    const backAction = () => {
        setSearchQuery("");
        setActiveSearch(false);
        return true;
      };
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);
    
        return () => {
          BackHandler.removeEventListener("hardwareBackPress", backAction);
        };
    }, []);

  return (
    <View style ={{
        width: "100%",
        height:"100%",
        position:"absolute",
        top:0,
        zIndex:100,
        backgroundColor:colors.color2,
        padding:35,
        //même chose pour android
        paddingTop: Platform.OS ===  'ios' ? StatusBar.currentHeight : 0
        }}>
      
        <SafeAreaView>
            {/* a la place de searchbar de r.native paper */}
           <TextInput  
            style={styles.input} 
            placeholder="Search..."
            onChangeText={(query) => setSearchQuery(query)}
            value={searchQuery}
           />
        </SafeAreaView>

        <ScrollView>
        <View
            style={{
              paddingVertical: 40,
              paddingHorizontal: 10,
            }}
        >
            {
                products.map(i => (
                    <SearchItem 
                        key={i._id} 
                        imgSrc={i.images[0]?.url} 
                        name={i.name}
                        price={i.price}
                        handler={() =>
                            navigate.navigate("productdetails", { id: i._id })
                          }
                    />
                ))
            }
        </View>
        </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius:10,
      backgroundColor:'lightgrey',
      borderColor:'lightgrey',
    },
  });
export default SearchModal