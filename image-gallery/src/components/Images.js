import React, { useState } from "react";
import useFetchImage from "../utils/hooks/useFetchImage";
import Image from "./image";
import Loading from "../components/Loading"
import InfiniteScroll from "react-infinite-scroll-component"
import useDebounce from "../utils/hooks/useDebounce";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

//?functional component
export default function Images() {
  const [page, setpage] = useState(1)
  const [searchTerm, setsearchTerm] = useState(null)
  const [images, setimages, errors, isLoading] = useFetchImage(page, searchTerm);
  const [showPreview, setShowPreview] = useState(false)
 
  function handleRemove(index) {
    setimages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);
  }
  
  function ShowImage(params) {
    return(
      <AnimateSharedLayout>
      <InfiniteScroll className="flex flex-wrap" dataLength={images.length} next={()=> setpage(page + 1)} hasMore={true}>
        {images.map((img, index) => (
        <motion.div className="w-1/6 p-1 border flex justify-center" key={index} layoutId={img.urls.regular}>
        <Image
          show={()=> {
            setShowPreview(img.urls.regular);
          }}
          image={img.urls.regular}
          handleRemove={handleRemove}
          index={index}
        />
        </motion.div>
        ))}
      </InfiniteScroll>
      <AnimatePresence>
        {showPreview && (<motion.div initial={{opacity:0}} animate={{opacity:1}} layoutId={showPreview} exit={{opacity:0}} className="fixed w-full h-full flex justify-center items-center top-0 left-0 z-40" 
        onClick={() =>{
          setShowPreview(false);
          }}>
          <div className="bg-white"> 
          <img className="rounded-lg" src={showPreview} alt="images" width="300" height="auto">
          </img>
          </div>
          </motion.div>)}
      </AnimatePresence>
      </AnimateSharedLayout>
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
