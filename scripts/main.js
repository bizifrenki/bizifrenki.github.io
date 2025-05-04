document.addEventListener('DOMContentLoaded', () => {
  // Navigation for nav links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      window.location.href = targetId;
    });
  });

  // Dark mode toggle (modern feature)
  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Toggle Dark Mode';
  toggleButton.style.position = 'fixed';
  toggleButton.style.top = '10px';
  toggleButton.style.right = '10px';
  toggleButton.style.padding = '8px 12px';
  toggleButton.style.backgroundColor = '#4a4a4a';
  toggleButton.style.color = '#f5f5f5';
  toggleButton.style.border = 'none';
  toggleButton.style.borderRadius = '5px';
  toggleButton.style.cursor = 'pointer';
  document.body.appendChild(toggleButton);

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      document.body.style.backgroundColor = '#2e3b4e';
      document.querySelector('main').style.backgroundColor = '#3e4b5e';
      document.querySelector('main').style.color = '#f5f5f5';
    } else {
      document.body.style.backgroundColor = '#d3d3d3';
      document.querySelector('main').style.backgroundColor = '#e0e0e0';
      document.querySelector('main').style.color = '#1a2526';
    }
  });
});
