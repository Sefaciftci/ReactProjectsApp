import React,{useState} from 'react'
import ImgSearchBar from './Components/ImgSearchBar';
import axios from 'axios';
import ImgList from './Components/ImgList';

const MainSearch = () => {
  const [data,setData] = useState([]);

  const getImageSearch  = async(value) => {
    const access_Key = 'h1d1n6OmU-4REm0Igu94v5yXoTp7HiAoT9U1-YuTLlY';
    const response = await axios.get(`https://api.unsplash.com/search/collections?page=1&query=${value}&client_id=${access_Key}`)  
    setData(response.data.results);
  }

  return (
    <div>
      <ImgSearchBar searchValue={getImageSearch}/>
      <ImgList data={data}/>
    </div>
  )
}

export default MainSearch;