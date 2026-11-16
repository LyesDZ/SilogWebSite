(function () {
  "use strict";

  // Année courante dans le pied de page
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menu mobile
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");

  function setMenu(open) {
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setMenu(!nav.classList.contains("open"));
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { setMenu(false); });
    });
  }

  // Formulaire de contact : ouvre le client mail avec le message pré-rempli.
  // (Aucun serveur n'est requis ; le message est envoyé depuis la boîte mail du visiteur.)
  var form = document.getElementById("contact-form");
  var note = document.getElementById("form-note");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var subject = "Demande de contact via le site web - " + (data.get("company") || data.get("name"));
      var body =
        "Nom : " + data.get("name") + "\n" +
        "E-mail : " + data.get("email") + "\n" +
        "Société : " + (data.get("company") || "-") + "\n\n" +
        data.get("message");

      window.location.href =
        "mailto:a.arab-dgl@silog-sp.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      if (note) note.textContent = "Votre messagerie s'ouvre avec votre demande pré-remplie.";
    });
  }
})();
