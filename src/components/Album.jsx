import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'

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
          return <p>{album.title}</p>
        })
      }
      </div>
  )
}

export default album