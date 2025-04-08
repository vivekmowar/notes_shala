// script.js

// Function to apply saved dark mode preference
function applyDarkModePreference() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    const body = document.body;
    const toggle = document.getElementById('darkModeToggle');
  
    if (isDarkMode) {
      body.classList.add('dark-mode');
      if (toggle) toggle.checked = true;
    } else {
      body.classList.remove('dark-mode');
      if (toggle) toggle.checked = false;
    }
  }
  
  // Toggle dark mode and save preference
  function setupDarkModeToggle() {
    const toggle = document.getElementById('darkModeToggle');
    if (toggle) {
      toggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
      });
    }
  }
  
  // Run setup on page load
  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('darkModeToggle');
    const body = document.body;
  
    // Load dark mode state from localStorage (optional, remembers toggle)
    if (localStorage.getItem('darkMode') === 'enabled') {
      body.classList.add('dark-mode');
      toggle.checked = true;
    }
  
    toggle.addEventListener('change', () => {
      if (toggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
      } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
      }
    });
  });
  
  