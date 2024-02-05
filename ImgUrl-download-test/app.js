// import { createWriteStream } from 'fs';
// // import fetch from 'node-fetch';

// // Function to download image from URL and save it to file system
// async function downloadImage(url, destPath) {
//     try {
//         // Fetch the image from the URL
//         const response = await fetch(url);

//         // Check if response is successful (status code 200)
//         if (!response.ok) {
//             throw new Error(`Failed to download image. Status Code: ${response.status}`);
//         }

//         // Create a writable stream to save the image
//         const fileStream = createWriteStream(destPath);

//         // Pipe the response data (image) to the file stream
//         await new Promise((resolve, reject) => {
//             response.body.pipe(fileStream);
//             response.body.on("error", (err) => {
//                 reject(err);
//             });
//             fileStream.on("finish", function() {
//                 resolve();
//             });
//         });

//         console.log('Image downloaded successfully.');
//     } catch (error) {
//         console.error('Failed to download image:', error);
//     }
// }

// // Example usage
// const imageUrl = 'https://cdn.kpriet.ac.in/students/21EC109.jpg'; // Replace with your image URL
// const imagePath = './downloaded_image.jpg'; // Replace with desired file path

// // Call the function to download the image
// downloadImage(imageUrl, imagePath);

// Need to install node-fetch
import fetch from "node-fetch";
import { existsSync, mkdirSync, writeFile } from "fs";
import { join } from "path";

// The URL of the image to download
const imageURL = "https://cdn.kpriet.ac.in/students/21EC068.jpg";

// The path of the directory to save the image
const dirPath = "./images";

// The name of the image file
const fileName = "image.jpg";

// Create the directory if it does not exist
if (!existsSync(dirPath)) {
  mkdirSync(dirPath);
}

// Use fetch to get the image data as a buffer
fetch(imageURL)
  .then((response) => response.buffer())
  .then((buffer) => {
    // Write the buffer to a file
    writeFile(join(dirPath, fileName), buffer, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Image downloaded successfully");
      }
    });
  })
  .catch((error) => {
    console.error(error);
  });
// import { writeFile } from "fs";

// const blobData = new Blob(['This is the content of the file'], {
//   type: 'text/plain'
// })
// writeFile('my-file.txt', blobData, err => {
//   if (err) {
//     console.error('Error writing file:', err)
//   } else {
//     console.log('File written successfully')
//   }
// })

// fetch("https://cdn.kpriet.ac.in/students/21EC109.jpg").then((data)=>{
//     return data.buffer()
// }).then((daat)=>{
//     console.log(daat);
// }).catch((err)=>{
//     console.log("here");
//     console.log(err);
// })
