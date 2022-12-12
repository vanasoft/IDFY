'use strict'
/* exported processSelection, processConfirmation, handleTariffClick, getSelectedTariffs */
function processSelection(e) {}

function processConfirmation(e) {}

function handleTariffClick(e) {}

function getSelectedTariffs(selector) {
  let selectedTariff = []
  selector.forEach((s) => {
    let tariff_name = s.getAttribute('tariff_name')
    _tariffs.forEach((tariff) => {
      if (tariff.name == tariff_name) {
        selectedTariff.push(tariff)
      }
    })
  })
  return selectedTariff
}
