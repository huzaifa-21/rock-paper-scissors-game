// selectors
var rules = document.querySelector(".rules");
var overlay = document.querySelector(".overlay");
var exit = document.querySelector(".exit");
var playGround = document.querySelector(".playground");
var computer = document.querySelector(".computer-choice");

// select choices
var rock = document.querySelector(".rock");
var paper = document.querySelector(".paper");
var scissors = document.querySelector(".scissors");

//score
var score = document.querySelector(".score span");
score.innerHTML = localStorage.getItem("counter");

// select music
var impact = document.querySelector(".impact");
rules.onclick = function () {
  rules.className = "rules open";
};
exit.onclick = function () {
  rules.className = "rules close";
};
paper.onclick = function () {
  step2(paper);
};
scissors.onclick = function () {
  step2(scissors);
};
rock.onclick = function () {
  step2(rock);
};
var paperImg = "images/icon-paper.svg",
  scissorsImg = "images/icon-scissors.svg",
  rockImg = "images/icon-rock.svg";
function step2(theChoice) {
  impact.play();
  var name = theChoice.getAttribute("data-name");
  playGround.innerHTML =
    '<div class="comapring">\n        <div class="person-choice">\n          <span>you picked</span>\n          <div class="the-choice" data-choice="'
      .concat(name, '" >\n            <img src="images/icon-')
      .concat(
        name,
        '.svg" alt="">\n            <div class="white"></div>\n            <div class="'
      )
      .concat(
        name,
        '-linear"></div>\n            <div class="circle"></div>\n          </div>\n        </div>\n        <div class="result">\n        </div>\n        <div class="computer-choice">\n          the house picked\n          <div class = "the-choice" ></div>\n        </div>\n      </div>'
      );
  setTimeout(function () {
    computerChoice();
  }, 1000);
  setTimeout(function () {
    var personChoice = document
      .querySelector(".person-choice .the-choice")
      .getAttribute("data-choice");
    var computerChoice = document
      .querySelector(".computer-choice .the-choice")
      .getAttribute("data-choice");
    comparing(personChoice, computerChoice);
  }, 1550);
}
function computerChoice() {
  var computer = document.querySelector(".computer-choice");
  var computerChoices = [
    {
      name: "paper",
      img: "paper img"
    },
    {
      name: "rock",
      img: "rock img"
    },
    {
      name: "scissors",
      img: "scissors img"
    }
  ];
  var randomChoice =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  computer.innerHTML =
    ' <span>the house picked</span>\n          <div class="the-choice fixing" data-choice="'
      .concat(randomChoice.name, '">\n            <img src="images/icon-')
      .concat(
        randomChoice.name,
        '.svg" alt="">\n            <div class="white"></div>\n            <div class="'
      )
      .concat(
        randomChoice.name,
        '-linear"></div>\n            <div class="circle"></div>\n          </div>'
      );
}
function comparing(personChoice, computerChoice) {
  if (personChoice === "rock") {
    if (computerChoice === "paper") {
      youLost();
    } else if (computerChoice === "scissors") {
      youWin();
    } else {
      draw();
    }
  }
  if (personChoice === "paper") {
    if (computerChoice === "scissors") {
      youLost();
    } else if (computerChoice === "rock") {
      youWin();
    } else {
      draw();
    }
  }
  if (personChoice === "scissors") {
    if (computerChoice === "rock") {
      youLost();
    } else if (computerChoice === "paper") {
      youWin();
    } else {
      draw();
    }
  }
}
function youWin() {
  var result = document.querySelector(".result");
  result.innerHTML =
    '<div class="case">you <span class="status">win</span> </div>\n          <div class="play">play again</div>';
  var againButton = document.querySelector(".play");
  againButton.onclick = function () {
    playAgain();
  };
  ++score.innerHTML;
  var personChoiceCircle = document.querySelector(".person-choice .circle");
  personChoiceCircle.style.opacity = "1";
  result.style.width = "300px";
  result.style.marginLeft = "41px";
  localStorage.setItem("counter", score.innerHTML);
}
function youLost() {
  var result = document.querySelector(".result");
  result.setAttribute("data-winner", "computer");
  result.innerHTML =
    '<div class="case">you <span class="status">lost</span> </div>\n          <div class="play">play again</div>';
  var againButton = document.querySelector(".play");
  againButton.onclick = function () {
    playAgain();
  };
  if (score.innerHTML > 0) {
    --score.innerHTML;
  }
  var computerChoiceCircle = document.querySelector(".computer-choice .circle");
  computerChoiceCircle.style.opacity = "1";
  result.style.width = "300px";
  result.style.marginLeft = "41px";
  localStorage.setItem("counter", score.innerHTML);
}
function draw() {
  var result = document.querySelector(".result");
  result.innerHTML =
    '<div class="case"><span class="status">draw</span> </div>';
  result.style.width = "300px";
  result.style.marginLeft = "41px";
  setTimeout(function () {
    playAgain();
  }, 2000);
}
function playAgain() {
  playGround.innerHTML =
    ' \n    <img src="images/bg-triangle.svg" class="traingle" alt="">\n      <div class="paper" data-name="paper">\n        <img src="images/icon-paper.svg" alt="">\n        <div class="white"></div>\n        <div class="paper-linear"></div>\n      </div>\n      <div class="scissors" data-name="scissors">\n        <img src="images/icon-scissors.svg" alt="">\n        <div class="white"></div>\n        <div class="scissors-linear"></div>\n      </div>\n      <div class="rock" data-name="rock">\n        <img src="images/icon-rock.svg" alt="">\n        <div class="white"></div>\n        <div class="rock-linear"></div>\n      </div>';
  var rock = document.querySelector(".rock");
  var paper = document.querySelector(".paper");
  var scissors = document.querySelector(".scissors");
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
