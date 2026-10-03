// ===== SofIA Labs — interacciones =====

// ✏️ CAMBIA ESTE CORREO por el de tu empresa: el formulario abrirá un mensaje dirigido a él.
const CONTACT_EMAIL = "contacto@tu-dominio.com";

// Menú móvil
const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav__toggle");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
document.querySelectorAll(".nav__links a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Animación al hacer scroll
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
    io.observe(el);
  });
} else {
  document.documentElement.classList.add("no-js");
}

// Formulario de contacto (abre el cliente de correo; GitHub Pages no tiene servidor)
document.getElementById("contactForm").addEventListener("submit", (ev) => {
  ev.preventDefault();
  const d = new FormData(ev.target);
  const subject = `Contacto web: ${d.get("interes")} — ${d.get("nombre")}`;
  const body =
    `Nombre: ${d.get("nombre")}\nEmpresa: ${d.get("empresa")}\nCorreo: ${d.get("correo")}\n` +
    `Interés: ${d.get("interes")}\n\n${d.get("mensaje")}`;
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.getElementById("formNote").textContent = "¡Gracias! Se abrirá tu correo para enviar el mensaje.";
});

document.getElementById("year").textContent = new Date().getFullYear();
