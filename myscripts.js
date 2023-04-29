// Get the button and sidebar elements
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementsByClassName('side-bar')[0];

// Add a click event listener to the button
sidebarToggle.addEventListener('click', toggleSidebar);
  // Toggle the visibility of the sidebar by adding or removing the 'hidden' class




  function toggleSidebar() {
    const sidebar = document.querySelector('.side-bar');
    const currentOpacity = window.getComputedStyle(sidebar).getPropertyValue('opacity');
    if (currentOpacity === '1') {
      sidebar.style.opacity = '0';
    } else {
      sidebar.style.opacity = '1';
    }
  }

// Path: myscripts.js
const heading = document.getElementById('heading');
const text = heading.textContent;
heading.textContent = '';

for (let i = 0; i < text.length; i++) {
  const letter = text[i];
  const span = document.createElement('span');
  span.textContent = letter;
  span.style.animationDelay = `${i * 0.1}s`;
  heading.appendChild(span);
  console.log(`Animating letter ${i}: ${letter}`);
}
