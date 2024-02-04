let addBtn = document.getElementById("add")
let subtractBtn = document.getElementById("subtract")
let resetBtn = document.getElementById("reset")

let counter = 0

addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let val = parseInt(document.getElementById("input-value").value)
    counter += val
    document.getElementById("number").innerText = counter
})

subtractBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let val = parseInt(document.getElementById("input-value").value)
    counter -= val
    document.getElementById("number").innerText = counter
})

resetBtn.addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById("number").innerText = 0
})

