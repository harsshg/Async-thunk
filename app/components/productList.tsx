import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { fetchProducts, selectAllProducts } from '../REDUX/slices/products';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../REDUX/store';

const productList = () => {

    type Product = {
  id: number;
  image: string;
  title: string;
  price: number;
};
      const dispatch = useDispatch<AppDispatch>();
      const products = useSelector((state: RootState) => selectAllProducts(state)) as Product[];
      const status = useSelector((state: RootState) => state.products.status);
      const error = useSelector((state: RootState) => state.products.error);
    
      useEffect(() => {
        if (status === 'idle') {
          dispatch(fetchProducts());
        }
      }, [status, dispatch]);
    
      if (status === 'loading') return <ActivityIndicator />;
      if (status === 'failed') return <Text>Error: {error}</Text>;
   return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{alignItems:'center'}} >
        <View style={{margin: 8,height:400,width:400,backgroundColor:'rgb(255, 255, 255)',alignItems:'center',padding:10,borderWidth:4,borderRadius:30,borderColor:'rgba(0, 0, 0, 0.27)'}}>
          <Image source={{ uri: item.image }} style={{ width: 200, height: 200, marginRight: 10 }} />
          <View style={{marginTop:10,backgroundColor:"rgba(0, 0, 0, 0.08)",padding:10,borderRadius:15}}>
            <Text style={{color:'rgba(0, 0, 0, 0.7)',fontSize:20,fontWeight:'500'}}>{item.title}</Text>
            <Text style={{color:'red',fontWeight:'500',fontSize:20}}>${item.price}</Text>
          </View>
        </View>
        </View>
      )}
    />
  );
}

export default productList