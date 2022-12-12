'use strict'
/* exported calculateMonthlyPrice, calculateVAT */

function calculateMonthlyPrice(pricePerkWh, estimatedkWh) {
  console.log(pricePerkWh, estimatedkWh)
  return (pricePerkWh * estimatedkWh) / 12
}

function calculateVAT(price, vatPercentage) {
  return price * vatPercentage
}
