import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function main() {
  try {
    const result = await cloudinary.search
      .expression('folder:garuda')
      .sort_by('created_at', 'desc')
      .max_results(20)
      .execute();
      
    console.log("Recent uploads:");
    result.resources.forEach((r: any) => {
      console.log(`- ${r.secure_url}`);
    });
  } catch(e) {
    console.error(e);
  }
}
main();
