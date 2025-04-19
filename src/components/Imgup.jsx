import React from 'react'

function Imgup(props) {

    const ShowImage=(e)=>{
        const file=e.target.files[0]; 
        if(file){
            props.showOriginalImage(file);
        }
    }

  return (
    <div className='bg-white shadow-lg rounded-2xl p-6 max-w-2xl'>
        <label 
            htmlFor="fileInput" 
            className=' block w-full cursor-pointer border-3 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-all ' >    

            <input 
                type="file" 
                id='fileInput' 
                accept="image/*"
                className=' hidden'  
                onChange={ShowImage}
            />

            <span className='text-lg font-medium text-gray-600'>click and drag to upload Image</span>
        </label>
    </div>
  )
}

export default Imgup
