
let table = document.getElementById("paintRaster");
let button = document.getElementById("create");
let text = document.getElementById("size");
let colorPick = document.getElementById("color");
let color = colorPick.value;

colorPick.addEventListener("change", colorChange);
button.addEventListener("click", VygenerujRaster);


function VygenerujRaster() {
    table.innerHTML = "";

    for (let i = 0; i < text.value; i++) {
        let radek = document.createElement("tr");
        for (let j = 0; j < text.value; j++) {
            let policko = document.createElement("td");
            policko.classList.add("bunka");
            policko.addEventListener("dragenter", () => policko.style.backgroundColor = color);
            radek.appendChild(policko);
        }
        table.appendChild(radek);
    }
}




function colorChange(col){
    color = col.value;
  }