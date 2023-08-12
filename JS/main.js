console.log("Hy Buddy Whatsapp....");

window.addEventListener("resize", function () {
  addRequiredClass();
});

function addRequiredClass() {
  if (window.innerWidth < 860) {
    document.body.classList.add("mobile");
  } else {
    document.body.classList.remove("mobile");
  }
}

window.onload = addRequiredClass();

let hamBurger = document.querySelector(".hamburger");
let mobileNave = document.querySelector(".nav-list");

let bars = document.querySelectorAll(".hamburger span");

let isActive = false;

hamBurger.addEventListener("click", function () {
  mobileNave.classList.toggle("open");
  if (!isActive) {
    bars[0].style.transform = "rotate(45deg)";
    bars[1].style.opacity = "0";
    bars[2].style.transform = "rotate(-45deg)";
    isActive = true;
  } else {
    bars[0].style.transform = "rotate(0deg)";
    bars[1].style.opacity = "1";
    bars[2].style.transform = "rotate(0deg)";
    isActive = false;
  }
});
