let timer = null;
const infBtn = document.querySelector("#infinityButton");
infBtn.addEventListener("mouseenter", async function () {
  infBtn.classList.remove("run-animation");
  await new Promise(resolve => setTimeout(resolve, 25));
  infBtn.classList.add("run-animation");
  timer = setInterval(async () => {
    infBtn.classList.remove("run-animation");
    await new Promise(resolve => setTimeout(resolve, 25));
    infBtn.classList.add("run-animation");
  }, 4000);
});
infBtn.addEventListener("mouseleave", function () {
  clearInterval(timer);
});

(async () => {
  const data = await (await fetch("/api/planets")).json();

  document.querySelectorAll("img").forEach(i => {
    i.addEventListener("click", function () {
      const planet =
        this.getAttribute("alt").charAt(0).toUpperCase() +
        this.getAttribute("alt").slice(1);
      const filteredData = data.filter(item => item.name === planet);
      document.querySelector("#planet-info").textContent = filteredData[0].description;
      document.querySelector("#planet-title").textContent = filteredData[0].name;
      document
        .querySelector("#planet-portrait")
        .setAttribute("src", filteredData[0].image);
      document
        .querySelector("#planet-portrait")
        .setAttribute("alt", filteredData[0].name);
    });
  });
})();
