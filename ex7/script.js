// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

window.onload = function (){ 
//this window.onload is used because the script is located in the html head. 
//The script is executing before the DOM is ready so we get a null error.


    var header = document.getElementById("section-header");
    var section = document.getElementById("section");

    header.addEventListener('click', function(){
        if (section.style.display === "none") {
            section.style.display = "block";
        } 
        else {
            section.style.display = "none";
        }
    });

}