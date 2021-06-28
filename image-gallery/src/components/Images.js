import React, { useState } from "react";
import useFetchImage from "../utils/hooks/useFetchImage";
import Image from "./image";
import Loading from "../components/Loading"
import InfiniteScroll from "react-infinite-scroll-component"
import useDebounce from "../utils/hooks/useDebounce";

//?functional component
export default function images() {
  const [page, setpage] = useState(1)
  const [searchTerm, setsearchTerm] = useState(null)
  const [images, setimages, errors, isLoading] = useFetchImage(page, searchTerm);
 
  function handleRemove(index) {
    setimages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);
  }
  
  function ShowImage(params) {
    return(
      <InfiniteScroll className="flex flex-wrap" dataLength={images.length} next={()=> setpage(page + 1)} hasMore={true}>
        {images.map((img, index) => (
        <Image
          image={img.urls.regular}
          handleRemove={handleRemove}
          index={index}
          const
          key={index}
        />
        ))}
      </InfiniteScroll>
    )
  }

  const debounce = useDebounce();

  function handleInput(e){
    const text = e.target.value
    debounce(()=>setsearchTerm(text))
  }

  return(
    <section>
      <div className="my-5">
        <input type="text" onChange={handleInput} className="w-full border rounded shadow p-1" placeholder="Search photos here"></input>
      </div>

      {
        errors.length > 0 && <div className="flex h-screen"><p className="m-auto">{errors[0]}</p></div>
      }

      <ShowImage />

      {
        isLoading && <Loading />
      }
     
    </section>
  )
}
