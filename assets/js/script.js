var questionEl = document.querySelector("#q1");
var buttonQsEl = document.querySelector("#hide-btn");
var counter = 90;

//
function show () {
    document.getElementById("hide").id = "q-main";
    document.getElementById("hide-btn").id = "view-btn";
    document.getElementById("main-section").id = "hide";
    document.getElementById("main-btn").id = "hide-btn";

    
    var countdown = setInterval(function() {
        if(counter > 0) {
        var count = counter;
        counter--; 
        document.getElementById("timer").innerHTML = count + " seconds";
        } 
        else {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "Time Out";
        }
    }, 1000);
};

questionEl.textContent = "Inside which HTML element do we put the JavaScript?";
    var answerArray = ["<javascript>","<script>","<link>","<js>"];
    for (i=0; i<answerArray.length; i++) {
        var answerEl = document.createElement("button");
        answerEl.className = "btn";
        answerEl.textContent = answerArray[i];
        buttonQsEl.appendChild(answerEl);
    }

    if (answerEl.value == "<script>") {
        console.log(answerArray.value);
    }
    else {
        
    }
//Function adds questions to Question section
function changeQ () {

};

changeQ();

//Event listener for 'start quiz' button
document.getElementById("start").addEventListener("click", show);
