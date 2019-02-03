document.getElementById("score").addEventListener("click",check);

function check(){

  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var question6 = document.quiz.question6.value;
  var question7 = document.quiz.question7.value;
  var correct = 0;


  if(question1 == "Airport of Helicopter"){
    correct ++;
  }
  if(question2 == "Beauty with brains"){
    correct++;
  }
  if(question3 == "7th April"){
    correct++;
  }

  if(question4 == "Central Statistical Office"){
    correct++;
  }

  if(question5 == "Apsara"){
    correct++;
  }

  if(question6 == "Hospital"){
    correct++;
  }

  if(question7 == "Questioning"){
    correct++;
  }

var message = ["Great Job!","Thats okay!","You need to do better!"];

var range;

  if(correct < 1){
   range = 2;
  }
  if(correct > 0 && correct < 7){
   range = 1;
  }
   if (correct > 6){
    range = 0;
  }
document.getElementById("body2").style.visibility="visible";
document.getElementById("message").innerHTML=message[range];
document.getElementById("result").innerHTML= "You Scored"+" "+correct+" "+"out of 7!";


}
