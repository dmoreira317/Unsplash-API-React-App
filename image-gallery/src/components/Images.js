import React, { useEffect, useState } from "react";
import useFetchImage from "../utils/hooks/useFetchImage";
import Image from "./image";
import Loading from "../components/Loading"
import InfiniteScroll from "react-infinite-scroll-component"

//?functional component
export default function images() {

  const [page, setpage] = useState(1)
  const [images, setimages, errors, isLoading] = useFetchImage(page);

  function handleRemove(index) {
   
    setimages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);

  }
  
  function ShowImage(params) {

    return(<InfiniteScroll dataLength={images.length} next={()=> setpage(page + 1)} hasMore={true}> {images.map((img, index) => (
      <Image
        image={img.urls.regular}
        handleRemove={handleRemove}
        index={index}
        const
        key={index}
      />
    ))};
    </InfiniteScroll>)
  }

  // 
  
  return(
    <section>
     
     {
       errors.length > 0 && <div className="flex h-screen"><p className="m-auto">{errors[0]}</p></div>
     }
      
      <div className="flex flex-wrap">
        <ShowImage />
      </div>
      {
        isLoading && <Loading />
      }
     
    </section>
  );
}
