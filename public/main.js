const canvas = document.getElementById('canvas')
const container = document.getElementById('container')
let selector = document.getElementById('selector')

for(let i =0; i < 3500; i++) {
    var div = document.createElement('div')
    div.className = 'box'
    canvas.appendChild(div)
}

canvas.addEventListener('click', (event) => {
    event.preventDefault()
    let id = event.target
    changeColor(id)
})

container.addEventListener('click', (event) => {
    event.preventDefault()
    let el = event.target.dataset.color
    color = el
    selector.className = el
    selector.textContent = el
})

changeColor = (id) => {
    id.className = color
}