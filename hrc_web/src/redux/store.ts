import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import userReducer from "./user/user.slice";

const store = configureStore({
    reducer:{
        auth: authReducer,
        user: userReducer,
    },

    devTools: true,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware()
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
