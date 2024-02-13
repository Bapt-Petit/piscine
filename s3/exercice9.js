// Exercice 9: Vérifier si tous les éléments d'un tableau passent un test
var test = (currentValue) => currentValue < 40;

const array = [1, 30, 39, 29, 10, 30];

console.log(array.every(test));