//15. Write a function to compute the value of bn where n is the exponent and b is the bases. 
// Accept b and n from the user and display the result.
// Piezīme: exponent ir kāpinātājs, b ir bāze.



const bases = prompt('Input the bases: ');
const exponent = prompt('Input the exponent: ');

function exp (b,n) {
  let answer = 1;
  for (let i =1; i <= n; i++) {
  answer = b * answer;   // kāpinot bāzi reizina pašu ar sevi, tāpēc te ir * zīme     
}
    return answer;
}
console.log(exp(bases, exponent));
