const main = document.querySelector(".container");

for(let x = 0; x < 16; x++){
    for(let y = 0; y < 16; y++){
        squares = document.createElement("div");
        squares.classList.add("squares");
        main.appendChild(squares);
    }
}

//event listeners
squares.addEventListener("mouseover", () => {
    squares.style.background = "black";
});

