import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store, AppDispatch, RootState } from './android/app/src/REDUX/store';
import { fetchProducts, selectAllProducts } from './android/app/src/features/products';
import { FlatList, Text, View, ActivityIndicator, Image } from 'react-native';

type Product = {
  id: number;
  image: string;
  title: string;
  price: number;
};

const ProductsList = () => {
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
        <View style={{margin: 8,height:400,width:400,backgroundColor:'rgb(255, 255, 255)',alignItems:'center',padding:10,borderWidth:2,borderRadius:30}}>
          <Image source={{ uri: item.image }} style={{ width: 200, height: 200, marginRight: 10 }} />
          <View style={{marginTop:13}}>
            <Text style={{color:'rgba(0, 0, 0, 0.7)',fontSize:20,fontWeight:'500'}}>{item.title}</Text>
            <Text style={{color:'red',fontWeight:'500',fontSize:20}}>${item.price}</Text>
          </View>
        </View>
        </View>
      )}
    />
  );
};

const App = () => (
  <Provider store={store}>
    <View style={{padding:0,backgroundColor:'rgb(0, 0, 0)'}} >

      <View style={{marginTop:50,alignItems:'center'}}>
        <Text style={{color:'white',fontSize:25,fontWeight:500}}>Ecommerce plateform</Text>
    <ProductsList />
    </View>
    </View>
  </Provider>
);

export default App;
