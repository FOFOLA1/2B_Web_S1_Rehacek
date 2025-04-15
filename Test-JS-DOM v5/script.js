const questions = [
  {
    question: "Který jazyk běží v prohlížeči?",
    options: ["Python", "JavaScript", "C#", "PHP"],
    correctIndex: 1
  },
  {
    question: "Jaký je výstup: 2 + '2' v JavaScriptu?",
    options: ["4", "'4'", "'22'", "Chyba"],
    correctIndex: 2
  },
  {
    question: "Co znamená DOM?",
    options: [
      "Document Object Model",
      "Dynamic Output Mode",
      "Data Order Machine",
      "Display Object Map"
    ],
    correctIndex: 0
  },
  {
    question: "Který HTML tag použiješ pro JavaScript?",
    options: ["<javascript>", "<js>", "<script>", "<code>"],
    correctIndex: 2
  },
  {
    question: "K čemu slouží metoda addEventListener()?",
    options: [
      "Přidá CSS styl",
      "Spustí AJAX požadavek",
      "Naváže posluchač události",
      "Vytvoří nový HTML prvek"
    ],
    correctIndex: 2
  },
  {
    question: "Která z těchto metod mění text elementu?",
    options: ["innerText", "setAttribute", "classList", "style.color"],
    correctIndex: 0
  }
];

//sem přijde váš kód
let questionNum = 0;
let quiz = document.getElementById("quiz");
let start = document.getElementById("start-btn");
let correctCount = 0;

start.addEventListener("click", nextQuestion);




function questionClick(e) {
  if (e.target.innerHTML == questions[questionNum].options[questions[questionNum].correctIndex]) {
    e.target.style.background = "green";
    correctCount++;

  } else {
    e.target.style.background = "red";
  }
  let btns = quiz.getElementsByTagName("button");
  for (let btn of btns) btn.disabled = true;

  
  questionNum++;

  if (questionNum == 6) {
    quiz.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.innerHTML = "Hotovo! Správně: " + correctCount + " z 6."
    h3.id = "result";
    quiz.appendChild(h3);

    let button = document.createElement("button");
    button.innerHTML = "Hrát znovu";
    button.addEventListener("click", reset);
    button.classList.add("btn");
    quiz.appendChild(button);
  } else {
    setTimeout(nextQuestion, 5000);
  }

}

function nextQuestion() {
  quiz.innerHTML = "";

  let h3 = document.createElement("h3");
  h3.innerHTML = questions[questionNum].question
  quiz.appendChild(h3);

  for (let i = 0; i < questions[questionNum].options.length; i++) {
    let button = document.createElement("button");
    button.textContent = questions[questionNum].options[i];
    button.addEventListener("click", questionClick);
    button.classList.add("btn");
    button.style.margin = "5px";
    button.style.padding = "5px";
    quiz.appendChild(button);
  }
}

function reset() {
  questionNum = 0;
  correctCount = 0;
  quiz.innerHTML = "";
  quiz.appendChild(start);
}