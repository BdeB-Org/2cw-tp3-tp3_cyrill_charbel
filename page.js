function changerCouleur() {
    var titre = document.getElementById("titre");
    var currentColor = window.getComputedStyle(titre).color;
    if (currentColor === 'rgb(0, 0, 255)') {
        titre.style.color = 'green';
    } else {
        titre.style.color = 'blue';
    }
}

function agrandir() {
    document.getElementById("titre").style.fontSize = '60px'
}
function diminuer(){
    document.getElementById("titre").style.fontSize = '20px'
}
function effacer(){
    document.getElementById("titre").innerHTML = ""
}
function afficher(){
    document.getElementById("titre").innerHTML = "BMW"
}
