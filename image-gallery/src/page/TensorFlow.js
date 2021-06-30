import React, { useEffect, useRef } from 'react'
import '@tensorflow/tfjs'
import * as mobilenet from '@tensorflow-models/mobilenet'

export default function TensorFlow() {
    const imageRef = useRef()

    function predict(){
        const img = imageRef.current;
        mobilenet.load().then(model => {
            // Classify the image.
            model.classify(img).then(predictions => {
                console.log('Predictions: ');
                console.log(predictions);
            });
            });
    }

    return (
        <div className="flex justify-center">
            <div className="w-1/3">
                <h1>TensorFlow Example</h1>
                <img src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzg5MjR8MHwxfHNlYXJjaHw1fHxkb2d8ZW58MHx8fHwxNjI0OTk0ODEw&ixlib=rb-1.2.1&q=80&w=1080" width='400' crossOrigin="anonymous" ref={imageRef}></img>
                <div className="text-center m-5"><button className="p-2 rounded bg-gray-900 text-white" onClick={predict}>Predict result</button></div>
                
            </div>
        </div>
    )
}
