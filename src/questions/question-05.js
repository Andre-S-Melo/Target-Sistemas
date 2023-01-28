// Desafio 05 - Inverter String

function reverse(string) {
  
  let result = "";

  for (let index = string.length - 1; index >= 0; index--) {

    result += string[index];
  }

  return result;
}

console.log(reverse("Target Sistemas"));
