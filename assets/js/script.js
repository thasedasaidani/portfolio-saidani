document.addEventListener('DOMContentLoaded', function(){
  // 1. Mise à jour de l'année
  const yearElement = document.getElementById('year');
  if(yearElement) yearElement.textContent = new Date().getFullYear();

  // 2. Gestion du menu mobile
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');

  menuBtn.addEventListener('click', () => {
    // On utilise un toggle de classe ou un style direct
    if(nav.style.display === 'flex') {
      nav.style.display = 'none';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.right = '20px';
      nav.style.top = '60px';
      nav.style.background = 'rgba(10,14,20,0.95)';
      nav.style.padding = '12px';
      nav.style.borderRadius = '10px';
      nav.style.zIndex = '100';
    }
  });
});

// 3. Fonction d'envoi de mail
function sendMail(e){
  e.preventDefault();
  const form = e.target;
  const name = encodeURIComponent(form.name.value || '');
  const company = encodeURIComponent(form.company.value || '');
  const message = encodeURIComponent(form.message.value || '');
  
  const subject = encodeURIComponent(`Contact Portfolio - ${name}`);
  const body = encodeURIComponent(`Nom: ${name}\nEntreprise: ${company}\n\nMessage:\n${message}`);
  
  window.location.href = `mailto:thasedasaidani2000@gmail.com?subject=${subject}&body=${body}`;
  return false;
}