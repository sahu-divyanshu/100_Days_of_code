var right = document.querySelector(".leftBox")
var cir1 = document.querySelector(".circle1")
var cir2 = document.querySelector(".circle2")

right.addEventListener("mouseenter",(e) =>{
    cir1.classList.add("active1")
    cir2.classList.add("active2")

    console.log(44)

})

right.addEventListener("mouseleave",(e) =>{
    cir1.classList.remove("active1")
    cir2.classList.remove("active2")

    console.log(45)

})