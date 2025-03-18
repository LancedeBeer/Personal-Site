function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
  }
  
  // Apply saved dark mode setting on page load
  document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('dark-mode') === 'true') {
      document.body.classList.add('dark-mode');
    }
  });
  