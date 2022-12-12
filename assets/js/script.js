'use strict'

document.addEventListener('DOMContentLoaded', () => {
  init('#selection')

  document
    .querySelector('[data-target="personal-preferences"]')
    .addEventListener('click', () => init('#personal-preferences'))

  document
    .querySelector('[data-target="general-information"]')
    .addEventListener('click', () => init('#general-information'))

  document
    .querySelector('[data-target="tariff-overview"]')
    .addEventListener('click', () => {
      init('#tariff-overview')
      const minimalRenewableEnergy =
        document.querySelector('#renewability').value
      const typeValues = document.querySelectorAll('[name="contracttype"]')
      const compatibility = document.querySelectorAll('[name="amenities"]')
      const peopleInHousehold =
        document.querySelector('#amount-of-people').value
      const insulation = document.querySelector(
        '[name="insulation"]:checked'
      ).value
      const propertyType = document.querySelector(
        '[name="propertytype"]:checked'
      ).value

      let matchingTariffs

      matchingTariffs = filterRenewableEnergy(_tariffs, minimalRenewableEnergy)
      matchingTariffs = filterTariffTypes(matchingTariffs, typeValues)
      //matchingTariffs = filterCompatibility(matchingTariffs, compatibility)
      const aveElectric =
        calculateAverageElectricityConsumption(peopleInHousehold)
      const aveHeat = calculateAverageHeatConsumption(
        insulation,
        propertyType,
        peopleInHousehold
      )
      const renderDetail = { electricity: aveElectric, gas: aveHeat }
      //console.log(matchingTariffs, compatibility)
      renderTariffs(matchingTariffs, '.render-tariff-overview', renderDetail)
      // renderFullOverview('.render-tariff-overview', _tariffs)
    })
})

function init(showPage) {
  document.querySelectorAll('.step').forEach((page) => {
    page.style.display = 'none'
  })

  document.querySelector(showPage).style.display = 'block'
}
