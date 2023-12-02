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
// step2(rock);
// choices destructring 
let [paperImg, scissorsImg, rockImg] = ["images/icon-paper.svg", "images/icon-scissors.svg", "images/icon-rock.svg"];


function step2(theChoice) {

  let name = theChoice.getAttribute("data-name");
  playGround.innerHTML = `<div class="comapring">
        <div class="person-choice">
          you picked
          <div class="the-choice" data-person="${name}" >
            <img src="images/icon-${name}.svg" alt="">
            <div class="white"></div>
            <div class="${name}-linear"></div>
          </div>
        </div>
        <div class="computer-choice">
          the house picked
          <div class="the-choice">
          </div>
        </div>
      </div>`;
  console.log(name);
  setTimeout(() => {
    step3();
  }, 1000);
}

function step3() {
  let computer = document.querySelector(".computer-choice");
  let computerChoices = [{ name: "paper", img: "paper img" },
  { name: "rock", img: "rock img" },
  { name: "scissors", img: "scissors img" }];

  let randomChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  computer.innerHTML = ` the house picked
          <div class="the-choice fixing" data-computer="${randomChoice.name}">
            <img src="images/icon-${randomChoice.name}.svg" alt="">
            <div class="white"></div>
            <div class="${randomChoice.name}-linear"></div>
          </div>`;
  console.log(randomChoice);
};

// console.log(rock.img);
// console.log(paper);
// console.log(scissors);
