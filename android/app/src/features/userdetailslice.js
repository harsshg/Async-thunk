import { createSlice } from "@reduxjs/toolkit";

export const userDetail = createSlice({
    name:'undefined',
    initialState:{
        user : [],
        loading:false,
        error:null,
    }


})

export default userDetail.reducer;