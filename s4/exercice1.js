// Exercice 1: Utilisation de Promise.all
function wait(duration) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(duration);
        },duration);
    });
};
Promise.all([wait(1000),wait(3000)]).then(console.log);