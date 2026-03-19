document.addEventListener("DOMContentLoaded", function () {

//// MOBILE MENU //////

const menu = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

if(menu && nav){
menu.addEventListener("click", () => {
nav.classList.toggle("active");
});
}

//// HEADER SCROLL EFFECT //////

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

if(header){
if(window.scrollY > 4){
header.classList.add("scrolled");
}else{
header.classList.remove("scrolled");
}
}

//// SERVICES CARD ANIMATION //////

document.querySelectorAll(".card").forEach(card => {

let pos = card.getBoundingClientRect().top;
let screen = window.innerHeight;

if(pos < screen - 100){
card.style.opacity = "1";
card.style.transform = "translateY(0)";
}

});

});

//// COUNTER ANIMATION //////

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const update = () => {

const target = +counter.getAttribute("data-target");
const count = +counter.innerText;

const speed = target / 200;

if(count < target){

counter.innerText = Math.ceil(count + speed);
setTimeout(update,20);

}else{

counter.innerText = target;

}

};

update();

});

//// FLOATING CONTACT BUTTON //////

const floatingBtn = document.querySelector(".floating-btn");
const floatingContact = document.querySelector(".floating-contact");

if(floatingBtn && floatingContact){

floatingBtn.addEventListener("click", function(e){

e.stopPropagation();
floatingContact.classList.toggle("active");

});

document.addEventListener("click", function(e){

if(!floatingContact.contains(e.target)){
floatingContact.classList.remove("active");
}

});

}

});
const slides = document.querySelectorAll(".slide");

let index = 0;

setInterval(() => {

slides[index].classList.remove("active");

index = (index + 1) % slides.length;

slides[index].classList.add("active");

}, 4000);
const langBtn = document.querySelector(".lang-btn");
const langDropdown = document.querySelector(".lang-dropdown");

langBtn.addEventListener("click", () => {
langDropdown.classList.toggle("active");
});

/* tashqariga bossang yopiladi */
document.addEventListener("click", (e) => {
if(!langDropdown.contains(e.target)){
langDropdown.classList.remove("active");
}
});
