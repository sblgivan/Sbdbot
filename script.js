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

// Slide Menu Logic
function openSlideMenu() {
    document.getElementById('slideMenu').style.width = '250px';
}

function closeSlideMenu() {
    document.getElementById('slideMenu').style.width = '0';
}

// Handle Slide Menu Options
document.getElementById('orderBot').addEventListener('click', function () {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
        window.location.href = 'order.html';
    } else {
        // Prompt login for users
        showLoginPrompt();
    }
});

document.getElementById('aboutUs').addEventListener('click', function () {
    showAlert('SBL Smart Bots: The future of trading bots.');
});

document.getElementById('settings').addEventListener('click', function () {
    showAlert('Settings are coming soon.');
});

document.getElementById('help').addEventListener('click', function () {
    showAlert('How can we assist you? Choose an option or contact support.');
});

// Custom Alert Box
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

// Login Prompt Logic
function showLoginPrompt() {
    const loginPrompt = document.createElement('div');
    loginPrompt.classList.add('login-prompt');
    loginPrompt.innerHTML = `
        <div class="login-box">
            <h3>Login to Order</h3>
            <input type="text" id="username" placeholder="Enter your name">
            <button id="loginBtn">Login</button>
        </div>
    `;
    document.body.appendChild(loginPrompt);

    document.getElementById('loginBtn').addEventListener('click', function () {
        const username = document.getElementById('username').value;
        if (username) {
            localStorage.setItem('loggedInUser', JSON.stringify({ username }));
            window.location.href = 'order.html';
        }
    });
                }
