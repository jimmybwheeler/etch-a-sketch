const container = document.querySelector(".container");
let rows = document.getElementsByClassName("gridRow");


defaultGrid();

function defaultGrid(){
    makeRows(16);
    makeColumns(16);
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


