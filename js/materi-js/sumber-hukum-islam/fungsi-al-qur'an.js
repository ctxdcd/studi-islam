document.addEventListener("DOMContentLoaded", () => {
  const sumberNavItems = document.querySelectorAll(".nav-item");
  const sumberSections = document.querySelectorAll(".materi-section");

  sumberNavItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      sumberNavItems.forEach((nav) => nav.classList.remove("active"));
      item.classList.add("active");

      const targetId = item.getAttribute("href").substring(1);
      sumberSections.forEach((section) => {
        section.classList.remove("active");
        if (section.id === targetId) {
          section.classList.add("active");
        }
      });

      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const deepDiveButtons = document.querySelectorAll(".learn-more-btn");
  const modal = document.getElementById("deepDiveModal");
  const closeBtn = document.querySelector(".modal-close");

  if (!modal || !closeBtn || deepDiveButtons.length === 0) return;

  const modalTitle = document.getElementById("modalTitle");
  const modalMessage = document.getElementById("modalMessage");
  const modal5w = document.getElementById("modal5w");
  const modalExplanation = document.getElementById("modalExplanation");
  const modalVideo = document.getElementById("modalVideo");

  const closeModal = () => {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  };

  deepDiveButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      modalTitle.textContent = btn.dataset.title || "Choose a learning path";
      modalMessage.textContent = btn.dataset.message || "Pick the format you need.";

      modal5w.href = btn.dataset.fiveW || btn.dataset.w5 || btn.dataset["5w"] || btn.getAttribute("data-5w") || "#";
      modalExplanation.href = btn.dataset.explanation || "#";
      modalVideo.href = btn.dataset.video || "#";

      modal.classList.add("active");
      modal.setAttribute("aria-hidden", "false");
    });
  });

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sumberModal = document.getElementById("sumberModal");
  const openSumberModal = document.getElementById("openSumberModal");
  const closeSumberModal = document.getElementById("closeSumberModal");

  if (openSumberModal && sumberModal && closeSumberModal) {
    openSumberModal.addEventListener("click", () => {
      sumberModal.classList.add("active");
      sumberModal.setAttribute("aria-hidden", "false");
    });

    closeSumberModal.addEventListener("click", () => {
      sumberModal.classList.remove("active");
      sumberModal.setAttribute("aria-hidden", "true");
    });

    sumberModal.addEventListener("click", (e) => {
      if (e.target === sumberModal) {
        sumberModal.classList.remove("active");
        sumberModal.setAttribute("aria-hidden", "true");
      }
    });
  }
});