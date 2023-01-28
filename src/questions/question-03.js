// Desafio 03 - Faturamento diário

const json = require('../data/data.json');

const data = json.filter(element => element.valor != 0);

function average(data) {

  let sum = 0;

  data.forEach(element => { sum += element.valor})

  return sum / data.length
}

function dailyTopBilling(data) {
  
  const averageAux = average(data);

  const result = data.filter(element => element.valor > averageAux);

  return result;
}

function dailyBilling(data) {

  data.sort((a, b) => a.valor - b.valor)

  return {
    min: data[0],
    max: data[data.length - 1],
    dailyTopBillingQuantity: dailyTopBilling(data).length,
  }
}

console.log(dailyBilling(data));
