function indexCheck(){
  let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let stringSplit = string.split("");
  stringSplit.sort();
  let result = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  for(let i = 0; i < letters.length; i++){
    for(let j = 0; j < stringSplit.length; j++){
      console.log(i);
      console.log(j);
      if(letters[i] === stringSplit[j]){
        result[i] = result[i] + 1;

      }
    }
  }
  return result;
}
let string = "you know what morty? no one cares.";
