import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./store/cartSlice";

function App() {
	const dispatch = useDispatch()
    const showCart = useSelector((state) => state.ui.showCart);
	const notification = useSelector((state) => state.ui.notification)
	const cart = useSelector((state) => state.cart)

	const [initial,setInitial] = useState(true);

	useEffect(() => {
		if(initial) {
			setInitial(false)
		} else dispatch(sendCartData(cart));
	},[cart, dispatch, initial])

    return (
        <>
			{notification && <Notification status={notification.status} message={notification.message}/>}
            <Layout>
                {showCart && <Cart />}
                <Products />
            </Layout>
        </>
    );
}

export default App;
