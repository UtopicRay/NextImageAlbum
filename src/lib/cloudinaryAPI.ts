import cloudinary from "cloudinary";

const cloudinaryAPI=cloudinary.v2;

cloudinaryAPI.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure:true
})
export default cloudinaryAPI