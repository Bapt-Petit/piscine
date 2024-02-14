// Exercice 6: Utilisation de fetch pour récupérer des données d'une API

const url = 'https://randomuser.me/api/?results=10';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let authors = data.results;
  return authors.map(function(author) {
    console.log("yes");
  })
})
.catch(function(error) {
  console.log(error);
});