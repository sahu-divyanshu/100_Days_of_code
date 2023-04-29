const acc = document.getElementsByClassName('content-container');

for(i=0 ; i<acc.length; i++){
    acc[i].addEventListener('click',function(){
        this.classList.toggle('active');
    })
}