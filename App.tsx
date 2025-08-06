import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store, AppDispatch, RootState } from './app/REDUX/store';
import { fetchProducts, selectAllProducts } from './app/REDUX/slices/products';
import { FlatList, Text, View, ActivityIndicator, Image } from 'react-native';
import { ProductList } from './app/components/index';
import { Header } from './app/components/index';



const App = () => (
  <Provider store={store}>
    <View style={{padding:0,backgroundColor:'rgb(0, 0, 0)'}} >
     
      <View style={{marginTop:50,alignItems:'center'}}>
        <Header/>
    <ProductList />
    </View>
    </View>
  </Provider>
);

export default App;
