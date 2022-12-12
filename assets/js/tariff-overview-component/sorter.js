'use strict'
/* exported handleSortOverview, sortOverview*/
function handleSortOverview(e) {
  e.preventDefault()
  let sortby = document.querySelector('#table-sort #filter').value
  let direction = document.querySelector('#table-sort #direction').value
  sortOverview(_tariffs, sortby, direction)
}

function sortOverview(tariffs, sortby, direction) {
  tariffs.sort(function (a, b) {
    let x = a[sortby].toLowerCase()
    let y = b[sortby].toLowerCase()
    if (x < y) {
      return -1
    }
    if (x > y) {
      return 1
    }
    return 0
  })
  console.log(tariffs)
  renderFullOverview('#selection', tariffs)
}
