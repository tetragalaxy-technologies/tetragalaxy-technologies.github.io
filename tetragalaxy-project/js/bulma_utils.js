// Getting all the modals, close and trigger buttons
let modals = document.querySelectorAll(".modal");
let modalButtons = document.querySelectorAll(".open-modal-button");
let modalClose = document.querySelectorAll(".close-modal-button");

// For Success Message Notification
let successMessages = document.querySelectorAll(".modal-successnotification");

// Adding a event listener to all the trigger buttons
if (modalButtons.length > 0) {
  modalButtons.forEach((button) => {
    button.addEventListener("click", function () {
      document.getElementById(this.dataset.target).classList.add("isactive");
    });
  });
}

// Adding event listeners to all the close buttons
if (modalClose.length > 0) {
  modalClose.forEach((closeButton) => {
    closeButton.addEventListener("click", function () {
      modals.forEach((modal) => {
        modal.classList.remove("is-active");

        // hiding success notification on closing the modal
        successMessages.forEach((message) => {
          message.classList.add("is-hidden");
        });
      });
    });
  });
}
