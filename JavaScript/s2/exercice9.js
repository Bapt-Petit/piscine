// Exercice 9: Calculer l'âge à partir d'une date de naissance
function CalculAge() {  
    var today = new Date();
    var dtn= "94" 
    var an=dtn.substr(6,4); 
    var mois=dtn.substr(3,2);
    var day= dtn.substr(0,2); 

    var dateNaissance = new Date(an + "-" + mois + "-" + day);

    var age = today.getFullYear() - dateNaissance.getFullYear();
    var m = today.getMonth() - dateNaissance.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dateNaissance.getDate())) {
        age = age - 1;
    }
  
    console.log(age);
}
CalculAge();