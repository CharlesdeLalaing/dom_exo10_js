let test = document.getElementsByTagName('h1');

//modif text d'une balise
test[0].innerText = "j'aime les cactus";
//modif de text avec balise
test[0].innerHTML = `j'aime <span> les </span> cactus`;
//crée un attribut
test[0].setAttribute("class", "color fontsize");
//rajouter une class
test[0].classList.add("color");
test[0].classList.add("fontsize");
//remplacer une class
test[0].classList.replace("color", "color2");
//supprimer une class
test[0].classList.remove("fontsize");
//utilisation du className
test[0].className = "color";

console.log(test);
console.log(test[0]);
