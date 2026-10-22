const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    mainNav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false');
  }));
}
const form = document.querySelector('#inquiry-form');
if (form) form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const interest = String(data.get('interest') || '').trim();
  const message = String(data.get('message') || '').trim();
  // Replace this address with the organizer's confirmed working email before publishing.
  const recipient = 'REPLACE_WITH_WORKING_EMAIL@example.com';
  const subject = encodeURIComponent(`Заявка на путешествие — ${interest}`);
  const body = encodeURIComponent(`Здравствуйте!\nМеня зовут: ${name}\nИнтересует: ${interest}\nДополнительно: ${message || '—'}\n\nОтправлено с сайта «АйДа Белорецк!»`);
  if (recipient.startsWith('REPLACE_')) {
    const status = document.querySelector('#form-status');
    status.textContent = 'Форма пока демонстрационная: организатору нужно указать рабочий e-mail в файле script.js. Для записи сейчас позвоните по номеру +7 917 793-61-80.';
    return;
  }
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});
document.querySelectorAll('[data-route]').forEach(link => link.addEventListener('click', () => {
  const select = document.querySelector('#interest');
  if (select) select.value = link.dataset.route;
}));
