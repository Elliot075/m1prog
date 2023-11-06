let rl = require("readline-sync");
let randomGetal = Math.ceil(Math.random() * 100);

function raadGetal() {
    
    let getal = rl.question('Wat is het getal?'); 
   
      if (getal == randomGetal ){ 
        console.log("je hebt het goed");
      }else if(getal > randomGetal) { 
        console.log("je moet lager");
        raadGetal();
      }
      else if(getal < randomGetal){
        console.log("je moet hoger");
        raadGetal();
      }
    
  }
  raadGetal();