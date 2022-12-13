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
                        <button onclick='replaceTariff(${JSON.stringify(
                          tariff
                        )} )'>Choose this one instead</button>
                    </td>
                </tr>
  `
    tariffCounter++
  })
}

function replaceTariff(tariff) {
  let selector = document.querySelectorAll('.render-tariff-overview .selected')

  //let selectedTariffs = getSelectedTariffs(selector)

  let selectedTariffs = []
  selector.forEach((s) => {
    let tariff_name = s.getAttribute('tariff_name')
    _tariffs.forEach((tariff) => {
      if (tariff.name == tariff_name) {
        selectedTariffs.push(tariff)
      }
    })
  })
  console.log('frist', tariff, selectedTariffs)
  selectedTariffs.pop()
  selectedTariffs.push(tariff)
  console.log('second', tariff, selectedTariffs)
  renderSelectedTariff('.selected-tariff', selectedTariffs)
}

function handleTariffChange(e) {}
