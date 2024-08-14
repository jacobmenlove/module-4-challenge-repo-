// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

// TODO: Create functions to read and write from local storage

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggle');
    const currentMode = localStorage.getItem('mode') || 'light';
    document.body.classList.add(currentMode);
  
    toggle.addEventListener('click', () => {
      const newMode = document.body.classList.contains('light') ? 'dark' : 'light';
      document.body.classList.replace(currentMode, newMode);
      localStorage.setItem('mode', newMode);
    });
  });
