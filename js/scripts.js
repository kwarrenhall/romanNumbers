function toRomanNumeral(number) {
  numberArray = number.toString().split("").reverse();
  var singleDigits = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  var tensDigits = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  var hundDigits = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  var thouDigits = ['', 'M', 'MM', 'MMM', 'MMMM'];
  // var output = singleDigits[number]
  // console.log(output);
  var results = ''


  for(i = 0; i < numberArray.length; i++) {
    var num = numberArray[i];
    if (i === 0) {
      num = singleDigits[num];
      results = num + results;
    } else if (i === 1) {
      num = tensDigits[num];
      results = num + results;
    } else if (i === 2) {
      num = hundDigits[num];
      results = num + results;
    } else if (i === 3) {
      num = thouDigits[num];
      results = num + results;
    }
  }
  return results;
};



toRomanNumeral(397);


alert(toRomanNumeral(998));
