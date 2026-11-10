document.addEventListener("DOMContentLoaded", () => {
    let indice = 0;
    const malisteH1 = document.getElementsByTagName("h1");
    const mesChats = document.getElementById("mesChats");
    const suivant = document.getElementById("suivant");
    const precedent = document.getElementById("precedent")

    console.log(mesChats);

    for (let chat of mesChats.children) {
        console.log(chat);
        chat.classList.add("cacher");
    }
    mesChats.children[indice].classList.remove("cacher");

    suivant.addEventListener("click", () => {
        indice++
        if (indice <= 2) {
            mesChats.children[indice - 1].classList.add("cacher");
            mesChats.children[indice].classList.remove("cacher");
        } else {
            indice = 0;
            mesChats.children[2].classList.add("cacher");
            mesChats.children[indice].classList.remove("cacher");
        }
    })
    precedent.addEventListener("click", () => {
        indice--
        if (indice >= 0) {
            mesChats.children[indice + 1].classList.add("cacher");
            mesChats.children[indice].classList.remove("cacher");
        } else {
            indice = 2;
            mesChats.children[0].classList.add("cacher");
            mesChats.children[indice].classList.remove("cacher");
        }
    })
})

function h1Click() {
    this.classList.toggle("grand");
}