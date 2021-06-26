import React, { useEffect, useState } from 'react'
import axios from "axios";

const url = process.env.REACT_APP_UNSPLASH_URL

const secret = process.env.REACT_APP_UNSPLASH_KEY

function useFetchImage() {
    const [images, setimages] = useState([])
    
    useEffect(() => {
        axios
        .get(
          `${url}?client_id=${secret}`
        )
        .then((res) => {
          setimages(res.data);
          //console.log(res);
        });
    }, [])
    

      return [images, setimages];
}

export default useFetchImage
