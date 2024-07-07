// TABS
document.querySelector("main").addEventListener("scroll", () => {
  const links = document.querySelectorAll(".tab-link");
  links.forEach((element) => element.removeAttribute("active"));

  const pageWidth = document.querySelector("main > article").offsetWidth;
  const scroll = document.querySelector("main").scrollLeft;
  const currentPage = Math.round(scroll / pageWidth);

  if (links[currentPage]) links[currentPage].setAttribute("active", "");
});

// SERVICE WORKER
async function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });
    } catch (error) {
      console.error(`Could not install service worker: ${error}`);
    }
  }
}

registerServiceWorker();
