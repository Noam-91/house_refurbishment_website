import { createSlice } from "@reduxjs/toolkit";
import type IUser from "../../shared/models/IUser.ts";
import type { RootState } from "../store";
import {editUser, getAllUsers} from "./user.thunks.ts";

interface IUserListState {
    userList: IUser[];
    editingUser: IUser | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: IUserListState = {
    userList: [] as IUser[],
    editingUser: null,
    status: 'idle',
    error: null
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setEditingUser: (state, action) => {
            state.editingUser = action.payload;
        },
        resetEditingUser: (state) => {
            state.editingUser = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // Get All Users
            .addCase(getAllUsers.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.userList = action.payload;
                state.status = 'succeeded';
                state.error = null;
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })

            // Edit User
            .addCase(editUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(editUser.fulfilled, (state,action) => {
                state.editingUser = action.payload;
                state.status = 'succeeded';
                state.error = null;
            })
            .addCase(editUser.rejected, (state,action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            });
    }
});

export const { setEditingUser, resetEditingUser } = userSlice.actions;
export const selectUserList = (state: RootState) => state.user.userList;
export const selectEditingUser = (state: RootState) => state.user.editingUser;
export default userSlice.reducer;