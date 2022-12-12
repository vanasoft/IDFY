'use strict'

/* exported renderTariffs,renderFinalSelection,renderRegion,renderConsumptionEstimates,selectTariff,showHidePopup */

function renderTariffs(matchingTariffs, container, renderDetail) {
  let tariffCounter = 0
  let monthly = 0

  console.log(renderDetail)

  document.querySelector('.electricityEstimate span').innerHTML =
    renderDetail.electricity + 'kWh'
  document.querySelector('.gasEstimate span').innerHTML =
    renderDetail.gas + 'kWh'

  matchingTariffs.forEach((tariff) => {
    monthly = calculateMonthlyPrice(
      tariff.pricePerkWh,
      renderDetail[tariff.type]
    )
    document.querySelector(container).innerHTML += `
    <article onclick='selectTariff(this)' tariff_name='${tariff.name}'>
       <h3>${tariff.name.replace('-', ' ')}</h3>
       <a href="#" onclick='showHidePopup(${tariffCounter})'>view details</a><p>€ ${monthly.toFixed(
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

function renderSelectedTariff(container, tariffs) {
  let monthly = 0
  document.querySelector(container).innerHTML = ''
  let est = getEstimatedHeatOrElectricity()
  tariffs.forEach((tariff) => {
    monthly = calculateMonthlyPrice(tariff.pricePerkWh, est[tariff.type])
    document.querySelector(container).innerHTML += `
     <article selected-tariff tariff_name='${tariff.name}'>
                <h3>${tariff.name.replace('-', ' ')}</h3>
                <p>€ ${monthly.toFixed(2)} / month</p>
            </article>
    
  `
  })
}

function renderFinalSelection(container, tariffs) {
  let monthly = 0
  let vat = 0
  let totalMonthly = 0
  let vatPercentage = document.querySelector(
    '[name="vatpercentage"]:checked'
  ).value
  document.querySelector(container).innerHTML = ''
  let est = getEstimatedHeatOrElectricity()
  tariffs.forEach((tariff) => {
    monthly = calculateMonthlyPrice(tariff.pricePerkWh, est[tariff.type])
    vat = calculateVAT(monthly, vatPercentage)
    document.querySelector(container).innerHTML += `
    <article>
                <h3>${tariff.name.replace('-', ' ')}</h3>
                <p>€ ${monthly.toFixed(2)} / month (€ ${vat.toFixed(
      2
    )} VAT) </p>
            </article>
    
  `
    totalMonthly = totalMonthly + monthly + vat
  })

  document.querySelector('.total-monthly').innerHTML =
    '€ ' + totalMonthly.toFixed(2)
}

function renderRegion(region) {
  document.querySelector('.region').innerHTML = region
}

function renderConsumptionEstimates() {}

function selectTariff(target) {
  //console.log(target.classList.contains('selected'))
  if (target.classList.contains('selected')) {
    target.classList.remove('selected')
  } else {
    target.classList.add('selected')
  }
}

function showHidePopup(target) {
  let x = document.querySelectorAll('.render-tariff-overview .details')[target]
  if (x.classList.contains('hidden')) {
    x.classList.remove('hidden')
  } else {
    x.classList.add('hidden')
  }
  //console.log()
}
