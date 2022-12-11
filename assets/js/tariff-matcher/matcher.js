'use strict'

/* exported getOptimalPlans, filterRenewableEnergy, filterTariffTypes, filterCompatibility */
function getOptimalPlans(types, minimalRenewableEnergy, compatibility) {}

function filterRenewableEnergy(tariffs, minimalRenewableEnergy) {
  const filteredTariff = tariffs.filter(
    (tariff) => tariff.minimalRenewableEnergy <= minimalRenewableEnergy
  )
  return filteredTariff
}

function filterTariffTypes(tariffs, typeValues) {
  let found = false
  const filteredTariff = tariffs.filter((tariff) => {
    typeValues.forEach((v) => {
      if (v.checked && tariff.type == v.value) {
        found = true
      }
    })
    if (found) {
      found = false
      return tariff
    }
  })
  return filteredTariff
}

function filterCompatibility(tariffs, compatibility) {
  let found = false
  const filteredTariff = tariffs.filter((tariff) => {
    compatibility.forEach((v) => {
      if (tariff.compatibility) {
        console.log(v.value, tariff.compatibility)
        if (v.checked && tariff.compatibility.includes(v.value)) {
          found = true
        }
      }
    })
    if (found) {
      found = false
      return tariff
    }
  })
  return filteredTariff
}
