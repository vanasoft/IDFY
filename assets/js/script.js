'use strict'

document.addEventListener('DOMContentLoaded', () => {
  init('#general-information')

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
      renderFullOverview('.render-tariff-overview', _tariffs)
    })
})

function init(showPage) {
  document.querySelectorAll('.step').forEach((page) => {
    page.style.display = 'none'
  })

  //alert(showPage)
  document.querySelector(showPage).style.display = 'block'
}
