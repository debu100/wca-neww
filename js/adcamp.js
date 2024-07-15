// Tabs
(function toggleTabItem() {
  const tabWrapper = document.querySelector(".tab-wrapper");
  const tabBtns = document.querySelectorAll(".tab-nav [data-tab-target]");
  const tabTargets = document.querySelectorAll(".tab-target");

  if (tabWrapper !== null) {
    tabWrapper.addEventListener("click", (e) => {
      e.preventDefault();

      const id = e.target.dataset.tabTarget;

      if (id) {
        // remove active from other buttons
        tabBtns.forEach((btn) => {
          btn.classList.remove("is-active");
          e.target.classList.add("is-active");
        });
        // hide other tabTargets
        tabTargets.forEach((content) => {
          content.classList.remove("is-active");
        });
        const currentContent = document.getElementById(id);
        currentContent.classList.add("is-active");
      }
    });
  }
})();
