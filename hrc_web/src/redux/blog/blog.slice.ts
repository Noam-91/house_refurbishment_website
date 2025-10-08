import { createSlice } from "@reduxjs/toolkit";
import type IBlog from "../../shared/models/IUser.ts";
import type { RootState } from "../store";
import {getPageBlogs} from "./blog.thunks.ts";

interface IBlogState {
    blogs: IBlog[];
    page: number;
    limit: number;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: IBlogState = {
    blogs: [],
    page: 1,
    limit: 10,
    status: 'idle',
    error: null
};

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //
            .addCase(getPageBlogs.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getPageBlogs.fulfilled, (state, action) => {
                state.blogs = state.blogs+action.payload.items;
                state.status = 'succeeded';
                state.error = null;
            })
            .addCase(getPageBlogs.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })

    }
});

export default blogSlice.reducer;