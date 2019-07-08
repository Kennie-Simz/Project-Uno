const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dwrehsk3b';
const CLOUDINARY_UPLOAD_PRESETS = 'bqd45j9t';

const pics = document.getElementById('#boxes');
const fileUpload = document.getElementById('#file-upload');

fileUpload.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preser', CLOUDINARY_UPLOAD_PRESETS);

  axios({
    url: CLOUDINARY_URL,
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
    data: formData,
  }).then((res) => {
    console.log(res);
    pics.src = res.data.secure_url;
  }).catch((err) => {
    console.log(err);
  });
});
