import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/Album.css'
import { fetchAlbum, addToCart } from '../redux/slice/albumslicer'
import Navbar from './Navbar'

const Album = () => {
  // Initialize dispatch to send actions to the Redux store
  const dispatch = useDispatch()
  

  const isFetched = useSelector(state => state.album.isFetched); // Adjust the path if necessary

  useEffect(() => {
    if (!isFetched) {
      dispatch(fetchAlbum());
      console.log("Data fetched");
    }
  }, [isFetched, dispatch]); // Add isFetched and dispatch as dependencies
  
  // Access the album state from the Redux store
  const data = useSelector(state => state.album)

  // Use the useEffect hook to fetch album data when the component mounts
    // Empty dependency array means this effect runs only once after the initial render

  // Function to handle adding an album to the cart
  const handleAddToCart = (album) => {
    // Dispatch the addToCart action with the selected album
    console.log("Adding to cart:", album); // Debugging
    dispatch(addToCart(album))
  }

  return (
    <div>
      <Navbar/>
      {
        // Conditional rendering based on whether data is loading
        data.isLoading ? (
          <h1>Loading....</h1> // Display loading message if data is still being fetched
        ) : (
          // Render the list of albums once data is loaded
          data.data.map(album => (
            <div key={album.id} className='album-list-item'>
              <p>{album.title}</p>  {/* Display album title */}
              <button onClick={() => handleAddToCart(album)}>Add to cart</button> {/* Button to add album to cart */}
            </div>
          ))
        )
      }
    </div>
  )
}

export default Album
