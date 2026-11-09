document.addEventListener('DOMContentLoaded', function () {
  // 1. Année du pied de page
  const yearElement = document.getElementById('year');
  if (yearElement) yearElement.textContent = new Date().getFullYear();

  // 2. Menu mobile : on ajoute/retire la classe "open" (le style est dans le CSS)
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
    // le menu se referme quand on clique sur un lien
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  // 3. Formulaire de contact : ouvre la messagerie avec le message prérempli
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = form.elements.name.value.trim();
      const company = form.elements.company.value.trim();
      const message = form.elements.message.value.trim();

      // un seul encodage, au moment de construire le lien
      const subject = `Contact portfolio - ${name}${company ? ' (' + company + ')' : ''}`;
      const body = `Nom : ${name}\nEntreprise : ${company}\n\nMessage :\n${message}`;

      window.location.href = 'mailto:thasedasaidani2000@gmail.com'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(body);
    });
  }
});