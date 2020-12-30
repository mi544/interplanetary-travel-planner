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
