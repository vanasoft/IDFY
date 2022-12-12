'use strict'
/* exported renderFullOverview, replaceTariff,handleTariffChange */
function renderFullOverview(container, tariffs) {
  let tariffCounter = 0
  let monthly = 0
  let est = getEstimatedHeatOrElectricity()
  document.querySelector(`${container} tbody`).innerHTML = ''
  tariffs.forEach((tariff) => {
    monthly = calculateMonthlyPrice(tariff.pricePerkWh, est[tariff.type])
    document.querySelector(`${container} tbody`).innerHTML += `
    <tr>
                    <td>${tariff.name.replace('-', ' ')}</td>
                    <td> ${tariff.type} </td>
                    <td>€ ${monthly.toFixed(2)} / month</td>
                    <td>
                        <button onclick=''>Choose this one instead</button>
                    </td>
                </tr>
  `
    tariffCounter++
  })
}

function replaceTariff(tariff) {}

function handleTariffChange(e) {}
