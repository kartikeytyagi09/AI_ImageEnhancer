import React, { useState } from 'react'
import Imgup from './Imgup'
import ImgPrev from './ImgPrev'

import { enhancedImageAPI } from '../services/api';

function Home() {

    const [uploadImage, setUploadImage] = useState(null);   
    const [enhancedImage, setEnhancedImage] = useState(null);
    const [loading, setloading] = useState(false);

    const showOriginalImage=async (file)=>{
        setUploadImage(URL.createObjectURL(file));
        setloading(true);

        try{
            const enhancedURL = await enhancedImageAPI(file);
            setEnhancedImage(enhancedURL);
            setloading(false);
        }catch(err){
            console.log(err);
            alert("error while enhanching the file, Please try again later.")
        }
    }

  return (
    <>
    <Imgup showOriginalImage={showOriginalImage}/>
    <ImgPrev
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage?.image}
        />
    </>
  )
}

export default Home;
