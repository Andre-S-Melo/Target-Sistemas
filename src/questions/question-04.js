// Desafio 04 - Faturamento mensal

const data = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
}

function percentage(total, number) {

  const result = (number / total) * 100;

  return `${result.toFixed(2)}%`;
}

function percentageOfState(data) {

  let result = {};

  let total = 0;

  Object.values(data).forEach(value => { total += value})

  Object.keys(data).forEach(key => { result[key] = percentage(total, data[key]) });

  return result;
}

console.log(percentageOfState(data));
