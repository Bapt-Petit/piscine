// Exercice 10: Exécuter des promesses en série
const p = new Promise((resolve,reject) =>{
    resolve(4);
})
// p.then((n) => {
//     console.log("le nombre ",n);
// }).catch((e)=>{
//     console.log("Erreur",e);
// })
function wait(duration) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(duration);
        },duration);
    });
};
function waitandfail(duration) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject(duration);
        },duration);
    });
};
wait(2000).then(()=>{  
    console.log("attend 2 S")
});
waitandfail(3000).then(()=>{  
    console.log("attend 3 S")
});