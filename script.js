var bgCanvas = document.querySelector(".bg-canvas");
var bgCtx = bgCanvas.getContext("2d");

var fgCanvas = document.querySelector(".fg-canvas");
var fgCtx = fgCanvas.getContext("2d");

var fgImage = document.querySelector(".fg-image");
var bgImage = document.querySelector(".bg-image");

function drawBgToCanvas() {
  bgCtx.drawImage(bgImage, 0, 0, 512, 512);
  bgCtx.globalCompositeOperation = "source-over";
}

function generate() {
  drawFgToCanvas();
}

function drawFgToCanvas() {
  fgCtx.drawImage(fgImage, 0, 0, 200, 200);
  bgCtx.drawImage(fgCanvas, 45, 51.50, 200, 200);
  generate();
}

function download() {
  const image = bgCanvas.toDataURL();

  const link = document.createElement("a");
  link.href = image;
  link.download = "image.png";
  link.click();
}

document.querySelector(".download").addEventListener("click", download);
document.querySelector(".generate").addEventListener("click", generate);
//

drawBgToCanvas();
