// ### 1. Récupère le h2 dont la valeur est "Exercice" et affiche uniquement le text
// ### 2. Trouve le moyen de modifier sa valeur par "Exercice 1"
// ### 3. Récupère l'élément p juste en dessous ce h2 et rajoute y la ligne js utilisé pour résoudre l'exercice 2.
// ### 4. Récupère la première section et trouve le moyen d'affiche juste le nom de l'id dans la console
// ### 5. Récupère le premier h1 et trouve le moyen d'afficher juste le nom de la class dans la console ( attention il existe deux propriétés pour afficher les class, fait l'exercice avec l'une et puis avec l'autre !)
// ### 6. Avec l'aide d'un forEach affiche le nom de class de chaque h1
// ### 7. Trouve une propriété pour afficher tous les attributs du premier input
// ### 8. Trouve le moyen de récupérer la valeur dans l'attribut type du premier input
// ### 9. Récupère l'input dont l'id est "inputPassword3" et ajoute lui un attribut "type" dont la valeur est "password"
// ### 10. Modifie la valeur de l'attribut "type" du premier input avec la valeur "color"

//exo1
let exo1 = document.querySelector('h2');
console.log(exo1.innerText);
//exo2
exo1.innerText = 'Exercice 1';
console.log(exo1.innerText);
//exo3
let exo2 = exo1.nextElementSibling;
exo2.innerText = 'Exercice 1';
console.log(exo2.innerText);
//exo4
let exo3 = document.querySelector('#users').id;
console.log(exo3);
//exo5
let exo4 = document.querySelector('h1').className;
console.log(exo4);
//exo6
let exo5 = document.querySelectorAll('h1');
exo5.forEach(element => {
    console.log(element.className);
});
//exo7
let exo6 = document.querySelector('input').attributes;
console.log(exo6);
//exo8
let exo7 = document.querySelector('input').getAttribute('type');
console.log(exo7);
//exo9
let exo8 = document.querySelector('input#inputPassword3');
exo8.setAttribute("type", "password");
console.log(exo8);
//exo10
let exo9 = document.querySelector('#inputPassword3');
exo9.setAttribute('type', 'color');
console.log(exo9);


//correction

//exo1
let h2Rec = document.querySelector('h2');
console.log(h2Rec.innerText);

//exo2
h2Rec.innerText = "Exercice 1";

//exo3
let p = h2Rec.nextElementSibling;
p.innerText = "Exercice 1"

//exo4
let premierSection = document.querySelector('section');
console.log(premierSection.id);

//exo5
let premierH1 = document.querySelector('h1');
console.log(premierH1.className);
console.log(premierH1.getAttribute('class'));
console.log(premierH1.classList);

//exo6
let exo6bis = document.querySelectorAll('h1');
exo6bis.forEach(element => {
    console.log(element.className);
});

//exo7
let premierInput = document.querySelector('input');
console.log(premierInput.attributes);

//exo8
console.log(premierInput.getAttribute('type'));

//exo9
let inputPass3 = document.querySelector('input#inputPassword3');
inputPass3.setAttribute('type', 'password');
console.log(inputPass3);
//exo10
premierInput.setAttribute('type', 'color');
console.log(premierInput.attributes.type);
