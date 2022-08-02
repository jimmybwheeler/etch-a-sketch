function createGrid(gridSize){
    for(let i = 0; i < gridSize; i++){
        const main = document.querySelector(".container");
        const grid = document.createElement("div");
        grid.classList.add("squares");
        grid.style.height = "50px";
        grid.style.width = "50px";
        grid.style.border = "solid black .01px";
        main.appendChild(grid);
    }
}

createGrid(256);