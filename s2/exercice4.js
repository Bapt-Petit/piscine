// Exercice 4: Trouver un élément dans un tableau d'objets
const cours = [
    { nom: "baptiste", age: 26 },
    { nom: "damien", age: 30 },
    { nom: "maxime", age: 30 },
  ];
  
  function cherBaptiste(name) {
    return name.nom === "baptiste";
  }
  
  console.log(cours.find(cherBaptiste));
