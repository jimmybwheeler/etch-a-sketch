const main = document.querySelector(".container");
const squares = document.createElement("div");
squares.classList.add("squares");

for(let x = 0; x < 16; x++){
    for(let y = 0; y < 16; y++){
        main.appendChild(squares);
        squares.style.width = "25px";
        squares.style.height = "25px";
        squares.style.background = "orange";
    }
}
    

