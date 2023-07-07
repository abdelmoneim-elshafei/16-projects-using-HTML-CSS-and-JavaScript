const n1 = Math.ceil(Math.random() * 10);
const n2 = Math.ceil(Math.random() * 10);

const qe = document.getElementById("question");
const formel = document.getElementById("form");
const inputel = document.getElementById("input");
const scoreel = document.getElementById("score");
qe.innerText = `What is ${n1} multiply by ${n2} ?`;
let score = JSON.parse(localStorage.getItem("score"));
if(!score) {
    score = 0;
}

const correct = n1 * n2;

formel.addEventListener("submit", () => {
  const userAns = +inputel.value;
  if (userAns == correct) {
    score++;
    updateLoacalStorage();
  } else {
    if (score == 0) {
      return;
    }
    score--;
    updateLoacalStorage();
  }
});

function updateLoacalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
scoreel.innerText = `score: ${score}`;
