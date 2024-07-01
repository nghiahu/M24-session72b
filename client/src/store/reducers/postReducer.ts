import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPost:any = createAsyncThunk("post/getAllPost",async()=>{
    let response = await axios.get("http://localhost:8080/posts") 
    return response.data
})
export const getAppPost:any = createAsyncThunk("post/getAppPost", async(post:any)=>{
    let response = await axios.post("http://localhost:8080/posts",post)
    return response.data
})
export const changeStatus:any = createAsyncThunk("post/changeStatus",async(post:any)=>{
    let response = await axios.patch(`http://localhost:8080/posts/${post.id}`,post)
    return response.data
})
const postReducer = createSlice({
    name:"post",
    initialState:{
        posts:[],
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getAllPost.fulfilled,(state,action)=>{
            state.posts = action.payload
        })
        .addCase(getAppPost.fulfilled,(state:any,action:any)=>{
            state.posts.push(action.payload)
        })
        .addCase(changeStatus.fulfilled, (state:any, action:any) => {
            const index = state.posts.findIndex((post:any) => post.id === action.payload.id);
            if (index !== -1) {
              state.posts[index] = action.payload;
            }
          });
    }
})
export default postReducer.reducer;