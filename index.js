"use strict";

const images = ["images/Fili1.jpeg", "images/Fili2.jpeg"];
let currentImageIndex = 0;

async function startSlideshow(id) {
    const base = document.getElementsByTagName("base")[0];
    const baseUrl = base?.href ?? "";
    const imgElement = document.getElementById(id);
    imgElement.src = images[currentImageIndex];
    document.body.appendChild(imgElement);

    while (true) {
        await delay(3000);
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imgElement.src = `${baseUrl}${images[currentImageIndex]}`;
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

