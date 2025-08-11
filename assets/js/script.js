// Small interactions: mobile menu, year, basic form mailto handling
document.addEventListener('DOMContentLoaded', function(){
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // mobile menu
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  menuBtn.addEventListener('click', () => {
    if(nav.style.display === 'flex') {
      nav.style.display = 'none';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.right = '20px';
      nav.style.top = '60px';
      nav.style.background = 'rgba(10,14,20,0.9)';
      nav.style.padding = '12px';
      nav.style.borderRadius = '10px';
    }
  });
});

// Simple mailto fallback to prefill subject/body for the contact form
function sendMail(e){
  e.preventDefault();
  const form = e.target;
  const name = encodeURIComponent(form.name.value || '');
  const company = encodeURIComponent(form.company.value || '');
  const message = encodeURIComponent(form.message.value || '');
  const subject = encodeURIComponent(`Candidature alternance - ${name}`);
  const body = encodeURIComponent(`Nom: ${name}\nEntreprise: ${company}\n\nMessage:\n${message}`);
  const mailto = `mailto:thasedasaidani2000@gmail.com?subject=${subject}&body=${body}`;
  window.location.href = mailto;
  return false;
}
