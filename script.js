const d = new Date();
let milli = d.getTime();
let days = milli/86400000;
days -= 19845;
let day = Math.floor(days);
let canScroll = true;

const elements = document.querySelectorAll('.content');
const col1 = document.querySelector('#content1');
const col2 = document.querySelector('#content2');
const col3 = document.querySelector('#content3');

document.getElementById('button').onclick = function() {
  let a = col1.scrollTop/window.innerHeight;
  let b = col2.scrollTop/window.innerHeight;
  let c = col3.scrollTop/window.innerHeight;

  if (a < 0.1) {
    setting = 0;
  }
  else if (a < 0.22) {
    setting = 1;
  }
  else {
    setting = 2;
  }

  if (b < 0.1) {
    setting2 = 0;
  }
  else if (b < 0.22) {
    setting2 = 1;
  }
  else {
    setting2 = 2;
  }

  if (c < 0.1) {
    setting3 = 0;
  }
  else if (c < 0.22) {
    setting3 = 1;
  }
  else {
    setting3 = 2;
  }

  if (setting == 0 && setting2 == 1 && setting3 == 1) {
    document.body.classList.add("alt");
    document.body.classList.add("new");
    canScroll = false;
    setTimeout(function() { alert("Linked!"); }, 600);

  }
};

elements.forEach(element => {
  let scrollTop;
  let isDown;

  element.addEventListener("mousedown", (e) => mouseIsDown(e));
  element.addEventListener("mouseup", (e) => mouseUp(e));
  element.addEventListener("mouseleave", (e) => mouseLeave(e));
  element.addEventListener("mousemove", (e) => mouseMove(e));

  function mouseIsDown(e) {
    isDown = true;
    startY = e.pageY - element.offsetTop;
    scrollTop = element.scrollTop;
  }

  function mouseUp(e) {
    isDown = false;
  }

  function mouseLeave(e) {
    isDown = false;
  }

  function mouseMove(e) {
    if (isDown && canScroll) {
      e.preventDefault();
      //Move vertcally
      const y = e.pageY - element.offsetTop;
      const walkY = (y - startY) * 5;
      element.scrollTop = scrollTop - walkY;
    }
  }
});

