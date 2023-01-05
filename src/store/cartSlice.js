import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./uiSlice";

const cartInitialState = {
    items: [],
    totalQuantity: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState: cartInitialState,
    reducers: {
        addItem(state, action) {
            let ind = state.items.findIndex(
                (currItem) => currItem.id === action.payload.id
            );
            if (ind >= 0) {
                state.items[ind].quantity++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
                state.totalQuantity++;
            }
        },
        reduceQuantity(state, action) {
            let ind = state.items.findIndex(
                (currItem) => currItem.id === action.payload.id
            );
            if (state.items[ind].quantity === 1) {
                state.items = state.items.filter(
                    (currItem) => currItem.id !== action.payload.id
                );
                if (state.totalQuantity === 1) state.totalQuantity = 0;
                else state.totalQuantity--;
            } else {
                state.items[ind].quantity--;
            }
        },
    },
});

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: "Pending",
                message: "Sending Data",
            })
        );
        const printData = (cart) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("Current Cart: ", cart);
                    return resolve("Data Sent");
                }, 1000);
            });
        };
        try {
            await printData(cart);
			dispatch(
				uiActions.showNotification({
					status: "success",
					message: "Successful sending",
				})
			);
        } catch (err) {
			dispatch(
				uiActions.showNotification({
					status: "error",
					message: "Error sending",
				})
			);
		}
    };
};

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
