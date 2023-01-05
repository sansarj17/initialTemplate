const { createSlice } = require("@reduxjs/toolkit");

const uiInitialState = {
	showCart : true,
	notification:null
}

const uiSlice = createSlice({
	name:"ui",
	initialState:uiInitialState,
	reducers:{
		toggle(state){
			state.showCart = !state.showCart;
		},
		showNotification(state,action){
			state.notification = action.payload
		}
	}
})

export const uiActions = uiSlice.actions;

export default uiSlice.reducer