let ball = document.getElementById("ball");
let pol = document.getElementById("pol");
let confettiContainer = document.getElementById("confetti");
ball.ondragstart = () => {

    setTimeout(() => {
        ball.style.display = "none";
    }, 0);
};

ball.ondragend = () => {
    ball.style.border = "0px";
    ball.style.display = "block";
};

pol.ondragover = (e) => {
    e.preventDefault();
};

pol.ondrop = (event) => {
    let { offsetX: x, offsetY: y } = event;

    ball.style.top = y + "px";
    ball.style.left = x + "px";
}

let team1 = 0;
let team2 = 0;
let goal = document.querySelector('.goal');
let goal2 = document.querySelector('.goal1');
let team1ScoreDisplay = document.getElementById("team1Score");
let team2ScoreDisplay = document.getElementById("team2Score");

goal.ondragenter = () => {
    team1++;
    team1ScoreDisplay.textContent = team1; 
    Goal(); 
}

goal2.ondragenter = () => {
    team2++;
    team2ScoreDisplay.textContent = team2; 
    Goal(); 
  }

function create() {
    let confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confettiContainer.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 4000);
}

function Goal() {
    for (let i = 0; i < 50; i++) {
        create();
    }
}

document.getElementById("reset").addEventListener("click", resetBall);

function resetBall() {
    ball.style.top = "50%";
    ball.style.left = "50%";
}