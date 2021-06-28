import React, { useEffect, useState } from 'react'
import axios from "axios";

const api = process.env.REACT_APP_UNSPLASH_API

const secret = process.env.REACT_APP_UNSPLASH_KEY

function useFetchImage(page, searchTerm) {
    const [images, setimages] = useState([])
    const [errors, seterrors] = useState([])
    const [isLoading, setisLoading] = useState(false)

    function fetch(){
        const url = searchTerm === null ? 'photos?': `search/photos?query=${searchTerm}&`;

        axios.get(
            `${api}/${url}client_id=${secret}&page=${page}`
          ).then((res) => {

            if (searchTerm === null){
                fetchRandom(res)
            } else {
                fetchSearch(res)
            }
          setisLoading(false)})
          .catch(e => {
            seterrors("Unable to fetch photos");
            setisLoading(false)
        })
    }

    function fetchSearch(res) {
        if (page > 1){
        setimages([...images, ...res.data.results]);
        } else {
        setimages([...res.data.results])
        }         
    }

    function fetchRandom(res) {       
        setimages([...images,...res.data]);
    }
    
    useEffect(() => {
        setisLoading(true);
        fetch()
    }, [page]) //Whenever there's a change in the page variable, the brackets work

    useEffect(() => {
        if (searchTerm === null) return;
        setisLoading(true)
        fetch();
    }, [searchTerm])
    

    return [images, setimages, errors, isLoading];
}

export default useFetchImage
