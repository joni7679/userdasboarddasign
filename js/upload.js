const input = document.querySelector("input");
const preview = document.querySelector(".preview");

const image = document.querySelector(".profile-img");
input.addEventListener("change", updateImageDisplay);
function updateImageDisplay() {
    const curFiles = input.files;
    image.src = URL.createObjectURL(curFiles[0]);
    image.style.opacity = 1;
}
