import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store, AppDispatch, RootState } from './app/redux/store';
import { fetchProducts, selectAllProducts } from './app/redux/slices/products';
import { FlatList, Text, View, ActivityIndicator, Image } from 'react-native';
import { ProductList ,Header } from './app/components/index';
import {styles} from './app/constants/index'



const App = () => (
  <Provider store={store}>
    <View style={styles.container} >
      <View style={styles.container2}>
        <Header/>
    <ProductList />
    </View>
    </View>
  </Provider>
);

export default App;
