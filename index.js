const uploadImage = (imageFile) => {
  return new Promise((resolve, reject) => {
    if (imageFile == '' || imageFile == undefined) {
      reject('Image not found!');
    } else {
      console.log(`uploading ${imageFile}`);
      const image = `fs-${imageFile}`;
      resolve(image);
    }
  });
};

const cropImage = (image) => {
  return new Promise((resolve, reject) => {
    if (image == '' || image == undefined) {
      reject('Image not found!');
    } else {
      console.log(`cropping ${image}`);
      const croppedImage = `${image}-crop`;
      resolve(croppedImage);
    }
  });
};

const addWatermark = (croppedImage) => {
  return new Promise((resolve, reject) => {
    if (croppedImage == '' || croppedImage == undefined) {
      reject('Image not found!');
    } else {
      console.log(`watermarking ${croppedImage}`);
      const watermarkedImage = `${croppedImage}-wm`;
      resolve(watermarkedImage);
    }
  });
};

// uploadImage("Bando", (image) =>
//   cropImage(image, (croppedImage) =>
//     addWatermark(croppedImage, (watermarkedImage) => {
//       console.log(`done ${watermarkedImage}`);
//     })
//   )
// );
