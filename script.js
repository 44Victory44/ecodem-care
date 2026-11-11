const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("visitorName").value.trim();
  const message = document.getElementById("visitorMessage").value.trim();
  const feedback = document.getElementById("formFeedback");

  if (!name || !message) {
    feedback.textContent = "Completa ambos campos para preparar tu mensaje.";
    return;
  }

  const subject = encodeURIComponent("Comentario sobre EcoDem Care");
  const body = encodeURIComponent(`Hola, soy ${name}.\\n\\n${message}`);
  feedback.innerHTML = 'Se abrirá tu aplicación de correo para que puedas revisar y enviar el mensaje.';
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
});
