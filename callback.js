const uploadImage = (imageFile, nextStep) => {
  console.log('uploading ' + imageFile);
  const image = 'fs-' + imageFile;
  nextStep(image);
};

const cropImage = (image, nextStep) => {
  console.log('cropping ' + image);
  const image = image + '-crop';
  nextStep(image);
};

const addWatermark = (croppedImage, nextStep) => {
  console.log('cropping ' + croppedImage);
  const image = croppedImage + '-wm';
  nextStep(croppedImage);
};
