import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/Album.css';
import { fetchAlbum, addToCart, removeFromAlbum, setFetched } from '../redux/slice/albumslicer';
import Navbar from './Navbar';
import Footer from './Footer';

const Album = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.album);

  useEffect(() => {
    if (!data.isFetched) {
      dispatch(fetchAlbum());
      console.log("Data fetched");
    }
  }, [data.isFetched, dispatch]);

  const handleAddToCart = (album) => {
    console.log("Adding to cart:", album); // Debugging
    dispatch(addToCart(album));
    dispatch(removeFromAlbum(album));
  };

  return (
    <div className='album-container'>
      <div className='album-nav-contaier'>
      <Navbar/>
      {
        data.isLoading ? (
          <h1>Loading....</h1>
        ) : (
          data.data.map(album => (
            <div key={album.id} className='album-list-item'>
              <p>{album.title}</p>
              <button onClick={() => handleAddToCart(album)}>Add to cart</button>
            </div>
          ))
        )
      }
      </div>
      
      <Footer/>
    </div>
  );
};

export default Album;
