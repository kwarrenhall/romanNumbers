// function toRomanNumeral(number) {
//   numberArray = number.toString().split("").reverse();
//   var singleDigits = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  // var tensDigits = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
//   var hundDigits = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
//   var thouDigits = ['', 'M', 'MM', 'MMM', 'MMMM'];
//   // var output = singleDigits[number]
//   // console.log(output);
//   var results = ''
//
//
//   for(i = 0; i < numberArray.length; i++) {
//     var num = numberArray[i];
//     if (i === 0) {
//       num = singleDigits[num];
//       results = num + results;
//     } else if (i === 1) {
//       num = tensDigits[num];
//       results = num + results;
//     } else if (i === 2) {
//       num = hundDigits[num];
//       results = num + results;
//     } else if (i === 3) {
//       num = thouDigits[num];
//       results = num + results;
//     }
//   }
//   return results;
// };
//
//
//
// toRomanNumeral(397);
//
//
// alert(toRomanNumeral(998));


// another example:
// a loop with in a loop for prime number excercise.


var primeList = function(){
  // var primeInput = parseInt($("#prime").val());
  var primeInput = 10;
  var primes = [];
  for (var i = 2; i <= primeInput; i++) {
    primes.push(i);
  }
  console.log(primes);
 // solution example 1:

  for (var j = 0; j < primes.length; j++) {

     for (var i = j+1; i < primes.length; i++) {
      var prime = primes[i];
      if (prime % primes[j] === 0) {
        primes.splice(i, 1);
      }
    }

// solution example 2:

for (i = 0; i< primes.length; i++) {
  for(x = 0; x< primes.length; x++) {
    if ((primes[x] % primes[i] === 0) && (primes[x] !== primes[i])) {
      primes.splice(x, 1);
    }
    console.log(primes);
  }
}
};

primeList();
