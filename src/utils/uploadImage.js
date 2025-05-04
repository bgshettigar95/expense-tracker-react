import { API_PATHS } from "./apiPaths";
import axiosInstance from "./axiosInstance";

const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    try {
        const reposnse = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formData, {
            headers: {
                "Content-Type": "multipart/form-data" // Set header for upload file
            }
        });

        return reposnse.data;
    } catch (error) {
        console.error("Error Uploading file", error);
        throw (error); //Rethrow error for handling
    }
}

export default uploadImage;