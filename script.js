const container = document.querySelector(".container");
const rows = document.getElementsByClassName("gridRow");
const resetBtn = document.getElementById("resetBtn");
const changeGrid = document.getElementById("changeGrid");
const error = document.querySelector(".error");


defaultGrid();

function defaultGrid(){
    makeRows(16);
    makeColumns(16);
}

customGrid();

function customGrid(){
    changeGrid.addEventListener("click", () => {
        let errorDiv = document.createElement("div");
        const userInput = prompt("Enter a number between 1 and 100.");
        if(userInput < 0 || userInput > 100 || userInput == NaN || !parseInt(userInput)){
            error.textContent = "Please enter a number between 1 and 100.";
        } else {
            error.textContent = "";
            makeRows(userInput);
            makeColumns(userInput);
        }
    });
}

function makeRows(rowNum){
    for(r = 0; r < rowNum; r++){
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    }
}

function makeColumns(cellNum){
    for(i = 0; i < rows.length; i++){
        for(j = 0; j < cellNum; j++){
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        }
    }
}

// when user mouses over the squares it changes the colors
draw();

function draw(){
    let cells = document.getElementsByClassName("cell");
    for(let i = 0; i < cells.length; i++){
        cells[i].addEventListener("mouseover", changeColor);
    }
}

function changeColor(){
    this.style.backgroundColor = "red";
}

function resetGrid(){
    let cells = document.getElementsByClassName("cell");
    for(let i = 0; i < cells.length; i++){
        cells[i].style.backgroundColor = "green";
    }
    error.firstChild.textContent = "";
    userInput.value = "";
}

resetBtn.addEventListener("click", resetGrid);