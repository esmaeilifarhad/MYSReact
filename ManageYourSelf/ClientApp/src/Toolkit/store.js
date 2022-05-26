import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './ModalSlice'
import HelperReducer from "./HelperSlice";

const store = configureStore({
    reducer: {
        modalStatus: modalReducer,
        helper: HelperReducer
    }
})
export default store;