// Exercice 8: Fusionner deux tableaux et supprimer les doublons
const array1 = ['a', 'b', 'c','d'];
const array2 = ['d', 'e', 'f',"a"];
const array3 = array1.concat(array2);

console.log(array3);

var unique = array3.filter((x, i) => array3.indexOf(x) === i);
console.log(unique);