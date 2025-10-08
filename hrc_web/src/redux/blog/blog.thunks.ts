import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import type IBlog from "../../shared/models/IBlog.ts";
import type IPage from "../../shared/models/IPage.ts";

const BLOG_API_PREFIX = `${import.meta.env.VITE_SERVER_API}/api/blog`;

export const getPageBlogs = createAsyncThunk<IPage<IBlog>,{page:number,limit:number}>(
    'blog/getPageBlogs',
    async ({page,limit}, thunkAPI) => {
        try {
            const response = await axios.get(
                `${BLOG_API_PREFIX}`,
                {
                    params: {
                        page: page,
                        limit: limit
                    },
                    withCredentials: true
                }
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);