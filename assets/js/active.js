// Get all the icons
var icons = document.querySelectorAll('.icons .icon');

// Add click event listener to each icon
icons.forEach(function(icon) {
  icon.addEventListener('click', function() {
    // Remove the 'active' class from all icons
    icons.forEach(function(icon) {
      icon.classList.remove('active');
    });

    // Add the 'active' class to the clicked icon
    this.classList.add('active');
  });
});
