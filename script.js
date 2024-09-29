// Loader Hide on Page Load
window.addEventListener("load", function () {
    document.getElementById('loader').style.display = 'none';  // Hide loader when content is loaded
});

// Dynamic Greeting for Users
document.addEventListener('DOMContentLoaded', function() {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    const greetingElement = document.getElementById('dynamicGreeting');
    
    if (user) {
        greetingElement.textContent = `Welcome, ${user.username}!`;
    } else {
        greetingElement.textContent = 'Welcome to SBL Smart Bots!';
    }
});

// Login Logic
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const phone = document.getElementById('phone').value;

    // Save user details to localStorage
    localStorage.setItem('loggedInUser', JSON.stringify({ username, phone }));

    // Check if admin
    if (phone === '0740035058') {
        window.location.href = 'admin.html';  // Redirect to admin page
    } else {
        window.location.href = 'order.html';  // Redirect to order page for users
    }
});

// FAB Toggle Logic
const fab = document.getElementById('fab');
const fabOptions = document.querySelector('.fab-options');

fab.addEventListener('click', () => {
    fabOptions.style.display = fabOptions.style.display === 'none' || fabOptions.style.display === '' ? 'block' : 'none';
});

// Help Button Interaction
document.getElementById('fabHelp').addEventListener('click', function () {
    showAlert('How can we assist you? Choose an option or contact support.');
});

function showAlert(message) {
    const alertBox = document.createElement('div');
    alertBox.classList.add('alert-box');
    alertBox.innerHTML = `
        <p>${message}</p>
        <button class="alert-ok">OK</button>
    `;
    document.body.appendChild(alertBox);
    document.querySelector('.alert-ok').addEventListener('click', function () {
        alertBox.remove();  // Close the alert
    });
  }
