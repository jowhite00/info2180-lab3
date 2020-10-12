//Lab #3 
window.onload = function(){
    //Exercise I
    var square_boxes = document.getElementById("board").getElementsByTagName("div");     
    console.log("squares");

    for (var i = 0; i < square_boxes.length; i++) {
        square_boxes[i].classList.add("square");
      }
}

