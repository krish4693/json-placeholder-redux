import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    // Use useSelector to access the cart state from the Redux store
    const cart = useSelector(state => state.album.cart);
    const isLoading = useSelector(state => state.album.isLoading);
    const error = useSelector(state => state.album.error);

    useEffect(() => {
        console.log("Cart items in Cart component:", cart); // Debugging
    }, [cart]);

    // Display loading message if data is still being fetched
    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    // Display error message if there's an error
    if (error) {
        return <h1>Error loading cart data: {error}</h1>;
    }

    return (
        <div>
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map(album => (
                        <li key={album.id}>
                            {album.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
