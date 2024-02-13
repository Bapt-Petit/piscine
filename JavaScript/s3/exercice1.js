// Exercice 1: Supprimer les éléments falsy d'un tableau

var tableau =[7, "ate", "", false, 9, NaN, "","oui"];

var monArray = tableau.filter(Boolean);

 console.log(monArray);