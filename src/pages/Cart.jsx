import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToAlbum } from '../redux/slice/albumslicer'; // Import the addToAlbum action
import '../styles/Cart.css'; // Import CSS file for styling
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.album.cart);
    const isLoading = useSelector(state => state.album.isLoading);
    const error = useSelector(state => state.album.error);

    useEffect(() => {
        console.log("Cart items in Cart component:", cart); // Debugging
    }, [cart]);

    const handleRemoveFromCart = (album) => {
        dispatch(removeFromCart(album));
        dispatch(addToAlbum(album));
    };

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>Error loading cart data: {error}</h1>;
    }

    return (
        <div className='cart-container'>
            <div className='cart-navbar-container'>
                <Navbar/>
                <div>
                <h1>Your Cart</h1>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul className="cart-list">
                        {cart.map(album => (
                            <li key={album.id} className="cart-item">
                                {album.title}
                                <button onClick={() => handleRemoveFromCart(album)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            </div>
            
            <Footer/>
        </div>
    );
};

export default Cart;
