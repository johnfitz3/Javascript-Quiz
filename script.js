
var startScreenEl = document.getElementById('start-screen');
var questionScreenOne = document.getElementById('content');



questionScreenOne.setAttribute('class','hide');


var questions = 
      [
        {
          question: "Test Question 1?",
          choices: ["answer1", "answer2", "answer3", "answer4"],
          answer: 2
        },
        
        {
          question: "Test Question 2?",
          choices: ["answer1", "answer2", "answer3", "answer4"],
          answer: 1
        }
        
        
      ];

function questionOne() {

    var x = document.createElement('h2');
    var t = document.createTextNode("Question 1");
    x.setAttribute("style", "color: white;");
    x.appendChild(t);
    document.body.appendChild(x);
    startScreenEl.setAttribute('class', 'hide');
    questionScreenOne.setAttribute('class','display');
    

}



function questionTwo() {

    var x = document.createElement('h2');
    var t = document.createTextNode("Question 2");
    
    x.setAttribute("style", "color: white;");
    x.appendChild(t);
    document.body.appendChild(x);
   startScreenEl.setAttribute('class', 'hide');
   
}

