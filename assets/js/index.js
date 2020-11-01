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

  document.getElementById("submit").addEventListener("click", async (e) => {
    console.log(9);
    e.preventDefault();

    const data = {
      firstname: document.getElementById("firstname").value,
      lastname: document.getElementById("lastname").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    const response = await axios.post(
      "https://lereacteur-backend-formulaire.herokuapp.com/message",
      data
    );

    console.log(response);
  });
});
