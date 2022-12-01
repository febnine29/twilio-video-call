import { configureStore } from "@reduxjs/toolkit";
import { storeToken } from "../reducer/ServerReducer";
const store = configureStore({
    reducer: {
        accessToken: storeToken
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;