// selectors
let rules = document.querySelector(".rules");
let overlay = document.querySelector(".overlay");
let exit = document.querySelector(".exit");
let playGround = document.querySelector(".playground");
let computer = document.querySelector(".computer-choice");

// select choices 
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

//score
let score = document.querySelector(".score span");
score.innerHTML = localStorage.getItem("counter");


// select music 
let impact = document.querySelector(".impact");


rules.onclick = () => { rules.className = "rules open"; };
exit.onclick = () => { rules.className = "rules close"; };

paper.onclick = function () {
  step2(paper);
};
scissors.onclick = function () {
  step2(scissors);
};
rock.onclick = function () {
  step2(rock);
};


let [paperImg, scissorsImg, rockImg] = ["images/icon-paper.svg", "images/icon-scissors.svg", "images/icon-rock.svg"];


function step2(theChoice) {
  impact.play();
  let name = theChoice.getAttribute("data-name");
  playGround.innerHTML = `<div class="comapring">
        <div class="person-choice">
          <span>you picked</span>
          <div class="the-choice" data-choice="${name}" >
            <img src="images/icon-${name}.svg" alt="">
            <div class="white"></div>
            <div class="${name}-linear"></div>
            <div class="circle"></div>
          </div>
        </div>
        <div class="result">
        </div>
        <div class="computer-choice">
          <span>the house picked</span>
          <div class = "the-choice" ></div>
        </div>
      </div>`;
  
  setTimeout(() => {
    computerChoice();
  }, 1000);

  setTimeout(() => {
    let personChoice = document.querySelector(".person-choice .the-choice").getAttribute("data-choice");
    let computerChoice = document.querySelector(".computer-choice .the-choice").getAttribute("data-choice");
    comparing(personChoice, computerChoice);
  }, 1550);

}

function computerChoice() {
  let computer = document.querySelector(".computer-choice");
  let computerChoices = [{ name: "paper", img: "paper img" },
  { name: "rock", img: "rock img" },
  { name: "scissors", img: "scissors img" }];

  let randomChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  computer.innerHTML = ` <span>the house picked</span>
          <div class="the-choice fixing" data-choice="${randomChoice.name}">
            <img src="images/icon-${randomChoice.name}.svg" alt="">
            <div class="white"></div>
            <div class="${randomChoice.name}-linear"></div>
            <div class="circle"></div>
          </div>`;
};

function comparing(personChoice, computerChoice) {

  if (personChoice === "rock") {
    if (computerChoice === 'paper') {
      youLost();
    } else if (computerChoice === 'scissors') {
      youWin();
    } else {
      draw();
    }
  }
  if (personChoice === "paper") {
    if (computerChoice === 'scissors') {
      youLost();
    } else if (computerChoice === 'rock') {
      youWin();
    } else {
      draw();
    }
  }
  if (personChoice === "scissors") {
    if (computerChoice === 'rock') {
      youLost();
    } else if (computerChoice === 'paper') {
      youWin();
    } else {
      draw();
    }
  }

}

function youWin() {
  let result = document.querySelector(".result");
  result.innerHTML = `<div class="case">you <span class="status">win</span> </div>
          <div class="play">play again</div>`;
  let againButton = document.querySelector(".play");
  againButton.onclick = () => { playAgain(); };
  ++score.innerHTML;
  let personChoiceCircle = document.querySelector(".person-choice .circle");
  personChoiceCircle.style.opacity = "1";
  result.style.width = "300px";
  result.style.marginLeft = "41px";
  localStorage.setItem("counter", score.innerHTML);
}

function youLost() {
  let result = document.querySelector(".result");
  result.setAttribute("data-winner", "computer");
  result.innerHTML = `<div class="case">you <span class="status">lost</span> </div>
          <div class="play">play again</div>`;
  let againButton = document.querySelector(".play");
  againButton.onclick = () => { playAgain(); };
  if (score.innerHTML > 0) { --score.innerHTML; };
  let computerChoiceCircle = document.querySelector(".computer-choice .circle");
  computerChoiceCircle.style.opacity = "1";
  result.style.width = "300px";
  result.style.marginLeft = "41px";
  localStorage.setItem("counter", score.innerHTML);
}

function draw() {
  let result = document.querySelector(".result");
  result.innerHTML = `<div class="case"><span class="status">draw</span> </div>`;
  result.style.width = "300px";
  result.style.marginLeft = "41px";
  setTimeout(() => { playAgain(); }, 2000);
}

function playAgain() {
  playGround.innerHTML = ` 
    <img src="images/bg-triangle.svg" class="traingle" alt="">
      <div class="paper" data-name="paper">
        <img src="images/icon-paper.svg" alt="">
        <div class="white"></div>
        <div class="paper-linear"></div>
      </div>
      <div class="scissors" data-name="scissors">
        <img src="images/icon-scissors.svg" alt="">
        <div class="white"></div>
        <div class="scissors-linear"></div>
      </div>
      <div class="rock" data-name="rock">
        <img src="images/icon-rock.svg" alt="">
        <div class="white"></div>
        <div class="rock-linear"></div>
      </div>`;
  let rock = document.querySelector(".rock");
  let paper = document.querySelector(".paper");
  let scissors = document.querySelector(".scissors");

  paper.onclick = function () {
    step2(paper);
  };
  scissors.onclick = function () {
    step2(scissors);
  };
  rock.onclick = function () {
    step2(rock);
  };
}
