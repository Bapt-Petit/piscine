// Exercice 3: Filtrage avec des expressions régulières

const regex = /e+/gm;

// Alternative syntax using RegExp constructor
// const regex = new RegExp('e+', 'gm')

const str = `Filtrage avec des expressions régulières`;
let m;

while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex}: ${match}`);
    });
}
