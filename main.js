// selectors
let rules = document.querySelector(".rules");
let overlay = document.querySelector(".overlay");
let exit = document.querySelector(".exit");
let playGround = document.querySelector(".playground")


// select choices 
let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper")
let scissors = document.querySelector(".scissors")


rules.onclick = () => { rules.className = "rules open"; };
exit.onclick = () => { rules.className = "rules close"; };

paper.onclick = function () {
  playGround.innerHTML = ""
}

