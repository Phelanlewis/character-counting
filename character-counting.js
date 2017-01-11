function countLetters(str){
  newStr = str.split(' ').join('');
  for(var i = 0; i < newStr.length; i++){
    var letter = newStr[i];
    if(output.hasOwnProperty(letter)){
      output[letter] += 1;
      } else {
        output[letter] = 1;
      }
    }
  console.log(output);
  };

  var output = {};

countLetters("lighthouse in the house");
