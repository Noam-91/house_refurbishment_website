import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type IUser from "../../shared/models/IUser.ts";
import type { ILoginFormData } from "../../shared/models/IUser.ts";

const AUTH_API_PREFIX = `${import.meta.env.VITE_SERVER_API}/api/auth`;

// Login, POST
export const login = createAsyncThunk<IUser,ILoginFormData>(
    'auth/login',
    async (loginForm: ILoginFormData, thunkAPI) => {
        try {
            const response = await axios.post(`${AUTH_API_PREFIX}/login`, loginForm, {withCredentials:true});
            const data: IUser = response.data;
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);


// Logout, POST
export const logout = createAsyncThunk(
    'auth/logout',
    async (_,thunkAPI) => {
        try{
            await axios.post(`${AUTH_API_PREFIX}/logout`,null,{withCredentials:true});
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

// CheckAuth, GET
export const checkAuth = createAsyncThunk<IUser,void>(
    'auth/checkAuth',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`${AUTH_API_PREFIX}/checkAuth`, {withCredentials:true});
            const user: IUser = response.data;
            return user;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

// Register, POST
export const register = createAsyncThunk(
    'auth/register',
    async (email:string, thunkAPI) => {
        try {
            await axios.post(`${AUTH_API_PREFIX}/register`, email, {withCredentials:true});
            await thunkAPI.dispatch(checkAuth());
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

// forgotPassword, POST
export const forgotPassword = createAsyncThunk(
    'auth/forgotPassword',
    async (email:string, thunkAPI) => {
        try {
            await axios.post(`${AUTH_API_PREFIX}/forgotPassword`, email, {withCredentials:true});
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);







