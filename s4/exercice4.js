// Exercice 4: Création d'une fonction de debounce

const debounce = (mainFunction, delay) => {

    let timer;
  
    return function (...args) {

      clearTimeout(timer);

      timer = setTimeout(() => {
        mainFunction(...args);
      }, delay);
    };
  };


function searchData() {
    console.log("Bien joue ça ma bien souler cette M**** !!!! ");
  }

  const debouncedSearchData = debounce(searchData, 4000);
  
  debouncedSearchData();
