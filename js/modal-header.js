{
    const refs = {
      openModalBtn: document.querySelector("[data-modal-header-open]"), 
      openModalBtn2: document.querySelector("[data-modal-nav-open]"), 
      closeModalBtn: document.querySelector("[data-modal-header-close]"),
      modal: document.querySelector("[data-modal-header]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.openModalBtn2.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden-header");
    }
  };