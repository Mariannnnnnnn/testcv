window.onscroll = function() {barra_fija()};
        
var barra = document.getElementById("barra");

var fija = barra.offsetTop;

function barra_fija() {
  if (window.pageYOffset >= fija) {
    barra.classList.add("fija")
  } else {
    barra.classList.remove("fija");
  }
}

