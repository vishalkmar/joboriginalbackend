import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
    // cloud_name:process.env.CLOUD_NAME,
    // api_key:process.env.API_KEY,
    // api_secret:process.env.API_SECRET     
     cloud_name:'dtr6m1eks',
    api_key:'191345711858675',
    api_secret:'efL8PmZunvm63D_nb7EaY2Ft7Fk'            
});
export default cloudinary;

