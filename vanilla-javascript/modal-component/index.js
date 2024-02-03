console.log('js file linked');

let modal = document.getElementById("modal")
let close = document.getElementById("close")
let btn = document.getElementById("btn")

let showModal = false

document.addEventListener("click", () => {
    if(showModal) {
        //modal.classList.remove("modal")
        modal.classList.add("showModal")
    }
    else {
        modal.classList.remove("showModal")   
    }
    showModal = !showModal
})
