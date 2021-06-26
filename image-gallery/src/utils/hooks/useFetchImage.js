import React, { useEffect, useState } from 'react'
import axios from "axios";

const url = process.env.REACT_APP_UNSPLASH_URL

const secret = process.env.REACT_APP_UNSPLASH_KEY

function useFetchImage(page) {
    const [images, setimages] = useState([])
    const [errors, seterrors] = useState([])
    const [isLoading, setisLoading] = useState(false)
    
    useEffect(() => {
        setisLoading(true);
        axios
        .get(
          `${url}?client_id=${secret}&page=${page}`
        )
        .then((res) => {
          setimages([...images,...res.data]);
          setisLoading(false);
        }).catch(e => {
            seterrors(e.response.data.errors);
            setisLoading(false)
        });
    }, [page]) //Whenever there's a change in the page variable, the brackets work
    

      return [images, setimages, errors, isLoading];
}

export default useFetchImage
