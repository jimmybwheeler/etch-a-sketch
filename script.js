function createGrid(gridSize){
    for(let i = 0; i < gridSize; i++){
        const main = document.querySelector(".container");
        let grid = document.createElement("div");
        main.appendChild(grid).className = "squares";
    }
}

createGrid(256);