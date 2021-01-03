(async () => {
  const data = await (await fetch('/api/planets')).json()

  document.querySelectorAll('img').forEach((i) => {
    i.addEventListener('click', function () {
      const planet =
        this.getAttribute('alt').charAt(0).toUpperCase() +
        this.getAttribute('alt').slice(1)
      const filteredData = data.filter((item) => item.name === planet)
      document.querySelector('#planet-info').textContent = filteredData[0].description
      document.querySelector('#planet-title').textContent = filteredData[0].name
      document
        .querySelector('#planet-portrait')
        .setAttribute('src', filteredData[0].image)
      document.querySelector('#planet-portrait').setAttribute('alt', filteredData[0].name)

      if (document.querySelector('#choose-planet')) {
        document
          .querySelector('#choose-planet')
          .setAttribute('data-planet-id', filteredData[0].id)
      }
    })
  })
})()
