// Exercice 3: Filtrer les nombres pairs d'un tableau
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var fonctionNumbers = numbers.filter(function (number) {
  return number % 2 === 0
})
console.log(fonctionNumbers)