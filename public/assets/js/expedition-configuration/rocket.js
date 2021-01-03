document.querySelectorAll('button').forEach((el) => {
  el.addEventListener('click', async function () {
    const rocketId = this.dataset.rocket
    await fetch(`/api/add/rocket/${rocketId}`, {
      method: 'POST'
    })
    setTimeout(function () {
      location.reload()
    }, 100)
  })
})
