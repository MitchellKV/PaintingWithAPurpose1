document.addEventListener('DOMContentLoaded', function() {
    var hamburgerToggle = document.getElementById('hamburger-toggle');
    var menu = document.querySelector('.menu');
  
    hamburgerToggle.addEventListener('change', function() {
      menu.classList.toggle('active');
    });
  });