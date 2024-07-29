import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import '../styles/Album.css'
import { fetchAlbum } from '../redux/slice/albumslicer'


const album = () => {
    const dispatch=useDispatch()
    const data=useSelector(state=>state.album)
    useEffect(()=>{
      dispatch(fetchAlbum())
    },[])
    console.log(data)

  return (
    <div>
      {
        data.isLoading ? <h1>Loading....</h1>:
        data.data.map(album=>{
          return (
          <><div className='album-list-item'><p>{album.title}</p><button>Add to cart</button></div></>
        )
        })
      }
      </div>
  )
}

export default album