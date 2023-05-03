let isDrawing = false;
const sketchContainer = document.getElementById("sketch-container")
const gridChanger = document.getElementById("grid-changer")
createGrid(16)

gridChanger.addEventListener("click",()=>{
    let newGridSize 
    while (newGridSize > 50 || !newGridSize){
        newGridSize = getNewGridSize()
    }   
    
    createNewGrid(newGridSize)
})

function getNewGridSize(){
    return prompt("Enter a new grid size (16 X 16)",16)
}

function createNewGrid(size){
    removeCurrentDivs()
    createGrid(size)
}

function removeCurrentDivs(){
    while(sketchContainer.firstChild){
        sketchContainer.removeChild(sketchContainer.firstChild)
    }
    
}
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
    addDrawingEventListeners(square)
}

function addDrawingEventListeners(element){
    
    element.addEventListener("mousedown",() =>isDrawing = true )
    element.addEventListener("mouseup",() => isDrawing = false )
    element.addEventListener("mouseenter",() => { if(isDrawing) element.classList.add("square-hover-enter")})
    element.addEventListener("click",() => element.classList.add("square-hover-enter"))
    element.addEventListener("dragstart",(event) => {
        //Used to prevent the "no symbol" from showing up when mistakenly trying to draw a div
        event.preventDefault()
    })
    //This is for those cases when the user keeps the mouse clicked outside of the canvas
    sketchContainer.addEventListener("mouseleave",() => isDrawing = false)
}