'use strict'

/* exported renderTariffs,renderFinalSelection,renderRegion,renderConsumptionEstimates,selectTariff,showHidePopup */

function renderTariffs(matchingTariffs, container, renderDetail) {}

function renderFinalSelection(container, tariffs) {}

function renderRegion(region) {}

function renderConsumptionEstimates() {}

function selectTariff(target) {}

function showHidePopup(target) {
  let x = document.querySelectorAll('.render-tariff-overview .details')[target]
  if (x.classList.contains('hidden')) {
    x.classList.remove('hidden')
  } else {
    x.classList.add('hidden')
  }
  //console.log()
}
