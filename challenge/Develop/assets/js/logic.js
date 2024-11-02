function readLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || null;
}

function storeLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function toggleMode() {
  const currentMode = document.body.classList.contains('dark') ? 'light' : 'dark';
  document.body.classList.toggle('dark', currentMode === 'dark');
  document.documentElement.style.setProperty('--circle-color', currentMode === 'dark' ? '#333' : '#fff');
  storeLocalStorage('mode', currentMode);
}

function applyMode() {
  const savedMode = readLocalStorage('mode') || 'light';
  document.body.classList.toggle('dark', savedMode === 'dark');
  document.documentElement.style.setProperty('--circle-color', savedMode === 'dark' ? '#333' : '#fff');
}

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle');
  applyMode(); /
  toggleButton.addEventListener('click', toggleMode);
});
