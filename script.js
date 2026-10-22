const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

// Перед публикацией замените адрес на реальную рабочую почту компании.
const CONTACT_EMAIL = 'REPLACE_WITH_YOUR_EMAIL@example.com';

document.getElementById('inquiry-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const interest = String(data.get('interest') || '').trim();
  const message = String(data.get('message') || '').trim();
  const subject = encodeURIComponent(`Заявка с сайта — ${interest}`);
  const body = encodeURIComponent(
    `Здравствуйте! Меня зовут ${name}.\nИнтересует: ${interest}.\n${message ? `Дополнительно: ${message}\n` : ''}\nОтправлено с сайта «АйДа Белорецк!».`
  );
  if (CONTACT_EMAIL.includes('REPLACE_WITH_YOUR_EMAIL')) {
    document.getElementById('form-status').textContent =
      'Сайт готов к публикации, но перед приёмом заявок укажите рабочий email в файле script.js.';
    return;
  }
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});
