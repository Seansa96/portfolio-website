// Get the button and sidebar elements
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementsByClassName('side-bar')[0];

// Add a click event listener to the button
sidebarToggle.addEventListener('click', toggleSidebar);
  // Toggle the visibility of the sidebar by adding or removing the 'hidden' class




function toggleSidebar() {
  if (sidebar.classList.contains('hidden')) {
    sidebar.classList.remove('hidden');
  } else {
    sidebar.classList.add('hidden');
  }
}
// Path: myscripts.js
