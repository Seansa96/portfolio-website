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



// Initialize the Facebook SDK
window.fbAsyncInit = function () {
  FB.init({
    appId: '1680592515733355',
    cookie: true,
    xfbml: true,
    version: 'v12.0',
  });

  // Check if the user is already logged in
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
};

// Handle the login status
function statusChangeCallback(response) {
  if (response.status === 'connected') {
    console.log('Logged in successfully');
    getUserData();
  } else {
    console.log('Not logged in');
  }
}

// Get user data after a successful login
function getUserData() {
  FB.api('/me', function (response) {
    console.log('User data:', response);
  });
}

// Log the user in when the login button is clicked
function checkLoginState() {
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
}
