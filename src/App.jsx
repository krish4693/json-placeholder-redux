import Album from './components/Album.jsx';
import { fetchAlbum, addToCart } from './redux/slice/albumslicer.jsx'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


// router

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    // Dispatch the fetchAlbum action to load album data
    dispatch(fetchAlbum())
  }, [])

  return (
    <div>
      {/* Main content: Album component */}
      <Album />
    </div>
  );
}

export default App;
