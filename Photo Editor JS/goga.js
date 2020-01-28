const canvas = document.querySelector("#canvas");

const ctx = canvas.getContext("2d");

const reader = new FileReader();
// how to load img
const img = new Image();

const uploadImage = e => {
  reader.onload = () => {
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
    img.src = reader.result;
  };
  reader.readAsDataURL(e.target.files[0]);
};

const imageLoader = document.querySelector("#uploader");
imageLoader.addEventListener("change", uploadImage);

const greyscale = () => {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const grey = data[i] * 0.21 + data[i + 1] * 0.71 + data[i + 2] * 0.07;
    data[i] = grey;
    data[i + 1] = grey;
    data[i + 2] = grey;
  }
  // place data on canvas
  ctx.putImageData(imageData, 0, 0);
};

const sepia = () => {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const grey = data[i] * 0.21 + data[i + 1] * 0.71 + data[i + 2] * 0.07;
    data[i] = grey + 95;
    data[i + 1] = grey + 58;
    data[i + 2] = grey;
  }
  // place data on canvas
  ctx.putImageData(imageData, 0, 0);
};

const invert = () => {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    data[i] = 255 - data[i];
    data[i + 1] = 255 - data[i + 1];
    data[i + 2] = 255 - data[i + 2];
  }
  // place data on canvas
  ctx.putImageData(imageData, 0, 0);
};

const rgb = () => {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    data[i] = data[i];
    data[i + 1] = data[i + 2];
    data[i + 2] = data[i + 1];
  }
  // place data on canvas
  ctx.putImageData(imageData, 0, 0);
};

const bgr = () => {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    data[i] = data[i + 2];
    data[i + 1] = data[i + 1];
    data[i + 2] = data[i];
  }
  // place data on canvas
  ctx.putImageData(imageData, 0, 0);
};

const gbr = () => {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    data[i] = data[i + 1];
    data[i + 1] = data[i + 2];
    data[i + 2] = data[i];
  }
  // place data on canvas
  ctx.putImageData(imageData, 0, 0);
};

const grb = () => {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    data[i] = data[i + 1];
    data[i + 1] = data[i];
    data[i + 2] = data[i + 2];
  }
  // place data on canvas
  ctx.putImageData(imageData, 0, 0);
};

const clearChanges = () => {
  img.src = reader.result;
};

document.querySelectorAll("button")[0].addEventListener("click", greyscale);
document.querySelectorAll("button")[1].addEventListener("click", sepia);
document.querySelectorAll("button")[2].addEventListener("click", invert);
document.querySelectorAll("button")[3].addEventListener("click", rgb);
document.querySelectorAll("button")[4].addEventListener("click", bgr);
document.querySelectorAll("button")[5].addEventListener("click", gbr);
document.querySelectorAll("button")[6].addEventListener("click", grb);
document.querySelectorAll("button")[7].addEventListener("click", clearChanges);

// Example how to draw on canvas
/*ctx.fillText("Canvas text!", 100, 50)
ctx.fillStyle = '#eedd';
ctx.fillRect(0, 0, 50, 50)

ctx.fillStyle = 'red';
ctx.beginPath();
ctx.moveTo(canvas.width/2, canvas.height/2);
ctx.lineTo(250, 50);
ctx.lineTo(250, 100);
ctx.closePath();
ctx.fill();*/
