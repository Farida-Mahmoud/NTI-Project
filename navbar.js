
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    const container = document.getElementById('navbar-container');
    container.innerHTML = data;

    const hamburger = container.querySelector('.hamburger');
    const navLinks = container.querySelector('.nav-links');

    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });
    } else {
      console.error('Hamburger or navLinks not found');
    }
  })
  .catch(error => console.error('Error loading navbar:', error));
