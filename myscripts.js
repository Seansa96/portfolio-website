// Get the button and sidebar elements
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');

// Add a click event listener to the button
sidebarToggle.addEventListener('click', function() {
  // Toggle the visibility of the sidebar by adding or removing the 'hidden' class
  if (sidebar.classList.contains('hidden')) {
    sidebar.classList.remove('hidden');
  } else {
    sidebar.classList.add('hidden');
  }
});
