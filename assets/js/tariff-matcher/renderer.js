'use strict'

/* exported renderTariffs,renderFinalSelection,renderRegion,renderConsumptionEstimates,selectTariff,showHidePopup */

function renderTariffs(matchingTariffs, container, renderDetail) {
  let tariffCounter = 0
  let monthly = 0
  matchingTariffs.forEach((tariff) => {
    monthly = calculateMonthlyPrice(tariff.pricePerkWh, 233)
    document.querySelector(container).innerHTML += `
    <article>
       <h3>${tariff.name.replace(
         '-',
         ' '
       )}</h3><a href="#" onclick='showHidePopup(${tariffCounter})'>view details</a><p>€ ${monthly.toFixed(
      2
    )} / month</p>   <button>Choose plan</button>
       <div class="details hidden">
           <a href="#" onclick='showHidePopup(${tariffCounter})'>close</a>
           <dl>
               <dt>Price per kWh:</dt>
               <dd>€ ${tariff.pricePerkWh} / kWh</dd>
               <dt>Renewable energy percentage:</dt>
               <dd>€ ${tariff.minimalRenewableEnergy}%</dd>
               <dt>Compatible with:</dt>
               <dd>${tariff.compatibility} </dd>
           </dl>
       </div>
   </article>
  `
    tariffCounter++
  })
}

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
