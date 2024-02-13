// Exercice 10: Convertir une chaîne de caractères en camelCase
camelize = function camelize(str) {
    return str.replace(/\W+(.)/g, function(match, chr)
     {
          return chr.toUpperCase();
      });
  }

console.log(camelize("Convertir une chaîne de caractères en camelCase"));
