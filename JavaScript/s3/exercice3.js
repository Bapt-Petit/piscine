// Exercice 3: Créer une fonction de débogage
function fonction1() {
    var a = "Créer une fonction de débogage";
}

function fonction2() {
    var c = "............................";
}

function debogage(b) {
    function debog(b) {
        console.log(b+" J'appel fonction ");
    }
    debog(b);
}
debogage(fonction1.name);