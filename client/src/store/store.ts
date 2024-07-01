import { ConfigureStoreOptions, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import postReducer from "./reducers/postReducer";
import statusModal from "./reducers/statusModal";
//đi tạo kho
const store = configureStore({
    reducer: {
        userReducer,
        postReducer,
        statusModal
    }
})
// xuất kho
export default store;