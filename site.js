'use strict';
// Native anchors provide keyboard navigation, history, and a no-JavaScript fallback.
const channels = ['home', 'research', 'engineering', 'about'];
const links = [...document.querySelectorAll('.remote nav a')];
const status = document.getElementById('channel-status');
function showChannel(id) {
  const number = channels.indexOf(id);
  if (number < 0) return;
  for (const link of links) {
    if (link.hash === `#${id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
  if (status) status.textContent = `CH ${String(number).padStart(2, '0')} / ${id.toUpperCase()}`;
}
function syncHash() {
  const id = location.hash.slice(1);
  showChannel(channels.includes(id) ? id : 'home');
}
window.addEventListener('hashchange', syncHash);
syncHash();
let framePending = false;
function updateFromScroll() {
  const threshold = Math.min(window.innerHeight * 0.28, 180);
  let current = 'home';
  for (const id of channels) {
    const section = document.getElementById(id);
    if (section && section.getBoundingClientRect().top <= threshold) current = id;
  }
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 3) {
    current = 'about';
  }
  showChannel(current);
  framePending = false;
}
window.addEventListener('scroll', () => {
  if (!framePending) {
    framePending = true;
    requestAnimationFrame(updateFromScroll);
  }
}, { passive: true });
window.addEventListener('resize', updateFromScroll);
