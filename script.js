let gridSize = 40;
let color = "red";
function setGridSize() {
    gridSize = document.getElementById("gridSize").value;
}

let cellSize = window.innerWidth/gridSize;

for (let i=0; i<gridSize; i++) {
    for (let j=0; j<gridSize; j++) {
let grid = `<div class="case"id="case${i}-${j}" style="display:inline-block; width:${cellSize}px; height:${cellSize}px; border:1px solid black;"></div`
        document.getElementById("root").innerHTML += grid;
    }
}

const cases = document.querySelectorAll(".case");
const selectElement = document.getElementById('gridColor');

selectElement.addEventListener('change', function() {
    const selectedValue = this.value; // Get the value of the selected option
    color = selectedValue;
});
cases.forEach((el) => {
    el.addEventListener("click", () => {
        const id = el.getAttribute("id");
        document.getElementById(id).style.backgroundColor = color;
    })
})