const openHelp = document.getElementById("openHelp");
const closeHelp = document. getElementById("closeHelp");
const help = document.getElementById("help");

openHelp.addEventListener("click", () => {
    help.classList.add("open");
});

closeHelp.addEventListener("click", () => {
    help.classList.remove("open");
})