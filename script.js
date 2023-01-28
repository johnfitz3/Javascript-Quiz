
var startScreenEl = document.getElementById('start-screen');
var questionScreenOne = document.getElementById('content')


function questionOne() {

    var x = document.createElement('DIV');
    var t = document.createTextNode("Question 1");
    x.setAttribute("style", "color: white;");
    x.appendChild(t);
    document.body.appendChild(x);
    startScreenEl.setAttribute('class', 'hide');
    
}



function questionTwo() {

    var x = document.createElement('DIV');
    var t = document.createTextNode("Question 2");
    x.setAttribute("style", "color: white;");
    x.appendChild(t);
    document.body.appendChild(x);
   startScreenEl.setAttribute('class', 'hide');
   

}

