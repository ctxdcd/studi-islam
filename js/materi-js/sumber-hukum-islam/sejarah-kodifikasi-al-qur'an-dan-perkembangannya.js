document.addEventListener("DOMContentLoaded", () => {
  const ushulNavItems = document.querySelectorAll(".nav-item");
  const ushulSections = document.querySelectorAll(".materi-section");

  ushulNavItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      ushulNavItems.forEach((nav) => nav.classList.remove("active"));
      item.classList.add("active");

      const targetId = item.getAttribute("href").substring(1);
      ushulSections.forEach((section) => {
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
  const ushulModal = document.getElementById("ushulModal");
  const openUshulModal = document.getElementById("openUshulModal");
  const closeUshulModal = document.getElementById("closeUshulModal");

  if (openUshulModal && ushulModal && closeUshulModal) {
    openUshulModal.addEventListener("click", () => {
      ushulModal.classList.add("active");
      ushulModal.setAttribute("aria-hidden", "false");
    });

    closeUshulModal.addEventListener("click", () => {
      ushulModal.classList.remove("active");
      ushulModal.setAttribute("aria-hidden", "true");
    });

    ushulModal.addEventListener("click", (e) => {
      if (e.target === ushulModal) {
        ushulModal.classList.remove("active");
        ushulModal.setAttribute("aria-hidden", "true");
      }
    });
  }
});