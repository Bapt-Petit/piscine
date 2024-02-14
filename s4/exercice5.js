// Exercice 5: Création d'une fonction throttle

function throttle(mainFunction, delay) {
    let timerFlag = null; 
  
    return (...args) => {
      if (timerFlag === null) { 
        mainFunction(...args); 
        timerFlag = setTimeout(() => { 
          timerFlag = null; 
        }, delay);
      }
    };
  }

function fetchData() {
    console.log("Seum");
  
    setTimeout(() => {
      console.log("fonction throttle");
    }, Math.random() * 1000);
  }
  
  const throttledFetchData = throttle(fetchData, 5000);
  
throttledFetchData();