document.querySelector('#choose-planet').addEventListener('click', async function (e) {
  if (!e.target.dataset.planetId) {
    return
  }
  const planetId = Number(this.dataset.planetId)
  await fetch(`/api/add/planet/${planetId}`, {
    method: 'POST'
  })
  setTimeout(function () {
    location.reload()
  }, 100)
})
