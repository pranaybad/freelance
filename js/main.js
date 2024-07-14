document.addEventListener("DOMContentLoaded", function() {
  function loadComponent(id, file) {
    let element = document.getElementById(id);
    fetch(file)
      .then(response => response.text())
      .then(data => {
        element.innerHTML = data;

        // Add event listener for the nav toggle button after loading the header
        if (id === 'header') {
          const navToggle = document.getElementById('nav-toggle');
          const navMenu = document.getElementById('nav-menu');
          navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('hidden');
          });
        }
        
           // Set current year in the footer
           if (id === 'footer') {
            const currentYearElement = document.getElementById('current-year');
            const currentYear = new Date().getFullYear();
            currentYearElement.textContent = currentYear;
          }

          
        
      });
  }

  loadComponent('header', 'components/header.html');
  loadComponent('footer', 'components/footer.html');
});
