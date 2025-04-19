import axios from "axios";

const API_KEY = ""; // Replace with actual API key
const BASE_URL = "https://techhk.aoscdn.com/";
const MAXIMUM_RETRIES =4 ;


export const enhancedImageAPI = async(file)=>{

    try{

        // sending image to api to process it 
        const taskId= await uploadImg(file);
        console.log("Image uploaded",taskId);

        // fetching the final image
        const finalEnhancedImage= await fetchEnhancedImage(taskId);
        console.log("done", finalEnhancedImage);

        return finalEnhancedImage;

    }catch(err){
        console.log(err.message);

    }

};

const uploadImg = async (file) => {
    // stand way to upload data through browser to api (using formdata)
    const formData = new FormData();
    formData.append("image_file", file);

    const { data } = await axios.post(
        `${BASE_URL}/api/tasks/visual/scale`,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
                "X-API-KEY": API_KEY,
            },
        }
    );

    if (!data?.data?.task_id) {
        throw new Error("Failed to upload image! Task ID not found.");
    }
    return data.data.task_id;
};

const fetchEnhancedImage = async (taskId) => {
    for (let i = 0; i < MAXIMUM_RETRIES; i++) {
      const { data } = await axios.get(
        `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
        {
          headers: {
            "X-API-KEY": API_KEY,
          },
        }
      );
  
      if (!data?.data) {
        throw new Error("Failed to fetch enhanced image! Image not found.");
      }
  
      const result = data.data;
  
      if (result.state !== 4) {
        console.log("✅ Enhancement complete:", result);
        return result;
      }
  
      console.log("⏳ Processing...", i);
      await new Promise((res) => setTimeout(res, 2000));
    }
  
    throw new Error("Max retries reached. Image enhancement timed out.");
};
  