import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type IUser from "../../shared/models/IUser.ts";

const USER_API_PREFIX = `${import.meta.env.VITE_SERVER_API}/api/users`;

// Edit User, PUT
export const editUser = createAsyncThunk<IUser,IUser>(
    'auth/editUser',
    async (user: IUser, thunkAPI) => {
        try {
            const response = await axios.put(`${USER_API_PREFIX}/users/${user._id}`, user, {withCredentials:true});
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

// Get all users, GET
export const getAllUsers = createAsyncThunk<IUser[],void>(
    'auth/getAllUsers',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`${USER_API_PREFIX}/users`, {withCredentials:true});
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

// Get one user, GET
// Not in use.
export const getOneUser = createAsyncThunk<IUser,string>(
    'auth/getOneUser',
    async (id: string, thunkAPI) => {
        try {
            const response = await axios.get(`${USER_API_PREFIX}/users/${id}`, {withCredentials:true});
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

// resetPassword, PUT
export const resetPassword = createAsyncThunk(
    'auth/resetPassword',
    async ({token, password}: {token: string, password: string}, thunkAPI) => {
        try {
            await axios.put(`${AUTH_API_PREFIX}/resetPassword`, {token, password}, {withCredentials:true});
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);