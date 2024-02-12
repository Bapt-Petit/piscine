// Exercice 10: Calculer la factorielle d'un nombre
function fact(nbr){
    var i, nbr, a = 1;
    for(i = 1; i <= nbr; i++)  
    {
      a = a * i;   
    }  
    return a;
  }
  console.log(fact(3));
  