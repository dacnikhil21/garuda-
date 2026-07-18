import { v2 as cloudinary } from 'cloudinary';
import * as dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function findRecentUploads() {
  try {
    const result = await cloudinary.search
      .expression('folder:garuda') // The folder used in actions.ts is 'garuda'
      .sort_by('created_at', 'desc')
      .max_results(10)
      .execute();
      
    console.log("Recent Uploads:");
    result.resources.forEach((res: any) => {
      console.log(`- Created: ${res.created_at}`);
      console.log(`  URL: ${res.secure_url}`);
    });
  } catch (err) {
    console.error("Error:", err);
  }
}

findRecentUploads();
