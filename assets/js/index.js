document.addEventListener("DOMContentLoaded", () => {
  console.log(9);
  document.getElementById("connect").addEventListener("click", () => {
    const modal = document.getElementById("modal");
    modal.className = "modalOn";
    const modal_popup = document.getElementById("modal-popup");
    modal_popup.className = "modal-popup";
    console.log(1);
  });

  document.getElementById("close-modal").addEventListener("click", () => {
    const modal = document.getElementById("modal");
    modal.className = "modalOff";
  });
});
