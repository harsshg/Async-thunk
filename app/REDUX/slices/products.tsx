import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';


const PRODUCTS_API = 'https://fakestoreapi.in/api/products';


const productsAdapter = createEntityAdapter();


export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch(PRODUCTS_API);
    const data = await response.json();
    
    return data.products;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: productsAdapter.getInitialState({ status: 'idle', error: null as string | null }),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        productsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default productsSlice.reducer;
export const { selectAll: selectAllProducts } = productsAdapter.getSelectors((state: any) => state.products);
