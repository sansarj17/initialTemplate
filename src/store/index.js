import { createSlice, configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice";
import authReducer from "./authSlice";

const store = configureStore({
	reducer: {
		counterInfo:counterReducer,
		auth:authReducer
	}
});

export default store;

