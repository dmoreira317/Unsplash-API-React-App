import React, { useEffect, useState } from 'react'
import axios from "axios";

const api = process.env.REACT_APP_UNSPLASH_API

const secret = process.env.REACT_APP_UNSPLASH_KEY

function useFetchImage(page, searchTerm) {
    const [images, setimages] = useState([])
    const [errors, seterrors] = useState([])
    const [isLoading, setisLoading] = useState(false)

    function fetchSearch(params) {
        axios.get(
            `${api}/search/photos?client_id=${secret}&page=${page}&query=${searchTerm}`
          )
          .then((res) => {
              if (page > 1){
                setimages([...images, ...res.data.results]);
              } else {
                setimages([...res.data.results])
              }         
            setisLoading(false);
          }).catch(e => {
              seterrors("Unable to fetch photos");
              setisLoading(false)
          })
    }

    function fetchRandom(params) {
        axios.get(
            `${api}/photos?client_id=${secret}&page=${page}`
          )
          .then((res) => {
            
                  setimages([...images,...res.data]);
      
            setisLoading(false);
          }).catch(e => {
              seterrors("Unable to fetch photos");
              setisLoading(false)
          });
    }
    
    useEffect(() => {
        
        setisLoading(true);
        
        if (searchTerm !== null) {
            fetchSearch();
        } else {
            fetchRandom();
        }
        
    }, [page]) //Whenever there's a change in the page variable, the brackets work

    useEffect(() => {
        if (searchTerm === null) return;
        setisLoading(true)
        
        fetchSearch();

    }, [searchTerm])
    

      return [images, setimages, errors, isLoading];
}

export default useFetchImage
