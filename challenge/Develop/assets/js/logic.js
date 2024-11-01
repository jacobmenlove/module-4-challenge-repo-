function setMode(mode) {
  localStorage.setItem('mode', mode);
  document.body.className = mode; 
  document.documentElement.style.setProperty('--circle-color', mode === 'dark' ? '#333' : '#fff');
}

function getMode() {
  return localStorage.getItem('mode') || 'light';
}

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggle');
  const currentMode = getMode();

  setMode(currentMode);

  toggle.addEventListener('click', () => {
      const newMode = document.body.classList.contains('light') ? 'dark' : 'light';
      setMode(newMode);
  });
});
