    document.addEventListener('DOMContentLoaded', () => {
    const dropdownLinks = document.querySelectorAll('.dropdown-menu li a');
  
    dropdownLinks.forEach(link => {
      link.addEventListener('click', function() {
        dropdownLinks.forEach(link => link.classList.remove('selected'));
        this.classList.add('selected');
      });
    });
  });