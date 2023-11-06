function rolldice() {
    const results = [];
    for (let i = 0; i < 4; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        results.push(roll);
    }
    return results;
  }
  
  let dobbelstenenUitkomst = rolldice();
  console.log("Resultaat van het rollen van 4 dobbelstenen:", dobbelstenenUitkomst);

  dobbelstenenUitkomst.sort(function(a, b){return a - b});
  console.log("Resultaat van het rollen van 4 dobbelstenen:", dobbelstenenUitkomst);

  function RollDice(){
    let getal = Math.ceil(Math.random()*6)
    return getal;
  }
  
  function RollStat(){
  let D1 = RollDice()
  let D2 = RollDice()
  let D3 = RollDice()
  let D4 = RollDice()
  let array = [D1, D2, D3, D4]
  array.sort();
  console.log(array);
  let som = array[1] + array[2] + array[3];
  console.log(som)
  };
  console.log("STRE " , RollStat());
  console.log("DEX " , RollStat());