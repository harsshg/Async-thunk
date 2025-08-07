import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { fetchProducts, selectAllProducts } from '../redux/slices/products';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { styles } from '../constants';

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
        <View style={styles.pageview1}>
          <Image source={{ uri: item.image }} style={styles.img} />
          <View style={styles.prdctdetails}>
            <Text style={styles.txtbx}>{item.title}</Text>
            <Text style={styles.txtbx2}>${item.price}</Text>
          </View>
        </View>
        </View>
      )}
    />
  );
}

export default productList