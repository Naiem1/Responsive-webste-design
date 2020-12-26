// sticky navbar
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('header nav');
  navbar.classList.toggle('sticky', window.scrollY > 0);
})


// slide bar

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-menu');
const navLinks = document.querySelector('.nav-menu li');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
});


// cooke
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btnOk");
const cookieDeniedBtn = document.querySelector('.cookie-btnDenied');

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 2000);


var myHour = new Date();
myHour.setHours(myDate.getHours() + 24); //twenty hour from now
data.push(myHour);
localStorage.setItem('cookieBannerDisplayed', JSON.stringify(data))

function checkExpiration (){ 
    //check if past expiration date
        var values = JSON.parse(localStorage.getItem('cookieBannerDisplayed'));
    //check "my hour" index here
    if (values[1] < new Date()) {
        localStorage.removeItem("cookieBannerDisplayed")
    }
}

function myFunction() {
    var myInterval = 24*60*1000; // 24 min interval
    setInterval(function(){ checkExpiration(); }, myInterval );
}

myFunction();