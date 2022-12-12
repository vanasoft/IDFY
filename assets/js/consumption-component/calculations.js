'use strict'

/* exported calculateAverageElectricityConsumption,calculateAverageHeatConsumption,getInsulationPenalty,getResidentialBonus */
function calculateAverageElectricityConsumption(peopleInHousehold) {
  return (
    _config.electricalConsumption.baseConsumption +
    _config.electricalConsumption.regressiveConsumption *
      Math.log(peopleInHousehold)
  )
}

function calculateAverageHeatConsumption(
  insulation,
  propertyType,
  peopleInHousehold
) {
  const av = _config.heatConsumption
  let penalty = getInsulationPenalty(insulation, propertyType)
  let residentialBonus = getResidentialBonus(propertyType)
  //console.log(insulation, propertyType, peopleInHousehold, penalty)
  return (
    av.basicHeatConsumptionDetachedHouse -
    residentialBonus +
    penalty +
    av.personalConsumptionFactor * Math.log(peopleInHousehold)
  )
}

function getInsulationPenalty(insulation, propertyType) {
  const av = _config.heatConsumption
  let penalty = 0
  if (insulation == 'No') {
    penalty = av.noInsulationPenalty
  }
  return penalty - av.neighbourInsulationModifiers[propertyType]
}

function getResidentialBonus(propertyType) {
  return _config.heatConsumption.residenceTypeModifiers[propertyType]
}
