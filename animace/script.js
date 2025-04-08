let ok = document.getElementById('storeBtn');   
let block1 = document.getElementById('container');  
let rotation = 0;


ok.addEventListener('click', barva);

let intervalColor = setInterval(barva, 700);
let intervalRotate = setInterval(otocit, 1000);

function otocit() {     
  rotation += 45;
  block1.style.transform = `rotate(${rotation}deg)`;
}

function barva()
{
    if(block1.style.backgroundColor == "red")
        {
        block1.style.backgroundColor = "yellow";
        }
        else{
            block1.style.backgroundColor = "red";
        }
}