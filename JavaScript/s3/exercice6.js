// Exercice 6: Filtrer un tableau d'objets par une plage de dates
let tableau = [
    { nom: "plage 1", date: new Date("2000-01-08") },
    { nom: "plage 2", date: new Date("2022-03-29") },
    { nom: "plage 3", date: new Date("2024-05-26") },
    { nom: "plage 4", date: new Date("2001-10-12") }
]

function filtrer(tableau, dateDebut, dateFin) {
    return tableau.filter(date => date.date >= dateDebut && date.date <= dateFin);
}

var dateDebut = new Date("2020-01-01");
var dateFin = new Date("2025-12-31");

console.log(filtrer(tableau, dateDebut, dateFin));