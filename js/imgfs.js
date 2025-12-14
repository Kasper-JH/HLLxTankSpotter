const img = document.getElementById("imgFS");
const imgFSbox = document.getElementById("imgFSbox");
const imgAll = document.querySelectorAll(".tank-card img");

function imageClass(img) {
    img.classList.toggle("FS");
    imgFSbox.classList.toggle("show");
}

function imageClassBox() {
    imgFSbox.classList.toggle("show");
    imgAll.forEach(img => img.classList.remove("FS"));
}