const Clicked = document.getElementById("clicked");
const element = document.getElementById("select");
const element2 =document.getElementById("content");
Clicked.addEventListener("click", () => {
    element.classList.toggle("active")
    element2.classList.toggle("active")
});
