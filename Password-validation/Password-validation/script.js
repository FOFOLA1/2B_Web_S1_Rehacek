let inputs = getElementsByTagName('input');

for (let index = 0; index < inputs.length-1; index++) {
    inputs[index].addEventListener("keyup", Kontrola);
}

let war = document.getElementById('warning');

function Kontrola() {
    if ((inputs[0].value != null && inputs[0].value != "") && (inputs[1]. value != null && inputs[1].value != "") && (inputs[2]. value != null && inputs[2])) {
        if (inputs[0].value != inputs[1].value) {
            if (inputs[1].value == inputs[2].value) {
                if (inputs[1].value.length >= 8) {
                    inputs[3].disabled = "";
                }
            }
        }
    }
}