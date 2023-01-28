// Desafio 01 - Soma

function soma(indice = 13) {

  let soma = 0;

  let k = 0;

  while (k < indice) {
    k++;
    soma = soma + k
  }

  return soma;

}

console.log("O valor da variável soma é:", soma()); // Resultado: 91
