function makeid(l) {
  let result = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;

  for (let i = 0; i < l; i++) {
    // pick a random index and add that character
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  
  return result;
}

// Do not change the code below.
const l = parseInt(prompt("Enter a number.")); // ensure number input
alert(makeid(l));
 