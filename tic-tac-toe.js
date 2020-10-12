//Lab #3 
window.onload = function(){
    //Exercise I
    var currentBoardState = ["", "", "", "", "", "", "", "", ""];
    var currentTurn = "X";
    var square_boxes = document.getElementById("board").getElementsByTagName("div");     

    for (var i = 0; i < square_boxes.length; i++) {
        square_boxes[i].classList.add("square");
        square_boxes[i].addEventListener("click", function(){
    //Exercise 2
        if (currentTurn == "X"){
            this.innerHTML = "X"; 
            this.classList.add("X");
            currentTurn = "O";
        }
        else{
            this.innerHTML = "O";
            this.classList.add("O");
            currentTurn = "X";
        }
        });

    //Excercise #3
    square_boxes[i].addEventListener("mouseover", function(){
        this.classList.add("hover");
    });

    square_boxes[i].addEventListener("mouseout", function(){
        this.classList.remove("hover");
    });

    //Exercise #4
    document.getElementById("status").className = "you-won";
    document.getElementById("status").innerHTML = "congratulations" + currentBoardState + "is the winner";
}}