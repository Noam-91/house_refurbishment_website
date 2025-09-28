import { createSlice } from "@reduxjs/toolkit";
import type IUser from "../../shared/models/IUser.ts";
import type { RootState } from "../store";
import {checkAuth, login, logout} from "./auth.thunks.ts";

interface IUserState {
    user: IUser | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        status: 'idle',
        error: null
    } as IUserState,
    reducers: {
        resetStatusAndError: (state) => {
            setTimeout(() => {
                state.status = 'idle';
                state.error = null;
            }, 1000);
        }
    },
    extraReducers: (builder) => {
        builder
            // Login
            .addCase(login.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload;
                state.status = 'succeeded';
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.user = null;
                state.status = 'failed';
                state.error = action.payload as string;
            })

            // Logout
            .addCase(logout.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                state.status = 'idle';
                state.error = null;
            })
            .addCase(logout.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })

            // CheckAuth
            .addCase(checkAuth.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.user = action.payload;
                state.status = 'succeeded';
                state.error = null;
            })
            .addCase(checkAuth.rejected, (state, action) => {
                state.user = null;
                state.status = 'failed';
                state.error = action.payload as string;
            })

    }
});

export const selectIsLoggedIn = (state: RootState) => !!state.auth.user;
export const selectUserRole = (state: RootState) => state.auth.user?.role;

export default authSlice.reducer;