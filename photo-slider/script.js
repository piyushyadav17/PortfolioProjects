let images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg"];
let index = 0;

function showImage() {
    document.getElementById("slider-image").src = images[index];
}

function nextImage() {
    index = (index + 1) % images.length;
    showImage();
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage();
}
