
$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
})
const mainArr = new Array(20);

for(var i = 0;i<20 ;i++ ){
    mainArr[i] = Math.floor(Math.random*4) + 1; 
}
 

const userInput = new Array(20);

for(var i=1 ; i<20 ; i++ ){
    for(var j = 0 ; j<i ; j++){
        $(".b"+mainArr[i]).addClass("pressed");
        setTimeout(function(){
          $(".b"+mainArr[i]).removeClass("pressed");
      },100);

    }
    
      $(".b1").click(function() {
        userInput.push(1) ;
      });
      $(".b2").click(function() {
        userInput.push(2) ;
      });
      $(".b3").click(function() {
        userInput.push(3) ;
      });
      $(".b4").click(function() {
        userInput.push(4) ;
      });  

    for(var j=0 ; j<i ; j++){
      if(mainArr[j] == userInput[j]){
        continue;
      }
      else {
          
      }
    }
}

