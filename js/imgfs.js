const img = document.getElementById("imgFS");
const imgFSbox = document.getElementById("imgFSbox");
const imgAll = document.querySelectorAll(".tank-card img");

function imageClass(img) {
    img.classList.add("FS");
    imgFSbox.classList.add("show");
}

function imageClassBox() {
    imgFSbox.classList.remove("show");
    imgAll.forEach(img => img.classList.remove("FS"));
}

window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        imgFSbox.classList.remove("show");
        imgAll.forEach(img => {
            img.classList.remove("FS");
            img.classList.add("no-hover");
        });
        
        // Remove no-hover class after a short delay
        setTimeout(() => {
            imgAll.forEach(img => img.classList.remove("no-hover"));
        }, 150);
    }
});