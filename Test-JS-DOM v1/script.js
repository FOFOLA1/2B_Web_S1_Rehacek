
document.getElementsByTagName("body")[0].style.fontFamily = "calibri, sans-serif";

class Dog {
    constructor(cz_name, en_name, link, like) {
        this.cz_name = cz_name;
        this.en_name = en_name;
        this.link = link;
        this.like = like;
    }
}

let dogs = []


//Přidání prvků do pole
dogs.push(new Dog("Foxteriér", "Fox Terrier", "https://media.istockphoto.com/id/1161044202/cs/fotografie/ps%C3%AD-plemeno-fox-terrier.jpg?s=2048x2048&w=is&k=20&c=I0byPFSCbxnq9wYlGZdstvtNRncd6QsTj6eVK5y33Nk=", true));
dogs.push(new Dog("Sibiřský husky", "Siberian Husky", "https://images.dog.ceo/breeds/husky/n02110185_7210.jpg", false));
dogs.push(new Dog("Čivava", "Chihuahua", "https://images.dog.ceo/breeds/chihuahua/n02085620_2921.jpg", true));
dogs.push(new Dog("Německá doga", "Great Dane", "https://images.dog.ceo/breeds/dane-great/n02109047_17050.jpg", false));
dogs.push(new Dog("Afghánský chrt", "Afghan Hound", "https://images.dog.ceo/breeds/hound-afghan/n02088094_4467.jpg", false));


let CzName = document.getElementById("CZname");
let EnName = document.getElementById("ENGname");
let link = document.getElementById("odkaz");


let add = document.getElementById("submit");
let del = document.getElementById("delete");

let photoArea = document.getElementById("PhotoArea");
photoArea.style.display = "flex";
photoArea.style.flexWrap = "wrap";

let imposterTimer = setInterval(imposter, 20000);

show();

add.addEventListener("click", AddDog);
del.addEventListener("click", imgDel);


function AddDog() {
    if (CzName.value != "" && CzName.value != null &&
        EnName.value != "" && EnName.value != null &&
        link.value != "" && link.value != null) 
    {
        dogs.push(new Dog(CzName.value, EnName.value, link.value, false));
        show()
    }
}

function imposter() {
    dogs.push(new Dog("Podvodník", "Imposter", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn4_cfe_ZM15Cs0umK3rwc2S-Ema9moqKvqg&s", true));
    show();
}

function show() {
    photoArea.innerHTML = '';
    for (let dog of dogs) {
        let newdog = document.createElement('div');
        newdog.style.border = "1px solid black";
        newdog.style.margin = "10px";
        newdog.style.padding = "10px";
        newdog.style.borderRadius = "5px";
        newdog.style.width = "fit-content"
        let img = document.createElement('img');
        img.src = dog.link;
        img.height = '180';
        img.addEventListener("click", resize);
        img.addEventListener("dblclick", switchFav)
        let h3 = document.createElement('h3');
        h3.innerHTML = dog.cz_name + " (<i>" + dog.en_name + "</i>)";
        h3.style.display = "block";
        h3.width = "100%";
        h3.style.textAlign = "center";
        h3.style.margin = 0;
        newdog.append(img);
        newdog.append(h3);
        if (dog.like) newdog.classList.add("favourite");
        photoArea.append(newdog);
    }
}

function imgDel() {
    let hasFav = false;
    for (let dog of dogs) {
        if (dog.like) {
            hasFav = true;
            break;
        }
    }

    if (hasFav) {
        dogs = dogs.filter(dog => dog.like == false);
    }
    else {
        dogs = [];
    }
    show();
}

function resize(e) {
    if (e.target.height == '180') e.target.height = '360';
    else if (e.target.height == '360') e.target.height = '180';
}

function switchFav() {
    const childs = Array.from(photoArea.children);
    console.log(this.parentElement);
    const index = childs.indexOf(this.parentElement);
    dogs[index].like = !dogs[index].like;
    show();
}