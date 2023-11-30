// selectors
let rules = document.querySelector(".rules");
let overlay = document.querySelector(".overlay");
let exit = document.querySelector(".exit");
let playGround = document.querySelector(".playground");


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
          <div class="the-choice">
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
}