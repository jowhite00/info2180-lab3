//Lab #3 
window.onload = function(){
    //Exercise I
    var currentBoardState = ["", "", "", "", "", "", "", "", ""];
    var currentTurn = "X";
    var square_boxes = document.getElementById("board").getElementsByTagName("div");
    var statusText =  document.getElementById("status");

    for (var i = 0; i < square_boxes.length; i++) {
        square_boxes[i].classList.add("square");
        square_boxes[i].addEventListener("click", function(e){
        var square_index = Array.prototype.slice.call(square_boxes);
        var unoSquare = square_index.indexOf(e.target);

    //Exercise 2
        if (currentTurn == "X"){
            this.innerHTML = "X"; 
            this.classList.add("X");
            this.style.pointerEvents = 'none';
            currentBoardState[unoSquare] = currentTurn;
            checkWinner(currentTurn);
            currentTurn = "O"; 
        }
        else if (currentTurn == "O"){
            this.innerHTML = "O";
            this.classList.add("O");
            this.style.pointerEvents = 'none';
            currentBoardState[unoSquare] = currentTurn;
            checkWinner(currentTurn);
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
        //Exercise #5
        var button = document.getElementsByClassName("btn");
        button[0].addEventListener("click", function(){
            currentBoardState = ["", "", "", "", "", "", "", "", ""];
            currentTurn = "X";
            statusText.classList.remove("you-won");
            statusText.innerHTML = "Move your mouse over a square and click to play an X or an O.";

            for (var c of square_boxes){
                c.style.pointerEvents = 'auto';
                c.classList.remove("X");
                c.classList.remove("O");
                c.innerHTML = "";
            }
        });
    }
    function checkWinner(currentTurn){
        if(currentBoardState[0] == currentTurn && currentBoardState[1] == currentTurn && currentBoardState[2] == currentTurn || 
            currentBoardState[3] == currentTurn && currentBoardState[4] == currentTurn && currentBoardState[5] == currentTurn ||
            currentBoardState[6] == currentTurn && currentBoardState[7] == currentTurn && currentBoardState[8] == currentTurn ||
    
            //----------------------------------------------------
            //Vertical
            currentBoardState[0] == currentTurn && currentBoardState[3] == currentTurn && currentBoardState[6] == currentTurn ||
            currentBoardState[1] == currentTurn && currentBoardState[4] == currentTurn && currentBoardState[7] == currentTurn ||
            currentBoardState[2] == currentTurn && currentBoardState[5] == currentTurn && currentBoardState[8] == currentTurn ||
    
            //----------------------------------------
            //Diagonal
            currentBoardState[0] == currentTurn && currentBoardState[4] == currentTurn && currentBoardState[8] == currentTurn ||
            currentBoardState[2] == currentTurn && currentBoardState[4] == currentTurn && currentBoardState[6] == currentTurn) {
    
                console.log(currentTurn);
                if(currentTurn == "X"){
                    statusText.classList.add("you-won");
                    statusText.innerHTML = "Congratulations! X is the Winner!";
                }else if(currentTurn == "O"){
                    statusText.classList.add("you-won");
                    statusText.innerHTML = "Congratulations! O is the Winner!";
                }
            } 
    }
}