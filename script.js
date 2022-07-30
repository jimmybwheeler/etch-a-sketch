const main = document.querySelector(".container");
let squares;

for(let x = 0; x < 16; x++){
    for(let y = 0; y < 16; y++){
        squares = document.createElement("div");
        squares.classList.add("squaresCl");
        main.appendChild(squares);
        squares.style.width = "50px";
        squares.style.height = "50px";
        squares.style.background = "lightgray";
    }
}

//event listeners
squares.addEventListener("mouseover", () => {
    squares.style.background = "black";
});

