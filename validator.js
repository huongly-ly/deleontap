function Validator(options) {

    var formElement = document.querySelector(options.form);

}

window.onscroll = function() {
    myFunction()
};

var menuBar = document.getElementById("menu");
var gluey = menuBar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= gluey) {
        menuBar.classList.add("Gluey")
    }else {
        menuBar.classList.remove("Gluey");
    }
}



 