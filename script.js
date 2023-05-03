const sketchContainer = document.getElementById("sketch-container")
createGrid(2)

function createGrid(size){
    let gridSize = Math.pow(size,2)
    for(let i = 1; i <= gridSize; i++){
        createIndividualSquare(size)
    }
}

function createIndividualSquare(size){
    const square = document.createElement("div")
    setStyle(square, size)
    sketchContainer.appendChild(square)
}

function setStyle(square, size){
    square.classList.add("square")
    square.style.boxSizing ="border-box"
    square.style.width = `${700/size}px`
    square.style.height = `${700/size}px`

}