const s = document.getElementById("search");
const sB = document.getElementById("search-bar");

function searchT(){
    sB.classList.toggle("hidden");
}

const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const ball = document.querySelector(".ball");
const balla= document.querySelector(".balla");
var slideIndex = 0;

slides[slideIndex].classList.add('active');



function prevSlide(){
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex === slides.length -1) ? 0 : slideIndex + 1;
    slides[slideIndex].classList.add('active');
    slider.style.transform = `translateX(-${slideIndex * 100}%)`; 
    ball.classList.toggle("active1");
    balla.classList.toggle("active1");
    
}

function nextSlide(){
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex === 0) ? slides.length-1 : slideIndex - 1;
    slides[slideIndex].classList.add('active');
    slider.style.transform = `translateX(-${slideIndex * 100}%)`; 
    ball.classList.toggle("active1");
    balla.classList.toggle("active1");
    
}



const btn = document.querySelector(".btn")


window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 700){
        btn.style.display = "block";

    }else{
        btn.style.display = "none";
    }    
    if(window.pageYOffset >2500){
        btn.style.position = "relative";
       
    }else{
        btn.style.position = "fixed";
    }

});

btn.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior: "smooth"

    })
})

const menu = document.querySelector(".menu");
const menuBar =  document.querySelector(".menu-bar");
const navBar  = document.querySelector(".navbar");

menu.addEventListener('click',()=>{
    menuBar.classList.toggle('hidden');
    navBar.classList.toggle('nav');
    menu.classList.toggle('m');
    
})


