// Desafio 02 - Fibonacci

function fibonacci(number) {

  let fibOne = 0;

  let fibTwo = 1;

  while (number >= fibTwo) {

    let aux = fibOne;
    fibOne = fibTwo;
    fibTwo += aux;
  }

  if (number === fibOne || number === fibTwo) {
    return "O número informado pertence a sequência";
  } else {
    return "O número informado não pertence a sequência";
  }
}

console.log(fibonacci(5)); // Pertence a sequência
console.log(fibonacci(7)); // Não pertence a sequência
