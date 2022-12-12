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
  let penalty = 0
  /*  let insulationValue
	insulation.forEach((inn) => {
		if (inn.check) {
			insulationValue = inn.value
		}
	}) */
  if (insulation == 'No') {
    penalty = av.noInsulationPenalty
  }
  console.log(insulation, propertyType, peopleInHousehold, penalty)
  return (
    av.basicHeatConsumptionDetachedHouse -
    av.residenceTypeModifiers[propertyType] +
    (penalty - av.neighbourInsulationModifiers[propertyType]) +
    av.personalConsumptionFactor * Math.log(peopleInHousehold)
  )
}

function getInsulationPenalty(insulation, propertyType) {}

function getResidentialBonus(propertyType) {}
