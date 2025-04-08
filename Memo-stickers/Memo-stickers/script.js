let ok = document.getElementById('storeBtn');
let input = document.getElementById('memoText');
let area = document.getElementById('memoArea');

ok.addEventListener('click', pridejListek);
input.addEventListener('keydown', (e) => {if (e.key == "Enter") pridejListek()} )

function pridejListek() {
    if (input.value != "" && input.value != null) {
        let listek = document.createElement("div");
        listek.textContent = input.value;
        listek.classList.add("memo");
        listek.addEventListener("click", () => listek.remove())
        area.appendChild(listek);
        input.value = "";
        input.focus();
    }
}

document.getElementById("deleteAll").addEventListener("click", () => area.innerHTML = "");