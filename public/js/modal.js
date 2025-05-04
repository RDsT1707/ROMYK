document.addEventListener("DOMContentLoaded", () => {
    const loginModal = document.getElementById("login-modal");
    const registerModal = document.getElementById("register-modal");
  
    const openModal = (modalToOpen, modalToClose = null) => {
      modalToOpen.classList.add("show");
      modalToOpen.setAttribute("aria-hidden", "false");
      if (modalToClose) {
        modalToClose.classList.remove("show");
        modalToClose.setAttribute("aria-hidden", "true");
      }
      document.body.style.overflow = "hidden";
    };
  
    const closeModals = () => {
      loginModal.classList.remove("show");
      registerModal.classList.remove("show");
      loginModal.setAttribute("aria-hidden", "true");
      registerModal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    };
  
    document.getElementById("open-login")?.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(loginModal);
    });
  
    document.getElementById("open-register")?.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(registerModal, loginModal);
    });
  
    document.getElementById("open-login-from-register")?.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(loginModal, registerModal);
    });
  
    document.querySelectorAll(".close-modal").forEach((btn) => {
      btn.addEventListener("click", closeModals);
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === loginModal || e.target === registerModal) {
        closeModals();
      }
    });
  });
  