// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

var button = document.getElementById("myButton");
var boxes = document.getElementsByClassName("box");

button.addEventListener('click', function(){
    for (i = 0; i < boxes.length; i++) {
        box = boxes[i];
        box.style.backgroundColor = "blue";
    }
})