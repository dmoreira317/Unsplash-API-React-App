import React, {useRef} from 'react'
import useTFClassify from '../utils/hooks/useTFClassify';

export default function TensorFlow() {
    const imageRef = useRef();
    const {predict, predictions, setpredictions, isLoading, setisLoading} = useTFClassify()

    return (
        <div className="flex justify-center">
            <div className="w-1/3 text-center">
                <h1>TensorFlow Example</h1>
                <img className="mx-auto" src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzg5MjR8MHwxfHNlYXJjaHw1fHxkb2d8ZW58MHx8fHwxNjI0OTk0ODEw&ixlib=rb-1.2.1&q=80&w=1080" width='400' crossOrigin="anonymous" ref={imageRef}alt="dog"></img>
                <div className="m-5">
                    {   predictions.length > 0 &&
                                predictions.map((prediction) => (
                                    <div className="flex justify-between">    
                                    <p>{prediction.className}</p>
                                    <p>{Math.floor(prediction.probability * 100)}%</p>
                                    </div>
                                    )
                                )
                    }
                    <button className="p-2 rounded bg-gray-900 text-white w-62" onClick={()=> predict(imageRef.current)}>
                        {isLoading && '⏳'}   
                        {!isLoading && 'Predict result'}
                    </button>
                </div>
            </div>
        </div>
    )
}
