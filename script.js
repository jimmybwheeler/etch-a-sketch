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

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//event listeners
squares.addEventListener("mouseover", (e) => {
    let newColor = getRandomColor();
    return e.target.style.backgroundColor = newColor;
});
