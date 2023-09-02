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





const navigation= document.querySelector('.navContainer');
const profilePhoto =document.querySelector('.rightBox'); 
const container = document.querySelectorAll('.item2');




function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function LaodingAnimation() {
    await sleep(200);
    navigation.classList.add('trshow');
    await sleep(2000);
    profilePhoto.classList.add('show');
    await sleep(1000);
    right.classList.add('trshow');
    await sleep(1000);
    container.forEach((el)=>{
           el.classList.add('trshow');
    })

  }
  
  LaodingAnimation();
