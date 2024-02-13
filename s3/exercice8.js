// Exercice 8: Trier un tableau d'objets par plusieurs propriétés
const inventaire = [
    { nom: "asperge", type: "legume", quantite: 5 },
    { nom: "banane", type: "fruit", quantite: 0 },
    { nom: "agneau", type: "viande", quantite: 23 },
    { nom: "cerise", type: "fruit", quantite: 5 },
    { nom: "poisson", type: "viande", quantite: 2 },
    { nom: "banane", type: "fruit", quantite: 10 },
    { nom: "agneau", type: "viande", quantite: 15 },
    { nom: "cerise", type: "fruit", quantite: 8 },
    { nom: "poisson", type: "viande", quantite: 1 },
  ];


function groupBy(list, keyGetter) {
    const map = new Map();

    list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key) || [];

        collection.push(item);
        collection.sort((a, b) => a.quantite - b.quantite);

        map.set(key, collection);
    });

    return map;
}

const grouped = groupBy(inventaire, type => type.type);

console.log(grouped);