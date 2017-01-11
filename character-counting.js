function countLetters(str){
  newStr = str.split("");
  for(var i = 0; i < newStr.length; i++){
    if (newStr[i] === output[i]) {      // wat is dis?  fix dis
      var letter = newStr[i];
      output[letter] += 1;
    } else {
        output[letter] = 1;
      // return (newStr[i] : 1);
      // gonna look kinda like lines 10,11
    }
  }
  console.log(output);
};
var output = {
};
countLetters("lighthouse in the house");
