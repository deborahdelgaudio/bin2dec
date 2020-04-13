// Prendo gli argomenti della riga di comando DONE
// Valido gli argomenti (le uniche cifre ammesse sono 0 ed 1) DONE
// Conversione da binario a decimale DONE 
// Tornare il risultato e stamparlo a video

function bin2dec(string) {
  if (string.match(/^[0-1]+$/g) === null) {
    throw new Error('A binary number is made of only 0 and 1');
  }

  const numbers = string.split('').reverse();
  let sum = 0;

  numbers.forEach((value, index) => {
    sum += (value * Math.pow(2, index))
  });
  
  return sum;
}

var number = process.argv.slice(2)[0];
console.log(bin2dec(number));